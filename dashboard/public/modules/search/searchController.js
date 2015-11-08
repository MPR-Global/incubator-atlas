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

angular.module('dgc.search').controller('SearchController', ['$scope', '$rootScope', '$location', '$http', '$state', '$stateParams', 'lodash', 'SearchResource', 'DetailsResource', 'NotificationService',
    function($scope, $rootScope, $location, $http, $state, $stateParams, _, SearchResource, DetailsResource, NotificationService) {

        $scope.results = [];
        $scope.resultCount = 0;
        $scope.isCollapsed = true;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.filteredResults = [];
        $scope.resultRows = [];
        $scope.resultType = '';
        $scope.isObject = angular.isObject;
        $scope.isString = angular.isString;
        $scope.isArray = angular.isArray;
        $scope.isNumber = angular.isNumber;  

        
        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };
        $scope.search = function(query) {
            $scope.results = [];
            NotificationService.reset();
            $scope.limit = 4;
            $scope.searchMessage = 'load-gif';
            $scope.$parent.query = query;
            SearchResource.search({
                query: query
            }, function searchSuccess(response) {
                $scope.resultCount = response.count;
                $scope.results = response.results;
                $scope.resultRows = $scope.results;
                $scope.totalItems = $scope.resultCount;
                $scope.transformedResults = {};
                $scope.dataTransitioned = false;

                if ($scope.results) {
                    if (response.dataType) {
                        $scope.resultType = response.dataType.typeName;
                    } else if(typeof response.dataType === 'undefined') {
                        $scope.resultType = "full text";
                    }
                    $scope.searchMessage = $scope.resultCount + ' results matching your search query ' + $scope.query + ' were found';
                } else {
                    $scope.searchMessage = '0 results matching your search query ' + $scope.query + ' were found';
                }

                if (response.dataType && response.dataType.typeName && response.dataType.typeName !== "Table") {
                    $scope.dataTransitioned = true;
                    var attrDef = response.dataType.attributeDefinitions;
                    if(attrDef.length === 1) {
                        $scope.searchKey = attrDef[0].name;
                    }else {
                        angular.forEach(attrDef, function(value) {
                            if (value.dataTypeName === '__IdType') {
                                $scope.searchKey = value.name;
                            }
                            console.log("searchKey "+$scope.searchKey);
                        });
                        if($scope.searchKey === undefined || $scope.searchKey === ''){
                            $scope.searchKey = '';
                            console.log("searchKey "+$scope.searchKey);
                        }
                    }
                    $scope.transformedResults = $scope.filterResults();
                    $scope.transformedProperties = $scope.filterProperties();
                    console.log($scope.transformedProperties);
                    
                } else if(typeof response.dataType === 'undefined') {
                    $scope.dataTransitioned = true;
                    $scope.searchKey = '';
                    $scope.transformedResults = $scope.filterResults();
                    $scope.transformedProperties = $scope.filterProperties();
                    console.log($scope.transformedProperties); 
                }
                else if(response.dataType.typeName && response.dataType.typeName === "Table"){
                    $scope.searchKey = "Table";
                    $scope.transformedResults = $scope.resultRows;  
                } 

                $scope.$watch('currentPage + itemsPerPage', function() {
                    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    if ($scope.transformedResults) { 
                        $scope.filteredResults = $scope.transformedResults.slice(begin, end);
                    }
                    console.log("Filter Result");
                    console.log($scope.filteredResults);
                    $scope.pageCount = function() {
                        return Math.ceil($scope.resultCount / $scope.itemsPerPage);
                    };
                    if ($scope.results.length < 1) {
                        NotificationService.error('No Result found', false);
                    }
                });
            }, function searchError(err) {
                $scope.searchMessage = '0 results matching your search query ' + $scope.query + ' were found';
                NotificationService.error('Error occurred during executing search query, error status code = ' + err.status + ', status text = ' + err.statusText, false);
            });
            $state.go('search', {
                query: query
            }, {
                location: 'replace'
            });
        };

        $scope.filterResults = function() {
            var res = [];
            if($scope.searchKey !== ''){ 
                angular.forEach($scope.resultRows, function(value) {
                    res.push(value[$scope.searchKey]);
                });
            }else { 
                angular.forEach($scope.resultRows, function(value) {
                    var objVal = {}, curVal = value;
                    if(curVal.name) { 
                        objVal.Name = curVal.name; 
                        delete curVal.name;
                    }
                    angular.forEach(curVal, function(vl, ky){  
                        if(ky === '$id$'){
                            objVal.id = curVal[ky].id;
                        } else if(ky === '$traits$'){
                            objVal[ky] = vl;
                            objVal.Tools = objVal.id;
                        } else if(ky.indexOf('$') == -1){ 
                            objVal[ky] = vl;
                        } 
                    });

                    res.push(objVal);
                });
            }
            return res;
        };

        $scope.filterProperties = function() {
            var results = $scope.transformedResults,
                pro = [];
            if(results && results.length > 0){
                var result = results[0];
                if(typeof result === 'object'){ 
                    angular.forEach(result, function(value, key){
                        if(key.indexOf('$typeName$') === -1){ 
                            pro.push(key);
                        }
                    });
                } else{
                    pro.push($scope.searchKey);
                }
            }
            return pro;
        }; 

        $scope.doToggle = function($event, el) {
            this.isCollapsed = !el;
        };
        $scope.openAddTagHome = function(traitId) {
            $state.go('addTagHome', {
                id: traitId
            });
        };
        $scope.isTag = function(typename) {
             
            if ( typename.indexOf( "__tempQueryResultStruct" ) > -1  || $scope.searchKey === '') {
                return true;
            } else {
                return false;
            } 
        };
        $scope.getResourceDataHome = function(event, id) {
            DetailsResource.get({
                id: id
            }, function(data) { 
                    if ($scope.filteredResults !== null && Object.keys($scope.filteredResults).length > 0) {               
                        angular.forEach($scope.filteredResults, function(obj, trait) {
                            if ( (obj.$id$ && obj.$id$.id.indexOf( id ) > -1) || (obj.id && obj.id.indexOf( id ) > -1)){
                                 $scope.filteredResults[trait].$traits$ = data.traits;
                            }
                        });
                    }
            });
        };
        $scope.$on('refreshResourceData', $scope.getResourceDataHome);
        $scope.filterSearchResults = function(items) {
            var res = {};
            var count = 0;
            items = _.omit(items, ['name', 'description', 'guid']);
            angular.forEach(items, function(value, key) {
                if (typeof value !== 'object' && (key.indexOf('$$') < 0)) {
                    res[key] = value;
                    count++;
                }
            });
            $scope.keyLength = count;
            return res;
        };
        $scope.searchQuery = $location.search();
        $scope.query = ($location.search()).query;
        if ($scope.query) {

            $scope.search($scope.query);
        }
    }
]);
