/**
 * Copyright 2019-2022 Wingify Software Pvt. Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* global SDK_NAME, SDK_VERSION */

let packageFile = {};

// For javascript-sdk, to keep the build size low
// avoid adding the whole package file in the file
if (typeof process.env === 'undefined') {
  packageFile = {
    // Hard-coded to "vwo-javascript-sdk", so we can keep as-is
    name: SDK_NAME,
    // Not used; see below
    version: SDK_VERSION
  };
} else {
  packageFile = require('../../package.json');
  // Keep consistent w/ official package name to ensure API validations pass
  packageFile.name = 'vwo-node-sdk';
}

module.exports = {
  SDK_NAME: packageFile.name,
  // SDK_VERSION is sent to the API in getSettingsFile(); settings file format
  // depends on SDK version; this forked repo is based on version 1.42.0 of
  // offical package, so API must return correct format for that version in
  // order for the settings file to pass validation
  SDK_VERSION: '1.42.0',

  PLATFORM: 'server',

  SEED_VALUE: 1,

  MAX_TRAFFIC_PERCENT: 100,
  MAX_TRAFFIC_VALUE: 10000,
  MAX_EVENTS_PER_REQUEST: 5000,

  DEFAULT_EVENTS_PER_REQUEST: 100,
  DEFAULT_REQUEST_TIME_INTERVAL: 600, // 10 * 60(secs) = 600 secs i.e. 10 minutes

  STATUS_RUNNING: 'RUNNING',

  SEED_URL: 'https://vwo.com',

  HTTP_PROTOCOL: 'http://',
  HTTPS_PROTOCOL: 'https://',

  SDK_QUERY_PARAM: 'sdk',
  SDK_VERSION_QUERY_PARAM: 'sdk-v'
};
