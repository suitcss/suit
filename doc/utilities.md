# SUIT utilities

Low-level structural, positional, and visual traits should be codified as
utilities. Before creating a custom CSS component you should make use of the
utility classes to realise as much of the UI as possible and appropriate.

Utilities should be used in viewport-agnostic situations. Don’t use
`u-pullLeft` to float a large part of the UI (like a sidebar) if you don't
intend to float it at different viewport widths.  But do use the utilities for
things like positioning avatars or controlling text wrapping, etc; anything
that is not going to change in kind at different viewport widths.

If you find that a design change means that it is now problematic to continue
using a specific utility in a component's template, just move the presentation
into the component itself and remove the utility from the HTML template. It's
pretty easy to migrate presentation between layers.

Utilities are low-level and should not be edited while in use unless 100% sure
of fix.

### u-utilityName

The majority of utilities are grouped by type. Similar utility types may be
prepended by a string that represents their type, e.g., `u-textCenter`,
`u-textTruncate`; `u-linkClean`, `u-linkBlock`. You should always
check the inline documentation for a utility to understand what it does and how
it does it.

Any classes with obfuscated names, e.g., `u-cf` and `u-nbfc`, are very commonly
used utilities with otherwise excessively long names. For example, the `u-cf`
utility is used to "contain floats" without clipping any overflow; the `u-nbfc`
utility is used to create a "new block formatting context".

```html
<div class="u-cf">
    <a class="u-objLeft" href="[url]">
        <img class="u-block" src="[src]" alt="">
    </a>
    <p class="u-sizeFill u-textMute">
        …
    </p>
</div>
```

If a utility needs to apply styles to a descendant element, it should be targetted
using a class that is made from the full utility name, followed by a hyphen and
a Camel case descendant name:

```html
<a class="u-linkComplex" href="#">
    Link text
    <span class="u-linkComplex-target">target</span>
</a>
```

If you need to avoid cascade resolution for a series of traits, use extra HTML.

Let's assume that you always want the color of a link's text to be “muted”. In
the example below, muted text color would be applied by default. But if a color
value is set for `a:hover`, it will replace the muted color on hover.  This is
because `a:hover` has a higher specificity than `.class`:

```css
a {
    color: black;
}

a:hover {
    color: red;
}

.u-textMute {
    color: grey;
}
```

```html
<a class="u-textMute" href="#">…</a>
```

However, by applying the text utility to a `span` around the text content, we
can avoid the specificity issue altogether and make sure that the text within
the link is muted on hover too.

```html
<a href="#">
  <span class="u-textMute">…</span>
</a>
```

### u-isStateName

Utilities for global state. For things like hiding elements, not for custom
component-level states. Can be applied/removed with JS to modify the UI.

### Notes

IMPORTANT: **Never** change the styles attached to any utility class without
being fully aware of the consequences. It's particularly important to be
extremely cautious about changing any structural, positional, or display
styles.

If a utility class needs to be replaced, mark it as deprecated - `@tag
deprecated` - and initiate a gradual phase out.

If a utility class needs to be created, please ensure that it's well
documented/commented. It's very important for other people to know at any point
in time what a utility does, how it does it, and any short-comings it may
have.
