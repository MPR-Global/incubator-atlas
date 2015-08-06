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

angular.module('dgc.entities').controller('EntityController', ['$scope', '$resource', '$state', '$stateParams','lodash', 'EntityResource','NotificationService',
    function($scope, $resource, $state, $stateParams, _, EntityResource,NotificationService) {

        $scope.appForm = {
            submit: function() {
                var formData = null;
                if ($scope.entitiyName) {

                            NotificationService.reset();
                            formData = {
                                "jsonClass":"org.apache.atlas.typesystem.json.InstanceSerialization$_Reference",
                                "id":{
                                    "jsonClass":"org.apache.atlas.typesystem.json.InstanceSerialization$_Id",
                                    "id":"-1436980375639783000",
                                    "version":0,
                                    "typeName":$scope.typeName
                                },
                                "typeName":$scope.typeName,
                                "values":{
                                    "queryId":"id",
                                    "name":$scope.entitiyName,
                                    "startTime":1436980375639,
                                    "queryPlan":$scope.queryPlan,
                                    "description":$scope.description,
                                    "outputs":[
                                    ],
                                    "endTime":1436980385639,
                                    "inputs":[
                                    ],
                                    "queryText":$scope.queryText,
                                    "user":$scope.user,
                                    "queryGraph":"graph"
                                },
                                "traitNames":[
                                    "ETL"
                                ],
                                "traits":{
                                    "ETL":{
                                        "jsonClass":"org.apache.atlas.typesystem.json.InstanceSerialization$_Struct",
                                        "typeName":"ETL",
                                        "values":{

                                        }
                                    }
                                }
                            };

                    }
                 else {
                    NotificationService.error('Enter Type Name', false);
                }
                if (typeof formData === "object" && !Array.isArray(formData) && formData !== null) {
                    EntityResource.add(JSON.stringify(formData), function () {
                        NotificationService.info('New entity has been created', false);
                    });
                }
            }
        };
    }
]);
