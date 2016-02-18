angular.module('htmlTemplates', ['/index.html', '/modules/about/views/about.html', '/modules/details/views/attribute.html', '/modules/details/views/details.html', '/modules/details/views/schema.html', '/modules/home/views/header.html', '/modules/home/views/home.html', '/modules/lineage/views/lineage.html', '/modules/lineage/views/lineage_io.html', '/modules/navigation/views/navigation.html', '/modules/notification/views/notifications.html', '/modules/search/views/search.html', '/modules/search/views/searchResult.html', '/modules/search/views/types/column.html', '/modules/search/views/types/db.html', '/modules/search/views/types/guid.html', '/modules/search/views/types/hiveLineage.html', '/modules/search/views/types/hive_table.html', '/modules/search/views/types/loadprocess.html', '/modules/search/views/types/storagedesc.html', '/modules/search/views/types/table.html', '/modules/search/views/types/view.html', '/modules/tags/definition/views/add.html', '/modules/tags/instance/views/createTag.html', '/modules/tags/instance/views/tags.html']);

angular.module("/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/index.html",
    "<!doctype html>\n" +
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" itemscope=\"itemscope\" itemtype=\"http://schema.org/Product\">\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n" +
    "\n" +
    "  <title>Apache Atlas</title>\n" +
    "  <meta http-equiv=\"Content-type\" content=\"text/html;charset=UTF-8\">\n" +
    "\n" +
    "\n" +
    "  <link href=\"/img/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\">\n" +
    "\n" +
    "  <link rel=\"stylesheet\" href=\"/lib/font-awesome/css/font-awesome.min.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"/css/sticky-footer-navbar.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"/css/common.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"/css/details.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"/css/lineage.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"/css/tags.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"/lib/bootstrap/dist/css/bootstrap.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"/lib/jquery-ui/themes/ui-lightness/jquery-ui.css\">\n" +
    " </head>\n" +
    "\n" +
    "\n" +
    "<link href=\"img/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\">\n" +
    "<body>\n" +
    "<header class=\"navbar navbar-static-top navbar-top\" data-role=\"navigation\">\n" +
    "    <div class=\"container\" data-ng-include=\"'/modules/home/views/header.html'\"></div>\n" +
    "</header>\n" +
    "<div class=\"content container\">\n" +
    "    <div data-ng-include=\"'/modules/notification/views/notifications.html'\"></div>\n" +
    "    <div class=\"col-lg-2 padding0\" data-ng-include=\"'/modules/navigation/views/navigation.html'\" ng-class=\"leftNav ? 'hide' : ''\" ></div>\n" +
    "    <div data-ui-view class=\"ngView\"></div>\n" +
    "</div>\n" +
    "<footer class=\"footer navbar-bottom\">\n" +
    "    <div class=\"container\">\n" +
    "        <p align=\"right\">Powered by<img src=\"../img/logo-green.png\"></p>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "\n" +
    "<script src=\"/lib/jquery/dist/jquery.js\"></script>\n" +
    "<script src=\"/lib/angular/angular.js\"></script>\n" +
    "<script src=\"/lib/bootstrap/dist/js/bootstrap.js\"></script>\n" +
    "<script src=\"/lib/angular-bootstrap/ui-bootstrap-tpls.js\"></script>\n" +
    "<script src=\"/lib/angular-cookies/angular-cookies.js\"></script>\n" +
    "<script src=\"/lib/angular-resource/angular-resource.js\"></script>\n" +
    "<script src=\"/lib/angular-route/angular-route.js\"></script>\n" +
    "<script src=\"/lib/angular-sanitize/angular-sanitize.js\"></script>\n" +
    "<script src=\"/lib/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "<script src=\"/lib/angular-ui-utils/ui-utils.js\"></script>\n" +
    "<script src=\"/lib/lodash/lodash.js\"></script>\n" +
    "<script src=\"/lib/d3/d3.js\"></script>\n" +
    "<script src=\"/lib/d3-tip/index.js\"></script>\n" +
    "<script src=\"/lib/jquery-ui/ui/jquery-ui.js\"></script>\n" +
    "<script src=\"/js/templates.js\"></script>\n" +
    "<script src=\"/js/app.min.js\"></script>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("/modules/about/views/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/about/views/about.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "\n" +
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title title-bold\">About</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <img src=\"../img/ApacheAtlasLogo.png\" class=\"img-responsive\">\n" +
    "        </div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "        <h2 class=\"title-bold\">Apache Atlas</h2>\n" +
    "        <p><b>Version : </b> {{versionInfo.Version}}</p>\n" +
    "        </br>\n" +
    "        <p class=\"text-info\">Get involved!</p>\n" +
    "        <p class=\"text-info\"><a href=\"http://apache.org/licenses/LICENSE-2.0\" target=\"_blank\">Licensed under the Apache License Version 2.0</a></p>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-success\" ng-click=\"$dismiss()\">OK</button>\n" +
    "</div>");
}]);

angular.module("/modules/details/views/attribute.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/details/views/attribute.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<!--<div>-->\n" +
    "<!--{{key}}:-->\n" +
    "\n" +
    "<!--{{value}}-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "<div class=\"row\" data-ng-repeat=\"(key1, value1) in value\" ng-if=\"value1\">\n" +
    "    <div class=\"col-md-6\" data-ng-if=\"!isString(value1)\" data-ng-repeat=\"(key2, value2) in value1 track by $index\"></div>\n" +
    "    <div data-ng-if=\"isString(value2)\" data-ng-repeat=\"(key3, value3) in value2\"> {{key3}}: {{value3}}</div>\n" +
    "    <div class=\"col-md-6\" data-ng-if=\"isString(value1)\"> {{key1}} : {{value1 | date:'medium'}}</div>\n" +
    "</div>");
}]);

