# SUIT utilities

Utilities are structural, positional, and visual traits. They are very small
and focused, usually concerned with just one or two traits.

(Read about SUIT's [naming conventions](naming-conventions.md).)


## When to use utilities

Utilities should be used when you always want a trait to be applied (i.e., they
are viewport-size agnostic).

For example, don’t use `u-pullLeft` to float a large part of the UI (like a
sidebar) if you don't intend to float it at all viewport widths. But **do** use
utilities for positioning avatars or controlling text wrapping and color,
etc.

If you find that a design change means that it becomes problematic to continue
using a specific utility in a component's template, then shift the presentation
into the component itself, and remove the utility from the HTML template. It's
pretty easy to migrate presentation between the utility and component layers of
the CSS.


## Using utilities

Make sure to read the documentation within the CSS files of utilities. It will
contain information about each utility class and the implementation.

SUIT's utilities are grouped by type. The names of utilities with similar
concerns usually start with a common string, e.g., `u-textCenter`,
`u-textTruncate`; `u-linkClean`, `u-linkBlock`; `u-isHidden`,
`u-isDraggable`.

Any classes with terse names, e.g., `u-cf` and `u-nbfc`, are either
particularly abstract or very commonly used utilities with otherwise
excessively long names.  For example, the `u-cf` utility is used to "contain
floats" without clipping any overflow; the `u-nbfc` utility is used to create a
"new block formatting context".

```html
<div class="Tweet u-cf">
    <a class="u-objLeft" href="{url}">
        <img class="u-block" src="{src}" alt="">
    </a>
    <p class="u-sizeFill u-textMute">
        …
    </p>
</div>
```

### Side-stepping specificity issues

If you need to avoid cascade resolution issues, you may wish to use extra
HTML.

Let's assume that you always want the color of a link's text to be "muted". In
the example below, the muted text color would be applied by default. But if a
color value is set for `a:hover`, it will override the text's muted color on
hover. This is because `a:hover` has a higher CSS specificity than `.class`:

```css
a { color: black; }
a:hover { color: red; }

.u-textMute { color: grey; }
```

```html
<a class="u-textMute" href="{url}">…</a>
```

However, by applying the text utility to a `span` around the text content, we
can avoid the specificity issue altogether. The default link styles are only
_inherited_ by the nested `span`. Applying the utility to the nested element
ensures that the text does not change color when the ancestral link is
interacted with.

```html
<a href="{url}">
  <span class="u-textMute">…</span>
</a>
```


## Creating utilities

If a utility class needs to be created, please ensure that it's well
documented/commented. It's very important for other people to be able to know
precisely what a utility does, how it does it, and any short-comings it may
have.

If a utility needs to apply styles to a descendant element, that element should
be targeted using a class that is made from the full utility name, followed by
a hyphen and a camel case descendant name:

```html
<a class="u-linkComplex" href="{url}">
    Link text
    <span class="u-linkComplex-target">target</span>
</a>
```

Applicaton-level utilities may provide an interface for common text color and
size modifications, link types, paddings, etc – any custom abstraction that is
widely used in the application.


## Modifiying utilities

Utilities should not be edited while in use, unless it is to fix a bug.
Modifications to utilities cascade throughout the application and should be
made with extreme care.

If a utility class needs to be replaced or removed, mark it as deprecated -
`@tag deprecated` - and initiate a phase out.
