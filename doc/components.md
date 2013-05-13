# SUIT components

Components are custom UI patterns. Components may be built up from
utilities and an additional layer of custom styles (that are themselves not yet
generic enough to be abstracted into a utility or smaller component).

* Files should be small and well commented.
* In general, components should be focused on structural presentation so that
  they work well with theming layers.
* Including example HTML in your CSS comments.

If a component file is starting to get quite large, it probably consists of
multiple, indepedent components and should be broken up into multiple files.

To use a component's styles, apply the classes directly to HTML elements. If
you have a UI pattern that is used in many places, consider creating a template
for it rather than rewriting it multiple times in different templates.

## Naming conventions

Components use _structured class names_ and _meaningful hyphens_. This is their
format:

```
[<ns>-]<ComponentName>[--modifierName|-childName]
```

This has several benefits when writing CSS and reading HTML:

* It helps to distinguish classes for base components, modifiers of components,
  and child elements.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

### namespace

If necessary, a component can be prefixed with a namespace. For example, if you
wanted to build a low-level component toolkit to be shared across projects, you
may want to distinguish it from the local app's components by using a custom
namespace.

```css
.twt-Button { /* … */ }
.twt-Tabs { /* … */ }
```

This makes it clear, when reading the HTML, which components are part of your
common library.

### ComponentName

The component's name must be written in Pascal case. Nothing else in the
HTML/CSS uses Pascal case.

```css
.MyComponent { /* … */ }
```

```html
<article class="MyComponent">
    …
</article>
```

### ComponentName--modifierName

A component modifier is a class that modifies or extends the presentation of
the base component in some form. Modifier names must be written in Camel
case. The class should be included _in addition_ to the base component class.

```css
/* Core button */
.Button { /* … */ }
/* Primary button */
.Button--primary { /* … */ }
```

```html
<button class="Button Button--primary">…</button>
```

### ComponentName-descendantName

A component descendant is a class that is attached to a descendant node of a
component. It's responsible for applying presentation directly to the
descendant on behalf of a particular component. Descendant names must be
written in Camel case.

```html
<article class="Tweet">
    <header class="Tweet-header">
        <img class="Tweet-avatar" src="{{src}}" alt="{{alt}}">
        …
    </header>
    <div class="Tweet-body">
        …
    </div>
</article>
```

### is-stateOfComponent

Use `is-stateName` for state-based modifications of components. The state name
must be Camel case. Never style these classes directly; they should always be
used as a chaining class. JS can add/remove these classes. This means that the
same state names can be used in multiple contexts, but every component must
define its own styles for the state (as they are scoped to the component).

```css
.Tweet { /* … */ }
.Tweet.is-expanded { /* … */ }
```

```html
<article class="Tweet is-expanded">
    …
</article>
```

### with-ComponentName

Use the `with-ComponentName` pattern to bundle styles that need to be mixed
into an element that hosts your component. The `with-*` pattern classes should
be standalone selectors, never styled as chained to a component. Treat it like
a mixin.

For example, the `with-Dropdown` class might include styles that are required
for the child `Dropdown` component to render as expected.

```css
/* The host element of a Dropdown always needs these styles */
.with-Dropdown { position: relative; }
```

```html
<article class="Tweet with-Dropdown">
    [other content]
    <div class="Dropdown is-closed">
            …
    </div>
</article>
```

If a specific host component needs custom style-adjustments when it contains
another type of component, you should use a component modifier (not a
`with-ComponentName`) class.

```css
/* Buttons need their own custom adjustments when they contain icons */
.Button--withIcon { padding-left: 0; }
```

```html
<button class="Button Button--withIcon">
  <i class="Icon Icon--retweet"></i>
  Retweet
</button>
```

## Notes

If a component needs to be replaced, mark it as deprecated – `@tag
deprecated` – and initiate a gradual phase out.

If a component needs to be created, please ensure that it's well
documented/commented. It's very important for other people to know at any point
in time what a component does, how it does it, and any short-comings it may
have.
