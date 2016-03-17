### HEAD

### 1.0.2 (March 17, 2016)

* Upgrade `stylelint` to `^5.0.1`

### 1.0.1 (February 17, 2016)

* Fix issue with CSS returned from `beforeLint` not being used correctly - [a07bb8c](https://github.com/suitcss/preprocessor/commit/a07bb8c7b416c3df36c3f88b1fc1600aa6a39d61)
* Fix incorrect date in CHANGELOG.md

### 1.0.0 (February 08, 2016)

* Upgrade `stylelint` to version `4.2.0`
* Upgrade `postcss-import` to `8.0.2`
* Improve tests
* Use `stylelint-config-suitcss` as a dev dependency as it must be installed
where the preprocessor is being used.

### 0.8.0 (December 01, 2015)

* Add [stylelint](http://stylelint.io/) as an optional linting step

### 0.7.0 (November 27, 2015)

* Add `beforeLint` function which allows imported CSS to be manipulated before linting
* Flatten configuration options so that PostCSS specific settings are no longer
inside `config: {}`.

### 0.6.0 (November 25, 2015)

* [Allow re-ordering](https://github.com/suitcss/preprocessor/pull/15) of the `use` plugins array from config
* Update `autoprefixer` to `^6.1.1`
* Update `postcss-bem-linter` to `^2.3.0`

### 0.5.1 (November 24, 2015)

* [Fix issue](https://github.com/suitcss/preprocessor/issues/13) with options not being passed to `postcss-bem-linter` and `postcss-reporter`

### 0.5.0 (November 23, 2015)

* Switch from Rework to PostCSS
* Add support for configuration file (`-c`)
* Move `--compress` to `--minify` and use cssnano
* Fix `--watch` to run when imported files change
* Allow additional PostCSS plugins to be added to the pipeline
* Node API now returns a promise
* Upgrade existing `package.json` dependencies

### 0.4.0 (July 1, 2014)

* Update 'rework-suit' to ^4.0.0.

### 0.3.0 (June 21, 2014)

* Add 'import-root' CLI option.
* Add 'compress' CLI option.
* Update 'autoprefixer' to ^1.3.0.
* Update 'rework-suit' to ^3.0.0.
* Update 'rework' to ^1.0.0.
* Support configuration.

### 0.2.0 (April 21, 2014)

* Update 'autoprefixer' to ^1.1.20140410.
* Update 'rework-suit' to 2.0.x.

### 0.1.1 (March 24, 2014)

* Initial release
