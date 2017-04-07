# 11.0.0

* Changed: `order/declaration-block-properties-alphabetical-order` to `order/properties-alphabetical-order`.

# 10.0.0

* Updated: `ava` to `0.18.2`
* Updated: `eslint` to `3.17.0`
* Updated: `eslint-config-stylelint` to `6.0.0`
* Updated: `stylelint-order` to `0.3.0`
* Added: `suitcss/root-no-standard-properties`
* Added: `suitcss/selector-root-no-composition`
* Added: `suitcss/custom-property-no-outside-root`

# 9.0.0

* Removed: `root-no-standard-properties`.
* Removed: `selector-root-no-composition`.
* Changed: `declaration-block-properties-order` to `order/declaration-block-properties-alphabetical-order`.
* Changed: `rule-nested-empty-line-before` & `rule-non-nested-empty-line-before` to `rule-empty-line-before`.

# 8.0.0

* Changed: `media-query-parentheses-space-inside` to `media-feature-parentheses-space-inside`.
* Changed: `no-missing-eof-newline` to `no-missing-end-of-source-newline`.

# 7.0.0

* Changed: `number-zero-length-no-unit` to `length-zero-no-unit`.
* Changed: `function-url-quotes` option from `"double"` to `'always'`.

# 6.0.0

* Updated: to stylelint `^6.0.0`.

# 5.0.0

* Updated: to stylelint 5.x [#15](https://github.com/suitcss/stylelint-config-suitcss/pull/15).
* Added: compatible versions for `peerDependencies` [#16](https://github.com/suitcss/stylelint-config-suitcss/pull/16).

# 4.0.0

* Changed: `rule-nested-empty-line-before` to match SUIT style. Set to `always-multi-line` so nested rules will require a line break after the opening brace.

# 3.0.0

* Removed: `stylelint < 4.0.0` compatibility.
* Added: `max-line-length` rule with 80 characters for comments.

# 2.0.0

* Removed: `stylelint < 3.0.0` compatibility.
* Changed: configuration syntax.
* Removed: `nesting-block-opening-brace-space-before` and `nesting-block-opening-brace-newline-before` rules.
* Changed: `rule-single-line-max-declarations` to `declaration-block-single-line-max-declarations`.
* Changed: `function-space-after` to `function-whitespace-after`.
* Changed: `comment-space-inside` to `comment-whitespace-inside`.
* Changed: `no-multiple-empty-lines` to `max-empty-lines`.

# 1.0.0

* Added: support for SuitCSS's "Exceptions and slight deviations" (multi-line declarations and functions, and single-line single declaration rule-sets).
* Added: `function-linear-gradient-no-nonstandard-direction` rule.
* Added: `comment-space-inside` rule.

# 0.5.1

* Fixed: usage documentation.

# 0.5.0

* Fixed: single-line whitespace rules for `block-closing-brace-*`.

# 0.4.0

* Added: `rule-no-shorthand-property-overrides` rule.

# 0.3.0

* Added: `nesting-block-opening-brace-newline-before` rule.
* Added: `nesting-block-opening-brace-space-before` rule.

# 0.2.1

* Added: `color-hex-case` rule.
* Added: `color-hex-length` rule.

# 0.1.0

* Initial release
