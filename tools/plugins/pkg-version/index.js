var exec = require('child_process').exec;

module.exports = function (filePath, options) {
  var package = require(filePath + 'package.json');

  var script = [
    // TODO: this is super gross find a better way to use `mversion`
    // maybe it is possible to specify the cwd without having to use the cli
    process.cwd() + '/node_modules/.bin/mversion',
    options.version,
    '-n' // no prefix (omit the v from vNUMBER)
  ];

  options.commitMessage && script.push(['-m "', package.name + ':', options.commitMessage, '"'].join(' '));
  options.overrideTag && script.push('-t');

  exec(script.join(' '), { cwd: filePath }, function (err) {
    if (err) { console.log(err); }
  });
};