angular.module("/modules/details/views/details.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/details/views/details.html",
    "<!--\n" +
    "   ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "   ~ or more contributor license agreements.  See the NOTICE file\n" +
    "   ~ distributed with this work for additional information\n" +
    "   ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "   ~ to you under the Apache License, Version 2.0 (the\n" +
    "   ~ \"License\"); you may not use this file except in compliance\n" +
    "   ~ with the License.  You may obtain a copy of the License at\n" +
    "   ~\n" +
    "   ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "   ~\n" +
    "   ~ Unless required by applicable law or agreed to in writing, software\n" +
    "   ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "   ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "   ~ See the License for the specific language governing permissions and\n" +
    "   ~ limitations under the License.\n" +
    "   -->\n" +
    "<div class=\"row detailsPage\" data-ng-controller=\"DetailsController\">\n" +
    "   <div class=\"col-lg-12 padding0\">\n" +
    "      <ul class=\"breadcrumb\">\n" +
    "         <li><button class=\"btn btn-link\" data-ng-click=\"goBack()\"><i class=\"fa fa-arrow-left\"></i> Back To Result</button> </li>\n" +
    "      </ul>\n" +
    "   </div>\n" +
    "   <div role=\"tabpanel\" class=\"col-lg-12 padding0\">\n" +
    "      <div class=\"mB20\">\n" +
    "         <h4 ng-if=\"details.values && details.values.name && details.values.name != ''\">\n" +
    "         <b>Name:</b> <span class=\"black\">{{details.values.name}}</span></h2>\n" +
    "         <h4 ng-if=\"details.values && details.values.description && details.values.description != ''\"><b>Description:</b> <span class=\"black\">{{details.values.description}}</span></h4>\n" +
    "         <h4 data-disable=\"!tableName\" data-select=\"onActivate('io')\" id=\"lineageGraph\" class=\"hide\">\n" +
    "            <span class=\"lineage\">Lineage</span> \n" +
    "            <ng-include data-table-type=\"io\" src=\"'/modules/lineage/views/lineage_io.html'\"/>\n" +
    "         </h4>\n" +
    "      </div>\n" +
    "      <tabset>\n" +
    "         <tab heading=\"Details\">\n" +
    "            <table class=\"table table-bordered\">\n" +
    "               <thead>\n" +
    "                  <tr>\n" +
    "                     <th>Key</th>\n" +
    "                     <th>Value</th>\n" +
    "                  </tr>\n" +
    "               </thead>\n" +
    "               <tbody>\n" +
    "                  <tr data-ng-repeat=\"(key,value) in details.values\" ng-if=\"value && !(key==='columns') && !(key==='name') && !(key==='description')\">\n" +
    "                     <td>{{key}}</td>\n" +
    "                     <td data-ng-if=\"isObject(value) && isString(value.id)\" class=\"pointer\"> \n" +
    "                        <a data-ui-sref=\"details({id:value.id})\">{{ value.name }}</a>\n" +
    "                     </td>\n" +
    "                     <td data-ng-if=\"isObject(value) && isObject(value.id) && isString(value.id.id)\" class=\"pointer\">  <a data-ui-sref=\"details({id:value.id.id})\">{{ value.id.name }}</a>\n" +
    "                     </td>\n" +
    "                     <td data-ng-if=\"isObject(value) && !isArray(value) && !isString(value.id) && !isObject(value.id)\">\n" +
    "                        <span data-ng-repeat=\"(key2, value2) in value\"> {{ key2 }} : {{ value2 }}<span ng-if=\"!$last\">,</span></span>\n" +
    "                     </td>\n" +
    "                     <td data-ng-if=\"isArray(value) && !isString(value.id) && !isObject(value.id)\">\n" +
    "                        <div  data-ng-repeat=\"(key2, value2) in value\">\n" +
    "                           <a class=\" pointer\" data-ng-if=\"isObject(value2) && isString(value2.id)\"   data-ui-sref=\"details({id:value2.id})\">{{ value2.name }}<span ng-if=\"!$last\">,</span></a>\n" +
    "                           <div class=\"row pdLft15px\" data-ng-repeat=\"(key1, value1) in value2\">\n" +
    "                              <span ng-if=\"isObject(value1)\">\n" +
    "                              <a class=\" pointer\" data-ng-if=\"isString(value1.id)\"   data-ui-sref=\"details({id:value1.id})\">{{ value1.id }}</a> \n" +
    "                              </span>  \n" +
    "                           </div>\n" +
    "                        </div>\n" +
    "                     </td>\n" +
    "                     <td data-ng-if=\"isArray(value) && !isObject(value)\" >\n" +
    "                        <div class=\"row\" data-ng-repeat=\"(key1, value1) in value\" ng-if=\"value1\">\n" +
    "                           <div data-ng-if=\"isObject(value1)\" data-ng-repeat=\"(key2, value2) in value1\" > \n" +
    "                              <a data-ng-if=\"isString(value2) && key2 == 'id'\" class=\"pointer pdLft15px\" data-ui-sref=\"details({id:value2})\">{{ value2 }}</a> \n" +
    "                           </div>\n" +
    "                        </div>\n" +
    "                     </td>\n" +
    "                     <td data-ng-if=\"!isArray(value) && isObject(value[0]) && isString(value[0].id) && key=='inputTables'\" data-ng-click=\"goDetails(value[0].id)\" class=\"pointer\">\n" +
    "                        <div class=\"row\" data-ng-repeat=\"(key1, value1) in value[0]\" ng-if=\"value1\">\n" +
    "                           <div class=\"col-md-6\" data-ng-if=\"!isString(value1)\" data-ng-repeat=\"(key2, value2) in value1 track by $index\"></div>\n" +
    "                           <div data-ng-if=\"isString(value2)\" data-ng-repeat=\"(key3, value3) in value2\"> {{key3}}: {{value3}}</div>\n" +
    "                           <div class=\"col-md-6\" data-ng-if=\"isString(value1)\"> {{key1}} : {{value1 | date:'medium'}} UTC</div>\n" +
    "                        </div>\n" +
    "                     </td>\n" +
    "                     <td data-ng-if=\"isNumber(value)\">{{value | date:'yyyy-MM-dd HH:mm:ss'}} UTC</td>\n" +
    "                     <td data-ng-if=\"isString(value)\">{{value}}</td>\n" +
    "                  </tr>\n" +
    "               </tbody>\n" +
    "            </table>\n" +
    "         </tab>\n" +
    "         <tab data-heading=\"Schema\" data-ng-if=\"isSchema\">\n" +
    "            <ng-include src=\"'/modules/details/views/schema.html'\"/>\n" +
    "         </tab>\n" +
    "         <tab data-heading=\"Tags\" data-ng-if=\"isTags\">\n" +
    "            <ng-include  src=\"'/modules/tags/instance/views/tags.html'\"/>\n" +
    "         </tab>\n" +
    "      </tabset>\n" +
    "   </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("/modules/details/views/schema.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/details/views/schema.html",
    "<!--\n" +
    "    ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "    ~ or more contributor license agreements.  See the NOTICE file\n" +
    "    ~ distributed with this work for additional information\n" +
    "    ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "    ~ to you under the Apache License, Version 2.0 (the\n" +
    "    ~ \"License\"); you may not use this file except in compliance\n" +
    "    ~ with the License.  You may obtain a copy of the License at\n" +
    "    ~\n" +
    "    ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "    ~\n" +
    "    ~ Unless required by applicable law or agreed to in writing, software\n" +
    "    ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "    ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "    ~ See the License for the specific language governing permissions and\n" +
    "    ~ limitations under the License.\n" +
    "    -->\n" +
    "<table class=\"table table-bordered\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>Name</th>\n" +
    "            <th>Comment</th>\n" +
    "            <th ng-if=\"!isHiveSchema\">DataType</th>\n" +
    "            <th ng-if=\"isHiveSchema\">Type</th>\n" +
    "            <th ng-if=\"isTraitId\">Tags </th>\n" +
    "            <th ng-if=\"isTraitId\">Tools</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"colm in schema\">\n" +
    "            <td> \n" +
    "                <a ng-if=\"colm['$id$']\" data-ui-sref=\"details({id:colm['$id$'].id})\">{{colm.name}}</a> \n" +
    "                <span ng-if=\"!colm['$id$']\"> {{colm.name}} </span>\n" +
    "            </td>\n" +
    "            <td>{{colm.comment}}</td>\n" +
    "            <td ng-if=\"!isHiveSchema\"> {{colm.dataType}}</td>\n" +
    "            <td ng-if=\"isHiveSchema\"> {{colm.type}}</td>\n" +
    "            <td ng-if=\"colm['$id$']\">\n" +
    "                <div id=\"{{colm['$id$'].id}}_schema\" class=\"wordBreak\"><a class=\"tabsearchanchor\" ng-repeat=\"(key, value) in colm['$traits$']\" data-ui-sref=\"search({query: key})\" title=\"{{key}}\">{{key}}<span> </span></a></div>\n" +
    "            </td>\n" +
    "            <td ng-if=\"colm['$id$']\" class=\"addTag\">\n" +
    "                <img ng-src=\"img/addTag.png\" tooltip=\"Add Tag\" ng-click=\"openAddTagHome(colm['$id$'].id )\">\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>");
}]);

