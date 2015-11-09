var exec = require('child_process').exec;

module.exports = function (filePath, options) {
  exec('npm publish', { cwd: filePath });
};