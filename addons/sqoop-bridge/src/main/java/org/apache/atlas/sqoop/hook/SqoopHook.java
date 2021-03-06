/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.atlas.sqoop.hook;


import com.google.inject.Guice;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.sun.jersey.api.client.ClientResponse;
import org.apache.atlas.ApplicationProperties;
import org.apache.atlas.AtlasClient;
import org.apache.atlas.AtlasServiceException;
import org.apache.atlas.hive.bridge.HiveMetaStoreBridge;
import org.apache.atlas.hive.model.HiveDataModelGenerator;
import org.apache.atlas.hive.model.HiveDataTypes;
import org.apache.atlas.notification.NotificationInterface;
import org.apache.atlas.notification.NotificationModule;
import org.apache.atlas.notification.hook.HookNotification;
import org.apache.atlas.sqoop.model.SqoopDataModelGenerator;
import org.apache.atlas.sqoop.model.SqoopDataTypes;
import org.apache.atlas.typesystem.Referenceable;
import org.apache.commons.configuration.Configuration;
import org.apache.commons.lang3.StringUtils;
import org.apache.hadoop.hive.conf.HiveConf;
import org.apache.hadoop.security.UserGroupInformation;
import org.apache.sqoop.SqoopJobDataPublisher;
import org.apache.sqoop.util.ImportException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 * AtlasHook sends lineage information to the AtlasSever.
 */
public class SqoopHook extends SqoopJobDataPublisher {

    private static final Logger LOG = LoggerFactory.getLogger(SqoopHook.class);
    private static final String DEFAULT_DGI_URL = "http://localhost:21000/";
    public static final String CONF_PREFIX = "atlas.hook.sqoop.";
    public static final String HOOK_NUM_RETRIES = CONF_PREFIX + "numRetries";

    public static final String ATLAS_CLUSTER_NAME = "atlas.cluster.name";
    public static final String DEFAULT_CLUSTER_NAME = "primary";
    public static final String ATLAS_REST_ADDRESS = "atlas.rest.address";

    @Inject
    private static NotificationInterface notifInterface;

    static {
        org.apache.hadoop.conf.Configuration.addDefaultResource("sqoop-site.xml");
    }

    synchronized void registerDataModels(AtlasClient client, Configuration atlasConf) throws Exception {
        // Make sure hive model exists
        HiveMetaStoreBridge hiveMetaStoreBridge = new HiveMetaStoreBridge(new HiveConf(), atlasConf,
                UserGroupInformation.getCurrentUser().getShortUserName(), UserGroupInformation.getCurrentUser());
        hiveMetaStoreBridge.registerHiveDataModel();
        SqoopDataModelGenerator dataModelGenerator = new SqoopDataModelGenerator();

        //Register sqoop data model if its not already registered
        try {
            client.getType(SqoopDataTypes.SQOOP_PROCESS.getName());
            LOG.info("Sqoop data model is already registered!");
        } catch(AtlasServiceException ase) {
            if (ase.getStatus() == ClientResponse.Status.NOT_FOUND) {
                //Expected in case types do not exist
                LOG.info("Registering Sqoop data model");
                client.createType(dataModelGenerator.getModelAsJson());
            } else {
                throw ase;
            }
        }
    }

    public Referenceable createHiveDatabaseInstance(String clusterName, String dbName)
            throws Exception {
        Referenceable dbRef = new Referenceable(HiveDataTypes.HIVE_DB.getName());
        dbRef.set(HiveDataModelGenerator.CLUSTER_NAME, clusterName);
        dbRef.set(HiveDataModelGenerator.NAME, dbName);
        dbRef.set(AtlasClient.REFERENCEABLE_ATTRIBUTE_NAME,
                HiveMetaStoreBridge.getDBQualifiedName(clusterName, dbName));
        return dbRef;
    }

    public Referenceable createHiveTableInstance(String clusterName, Referenceable dbRef,
                                             String tableName, String dbName) throws Exception {
        Referenceable tableRef = new Referenceable(HiveDataTypes.HIVE_TABLE.getName());
        tableRef.set(HiveDataModelGenerator.NAME,
                HiveMetaStoreBridge.getTableQualifiedName(clusterName, dbName, tableName));
        tableRef.set(HiveDataModelGenerator.TABLE_NAME, tableName.toLowerCase());
        tableRef.set(HiveDataModelGenerator.DB, dbRef);
        return tableRef;
    }

    private Referenceable createDBStoreInstance(SqoopJobDataPublisher.Data data)
            throws ImportException {

        Referenceable storeRef = new Referenceable(SqoopDataTypes.SQOOP_DBDATASTORE.getName());
        String table = data.getStoreTable();
        String query = data.getStoreQuery();
        if (StringUtils.isBlank(table) && StringUtils.isBlank(query)) {
            throw new ImportException("Both table and query cannot be empty for DBStoreInstance");
        }

        String usage = table != null ? "TABLE" : "QUERY";
        String source = table != null ? table : query;
        String name = getSqoopDBStoreName(data);
        storeRef.set(SqoopDataModelGenerator.NAME, name);
        storeRef.set(SqoopDataModelGenerator.DB_STORE_TYPE, data.getStoreType());
        storeRef.set(SqoopDataModelGenerator.DB_STORE_USAGE, usage);
        storeRef.set(SqoopDataModelGenerator.STORE_URI, data.getUrl());
        storeRef.set(SqoopDataModelGenerator.SOURCE, source);
        storeRef.set(SqoopDataModelGenerator.DESCRIPTION, "");
        storeRef.set(SqoopDataModelGenerator.OWNER, data.getUser());
        return storeRef;
    }

