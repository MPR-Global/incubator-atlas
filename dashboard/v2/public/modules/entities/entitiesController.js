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

'use strict';

angular.module('dgc.entities').controller('EntityController', ['$scope', '$resource', '$state', '$stateParams', 'lodash', 'EntityResource', 'NotificationService',
    function($scope, $resource, $state, $stateParams, _, EntityResource, NotificationService) {

        $scope.viewtype = "LoadProcess";
        $scope.getviewtype = function() {
            switch (Number($scope.category)) {

                case 2:
                    $scope.viewtype = "Table";
                    break;
                case 3:
                    $scope.viewtype = "LoadProcess";
                    break;
                case 4:
                    $scope.viewtype = "DB";
                    break;

            }

        };
        $scope.appForm = {
            submit: function() {
                switch (Number($scope.category)) {
                    case 1:
                        NotificationService.reset();
                        NotificationService.error('API not Available', false);
                        break;
                    case 2:
                        NotificationService.reset();

                        var formData = {
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
                                "name": $scope.TableName,
                                "createTime": 1436884922170,
                                "description": $scope.Tabledescription,
                                "db": {
                                    "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                                    "id": $stateParams.id,
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
                                "owner": $scope.Tableowner,
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
                        break;
                    case 3:
                        NotificationService.reset();
                        console.log($scope.entitiyName + "entity name");
                        formData = {
                            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
                            "id": {
                                "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                                "id": "-1436980375639783000",
                                "version": 0,
                                "typeName": $scope.typeName
                            },
                            "typeName": $scope.typeName,
                            "values": {
                                "queryId": "id",
                                "name": $scope.entitiyName,
                                "startTime": 1436980375639,
                                "queryPlan": $scope.queryPlan,
                                "description": $scope.description,
                                "outputs": [],
                                "endTime": 1436980385639,
                                "inputs": [],
                                "queryText": $scope.queryText,
                                "user": $scope.user,
                                "queryGraph": "graph"
                            },
                            "traitNames": [
                                "ETL"
                            ],
                            "traits": {
                                "ETL": {
                                    "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Struct",
                                    "typeName": "ETL",
                                    "values": {

                                    }
                                }
                            }
                        };
                        break;
                    case 4:
                        NotificationService.reset();

                        formData = {
                            "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
                            "id": {
                                "jsonClass": "org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                                "id": "-1438867091050961000",
                                "version": 0,
                                "typeName": $scope.typeName
                            },
                            "typeName": $scope.typeName,
                            "values": {
                                "name": $scope.name,
                                "createTime": 1438867091050,
                                "description": $scope.description,
                                "locationUri": $scope.locationUri,
                                "owner": $scope.owner
                            },
                            "traitNames": [

                            ],
                            "traits": {

                            }
                        };
                        break;
                    default:
                        formData = null;
                        NotificationService.reset();
                        NotificationService.error('Enter Type Name', false);
                }
                if (typeof formData === "object" && !Array.isArray(formData) && formData !== null) {
                    EntityResource.add(JSON.stringify(formData), function() {
                        $state.go("search");
                    });
                }
            }
        };
    }
]);
