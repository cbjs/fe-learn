'use strict'

var _ = require('lodash'),
    request = require('request'),
    Q = require('q');

var _defaultParams = {
    s: 0,
    q: '', 
    n: 20, 
    f: 0,
    t: null,
    dt: null,
    d: false,
    lo: 116.342986,
    la: 40.036286,
    hl: 'zh_CN',
    sd: 'xxhdpi',
    p: 0,
    nt: 'wifi',
    se: 'demo#session#id',
    imei: 'imei#hash',
    dm: 'minote1',
    _sl: true,
    sp: 'china mobile',
    sv: '5.2.12(alpha)'
};  
var _host = {
  online: 'http://global.search.xiaomi.net',
  staging: 'http://10.99.184.68:8082',
  c3fe01: 'http://c3-s-fe01.bj:8082',
  lgfe01: 'http://lg-sns-fe01.bj:8082'
};

exports.post = function(env, api, params) {
  var apiURL = _host[env] + api;
  var apiParams = _.extend({}, _defaultParams, params);

  return Q.Promise(function(resolve, reject, notify) {
    request.post({
      url: apiURL,
      form: apiParams
    }, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject({err: err, code: response.statusCode});
      }
    });
  });
}

exports.online = function(api, params) {
  return exports.post('c3fe01', api, params);
}

exports.onlineGlobalV3Sug = function(params) {
  return exports.online('/global/v3/sug', params);
}

exports.onlineBrowserV3Sug = function(params) {
  return exports.online('/browser/v3/sug', params);
}

exports.onlineGlobalV3Search = function(params) {
  return exports.online('/global/v3/search', params);
}
