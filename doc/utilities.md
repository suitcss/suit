# SUIT utilities

Utility classes map to fixed, low-level, structural and positional traits.
These classes can be used in a component's HTML. Because utilities are so
focused, they will generally use `!important` to ensure their styles are always
applied.

(Read about SUIT's [naming conventions](naming-conventions.md).)

## Why to use utilities

Certain CSS properties and patterns are used frequently. For example: floats,
containing floats, vertical alignment, text truncation. Relying on utilities
can help to reduce repetition and provide consistent implementations.

```html
<div class="u-cf">
  <p class="u-textTruncate">{{text}}</p>
  <img class="u-pullLeft" src="{{src}}" alt="">
  <img class="u-pullLeft" src="{{src}}" alt="">
  <img class="u-pullLeft" src="{{src}}" alt="">
</div>
```

They can be used in dynamically generated DOM adjustments. Some utilities apply
only a single declaration, so why not use inline styles? Even here, small
utilities are preferred because their values can be preprocessed (e.g.,
generating RTL style sheets) or adjusted to viewport dimensions, the scope of
styles not contained in components can be tightly defined, and code is a little
easier to read.

## How to use utilities

Utilities can be added to any element; multiple utilities can be used together;
and utilities can be used alongside component classes.

```html
<div class="Tweet u-cf">
  <a class="u-sizeFit" href="{{url}}">
    <img class="u-block" src="{{src}}" alt="">
  </a>
  <p class="Tweet-text u-sizeFill u-textBreak">
    …
  </p>
</div>
```

Utilities are grouped by type. The names of utilities with similar concerns
usually start with a common string, e.g., `u-textCenter`, `u-textTruncate`;
`u-linkClean`, `u-linkBlock`; `u-isHidden`, `u-isHiddenVisually`.

Any classes with terse names, e.g., `u-cf` and `u-nbfc`, are either
particularly abstract or very commonly used utilities with otherwise
excessively long names. For example, the `u-cf` utility is used to "contain
floats" without clipping any overflow; the `u-nbfc` utility is used to create a
"new block formatting context".

Make sure to read the documentation within the CSS files of utilities. It will
contain information about utility classes and their implementations.

## Modifiying utilities

Utilities should not be edited while in use, unless it is to fix a bug.
Modifications to utilities cascade throughout the application and should be
made with extreme care.
