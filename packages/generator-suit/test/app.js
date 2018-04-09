/* global describe:true, beforeEach:true, it:true */

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-suit:app', function () {
  it('creates files', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['my-component'])
      .withPrompts({moduleType: 'component', moduleDescription: 'testing'})
      .on('end', function () {
        assert.file([
          '.gitignore',
          '.stylelintrc',
          '.travis.yml',
          'CHANGELOG.md',
          'index.css',
          'LICENSE.md',
          'package.json',
          'README.md',
          'lib/my-component.css',
          'test/config.json',
          'test/index.html',
          'test/test.css'
        ]);

        done();
      });
  });

  it('generates a valid component', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['my-component'])
      .withPrompts({moduleType: 'component', moduleDescription: 'testing'})
      .on('end', function () {
        assert.file('lib/my-component.css');
        assert.noFile('lib/utilities.css');
        assert.fileContent([
          ['lib/my-component.css', '/** @define MyComponent */'],
          ['lib/my-component.css', '.MyComponent {']
        ]);
        assert.jsonFileContent('package.json', {
          name: 'suitcss-components-my-component',
          description: 'A SUIT component for testing'
        });
        done();
      });
  });

  it('generates valid utilities', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['my-utilities'])
      .withPrompts({moduleType: 'utility', moduleDescription: 'testing'})
      .on('end', function () {
        assert.file('lib/my-utilities.css');
        assert.noFile('lib/component.css');
        assert.fileContent([
          ['lib/my-utilities.css', '/** @define utilities */'],
          ['lib/my-utilities.css', '.u-myUtilities {']
        ]);
        assert.jsonFileContent('package.json', {
          name: 'suitcss-utils-my-utilities',
          description: 'testing utilities for SUIT CSS'
        });
        done();
      });
  });
});
