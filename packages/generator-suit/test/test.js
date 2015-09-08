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
        '.gitignore',
        '.travis.yml',
        // config files
        [
          'bower.json',
          /"name": "suitcss-components-my-module"/
        ],
        [
          'component.json',
          /"name": "suitcss-components-my-module"/
        ],
        [
          'package.json',
          /"name": "suitcss-components-my-module"/,
          /"style": "index.css"/
        ],
        // docs
        'CHANGELOG.md',
        'LICENSE.md',
        'README.md',
        // component
        'index.css',
        'lib/my-module.css',
        // test
        'test/index.html',
        'test/test.css'
      ];

      suitmodule.run([], function () {
        helpers.assertFiles(expected);
        cb();
      });
    });
  });
});
