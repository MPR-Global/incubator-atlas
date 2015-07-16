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

angular.module('dgc', ['ngCookies',
    'ngStorage',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'dgc.system',
    'dgc.home',
    'dgc.login',
    'dgc.search',
    'dgc.navigation'
]);

angular.module('dgc.system', ['dgc.system.notification']);

angular.module('dgc').factory('lodash', ['$window',
    function($window) {
        return $window._;
    }
]).factory('d3', ['$window',
    function($window) {
        return $window.d3;
    }
]).factory('Global', ['$window', '$cookieStore', '$localStorage',
    function($window, $cookieStore, $localStorage) {

        return {
            setUserSession: function(usrSession, user) {
                $cookieStore.put('usrSession', usrSession);
                $localStorage[$cookieStore.get('usrSession').sessionId] = user;
            },
            unsetUserSession: function() {
                $cookieStore.remove('usrSession');
            },
            getUserSession: function() {
                var user = "",
                    authenticated = false;
                if (angular.isDefined($cookieStore.get('usrSession')) && $cookieStore.get('usrSession') !== null) {
                    if (angular.isDefined($localStorage[$cookieStore.get('usrSession').sessionId])) {
                        user = $localStorage[$cookieStore.get('usrSession').sessionId].user;
                        authenticated = !!$cookieStore.get('usrSession');
                    }
                }
                return {
                    user: user,
                    authenticated: authenticated
                };
            },
            getRenderErrors: function() {
                return $window.renderErrors;
            }
        };
    }
]).factory('HttpInterceptor', ['Global', function(Global) {
    return {
        'request': function(config) {
            if (config.url && (config.url.indexOf('api/atlas/') === 0 || config.url.indexOf('/api/atlas/') === 0)) {
                config.params = config.params || {};
                config.params['user.name'] = Global.user;
            }
            return config;
        }
    };
}]).config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
}]).run(['$rootScope', 'Global', 'NotificationService', 'lodash', 'd3', '$state', function($rootScope, Global, NotificationService, lodash, d3, $state) {
    var errors = Global.getRenderErrors();
    var isAuthenticated = Global.getUserSession().authenticated;
    if (isAuthenticated) {
        if (angular.isDefined(Global.getUserSession().user)) {
            $rootScope.username = Global.getUserSession().user;
        }
    }
    if (angular.isArray(errors) || angular.isObject(errors)) {
        lodash.forEach(errors, function(err) {
            err = angular.isObject(err) ? err : {
                message: err
            };
            err.timeout = false;
            NotificationService.error(err);
        });
    } else {
        if (errors) {
            errors.timeout = false;
            NotificationService.error(errors);
        }
    }
    $rootScope.$on('$stateChangeStart', function(event, toState) {
        if (toState.name !== 'login' && !Global.getUserSession().authenticated) {
            event.preventDefault();
            $state.go('login');
            return;
        }
        d3.selectAll('.d3-tip').remove();
    });

}]);
