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

angular.module('dgc.pivotal').controller('PivotalController', ['$scope', function($scope) {

  $scope.breacrumb =[
  {id:1,name:'Pivotal'},{id:2,name:'Services'},{id:3,name:'Pivotal Labs'}];


   $scope.leftNav =[
  {id:1,name:'PivotaLabs'},{id:2,name:'Branding'},{id:3,name:'Career'},{id:4,name:'ClientResources'},{id:5,name:'HumanResource'},
  {id:6,name:'Lab Practice'},{id:7,name:'Lab Practise'}];


  $scope.name ="Michael";


}]);
