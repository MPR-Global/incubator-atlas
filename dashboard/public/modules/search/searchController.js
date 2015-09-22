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

angular.module('dgc.search').controller('SearchController', ['$scope', '$location', '$http', '$state', '$stateParams', 'lodash', 'SearchResource', 'NotificationService', '$localStorage',
    function($scope, $location, $http, $state, $stateParams, _, SearchResource, NotificationService, $localStorage) {

        $scope.results = [];
        $scope.resultCount = 0;
        $scope.isCollapsed = true;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.filteredResults = [];
        $scope.resultRows = [];
        $scope.searchHistory = $localStorage.SearchedHistory;
        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };
        $scope.search = function(query) {
            $scope.results = [];
            NotificationService.reset();
            $scope.limit = 4;
            $scope.searchMessage = 'load-gif';

            $scope.$parent.query = query;
            $scope.persistSearch(query);
            SearchResource.search({
                query: query
            }, function searchSuccess(response) {
                $scope.resultCount = response.count;
                $scope.results = response.results;
                $scope.resultRows = $scope.results.rows;
                $scope.totalItems = $scope.resultCount;
                $scope.transformedResults = {};
                $scope.dataTransitioned = false;
                if (response.results.dataType && response.results.dataType.typeName.indexOf('__') === 0) {
                    $scope.dataTransitioned = true;
                    var attrDef = response.results.dataType.attributeDefinitions;
                    angular.forEach(attrDef, function(value) {
                        if (value.dataTypeName === '__IdType') {
                            $scope.searchKey = value.name;
                        }
                    });
                    $scope.transformedResults = $scope.filterResults();
                } else {
                    $scope.transformedResults = $scope.resultRows;
                }
                if ($scope.results.rows)
                    $scope.searchMessage = $scope.resultCount + ' results matching your search query ' + $scope.query + ' were found';
                else
                    $scope.searchMessage = '0 results matching your search query ' + $scope.query + ' were found';

                $scope.$watch('currentPage + itemsPerPage', function() {
                    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    if ($scope.transformedResults) $scope.filteredResults = $scope.transformedResults.slice(begin, end);
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
        $scope.persistSearch = function(query) {
            var storedHisty = $localStorage.SearchedHistory,
                flagExit = false;

            if (storedHisty !== undefined && query !== undefined && query.length > 0) {
                for (var t = 0; t < storedHisty.length; t++) {
                    if (storedHisty[t].toLowerCase() === query.toLowerCase()) {
                        flagExit = true;
                        break;
                    }
                }
                if (!flagExit) {
                    storedHisty.push(query);
                    $localStorage.SearchedHistory = storedHisty;
                }

                if (storedHisty.length > 5) {
                    storedHisty.splice(0, 1);
                    $localStorage.SearchedHistory = storedHisty;
                }

            } else if (query !== undefined && query.length > 0) {
                $localStorage.SearchedHistory = [query];
            }

        };


        $scope.historySearch = function(searchQuey) {
            $scope.search(searchQuey);
        };

        $scope.$watch('searchHistory.length', function() {
            /* your logic here */
        }, true);



        $scope.removeHistory= function(searchHistory){
            $localStorage.$reset(searchHistory);
        };

        $scope.filterResults = function() {
            var res = [];
            angular.forEach($scope.resultRows, function(value) {
                res.push(value[$scope.searchKey]);
            });
            return res;
        };
        $scope.doToggle = function($event, el) {
            this.isCollapsed = !el;
        };
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
