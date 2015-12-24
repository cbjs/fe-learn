'use strict'

/**
 * use defer & promise
 */

var _ = require('lodash'),
    Q = require('q'),
    request = require('request');

/*
 * global/v3 默认参数
 */
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
var _url = 'http://global.search.xiaomi.net/global/v3/sug';

/**
 * 请求接口
 */
function search(query) {
  var apiParams = _.extend({}, _defaultParams, {q: query});

  var deferred = Q.defer();
  request.post({
    url: _url,
    form: apiParams
  }, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        deferred.resolve(JSON.parse(body));
      } else {
        deferred.reject(err);
      }
  });

  return deferred.promise;
}

/**
 * 抽取app名称
 */
function extractAppNames(response) {
  var appGroups = response.result.filter(function(group){
    return group.type == 'app';
  });

  if (appGroups.length <= 0) return [];

  return appGroups[0].items.map(function(item) {
    return item.data[0].title;
  });
}

search('QQ')
.then(function(response) {
  console.log(extractAppNames(response))
})
.fail(function(err) {
  console.err(err);
})
.done();
