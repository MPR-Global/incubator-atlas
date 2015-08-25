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

angular.module('dgc.entities').controller('EntityController', ['$scope', '$resource', '$state', '$stateParams', 'lodash', 'EntityResource', 'NotificationService', 'SearchResource',
    function($scope, $resource, $state, $stateParams, _, EntityResource, NotificationService, SearchResource) {

        $scope.searchEntity = function(query) {
            SearchResource.search({
                query: query
            }, function searchSuccess(response) {
                $scope.resultRows = response.results.rows;
                $scope.entities=[];
                angular.forEach($scope.resultRows, function(key) {
                    $scope.entities.push({"name": key.name,"id":key['$id$'].id});
                });
                console.log( $scope.entities);
            });
        };
        $scope.searchEntity('Table');



        $scope.category = "table";
        $scope.getviewtype = function() {
            $scope.viewtype=$scope.category;

        };
        $scope.templateUrl = function() {
            return "/modules/entities/views/entitytypes/"+$scope.category+".html";
        };



        $scope.appForm = {
            submit: function() {
                var formData;
                switch ($scope.category) {
                    case 'table' :

                        NotificationService.reset();

                            formData=entityTable;
                            formData.values.name=$scope.TableName;
                            formData.values.description=$scope.Tabledescription;
                            formData.values.db.id=$scope.entityTable;
                            formData.owner=$scope.Tableowner;
                        break;
                    case 'loadprocess':
                        NotificationService.reset();

                        formData=loadprocessEnity;
                        formData.values.name=$scope.entitiyName;
                        formData.typeName=$scope.typeName;
                        formData.values.queryPlan=$scope.queryPlan;
                        formData.values.description=$scope.description;
                        formData.values.queryText=$scope.queryText;
                        formData.values.user=$scope.user;


                        break;
                    case 'db':
                        NotificationService.reset();

                        formData=dbEntity;
                        formData.values.name=$scope.entitiyName;
                        formData.typeName=$scope.typeName;
                        formData.values.locationUri=$scope.locationUri;
                        formData.values.description=$scope.description;
                        formData.values.owner=$scope.owner;

                        break;
                    default:
                        formData = null;
                        NotificationService.reset();
                        NotificationService.error('Enter Type Name', false);
                }
                if (typeof formData !== null) {
                    EntityResource.add(JSON.stringify(formData), function() {
                        $state.go("search");
                    });
                }
            }
        };
    }
]);
