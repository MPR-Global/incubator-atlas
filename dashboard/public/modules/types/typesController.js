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

angular.module('dgc.types').controller('TypesController', ['$scope', '$resource', '$state', '$stateParams', 'lodash', 'TypesResource', 'NotificationService',
    function($scope, $resource, $state, $stateParams, _, TypesResource, NotificationService) {
        var categories = [];
        var formData = null;
        var superTypes = [];
        $scope.cetegorieslist = {ENUM : [],STRUCT :[], TRAIT: [],CLASS: []};
        angular.forEach($scope.cetegorieslist, function(value,key) {
            TypesResource.query({
                type: key
            }, function(result) {
                categories[key] = result;
            });

        });
            //parent div
        $scope.myVar = true;
        $scope.toggles = function() {
            $scope.myVar = !$scope.myVar;
        };

        $('.tree-toggle').click(function () {
                $(this).parent().children('ul.tree').toggle(200);
            });

        $scope.loadCategories = function($query) {
            var selectedCategory = $scope.selectedcategory;
            return  _.filter(categories[selectedCategory], function(category) {
                return category.text.toLowerCase().indexOf($query.toLowerCase()) !== -1;
            });
        };

        $scope.attribute=function(){
            $scope.templateUrl();
            $scope.addFormField();
        };

        //add attribute
        $scope.table = { fields: [] };

        $scope.addFormField = function() {
            $scope.table.fields.push('');
        }

        $scope.submitTable = function() {
            console.log($scope.table);
        }

        $scope.templateUrl = function() {
            return "/modules/types/views/attribute.html";
        };
        //multiple textbox 

        $scope.itemsToAdd = [ {
           "name" :'',
           "dataTypeName":"",
           "multiplicity":"",
           "isComposite" :"",
           "isUnique" :"",
           "isIndexable" :""

       } ];

        $scope.add = function(itemToAdd , index) {  
            $scope.itemsToAdd[index] = itemToAdd;
        }

        $scope.addNew = function() {

            $scope.itemsToAdd.push({
               "name" :'',
               "dataTypeName":"",
               "multiplicity":"",
               "isComposite" :"",
               "isUnique" :"",
               "isIndexable" :"" 
            });
        }

        $scope.showSuperTags = false;
        $scope.appForm = {
            submit: function() {
                console.log($scope.itemsToAdd );
                if ($scope.typesForm.$valid) {
                    angular.forEach($scope.tags, function (value) {
                        superTypes.push(value.text);
                    });

                    switch ($scope.selectedcategory) {
                        case "ENUM":
                            break;
                        case "STRUCT":
                            break;
                        case "TRAIT":
                            formData = {
                                enumTypes: [],
                                structTypes: [],
                                traitTypes: [{
                                    "superTypes": superTypes,
                                    hierarchicalMetaTypeName: "org.apache.atlas.typesystem.types.TraitType",
                                    typeName: $scope.typename,
                                    "attributeDefinitions": $scope.itemsToAdd
                                }],
                                classTypes: []
                            };
                            break;
                        case "CLASS":
                            formData = {
                                enumTypes: [],
                                structTypes: [],
                                traitTypes: [],
                                classTypes: [{
                                    "superTypes": superTypes,
                                    "hierarchicalMetaTypeName": "org.apache.atlas.typesystem.types.ClassType",
                                    "typeName": $scope.typename,
                                    "attributeDefinitions": []
                                }]
                            };
                            break;
                        default:
                    }

                    if (typeof formData === "object" && !Array.isArray(formData) && formData !== null) {
                        NotificationService.reset();
                        TypesResource.save(JSON.stringify(formData), function () {
                            NotificationService.info('New type has been created', false);
                            TypesResource.get({
                                id: $scope.typename
                            }, function (res) {
                                $scope.resPreview = res.definition;
                            });
                        }, function (error) {
                            NotificationService.error(error.data.error, false);
                        });
                    }
                }

            }
        };
    }
]);
