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
        var categories = [];
        var formData = null;
        var superTypes = [];


        $scope.getCategories = function () {
            $scope.tags = null;
            TypesResource.get({ categorytype: '/type?='+$scope.category }, function (result) {
                angular.forEach(result.results, function(value) {
                    categories.push({text:value});
                });
                $scope.loadCategories = function() {
                    return categories;
                };
                angular.forEach($scope.tags, function(value) {
                    superTypes.push(value.text);
                });
            });
        };

        switch($scope.category) {
                case "ENUM":
                    NotificationService.error('API not Available', false);
                    break;
                case "STRUCT":
                    NotificationService.error('API not Available', false);
                    break;
                case "TRAIT":
                    formData = {
                        enumTypes: [],
                        structTypes: [],
                        traitTypes: [{
                            "superTypes": superTypes,
                            hierarchicalMetaTypeName: "org.apache.atlas.typesystem.types.TraitType",
                            typeName: $scope.typename,
                            attributeDefinitions: []
                        }],
                        classTypes: []
                    };
                    break;
                case "CLASS":
                    formData = {
                        enumTypes: [],
                        structTypes: [],
                        traitTypes: [],
                        classTypes: [
                            {
                                "superTypes": superTypes,
                                "hierarchicalMetaTypeName": "org.apache.atlas.typesystem.types.ClassType",
                                "typeName": $scope.typename,
                                "attributeDefinitions": []
                            }
                        ]
                    };
                    break;
                default:
              }

        $scope.appForm = {
            submit: function() {
                NotificationService.reset();
                if (!$scope.typename) {
                    NotificationService.error('Enter Type Name', false);                }

                if (typeof formData === "object" && !Array.isArray(formData) && formData !== null) {
                    TypesResource.add(JSON.stringify(formData), function () {
                        NotificationService.info('New type has been created', false);
                        TypesResource.get({ id: '/'+$scope.typename }, function (res) {
                           $scope.resPreview = res.definition;
                        });
                    }, function(error) {
                        NotificationService.error(error.data.error, false);
                    });
                }
            }
        };
    }
]);
