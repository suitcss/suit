var sinon = require('sinon');
var rewire = require('rewire');
var chai = require('chai');
var suitcss = rewire('../lib');
var expect = chai.expect;

describe('basic options', function() {
  var mergeOptions, defaults;

  beforeEach(function() {
    mergeOptions = suitcss.__get__('mergeOptions');
    defaults = suitcss.__get__('defaults');
  });

  it('should use default options when nothing is passed', function() {
    var keys = Object.keys(defaults);
    expect(mergeOptions({})).to.have.keys(keys);
    expect(mergeOptions()).to.have.keys(keys);
    expect(mergeOptions({}).use).to.eql(defaults.use);
    expect(mergeOptions().use).to.eql(defaults.use);
  });

  it('should allow an import root to be set', function() {
    var opts = mergeOptions({root: 'test/root'});
    expect(opts['postcss-easy-import'].root).to.equal('test/root');
  });

  it('should allow stylelint to be disabled', function() {
    var opts = mergeOptions({lint: false});
    expect(opts.lint).to.be.false;
  });

  it('should allow a minify option to be set', function() {
    var opts = mergeOptions({minify: true});
    expect(opts.minify).to.be.true;
  });

  it('should merge config options with existing defaults', function() {
    var autoprefixer = {browsers: ['> 1%', 'IE 7'], cascade: false};
    var opts = mergeOptions({
      root: 'test/root',
      autoprefixer: autoprefixer
    });

    expect(opts.use).to.eql([
      'postcss-easy-import',
      'postcss-custom-properties',
      'postcss-calc',
      'postcss-color-function',
      'postcss-custom-media',
      'postcss-apply',
      'autoprefixer',
      'postcss-reporter'
    ]);
    expect(opts.autoprefixer).to.eql(autoprefixer);
    expect(opts['postcss-easy-import'].root).to.equal('test/root');
  });
});

describe('re-ordering the `use` array of postcss plugins', function() {
  var mergeOptions;

  beforeEach(function() {
    mergeOptions = suitcss.__get__('mergeOptions');
  });

  it('should allow reordering of use array and remove duplicates', function() {
    var opts = mergeOptions({
      use: ['autoprefixer', 'postcss-at2x', 'postcss-calc', 'postcss-reporter']
    });

    expect(opts.use).to.eql([
      'postcss-easy-import',
      'postcss-custom-properties',
      'postcss-color-function',
      'postcss-custom-media',
      'postcss-apply',
      'autoprefixer',
      'postcss-at2x',
      'postcss-calc',
      'postcss-reporter'
    ]);
  });

  it('should just append plugins if no duplicates are used', function() {
    var opts = mergeOptions({
      use: ['postcss-at2x', 'postcss-property-lookup']
    });

    expect(opts.use).to.eql([
      'postcss-easy-import',
      'postcss-custom-properties',
      'postcss-calc',
      'postcss-color-function',
      'postcss-custom-media',
      'postcss-apply',
      'autoprefixer',
      'postcss-reporter',
      'postcss-at2x',
      'postcss-property-lookup'
    ]);
  });
});

describe('using the `onImport` option in postcss-import', function() {
  var updateWatchTaskFilesSpy, revert;

  beforeEach(function() {
    updateWatchTaskFilesSpy = sinon.spy();
    revert = suitcss.__set__('updateWatchTaskFiles', updateWatchTaskFilesSpy);
  });

  afterEach(function() {
    revert();
  });

  it('should call the updateWatchTaskFiles function with the file paths', function(done) {
    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false
    }).then(function() {
      expect(updateWatchTaskFilesSpy.getCall(0).args[0][0]).to.contain('util.css');
      done();
    })
      .catch(done);
  });

  it('should call a custom onImport function', function(done) {
    var onImportSpy = sinon.spy();

    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false,
      'postcss-easy-import': {
        onImport: onImportSpy
      }
    }).then(function() {
      expect(onImportSpy.getCall(0).args[0][0]).to.contain('util.css');
      expect(updateWatchTaskFilesSpy.getCall(0).args[0][0]).to.contain('util.css');
      done();
    })
      .catch(done);
  });
});

describe('using the `transform` option in postcss-import', function() {
  it('should use a default transform function that just returns the css', function(done) {
    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false
    }).then(function(result) {
      expect(result.css).to.equal('.u-img {\n  border-radius: 50%;\n}');
      done();
    })
      .catch(done);
  });

  it('should call a custom transform function with the imported component', function(done) {
    var transformStub = sinon.stub().returns('body { color: blue; }');

    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false,
      'postcss-easy-import': {
        transform: transformStub
      }
    }).then(function(result) {
      expect(transformStub.calledOnce).to.be.true;
      expect(transformStub.getCall(0).args[0]).to.equal('.u-img {\n  border-radius: 50%;\n}\n');
      expect(result.css).to.equal('body { color: blue; }');
      done();
    })
      .catch(done);
  });

  it('should also work with a promise returned from the custom transform function', function(done) {
    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false,
      'postcss-easy-import': {
        transform: function() {
          return Promise.resolve('body { font: red; }');
        }
      }
    }).then(function(result) {
      expect(result.css).to.equal('body { font: red; }');
      done();
    })
      .catch(done);
  });
});

describe('using the debug option', function() {
  it('should allow a debug function to be ran on plugins', function (done) {
    var debug = sinon.spy(function(plugins) {
      return plugins;
    });

    suitcss('body {}', {
      debug: debug,
      lint: false
    }).then(function() {
      expect(debug.calledOnce).to.be.true;
      done();
    }).catch(done);
  });
});

describe('passing options to postcss processor instance', function() {
  var postcssStub, processMethodStub, revert;

  beforeEach(function() {
    postcssStub = sinon.stub();
    processMethodStub = sinon.stub().returns(Promise.resolve());

    postcssStub.returns({
      use: sinon.stub().returns({use: sinon.spy()}),
      process: processMethodStub
    });
    revert = suitcss.__set__('postcss', postcssStub);
    suitcss('body {}', {
      root: 'something',
      lint: false,
      postcss: {
        test: 'testing'
      }
    }, 'filename.css');
  });

  afterEach(function() {
    revert();
  });

  it('should pass postcss options to the processor', function() {
    expect(processMethodStub.getCall(0).args[1]).to.eql({
      from: 'filename.css',
      test: 'testing'
    });
  });
});
