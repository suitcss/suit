#!/usr/bin/env node

var bump = require('suitcss-pkg-version');
var publish = require('suitcss-pkg-publish');
var p = require('alterate-files')('../../packages/**/');

p.use(bump, {
  version: process.argv.slice(2)[0],
  commitMessage: '%s'
});

p.use(publish);