angular.module("/modules/home/views/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/home/views/header.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<div data-ng-controller=\"HeaderController\" class=\"row\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <button class=\"navbar-toggle\" type=\"button\" data-ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    " <a data-ui-sref=\"search()\" data-ui-sref-active=\"active\" class=\"mainLogo\">\n" +
    "   <!--  <img src=\"../img/ApacheAtlasLogo.png\" /> -->\n" +
    "   Apache <b>Atlas</b>\n" +
    " </a>\n" +
    "    </div>\n" +
    "    <nav class=\"collapse navbar-collapse\" data-collapse=\"isCollapsed\" data-role=\"navigation\">\n" +
    "        <ul class=\"navbar-nav nav pull-right menuBar\" data-ng-if=\"isLoggedIn()\">\n" +
    "            <li data-ui-sref-active=\"active\">\n" +
    "                 <a data-ui-sref=\"search()\" class=\"menulink\">Search</a>\n" +
    "            </li>\n" +
    "            <li data-ng-repeat=\"item in menu\" data-ui-sref-active=\"active\">\n" +
    "                <a data-ui-sref=\"{{item.state}}\">{{item.title}}</a>\n" +
    "            </li>\n" +
    "            <li data-ui-sref-active=\"active\">\n" +
    "              <a  ng-if=\"!username\" class=\"menulink\" href=\"https://cwiki.apache.org/confluence/display/ATLAS/Atlas+Home\" target=\"_blank\">Help</a>\n" +
    "            </li>\n" +
    "            <li data-ui-sref-active=\"active\">\n" +
    "                <a  ng-if=\"!username\" class=\"menulink\" href=\"javascript:void(0)\" ng-click=\"ShowAbout()\">About</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </nav>\n" +
    "</div>");
}]);

angular.module("/modules/home/views/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/home/views/home.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<section class=\"text-center\">\n" +
    "    <img data-ui-sref=\"search\" class=\"pointer\" src=\"modules/home/img/splash.png\"/>\n" +
    "</section>");
}]);

