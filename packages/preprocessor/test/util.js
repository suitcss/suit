'use strict';

const fs = require('fs');
const path = require('path');

function read(filename) {
  const file = resolve(filename);
  return fs.readFileSync(file, 'utf8');
}

function remove(filename) {
  const file = resolve(filename);
  if (!fs.existsSync(file)) return;
  fs.unlinkSync(file);
}

function resolve(filename) {
  return path.resolve(__dirname, `${filename}.css`);
}

module.exports = {
  read,
  remove,
  resolve
};
