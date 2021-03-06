/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var injectNode = require('./core/common/20-inject_page');
var debugNode = require('./core/common/21-debug_page');
var completeNode = require('./core/common/24-complete_page');
var catchNode = require('./core/common/25-catch_page');
var statusNode = require('./core/common/25-status_page');
var commentNode = require('./core/common/90-comment_page');
var functionNode = require('./core/function/10-function_page');
var changeNode = require('./core/function/15-change_page');
var rangeNode = require('./core/function/16-range_page');
var templateNode = require('./core/function/80-template_page');
var delayNode = require('./core/function/89-delay_page');
var mqttInNode = require('./core/network/10-mqttin_page');
var mqttOutNode = require('./core/network/10-mqttout_page');
var httpInNode = require('./core/network/21-httpin_page');
var httpResponseNode = require('./core/network/21-httpresponse_page');
var httpRequestNode = require('./core/network/21-httprequest_page');
var splitNode = require('./core/sequence/17-split_page');
var joinNode = require('./core/sequence/17-split_page');
var batchNode = require('./core/sequence/19-batch_page');
var csvNode = require('./core/parsers/70-CSV_page');
var htmlNode = require('./core/parsers/70-HTML_page');
var jsonNode = require('./core/parsers/70-JSON_page');
var xmlNode = require('./core/parsers/70-XML_page');
var yamlNode = require('./core/parsers/70-YAML_page');
var fileInNode = require('./core/storage/10-filein_page');

var nodeCatalog = {
    // common
    "inject": injectNode,
    "debug": debugNode,
    "complete": completeNode,
    "catch": catchNode,
    "status": statusNode,
    "comment": commentNode,
    // function
    "function": functionNode,
    "change": changeNode,
    "range": rangeNode,
    "template": templateNode,
    "delay": delayNode,
    // network
    "mqttIn": mqttInNode,
    "mqttOut": mqttOutNode,
    "httpIn": httpInNode,
    "httpResponse": httpResponseNode,
    "httpRequest": httpRequestNode,
    // sequence
    "split": splitNode,
    "join": joinNode,
    "batch": batchNode,
    // parser
    "csv": csvNode,
    "html": htmlNode,
    "json": jsonNode,
    "xml": xmlNode,
    "yaml": yamlNode,
    // storage
    "fileIn": fileInNode
};

function create(type, id) {
    var Node = nodeCatalog[type];
    return new Node(id);
}

module.exports = {
    create: create,
};
