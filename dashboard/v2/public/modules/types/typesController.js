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

angular.module('dgc.types').controller('TypesController', ['$scope', '$resource', '$state', '$stateParams','lodash', 'TypesResource','NotificationService',
    function($scope, $resource, $state, $stateParams, _, TypesResource,NotificationService) {

        $scope.appForm = {
            submit: function() {
                var formData = null;
                if ($scope.typename) {
                    switch (Number($scope.category)) {
                        case 1:
                            NotificationService.reset();
                            NotificationService.error('API not Available', false);
                            break;
                        case 2:
                            NotificationService.reset();
                            NotificationService.error('API not Available', false);
                            break;
                        case 3:
                            NotificationService.reset();
                            formData = {
                                enumTypes: [],
                                structTypes: [],
                                traitTypes: [{
                                    superTypes: [],
                                    hierarchicalMetaTypeName: "org.apache.atlas.typesystem.types.TraitType",
                                    typeName: $scope.typename,
                                    attributeDefinitions: []
                                }],
                                classTypes: []
                            };
                            break;
                        case 4:
                            NotificationService.reset();
                            formData = {
                                enumTypes: [],
                                structTypes: [],
                                traitTypes: [],
                                classTypes: [
                                    {
                                        "superTypes": [],
                                        "hierarchicalMetaTypeName": "org.apache.atlas.typesystem.types.ClassType",
                                        "typeName": $scope.typename,
                                        "attributeDefinitions": []
                                    }
                                ]
                            };
                            break;
                        default:
                            formData = null;
                            NotificationService.reset();
                            NotificationService.error('Enter Type Name', false);
                    }
                } else {
                    NotificationService.error('Enter Type Name', false);
                }
                if (typeof formData === "object" && !Array.isArray(formData) && formData !== null) {
                    TypesResource.add(JSON.stringify(formData), function () {
                        NotificationService.info('New type has been created', false);
                    });
                }
            }
        };
    }
]);
