# 6.0.0

* Update to stylelint `^6.0.0`

# 5.0.0

* Update to stylelint 5.x [#15](https://github.com/suitcss/stylelint-config-suitcss/pull/15)
* Add compatible versions for `peerDependencies` [#16](https://github.com/suitcss/stylelint-config-suitcss/pull/16)
* Update `ava` to `^0.13.0` [#12](https://github.com/suitcss/stylelint-config-suitcss/pull/12)
* Update `eslint` to `^2.4.0` [#11](https://github.com/suitcss/stylelint-config-suitcss/pull/11)
* Update `eslint-config-stylelint` to `^1.0.0` [#11](https://github.com/suitcss/stylelint-config-suitcss/pull/11)

# 4.0.0

* Changed `rule-nested-empty-line-before` to match SUIT style.
  Set to `always-multi-line` so nested rules will require a line break after the
  opening brace

# 3.0.0

* Removed: `stylelint < 4.0.0` compatibility.
  * Added: `max-line-length` rule with 80 characters for comments.

# 2.0.0

* Removed: `stylelint < 3.0.0` compatibility.
  * Changed: configuration syntax.
  * Removed: `nesting-block-opening-brace-space-before` and `nesting-block-opening-brace-newline-before` rules.
  * Changed: renamed `rule-single-line-max-declarations` to `declaration-block-single-line-max-declarations`.
  * Changed: renamed the `function-space-after` rule to `function-whitespace-after`.
  * Changed: renamed the `comment-space-inside` rule to `comment-whitespace-inside`.
  * Changed: renamed the `no-multiple-empty-lines` rule to `max-empty-lines`.

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
