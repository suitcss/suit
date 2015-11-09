var glob = require('glob');

function AlterateFiles(files) {
  this.files = files;
}

AlterateFiles.prototype.use = function (plugin, options) {
  this.files.forEach(function (filePath) {
    plugin(filePath, options || {});
  });
  return this;
};

function alterateFiles(filesPattern) {
  var files = glob.sync(filesPattern);
  return new AlterateFiles(files);
}

module.exports = alterateFiles;