angular.module("/modules/lineage/views/lineage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/lineage/views/lineage.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<div class=\"lineage-viz\" data-ng-controller=\"LineageController\">\n" +
    "    <button type=\"button\" class=\"btn btn-primary pull-right\" ng-click=\"onReset()\">\n" +
    "        Reset\n" +
    "    </button>\n" +
    "    <div class=\"graph\">\n" +
    "      <h4 data-ng-if=\"!requested && !lineageData\">No lineage data found</h4>\n" +
    "      <i data-ng-if=\"requested\" class=\"fa fa-spinner fa-spin fa-5x\"></i>\n" +
    "      <svg >\n" +
    "          <g/>\n" +
    "      </svg>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("/modules/lineage/views/lineage_io.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/lineage/views/lineage_io.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<div class=\"lineage-viz table-bordered\" data-ng-controller=\"Lineage_ioController\">\n" +
    "    <button type=\"button\" class=\"btn btn-primary pull-right\" ng-click=\"onReset()\">\n" +
    "        Reset\n" +
    "    </button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary zoom-buttons pull-right\" id=\"zoom_out\"><i class=\"fa fa-minus\"></i></button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary zoom-buttons pull-right\" id=\"zoom_in\"><i class=\"fa fa-plus\"></i> </button>\n" +
    "    <div class=\"graph\">\n" +
    "      <h4 data-ng-if=\"!requested && !lineageData\" class=\"alignLineage\">No lineage data found</h4>\n" +
    "      <i data-ng-if=\"requested\" class=\"fa fa-spinner fa-spin fa-5x\"></i>\n" +
    "      <svg >\n" +
    "          <g/>\n" +
    "      </svg>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("/modules/navigation/views/navigation.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/navigation/views/navigation.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<div data-ng-controller=\"NavigationController\" class=\"mainTags leftNavigation\"> \n" +
    "    <div>\n" +
    "       <h4 class=\"pull-left\">Tags</h4>  \n" +
    "       <a href ng-click=\"refreshTags()\" class=\"pull-right\"> <img src=\"../img/refresh.png\" style=\"margin: 5px;\" title=\"Refresh Tags\" ></a>\n" +
    "    </div>\n" +
    "    </br>\n" +
    "    </br> \n" +
    "    <div class=\"list-group\">\n" +
    "       <a ng-repeat=\"nav in leftnav\" ui-sref=\"search({ query: nav })\" class=\"list-group-item limitSize\" title=\"{{nav}}\"><i class=\"fa fa-tag\"></i> {{nav}} </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("/modules/notification/views/notifications.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/notification/views/notifications.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<div class=\"container\" data-ng-controller=\"NotificationController\">\n" +
    "    <alert data-ng-repeat=\"notification in getNotifications()\" data-type=\"{{notification.type}}\" data-close=\"close(notification)\" class=\"notifier\">\n" +
    "        {{notification.message}}\n" +
    "    </alert>\n" +
    "</div>\n" +
    "");
}]);

