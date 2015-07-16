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

angular.module('dgc.types').controller('TypesController', ['$scope', '$resource', '$state', '$stateParams', 'lodash', 'TypesResource',
    function($scope, $resource, $state, $stateParams, _, TypesResource) {

        $scope.appForm = {
            dataSubmitted: '',

            submit: function() {
                var formData = {
                    enumTypes: [],
                    structTypes: [],
                    traitTypes: [{
                        superTypes: [],
                        hierarchicalMetaTypeName: "org.apache.atlas.typesystem.types.TraitType",
                        typeName: $scope.typename1,
                        attributeDefinitions: []
                    }],
                    classTypes: []
                };
                TypesResource.add(JSON.stringify(formData), function() {
                    console.log('success');
                    $scope.successType = "Type " + $scope.typename1 + " is created";
                });
            }
        };
    }
]);
