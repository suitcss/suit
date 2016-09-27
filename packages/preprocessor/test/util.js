var fs = require('fs');
var path = require('path');

function read(filename) {
  var file = resolve(filename);
  return fs.readFileSync(file, 'utf8');
}

function remove(filename) {
  var file = resolve(filename);
  if (!fs.existsSync(file)) return;
  fs.unlinkSync(file);
}

function resolve(filename) {
  return path.resolve(__dirname, filename + '.css');
}

module.exports = {
  read: read,
  remove: remove,
  resolve: resolve
};