angular.module("/modules/search/views/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/search.html",
    "<!--\n" +
    "   ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "   ~ or more contributor license agreements.  See the NOTICE file\n" +
    "   ~ distributed with this work for additional information\n" +
    "   ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "   ~ to you under the Apache License, Version 2.0 (the\n" +
    "   ~ \"License\"); you may not use this file except in compliance\n" +
    "   ~ with the License.  You may obtain a copy of the License at\n" +
    "   ~\n" +
    "   ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "   ~\n" +
    "   ~ Unless required by applicable law or agreed to in writing, software\n" +
    "   ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "   ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "   ~ See the License for the specific language governing permissions and\n" +
    "   ~ limitations under the License.\n" +
    "   -->\n" +
    "<div class=\"col-lg-10 paddingR0\">\n" +
    "   <div class=\"\">\n" +
    "      <div class=\"row mainSearch\">\n" +
    "         <form class=\"col-lg-12\" name=\"form\" novalidate>\n" +
    "            <div class=\"input-group\">\n" +
    "               <input type=\"text\" class=\"form-control\" placeholder=\"Search: Table, DB, Column\" data-ng-model=\"query\" required/>\n" +
    "               <span class=\"input-group-btn\">\n" +
    "               <button class=\"btn btn-success\" type=\"submit\" data-ng-disabled=\"form.$invalid\" ui-sref=\"search({ query: query })\">\n" +
    "               <i class=\"glyphicon glyphicon-search white \"></i>\n" +
    "               </button>\n" +
    "               </span>\n" +
    "            </div>\n" +
    "         </form>\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-12 padding0 searchresults\">\n" +
    "         <div ng-switch on=\"searchMessage\">\n" +
    "            <div ng-switch-when=\"load-gif\" class=\"search-spinner\"><img src=\"../img/spinner.gif\" align=\"middle\" /></div>\n" +
    "            <div ng-switch-default>\n" +
    "               <h4 ng-show=\"searchMessage\" title=\"{{searchMessage}}\" class=\"tabsearchResult\">{{searchMessage}}</h4>\n" +
    "            </div>\n" +
    "         </div>\n" +
    "         <div class=\"panel panel-default\" ng-show='resultCount > 0'>\n" +
    "            <table class=\"table table-bordered datatable\" >\n" +
    "               <thead>\n" +
    "                  <tr ng-if=\"!isTag(resultType)\">\n" +
    "                     <th>Name</th>\n" +
    "                     <th>Description</th>\n" +
    "                     <th>Owner</th>\n" +
    "                     <th>Tags</th>\n" +
    "                     <th>Tools</th>\n" +
    "                  </tr>\n" +
    "                  <tr ng-if=\"isTag(resultType) && transformedProperties != undefined\" >\n" +
    "                     <th ng-repeat=\"prop in transformedProperties\" ng-if=\"prop !== 'id' && prop !== 'guid'\">\n" +
    "                        {{(prop != '$traits$') ? prop : 'Tags'}}\n" +
    "                     </th>\n" +
    "                  </tr>\n" +
    "               </thead>\n" +
    "               <tbody>\n" +
    "                  <tr ng-if=\"!isTag(resultType) && isObject(result)\" ng-repeat=\"result in filteredResults track by $index\">\n" +
    "                     <td>\n" +
    "                        <a data-ui-sref=\"details({id:result['$id$'].id || result.guid})\">{{result.name || result.guid}}</a>\n" +
    "                     </td>\n" +
    "                     <td>\n" +
    "                        {{result.description}}\n" +
    "                     </td>\n" +
    "                     <td>                    \n" +
    "                        <span ng-repeat=\"(key, value) in filterSearchResults(result)\">\n" +
    "                        <span ng-if=\"key =='owner'\">{{value}}</span>\n" +
    "                        </span>\n" +
    "                     </td>\n" +
    "                     <td>\n" +
    "                        <div id=\"{{result['$id$'].id || result.guid}}\" ng-show=\"!dataTransitioned\" class=\"wordBreak\"><a class=\"tabsearchanchor\" ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search({query: key})\" title=\"{{key}}\">{{key}}<span> </span></a></div>\n" +
    "                     </td>\n" +
    "                     <td class=\"addTag\"><img ng-src=\"img/addTag.png\" tooltip=\"Add Tag\" ng-click=\"openAddTagHome(result['$id$'].id || result.guid)\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr ng-if=\"isTag(resultType)\" ng-repeat=\"result in filteredResults track by $index\">\n" +
    "                     <td data-ng-if=\"isObject(result) && !isString(result) && res != 'id' && res != 'guid'\" data-ng-repeat=\"res in transformedProperties track by $index\">\n" +
    "                        \n" +
    "                        <a data-ng-if=\"res == 'guid' && !result['name']\" data-ui-sref=\"details({id:result[res]})\">{{result[res]}}</a>\n" +
    "                        \n" +
    "                        <span data-ng-if=\"res != '$traits$' && res != 'Tools' && res != 'guid' && res.toLowerCase().indexOf('name') == -1 && res.toLowerCase().indexOf('time') == -1\">{{result[res]}}</span> \n" +
    "                        \n" +
    "                        <span data-ng-if=\"res.toLowerCase().indexOf('time') != -1 && isNumber(result[res])\">{{result[res] * 1000 | date:'yyyy-MM-dd HH:mm:ss'}} UTC</span> \n" +
    "                        \n" +
    "                        <a data-ng-if=\"res.toLowerCase().indexOf('name') != -1 && (result['id'] || result['guid']) \" data-ui-sref=\"details({id:result['id']|| result['guid']})\">{{result[res]}}</a>\n" +
    "\n" +
    "                        <span data-ng-if=\"res.toLowerCase().indexOf('name') != -1 && !result['id'] && !result['guid']\">{{result[res]}}</span> \n" +
    "                        \n" +
    "                        <div data-ng-if=\"res == '$traits$'\" class=\"wordBreak tags\" id=\"{{result['id']|| result['guid']}}\">\n" +
    "                           <a class=\"tabsearchanchor\" ng-repeat=\"(key, value) in result[res]\" data-ui-sref=\"search({query: key})\" title=\"{{key}}\">{{key}}<span> </span></a>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <span data-ng-if=\"res == 'Tools'\" class=\"addTag\"> <img ng-src=\"img/addTag.png\" tooltip=\"Add Tag\" ng-click=\"openAddTagHome(result['id']|| result['guid'])\"> </span>\n" +
    "                     </td>\n" +
    "                     <td data-ng-if=\"isString(result) || result == false || result == true\">\n" +
    "                        <a data-ng-if=\"result.toLowerCase() == 'guid'\" data-ui-sref=\"details({id:result})\">{{result}}</a>\n" +
    "                        <span data-ng-if=\"result.toLowerCase() != 'guid'\">{{result}}</span>\n" +
    "                     </td>\n" +
    "                  </tr>\n" +
    "               </tbody>\n" +
    "            </table>\n" +
    "         </div>\n" +
    "         <div class=\"pull-right\" ng-show='resultCount > 0'>\n" +
    "            <pagination total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>\n" +
    "            <p>\n" +
    "         </div>\n" +
    "      </div>\n" +
    "   </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("/modules/search/views/searchResult.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/searchResult.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "<!--\n" +
    "<h4 ng-show='results.rows.length > 0'>{{results.rows.length}} results matching your search query \"{{query}}\" were found</h4>\n" +
    "<h4 ng-show='results.rows.length == \"0\"'>searching .....</h4>\n" +
    "<h4 ng-show='!(results.rows)'>0 results matching your search query \"{{query}}\" were found</h4>-->\n" +
    "\n" +
    "<h4 ng-show=\"searchMessage\">{{searchMessage}}</h4>\n" +
    "\n" +
    "<ul class=\"list-unstyled\">\n" +
    "    <li ng-repeat=\"result in filteredResults\" class=\"searchresults\">\n" +
    "        <h4><a data-ui-sref=\"details({id:result['$id$'].id})\">{{result.name}}</a></h4>\n" +
    "        <p>{{result.description}}</p>\n" +
    "            <span ng-repeat=\"(key, value) in filterSearchResults(result)\" >\n" +
    "                <span ng-show=\"$index < 4\"><b>{{key}}: </b>{{value}}{{$index+1 === limit ? '' : ', '}}</span>\n" +
    "            </span>\n" +
    "        <div collapse=\"isCollapsed\">\n" +
    "                <span ng-repeat=\"(key, value) in filterSearchResults(result)\" >\n" +
    "                <span ng-show=\"$index > 4\"><b>{{key}}: </b>{{value}}{{$last ? '' : ', '}}</span>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <a href ng-show=\"isCollapsed && (keyLength > 4)\"  ng-click=\"doToggle($event,isCollapsed)\">..show more</a>\n" +
    "        <a href ng-show=\"!isCollapsed\"  ng-click=\"doToggle($event,isCollapsed)\">..show less</a>\n" +
    "\n" +
    "        <h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>\n" +
    "        <div data-ng-if=\"!searchTypesAvailable\" data-ng-include=\"'/modules/search/views/types/guid.html'\"></div>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<div class=\"resultsPagination\" ng-show='filteredResults.length > 0'>\n" +
    "    <pagination total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>\n" +
    "    <p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("/modules/search/views/types/column.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/column.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<h4><a data-ui-sref=\"details({id:result['$id$'].id})\">{{result.name}}</a></h4>\n" +
    "<p><b>Comment:</b> {{result.comment}}, <b>DataType:</b> {{result.dataType}},<b>Table:</b> {{result.table}}</p>\n" +
    "<h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>");
}]);

angular.module("/modules/search/views/types/db.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/db.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<h4><a data-ui-sref=\"details({id:result['$id$'].id})\">{{result.name}}</a></h4>\n" +
    "<p>{{result.description}}</p>\n" +
    "<p><b>locationUri:</b> {{result.locationUri}}, <b>Owner: </b>{{result.owner}}</p>\n" +
    "<h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>");
}]);

angular.module("/modules/search/views/types/guid.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/guid.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<h4><a data-ui-sref=\"details({id:result.instanceInfo.guid})\">{{result.instanceInfo.guid}}</a></h4>\n" +
    "<p><b>TypeName: </b>{{result.instanceInfo.typeName}}</p>\n" +
    "<h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>");
}]);

