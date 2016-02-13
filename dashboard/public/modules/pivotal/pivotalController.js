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

  $scope.isObject = angular.isObject;
  $scope.isString = angular.isString;
  $scope.isArray = angular.isArray;
  $scope.isNumber = angular.isNumber;

  $scope.breacrumb =[
  {id:1,name:'Pivotal'},{id:2,name:'Services'},{id:3,name:'Pivotal Labs'}];


   $scope.leftNav =[
  {id:1,name:'PivotaLabs'},{id:2,name:'Branding'},{id:3,name:'Career'},{id:4,name:'ClientResources'},{id:5,name:'HumanResource'},
  {id:6,name:'Lab Practice'},{id:7,name:'Lab Practise'}];


  $scope.name ="Michael";

  $scope.response = {
					   "name": "Enginering", 
					   "subCategoryCount": 14, 
					   "description": "Awarded 6 out of 6 for customer Service by PC Pro Magazine and a Computer Shopper Best Buy. Awarded 6 out of 6 for customer Service by PC Pro Magazine and a Computer Shopper Best Buy. Awarded 6 out of 6 for customer Service by PC Pro Magazine and a Computer Shopper Best Buy. Awarded 6 out of 6 for customer Service by PC Pro Magazine and a Computer Shopper Best Buy.", 
					   "breadcrumb": [
					      {
					         "id": 1,
					         "name": "Pivotal"
					      },
					      {
					         "id": 2,
					         "name": "Services"
					      },
					      {
					         "id": 3,
					         "name": "Engineering" 
					      }
					   ],
					   "subCategories": [
					      {
					         "name": "dev-langauges.xls",
					         "type": "xls",
					         "id": 8,
					         "subCategoryCount": 0
					      },
					      {
					         "name": "NEW_LANG_LIST",
					         "type": "xls",
					         "id": 4,
					         "subCategoryCount": 4
					      },
					      {
					         "name": "programming-tools.xls",
					         "type": "csv",
					         "id": 6,
					         "subCategoryCount": 0
					      },
					      {
					         "name": "langauges-checklist.org",
					         "type": "list",
					         "id": 6,
					         "subCategoryCount": 0
					      },
					      {
					         "name": "etired-langauges.cvs",
					         "type": "csv",
					         "id": 6,
					         "subCategoryCount": 0
					      },
					      {
					         "name": "fav-langauges.cvs",
					         "type": "list",
					         "id": 6,
					         "subCategoryCount": 0
					      },
					      {
					         "name": "popular-lang.html",
					         "type": "csv",
					         "id": 6,
					         "subCategoryCount": 0
					      },
					      {
					         "name": "LANG_ACCOUNTS",
					         "type": "list",
					         "id": 6,
					         "subCategoryCount": 10
					      } 
					   ], 
					   "tags": [ 
					      { 
					         "name": "javaScript", 
					         "type": "language" 
					      }, 
					      { 
					         "name": "css", 
					         "type": "language" 
					      }, 
					      {
					         "name": "coding",
					         "type": "uses"
					      }
					   ],
					   "lineage": {
					      "vertices": {},
					      "edges": {}
					   },
					   "acceptableUse": "JSON stands for 'JavaScript Object Notation' and is pronounced 'Jason' (like in the Friday the 13th movies). It's meant to be a human-readable and compact solution to represent a complex data structure and facilitate data-interchange between systems.",
					   "properties": {
					      "dateCreated": 'Feb 3, 2016 05:04 pm',
					      "dateModified": 'Feb 4, 2016 05:04 pm',
					      "lastAccessedDate": 'Feb 1, 2016 05:04 pm',
					      "stewardShip": {
					         "name": "abc",
					         "email": "abc @pivotal.com"
					      }
					    },
					    "links": [],
					    "comments": [
					         {
					            "userName": "Anil Gayakwad",
					            "description": "This give a full view for langauges ",
					            "dateTime": 123456789
					         },
					         {
					            "userName": "Mike",
					            "description": "to good to use for programming easy to under stand ",
					            "dateTime": 123456789
					         }
					    ],
					    "media": {
					         "photos": [
					            {
					               "name": "play",
					               "imgUrl": "http: //play.png"
					            },
					            {
					               "name": "dance",
					               "imgUrl": "http://dance.png"
					            }
					         ],
					         "videos": [
					            {
					               "name": "office",
					               "imgUrl": "http: //office.vob"
					            }
					         ]
					    } 
					}


}]);