    private Referenceable createSqoopProcessInstance(Referenceable dbStoreRef, Referenceable hiveTableRef,
                                                     SqoopJobDataPublisher.Data data, String clusterName) {
        Referenceable procRef = new Referenceable(SqoopDataTypes.SQOOP_PROCESS.getName());
        procRef.set(SqoopDataModelGenerator.NAME, getSqoopProcessName(data, clusterName));
        procRef.set(SqoopDataModelGenerator.OPERATION, data.getOperation());
        procRef.set(SqoopDataModelGenerator.INPUTS, dbStoreRef);
        procRef.set(SqoopDataModelGenerator.OUTPUTS, hiveTableRef);
        procRef.set(SqoopDataModelGenerator.USER, data.getUser());
        procRef.set(SqoopDataModelGenerator.START_TIME, new Date(data.getStartTime()));
        procRef.set(SqoopDataModelGenerator.END_TIME, new Date(data.getEndTime()));

        Map<String, String> sqoopOptionsMap = new HashMap<>();
        Properties options = data.getOptions();
        for (Object k : options.keySet()) {
            sqoopOptionsMap.put((String)k, (String) options.get(k));
        }
        procRef.set(SqoopDataModelGenerator.CMD_LINE_OPTS, sqoopOptionsMap);

        return procRef;
    }

    static String getSqoopProcessName(Data data, String clusterName) {
        StringBuilder name = new StringBuilder(String.format("sqoop import --connect %s", data.getUrl()));
        if (StringUtils.isNotEmpty(data.getStoreTable())) {
            name.append(" --table ").append(data.getStoreTable());
        }
        if (StringUtils.isNotEmpty(data.getStoreQuery())) {
            name.append(" --query ").append(data.getStoreQuery());
        }
        name.append(String.format(" --hive-import --hive-database %s --hive-table %s --hive-cluster %s",
                data.getHiveDB().toLowerCase(), data.getHiveTable().toLowerCase(), clusterName));
        return name.toString();
    }

    static String getSqoopDBStoreName(SqoopJobDataPublisher.Data data)  {
        StringBuilder name = new StringBuilder(String.format("%s --url %s", data.getStoreType(), data.getUrl()));
        if (StringUtils.isNotEmpty(data.getStoreTable())) {
            name.append(" --table ").append(data.getStoreTable());
        }
        if (StringUtils.isNotEmpty(data.getStoreQuery())) {
            name.append(" --query ").append(data.getStoreQuery());
        }
        return name.toString();
    }

    @Override
    public void publish(SqoopJobDataPublisher.Data data) throws Exception {
        Injector injector = Guice.createInjector(new NotificationModule());
        notifInterface = injector.getInstance(NotificationInterface.class);

        Configuration atlasProperties = ApplicationProperties.get();
        AtlasClient atlasClient = new AtlasClient(atlasProperties.getString(ATLAS_REST_ADDRESS, DEFAULT_DGI_URL),
                UserGroupInformation.getCurrentUser(), UserGroupInformation.getCurrentUser().getShortUserName());
        org.apache.hadoop.conf.Configuration sqoopConf = new org.apache.hadoop.conf.Configuration();
        String clusterName = sqoopConf.get(ATLAS_CLUSTER_NAME, DEFAULT_CLUSTER_NAME);

        Referenceable dbStoreRef = createDBStoreInstance(data);
        Referenceable dbRef = createHiveDatabaseInstance(clusterName, data.getHiveDB());
        Referenceable hiveTableRef = createHiveTableInstance(clusterName, dbRef,
                data.getHiveTable(), data.getHiveDB());
        Referenceable procRef = createSqoopProcessInstance(dbStoreRef, hiveTableRef, data, clusterName);

        notifyEntity(atlasProperties, dbStoreRef, dbRef, hiveTableRef, procRef);
    }

    /**
     * Notify atlas of the entity through message. The entity can be a complex entity with reference to other entities.
     * De-duping of entities is done on server side depending on the unique attribute on the
     * @param entities - Entity references to publish.
     */
    private void notifyEntity(Configuration atlasProperties, Referenceable... entities) {
        int maxRetries = atlasProperties.getInt(HOOK_NUM_RETRIES, 3);

        int numRetries = 0;
        while (true) {
            try {
                notifInterface.send(NotificationInterface.NotificationType.HOOK,
                        new HookNotification.EntityCreateRequest(entities));
                return;
            } catch(Exception e) {
                numRetries++;
                if(numRetries < maxRetries) {
                    LOG.debug("Failed to notify atlas for entity {}. Retrying", entities, e);
                } else {
                    LOG.error("Failed to notify atlas for entity {} after {} retries. Quitting", entities,
                            maxRetries, e);
                    break;
                }
            }
        }
    }
}