angular.module("/modules/search/views/types/hiveLineage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/hiveLineage.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<a data-ui-sref=\"details({id:result.guid})\">{{result.guid}}</a>");
}]);

angular.module("/modules/search/views/types/hive_table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/hive_table.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<a data-ui-sref=\"details({id:result.guid})\">{{result[\"hive_table.name\"]}}</a>");
}]);

angular.module("/modules/search/views/types/loadprocess.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/loadprocess.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<h4><a data-ui-sref=\"details({id:result['$id$'].id})\">{{result.name}}</a></h4>\n" +
    "<p>{{result.description}}</p>\n" +
    "<p><b>inputTables: </b>{{result.inputTables['id']}},<b>queryText: </b>{{result.queryText}},<b>startTime: </b>{{result.startTime | date:'medium'}},<b>endTime: </b> {{result.endTime | date:'medium'}}</p>\n" +
    "<h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>");
}]);

angular.module("/modules/search/views/types/storagedesc.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/storagedesc.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<h4><a data-ui-sref=\"details({id:result['$id$'].id})\">{{result.name}}</a></h4>\n" +
    "<p><b>compressed: </b>{{result.compressed}},<b>outputFormat: </b>{{result.outputFormat}},<b>location: </b>{{result.location}}, <b>inputFormat: </b>{{result.inputFormat}}</p>\n" +
    "<h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>");
}]);

angular.module("/modules/search/views/types/table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/table.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<h4><a data-ui-sref=\"details({id:result['$id$'].id})\">{{result.name}}</a></h4>\n" +
    "<p>{{result.description}}</p>\n" +
    "<p><b>owner: </b>{{result.owner}}, <b>createTime: </b>{{result.createTime}}</p>\n" +
    "<h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>");
}]);

angular.module("/modules/search/views/types/view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/search/views/types/view.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "\n" +
    "<h4><a data-ui-sref=\"details({id:result['$id$'].id})\">{{result.name}}</a></h4>\n" +
    "<p><b>inputTables: </b><a ng-repeat=\"inputs in result.inputTables\" data-ui-sref=\"details({id: inputs.id})\">{{ inputs.id}}</a></p>\n" +
    "<h5>Tags :  <a ng-repeat=\"(key, value) in result['$traits$']\" data-ui-sref=\"search.results({query: key})\">{{key}}</a> </h5>\n" +
    "");
}]);

