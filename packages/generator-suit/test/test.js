/*global describe:true, beforeEach:true, it:true */

var assert = require('assert');
var helpers = require('yeoman-generator').test;
var path = require('path');

describe('Generator test', function () {
  var suitmodule;

  beforeEach(function (cb) {
    helpers.testDirectory(path.join(__dirname, './tmp'), function (err) {
      if (err) cb(err);
      cb();
    });
  });

  describe('suit:app', function () {
    var jsmoduleBrowser;

    beforeEach(function (cb) {
      var deps = ['../../lib/generators/app'];
      suitmodule = helpers.createGenerator('suit:app', deps, ['my-module']);
      suitmodule.options['skip-install'] = true;
      cb();
    });

    it('runs sucessfully', function () {
      suitmodule.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        // dotfiles
        '.csslintrc',
        '.gitignore',
        '.travis.yml',
        // config files
        ['bower.json', /"name": "suit-my-module"/],
        ['component.json', /"name": "suit-my-module"/],
        ['package.json', /"name": "suit-my-module"/],
        // docs
        'CHANGELOG.md',
        'LICENSE.md',
        'README.md',
        // component
        'my-module.css',
        // test
        'test.html',
        // other
        'Makefile'
      ];

      suitmodule.run([], function () {
        helpers.assertFiles(expected);
        cb();
      });
    });
  });
});
