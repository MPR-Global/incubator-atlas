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

angular.module('dgc.types').controller('TypesController', ['$scope', '$resource', '$state', '$stateParams','lodash', 'TypesResource', 'NotificationService',
    function($scope, $resource, $state, $stateParams, _, TypesResource, NotificationService) {

        $scope.appForm = {

            data: {
                enumTypes: [],
                structTypes: [],
                traitTypes: [{
                    supertypes:[],
                    hierarchicalMetaTypeName:"org.apache.atlas.typesystem.types.TraitType",
                    typeName:"Dilipnew22",
                    attributeDefinitions:[]
                }],
                classTypes:[
                    {
                        superTypes:[],
                        hierarchicalMetaTypeName:"org.apache.atlas.typesystem.types.ClassType",
                        typeName:"Incubator-Atlas",
                        attributeDefinitions:[
                            {
                                name:name,
                                dataTypeName:"string",
                                multiplicity:"optional",
                                isComposite:false,
                                isUnique:false,
                                isIndexable:true,
                                reverseAttributeName:null
                            }
                        ]
                    }
                ]
            },

            dataSubmitted: '',

            submit: function() {
                TypesResource.save({ }, function (response) {
                    console.log('success');
                });
            }
        };
    }
]);