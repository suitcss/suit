'use strict';

const sinon = require('sinon');
const rewire = require('rewire');
const chai = require('chai');

const suitcss = rewire('../lib');
const expect = chai.expect;

describe('basic options', () => {
  let mergeOptions, defaults;

  beforeEach(() => {
    mergeOptions = suitcss.__get__('mergeOptions');
    defaults = suitcss.__get__('defaults');
  });

  it('should use default options when nothing is passed', () => {
    const keys = Object.keys(defaults);
    expect(mergeOptions({})).to.have.keys(keys);
    expect(mergeOptions()).to.have.keys(keys);
    expect(mergeOptions({}).use).to.eql(defaults.use);
    expect(mergeOptions().use).to.eql(defaults.use);
  });

  it('should allow an import root to be set', () => {
    const opts = mergeOptions({root: 'test/root'});
    expect(opts['postcss-easy-import'].root).to.equal('test/root');
  });

  it('should allow stylelint to be disabled', () => {
    const opts = mergeOptions({lint: false});
    expect(opts.lint).to.be.false;
  });

  it('should allow a minify option to be set', () => {
    const opts = mergeOptions({minify: true});
    expect(opts.minify).to.be.true;
  });

  it('should merge config options with existing defaults', () => {
    const autoprefixer = {browsers: ['> 1%', 'IE 7'], cascade: false};
    const opts = mergeOptions({
      root: 'test/root',
      autoprefixer
    });

    expect(opts.use).to.eql([
      'postcss-custom-properties',
      'postcss-calc',
      'postcss-color-function',
      'postcss-custom-media',
      'postcss-apply'
    ]);
    expect(opts.autoprefixer).to.eql(autoprefixer);
    expect(opts['postcss-easy-import'].root).to.equal('test/root');
  });
});

describe('re-ordering the `use` array of postcss plugins', () => {
  let mergeOptions;

  beforeEach(() => {
    mergeOptions = suitcss.__get__('mergeOptions');
  });

  it('should allow reordering of use array and remove duplicates', () => {
    const opts = mergeOptions({
      use: ['postcss-at2x', 'postcss-easy-import', 'postcss-calc']
    });

    expect(opts.use).to.eql([
      'postcss-custom-properties',
      'postcss-color-function',
      'postcss-custom-media',
      'postcss-apply',
      'postcss-at2x',
      'postcss-calc'
    ]);
  });

  it('should just append plugins if no duplicates are used', () => {
    const opts = mergeOptions({
      use: ['postcss-at2x', 'postcss-property-lookup']
    });

    expect(opts.use).to.eql([
      'postcss-custom-properties',
      'postcss-calc',
      'postcss-color-function',
      'postcss-custom-media',
      'postcss-apply',
      'postcss-at2x',
      'postcss-property-lookup'
    ]);
  });
});

describe('using the `onImport` option in postcss-import', () => {
  let updateWatchTaskFilesSpy, revert;

  beforeEach(() => {
    updateWatchTaskFilesSpy = sinon.spy();
    revert = suitcss.__set__('updateWatchTaskFiles', updateWatchTaskFilesSpy);
  });

  afterEach(() => {
    revert();
  });

  it('should call the updateWatchTaskFiles function with the file paths', done => {
    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false
    }).then(() => {
      expect(updateWatchTaskFilesSpy.getCall(0).args[0][0]).to.contain('util.css');
      done();
    })
      .catch(done);
  });

  it('should call a custom onImport function', done => {
    const onImportSpy = sinon.spy();

    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false,
      'postcss-easy-import': {
        onImport: onImportSpy
      }
    }).then(() => {
      expect(onImportSpy.getCall(0).args[0][0]).to.contain('util.css');
      expect(updateWatchTaskFilesSpy.getCall(0).args[0][0]).to.contain('util.css');
      done();
    })
      .catch(done);
  });
});

describe('using the `transform` option in postcss-import', () => {
  it('should use a default transform function that just returns the css', done => {
    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false
    }).then(result => {
      expect(result.css).to.equal('.u-img {\n  border-radius: 50%;\n}');
      done();
    })
      .catch(done);
  });

  it('should call a custom transform function with the imported component', done => {
    const transformStub = sinon.stub().returns('body { color: blue; }');

    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false,
      'postcss-easy-import': {
        transform: transformStub
      }
    }).then(result => {
      expect(transformStub.calledOnce).to.be.true;
      expect(transformStub.getCall(0).args[0]).to.equal('.u-img {\n  border-radius: 50%;\n}\n');
      expect(result.css).to.equal('body { color: blue; }');
      done();
    })
      .catch(done);
  });

  it('should also work with a promise returned from the custom transform function', done => {
    suitcss('@import "./util.css";', {
      root: 'test/fixtures',
      lint: false,
      'postcss-easy-import': {
        transform() {
          return Promise.resolve('body { font: red; }');
        }
      }
    }).then(result => {
      expect(result.css).to.equal('body { font: red; }');
      done();
    })
      .catch(done);
  });
});

describe('using the debug option', () => {
  it('should allow a debug function to be ran on plugins', done => {
    const debug = sinon.spy(plugins => plugins);

    suitcss('body {}', {
      debug,
      lint: false
    }).then(() => {
      expect(debug.calledOnce).to.be.true;
      done();
    }).catch(done);
  });
});

describe('passing options to postcss processor instance', () => {
  let postcssStub, processMethodStub, revert;

  beforeEach(() => {
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

  afterEach(() => {
    revert();
  });

  it('should pass postcss options to the processor', () => {
    expect(processMethodStub.getCall(0).args[1]).to.eql({
      from: 'filename.css',
      test: 'testing'
    });
  });
});
