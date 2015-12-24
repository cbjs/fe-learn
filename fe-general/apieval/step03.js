'use strict'

/*
 * use module
 */

var globalSearchAPI = require('./api/misearch.global');

var LABELS = {
  'FULL_MATCH': 0,
  'PREFIX': 1, 
  'SUFFIX': 2,
  'INFIX': 3,
  'OTHER': 4,
  'EMPTY': 100, 
};

function evalString(query, names) {
  query = query.toLowerCase();
  return names.reduce(function(last, name) {
    name = name.toLowerCase();
    if (name == query) return 'FULL_MATCH';

    var label = 'OTHER';
    var queryIndex = name.indexOf(query);
    if (queryIndex == 0) {
      label = 'PREFIX';
    } else if (queryIndex + query.length == name.length) {
      label = 'SUFFIX';
    } else if (queryIndex != -1) {
      label = 'INFIX';
    }

    return LABELS[label] > LABELS[last] ? last : label;
  }, 'EMPTY');
}

function extractAppNames(response) {
  var appGroups = response.result.filter(function(group){
    return group.type == 'app';
  });

  if (appGroups.length <= 0) return [];

  return appGroups[0].items.map(function(item) {
    return item.data[0].title;
  });
};


var query = 'QQ';
globalSearchAPI.onlineGlobalV3Sug({q: query}).then(function(result) {
  var appNames = extractAppNames(result);
  console.log(query, appNames, evalString(query, appNames));
})
.fail(function(err) {
  console.log(err);
});
