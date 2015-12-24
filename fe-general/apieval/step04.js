'use strict'

/*
 * all of it
 */

var path = require('path'),
    _ = require('lodash');

var globalSearchAPI = require('./api/misearch.global'),
    dataLoader = require('./api/data.loader'),
    evalUtil = require('./api/util.eval'),
    globalUtil = require('./api/util.misearch');

dataLoader.loadJSONFile(path.join(__dirname, 'app.name.json')).then(function(queryArray) {
  _.each(queryArray, function(query) {
    globalSearchAPI.onlineGlobalV3Sug({q: query}).then(function(result) {
      var appNames = globalUtil.globalV3AppNames(result);
      console.log(query, appNames, evalUtil.evalString(query, appNames));
    }).fail(function(err){
      console.log(err);
    });
  });
})
.done();
