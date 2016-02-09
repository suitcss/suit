### HEAD

### 1.0.2 (February 09, 2016)

* Update `preprocessor` to `1.0.0`
* Fix stylelint conformance

### 1.0.1 (December 03, 2015)

* Ensure code conforms to SUIT CSS style rules with stylelint
* Add suitcss-preprocessor `0.8.0`

### 1.0.0 (November 17, 2015)

* Reintroduce `sizeFillAlt` using `flex-basis: auto`. Allows `sizeFillAlt` and
  `sizeFill` to distribute space differently between multiple elements.
  See [w3c spec](http://www.w3.org/TR/css-flexbox/#valdef-flex-flex-basis) and
  the updated test page for more information.


### 0.8.0 (November 01, 2015)

* Use `flex-basis` alongside `width` to support flexbox Grid
* Remove `u-sizeFit`, `u-sizeFitAlt` and `u-sizeFillAlt` as float based layout
  is now deprecated with the move to Flexbox
* `u-sizeFill` now uses `flex`
* Move to PostCSS for package build

### 0.7.2 (October 28, 2014)

* Add support for JS bundling.

### 0.7.1 (June 24, 2014)

* Add `.css` extension to imports for interoperability.

### 0.7.0 (June 21, 2014)

* npm-based workflow.
* Add MQ files back to component.json.
* Add new preprocessor build tools.

### 0.6.2 (March 26, 2014)

* Remove MQ files from component.json.
* Add `files` to package.json.

### 0.6.1 (March 25, 2014)

* Use `calc()` to improve precision of recurring decimals.

### 0.6.0 (March 25, 2014)

* Change media query naming convention to `u-sm-*`, `u-md-*`, `u-lg-*`.
* Add npm support.
* Remove CSSLint.
* Move package to 'utils-size'.

### 0.5.0 (September 26, 2013)

* Add responsive offset plugins.

### 0.4.1 (August 30, 2013)

* Add CSS linting.
* Add `!important` to remaining declarations.

### 0.4.0 (August 14, 2013)

* Add `!important` to `sizeXofY` declarations.
* Remove stray `size3of9` selector.
* Add Xof3 proportions to documentation.

### 0.3.0 (June 1, 2013)

* Add `box-sizing:border-box` to `sizeFull`.
* Create a `sizeFitAlt` utility for floating right.
* Add tests for intrinsic width utilities.
* Fix tests.

### 0.2.1 (May 26, 2013)

* Add Bower ignores.
* Rename `component.json` to `bower.json`.

### 0.2.0 (March 19, 2013)

* Add intrinsic width utilities.
* Use a `size` identifier in the class name.

### 0.1.1 (March 7, 2013)

* Add test file.
* Fix missing comma in selector.

### 0.1.0 (March 3, 2013)

* Public release.
