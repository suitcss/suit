#!/usr/bin/env node

var af = require('alterate-files');

// Refactor all the "scripts" of any package.json
var fs = require('fs');

af('../../packages/**/package.json').use(function (filePath) {
  var content = require(filePath);

  content.scripts = {
    "build": "npm run setup && npm run preprocess",
    "build-test": "npm run setup && npm run preprocess-test",
    "preprocess": "postcss -c build.js -o build/build.css index.css",
    "preprocess-test": "postcss -c build.js -o build/test.css test/test.css",
    "setup": "npm install && mkdir -p build",
    "watch": "npm run preprocess-test -- -w"
  };

  fs.writeFile(
    filePath,
    JSON.stringify(content, null, 2)
  );
});


// revert the changes made to package.json
var exec = require('child_process').exec;

af('../../packages/**/').use(function (filePath) {
  exec('git checkout package.json', { cwd: filePath });
});