angular.module("/modules/tags/definition/views/add.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/tags/definition/views/add.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"appForm col-lg-12\" data-ng-controller=\"DefinitionTagsController\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\"><h4>Tag Definition</h4></div>\n" +
    "        <div class=\"panel-body inputs\">\n" +
    "          <form data-name=\"tagForm\" class=\"form-horizontal\" novalidate role=\"form\">\n" +
    "              <fieldset data-ng-disabled=\"saving\">\n" +
    "\n" +
    "                  <div class=\"form-group hide\">\n" +
    "                      <label for=\"category\" class=\"col-sm-2 control-label\">Category</label>\n" +
    "\n" +
    "                      <div class=\"col-sm-10\">\n" +
    "                          <select class=\"form-control\" id=\"category\" name=\"category\" data-ng-model=\"category\" data-ng-change=\"categoryChange()\" required>\n" +
    "                              <option value=\"{{key}}\" data-ng-repeat=\"(key, value) in categoryList\" ng-selected=\"{{key===category}}\">{{key}}</option>\n" +
    "                          </select>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"form-group\" >\n" +
    "                      <label for=\"typeName\" class=\"col-sm-2 control-label\">Tag Name</label>\n" +
    "\n" +
    "                      <div class=\"col-sm-10\">\n" +
    "                          <input type=\"text\" class=\"form-control\" name=\"typeName\" id=\"typeName\" placeholder=\"Tag Name\" data-ng-model=\"tagModel.typeName\" required/>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"form-group\">\n" +
    "                     <label class=\"control-label col-sm-2\" for=\"ParentTag\">Parent Tag</label>\n" +
    "                        <div class=\"col-sm-5 mrt-8\"> \n" +
    "                               <select ng-model=\"selectedParent\" class=\"form-control h160\" id=\"ParentTag\" name=\"ParentTag\" multiple> \n" +
    "                                   <option ng-repeat=\"data in typesList\" title=\"{{data}}\">{{data}}</option>\n" +
    "                               </select>\n" +
    "                        </div>\n" +
    "                        <div class=\"mtop3\"> \n" +
    "                           <a href ng-click=\"refreshTags()\" class=\"pull-left\"> \n" +
    "                               <img src=\"../img/refresh.png\" title=\"Refreh parent tag list\">\n" +
    "                           </a>\n" +
    "                        </div>\n" +
    "                  </div>\n" +
    "                  <ng-form name=\"attributeForm\">\n" +
    "                      <div class=\"form-group\"\n" +
    "                           data-ng-repeat-start=\"attribute in tagModel.attributeDefinitions\">\n" +
    "                          <label for=\"attributeId_{{$index}}\" class=\"col-sm-2 control-label\">Attribute name</label>\n" +
    "\n" +
    "                          <div class=\"col-sm-10\">\n" +
    "                            <!--   <div class=\"input-group\"> -->\n" +
    "                                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"attributeId_{{$index}}\" placeholder=\"Attribute name\" data-ng-model=\"attribute.name\"\n" +
    "                                         required/>\n" +
    "                                  <button class=\"remove\" ng-click=\"removeAttribute($index)\"><i class=\"fa fa-times\"></i></button>\n" +
    "                               <!--    <i class=\"input-group-addon fa fa-2x\" data-ng-class=\"{'fa-angle-double-down':!attribute.$$show, 'fa-angle-double-up':attribute.$$show}\"\n" +
    "                                     data-ng-click=\"attribute.$$show=!attribute.$$show\"></i> -->\n" +
    "                             <!--  </div> -->\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"form-group\" data-ng-class=\"{'has-error': attributeForm.name.$invalid && attributeForm.name.$dirty}\" data-ng-show=\"attribute.$$show\">\n" +
    "                          <label for=\"attributeDatatype_{{$index}}\" class=\"col-sm-2 control-label\">Data Type </label>\n" +
    "\n" +
    "                          <div class=\"col-sm-10\">\n" +
    "                              <input type=\"text\" class=\"form-control\" name=\"name\" id=\"attributeDatatype_{{$index}}\" placeholder=\"dataTypeName\"\n" +
    "                                     data-ng-model=\"attribute.dataTypeName\"/>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"form-group\" data-ng-class=\"{'has-error': attributeForm.name.$invalid && attributeForm.name.$dirty}\" data-ng-show=\"attribute.$$show\">\n" +
    "                          <label for=\"attributeMultiplicity_{{$index}}\" class=\"col-sm-2 control-label\">Multiplicity</label>\n" +
    "\n" +
    "                          <div class=\"col-sm-10\">\n" +
    "                              <input type=\"text\" class=\"form-control\" name=\"name\" id=\"attributeMultiplicity_{{$index}}\" placeholder=\"multiplicity\"\n" +
    "                                     data-ng-model=\"attribute.multiplicity\"/>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "\n" +
    "                      <div class=\"form-group\" data-ng-class=\"{'has-error': attributeForm.name.$invalid && attributeForm.name.$dirty}\" data-ng-show=\"attribute.$$show\">\n" +
    "                          <label for=\"attributeIscomposite_{{$index}}\" class=\"col-sm-2 control-label\">isComposite</label>\n" +
    "\n" +
    "                          <div class=\"col-sm-10\">\n" +
    "                              <span class =\"btnToggle\">\n" +
    "                              <a class=\"btn-sm \" ng-class=\"{true: 'btn-primary'}[attribute.isComposite]\" ng-click=\"attribute.isComposite = true\">true </a>\n" +
    "                              <a class=\"btn-sm \" ng-class=\"{false: 'btn-danger'}[attribute.isComposite]\" ng-click=\"attribute.isComposite = false\"> false </a>\n" +
    "\n" +
    "                                  </span>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"form-group\" data-ng-class=\"{'has-error': attributeForm.name.$invalid && attributeForm.name.$dirty}\" data-ng-show=\"attribute.$$show\">\n" +
    "                          <label for=\"attributeIsunique_{{$index}}\" class=\"col-sm-2 control-label\">isUnique</label>\n" +
    "\n" +
    "                          <div class=\"col-sm-10\">\n" +
    "                              <span class =\"btnToggle\">\n" +
    "                              <a class=\"btn-sm \" ng-class=\"{true: 'btn-primary'}[attribute.isUnique]\" ng-click=\"attribute.isUnique = true\">true </a>\n" +
    "                              <a class=\"btn-sm \" ng-class=\"{false: 'btn-danger'}[attribute.isUnique]\" ng-click=\"attribute.isUnique = false\"> false </a>\n" +
    "\n" +
    "                                  </span>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"form-group\" data-ng-class=\"{'has-error': attributeForm.name.$invalid && attributeForm.name.$dirty}\" data-ng-show=\"attribute.$$show\">\n" +
    "                          <label for=\"attributeIndexable_{{$index}}\" class=\"col-sm-2 control-label\">isIndexable</label>\n" +
    "\n" +
    "                          <div class=\"col-sm-10\">\n" +
    "                              <span class =\"btnToggle\">\n" +
    "                              <a class=\"btn-sm \" ng-class=\"{true: 'btn-primary'}[attribute.isIndexable]\" ng-click=\"attribute.isIndexable = true\">true </a>\n" +
    "                              <a class=\"btn-sm \" ng-class=\"{false: 'btn-danger'}[attribute.isIndexable]\" ng-click=\"attribute.isIndexable = false\"> false </a>\n" +
    "\n" +
    "                                  </span>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "\n" +
    "\n" +
    "                      <div class=\"form-group\" data-ng-class=\"{'has-error': attributeForm.name.$invalid && attributeForm.name.$dirty}\" data-ng-show=\"attribute.$$show\"\n" +
    "                           data-ng-repeat-end>\n" +
    "                          <label for=\"attributeReverseName_{{$index}}\" class=\"col-sm-2 control-label\">reverseAttributeName</label>\n" +
    "\n" +
    "                          <div class=\"col-sm-10\">\n" +
    "                              <input type=\"text\" class=\"form-control\" name=\"reverseName\" id=\"attributeReverseName_{{$index}}\" placeholder=\"reverseAttributeName\"\n" +
    "                                     data-ng-model=\"attribute.reverseAttributeName\"/>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                  </ng-form>\n" +
    "                  <div class=\"form-group text-right\">\n" +
    "                      <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "\n" +
    "                          <button data-ng-click=\"addAttribute()\" class=\"btn btn-default addAttr\"><i class=\"fa fa-plus\"></i> Add Attribute</button>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"form-group panel-footer\">\n" +
    "                      <div class=\"col-sm-12 text-right padding0\">\n" +
    "                          <button type=\"submit\" data-ng-click=\"save(tagForm)\" data-ng-disabled=\"tagForm.$invalid\" class=\"btn btn-primary saveAttr\">Save</button>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "              </fieldset>\n" +
    "          </form>\n" +
    "\n" +
    "       <!--    <div class=\"row\" data-ng-show=\"savedTag\">\n" +
    "              <pre>{{savedTag | json}}</pre>\n" +
    "          </div> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("/modules/tags/instance/views/createTag.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/tags/instance/views/createTag.html",
    "<!--\n" +
    "  ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "  ~ or more contributor license agreements.  See the NOTICE file\n" +
    "  ~ distributed with this work for additional information\n" +
    "  ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "  ~ to you under the Apache License, Version 2.0 (the\n" +
    "  ~ \"License\"); you may not use this file except in compliance\n" +
    "  ~ with the License.  You may obtain a copy of the License at\n" +
    "  ~\n" +
    "  ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "  ~\n" +
    "  ~ Unless required by applicable law or agreed to in writing, software\n" +
    "  ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "  ~ See the License for the specific language governing permissions and\n" +
    "  ~ limitations under the License.\n" +
    "  -->\n" +
    "<div class=\"modal-header\">\n" +
    "	<h4 class=\"modal-title\">Add tag</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "	<div class=\"form-group\">\n" +
    "		<div align=\"center\" class=\"error col-sm-12 tabsearchResult pointer\" title=\"{{error}}\" ng-show=\"isError\">\n" +
    "			{{error}}\n" +
    "		</div>\n" +
    "		 <div class=\"alert alert-success\" ng-if=\"isSuccess\" >\n" +
    "       		{{successmessage}}\n" +
    "   		 </div>\n" +
    "	</div>\n" +
    "	<form name=\"tagDefinitionform\"  class=\"css-form\" novalidate>\n" +
    "		<div class=\"form-group hide\">\n" +
    "			<label for=\"category\" class=\"col-sm-4 control-label\">Category</label>\n" +
    "			<div class=\"col-sm-8 input-spacing\">\n" +
    "				<select class=\"form-control\" id=\"category\" name=\"category\"\n" +
    "					ng-model=\"category\" ng-change=\"categoryChange()\" required>\n" +
    "					<option value=\"{{key}}\"\n" +
    "						ng-repeat=\"(key, value) in categoryList\"\n" +
    "						ng-selected=\"{{key===category}}\">{{key}}</option>\n" +
    "				</select>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{'has-error': (tagDefinitionform.tagDefinition.$invalid && tagDefinitionform.tagDefinition.$dirty)}\">\n" +
    "			<label class=\"control-label col-sm-4\" for=\"tagDefinition\">Tag definition</label>\n" +
    "			<div class=\"col-sm-8 input-spacing\">\n" +
    "				<select ng-model=\"selectedType\"  class=\"form-control\" id=\"tagDefinition\" name=\"tagDefinition\"\n" +
    "					ng-change=\"getAttributeDefinations(); isError =false; isSuccess=false;\" required>\n" +
    "				<option ng-repeat=\"data in typesList \" title=\"{{data}}\">{{data}}</option>\n" +
    "				</select>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-repeat=\"(key, value) in propertiesList\" ng-class=\"{'has-error': (tagDefinitionform.propertyId_{{$index}}.$invalid && tagDefinitionform.propertyId_{{$index}}.$dirty)}\">\n" +
    "			<label class=\"control-label col-sm-4\" for=\"propertyId_{{$index}}\">{{key}}</label>\n" +
    "			<div class=\"col-sm-8 input-spacing\">\n" +
    "				<input type=\"text\" class=\"form-control\" id=\"propertyId_{{$index}}\" name=\"propertyId_{{$index}}\" ng-model=\"propertiesList[key]\" ng-required=\"isRequired[key]\"/>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-footer\">\n" +
    "			<button class=\"btn btn-success\" type=\"submit\" ng-click=\"ok($event, tagDefinitionform)\" ng-disabled=\"tagDefinitionform.$invalid\">Save</button>\n" +
    "			<button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("/modules/tags/instance/views/tags.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/modules/tags/instance/views/tags.html",
    "<!--\n" +
    "   ~ Licensed to the Apache Software Foundation (ASF) under one\n" +
    "   ~ or more contributor license agreements.  See the NOTICE file\n" +
    "   ~ distributed with this work for additional information\n" +
    "   ~ regarding copyright ownership.  The ASF licenses this file\n" +
    "   ~ to you under the Apache License, Version 2.0 (the\n" +
    "   ~ \"License\"); you may not use this file except in compliance\n" +
    "   ~ with the License.  You may obtain a copy of the License at\n" +
    "   ~\n" +
    "   ~     http://www.apache.org/licenses/LICENSE-2.0\n" +
    "   ~\n" +
    "   ~ Unless required by applicable law or agreed to in writing, software\n" +
    "   ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    "   ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    "   ~ See the License for the specific language governing permissions and\n" +
    "   ~ limitations under the License.\n" +
    "   -->\n" +
    "<div data-ng-controller=\"InstanceTagController\" >\n" +
    "   <div>\n" +
    "      <a ng-click=\"openAddTag()\" class=\"add-tag btn btn-primary pull-right\">Add Tag</a>\n" +
    "   </div>\n" +
    "   <table class=\"table table-bordered\">\n" +
    "      <thead>\n" +
    "         <tr>\n" +
    "            <th>Tag</th>\n" +
    "             <th>Attributes</th>\n" +
    "            <th>Tools</th>\n" +
    "         </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "           <tr ng-repeat=\"trait in traitsList\" class=\"pointer\" ng-if=\"!noTags\" id=\"{{trait.typeName}}\">\n" +
    "            <td class=\"col-lg-5\" >\n" +
    "               {{trait.typeName}}\n" +
    "            </td>\n" +
    "             <td class=\"col-lg-5 tag-attr\" >\n" +
    "              {{trait.values}}\n" +
    "            </td>\n" +
    "            <td class=\"col-lg-1 tagAlign\">\n" +
    "               <a href=\"\" class=\"deleteTag confirm-delete\" data-toggle=\"modal\" data-target=\"#myModal\" ><i class=\"fa fa-trash-o \" ng-click=\"detachTag($event, trait.typeName)\"></i></a>\n" +
    "            </td>\n" +
    "         </tr>\n" +
    "      </tbody>\n" +
    "   </table>\n" +
    "  <!-- Modal -->\n" +
    "  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "      <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\">\n" +
    "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "          <h4 class=\"modal-title\" id=\"myModalLabel\">Are you sure you want to delete ? </h4>\n" +
    "        </div>\n" +
    "        <div class=\"modal-body\">\n" +
    "            <b> Tag : {{displayName}} </b>\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"cancel()\">Close</button>\n" +
    "          <button type=\"button\" id=\"btnDelete\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-click=\"removeTag()\">Delete</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-if=\"noTags\" class=\"noTags\"> \n" +
    "      No tags to display \n" +
    "  </div>  \n" +
    "</div>");
}]);
