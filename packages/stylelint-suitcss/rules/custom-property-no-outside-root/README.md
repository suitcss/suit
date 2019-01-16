# custom-property-no-outside-root

Disallow custom properties outside of `:root` rules. This enforces the
limitation set by
[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties):

> It currently just aims to provide a future-proof way of using a limited subset
  (to :root selector) of the features provided by native CSS custom properties.

```css
    a { --foo: 1px; }
/** ↑   ↑
 * These selectors and these types of custom properties */
```

## Options

### `true`

The following patterns are considered warnings:

```css
a { --foo: 1px; }
```

```css
:root, a { --foo: 1px; }
```

The following patterns are *not* considered warnings:

```css
:root { --foo: 1px; }
```
