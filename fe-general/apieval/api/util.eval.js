'use strict'

var LABELS = {
  'FULL_MATCH': 0,
  'PREFIX': 1, 
  'SUFFIX': 2,
  'INFIX': 3,
  'OTHER': 4,
  'EMPTY': 100, 
};

exports.evalString = function(query, names) {
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

