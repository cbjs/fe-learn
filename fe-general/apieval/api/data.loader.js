'use strict'

var fs = require('fs'),
    Q = require('q');

exports.loadJSONFile = function(filePath) {
  return Q.nfcall(fs.readFile, filePath).then(function(content) {
    return Q.fcall(JSON.parse, content);
  });
};
