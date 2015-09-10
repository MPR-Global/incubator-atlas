/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var entityTable={
    "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
    "id": {
        "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
        "id": "-1436884922170366000",
        "version": 0,
        "typeName": "Table"
    },
    "typeName": "Table",
    "values": {
        "tableType": "Managed",
        "name": "",
        "createTime": 1436884922170,
        "description": "",
        "db": {
            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
            "id": "",
            "version": 0,
            "typeName": "DB"
        },
        "retention": 1436884922170,
        "columns": [{
            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
            "id": {
                "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                "id": "-1436884922170004000",
                "version": 0,
                "typeName": "Column"
            },
            "typeName": "Column",
            "values": {
                "comment": "time_id",
                "name": "time_id",
                "dataType": "int"
            },
            "traitNames": [

            ],
            "traits": {

            }
        }, {
            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
            "id": {
                "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                "id": "-1436884922170024000",
                "version": 0,
                "typeName": "Column"
            },
            "typeName": "Column",
            "values": {
                "comment": "product id",
                "name": "product_id",
                "dataType": "int"
            },
            "traitNames": [

            ],
            "traits": {

            }
        }, {
            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
            "id": {
                "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                "id": "-1436884922170040000",
                "version": 0,
                "typeName": "Column"
            },
            "typeName": "Column",
            "values": {
                "comment": "customer id",
                "name": "customer_id",
                "dataType": "int"
            },
            "traitNames": [
                "PII"
            ],
            "traits": {
                "PII": {
                    "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Struct",
                    "typeName": "PII",
                    "values": {

                    }
                }
            }
        }, {
            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
            "id": {
                "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                "id": "-1436884922170294000",
                "version": 0,
                "typeName": "Column"
            },
            "typeName": "Column",
            "values": {
                "comment": "product id",
                "name": "sales",
                "dataType": "double"
            },
            "traitNames": [
                "Metric"
            ],
            "traits": {
                "Metric": {
                    "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Struct",
                    "typeName": "Metric",
                    "values": {

                    }
                }
            }
        }],
        "lastAccessTime": 1436884922170,
        "owner": "joe",
        "sd": {
            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
            "id": {
                "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                "id": "-1436884922169953000",
                "version": 0,
                "typeName": "StorageDesc"
            },
            "typeName": "StorageDesc",
            "values": {
                "outputFormat": "TextOutputFormat",
                "location": "hdfs://host:8000/apps/warehouse/sales",
                "compressed": true,
                "inputFormat": "TextInputFormat"
            },
            "traitNames": [

            ],
            "traits": {

            }
        }
    },
    "traitNames": [
        "Fact"
    ],
    "traits": {
        "Fact": {
            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Struct",
            "typeName": "Fact",
            "values": {

            }
        }
    }
};