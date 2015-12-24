'use strict'

exports.globalV3AppNames = function(response) {
  var appGroups = response.result.filter(function(group){
    return group.type == 'app';
  });

  if (appGroups.length <= 0) return [];

  return appGroups[0].items.map(function(item) {
    return item.data[0].title;
  });
};
