/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('moduleName', { type: String, required: false });
  this.modulePackageName = 'suit-' + this.moduleName || path.basename(process.cwd());
  this.moduleFileName = this.moduleName + '.css';

  this.sourceRoot(path.join(__dirname, '../../templates/app'));

  this.on('end', function () {});
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Generate the standard project files
 *
 * @api public
 */

Generator.prototype.projectFiles = function projectFiles() {
  // dotfiles
  this.copy('gitignore', '.gitignore');
  this.copy('travis.yml', '.travis.yml');
  // config files
  this.template('bower.json');
  this.template('component.json');
  this.template('package.json');
  // docs
  this.template('CHANGELOG.md');
  this.template('LICENSE.md');
  this.template('README.md');
  // component
  this.template('index.css', this.moduleFileName);
  // test
  this.template('test.html', 'test.html');
};

Generator.name = "suitModule";
