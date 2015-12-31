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

angular.module('dgc.details').factory('DetailsResource', ['$resource', 'AtlasConfig', function($resource, AtlasConfig) {
    return $resource(AtlasConfig.API_ENDPOINTS.GET_ENTITY +'/:id', {}, {
        get: {
            method: 'GET',
            transformResponse: function(data) {
                if (data) {
                    return angular.fromJson(data.definition);
                }
            },
            responseType: 'json'
        },
        saveTag: {
            method: 'POST',
            url : AtlasConfig.API_ENDPOINTS.GET_ENTITY + '/:id/' + AtlasConfig.API_ENDPOINTS.ATTACH_DETACH_TRAITS
        },
        detachTag : {
            method: 'DELETE',
            url : AtlasConfig.API_ENDPOINTS.GET_ENTITY + '/:id/' + AtlasConfig.API_ENDPOINTS.ATTACH_DETACH_TRAITS + '/:tagName'
        }
     });

}]).factory('SchemaResource', ['$resource','AtlasConfig', function($resource, AtlasConfig) {
    return $resource(AtlasConfig.API_ENDPOINTS.SCHEMA_LINEAGE_PREPAND + '/:tableName/' + AtlasConfig.API_ENDPOINTS.SCHEMA_APPEND, {}, {
        get: {
            method: 'GET',
            transformResponse: function(data) {
                if (data) {
                    return angular.fromJson(data);
                }
            },
            responseType: 'json'
        }
});
}]);
