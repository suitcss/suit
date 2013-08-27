# SUIT HTML/CSS code style

## Table of contents

1. [General principles](#general-principles)
2. [Whitespace](#whitespace)
3. [HTML](#html)
  * [Format](#html-format)
  * [Attribute order](#html-attrs)
  * [Naming](#html-naming)
  * [Practical example](#html-example)
4. [CSS](#css)
  * [Comments](#css-comments)
  * [Format](#css-format)
  * [Practical example](#css-example)


<a name="general-principles"></a>
## 1. General principles

> "Part of being a good steward to a successful project is realizing that
> writing code for yourself is a Bad Idea™. If thousands of people are using
> your code, then write your code for maximum clarity, not your personal
> preference of how to get clever within the spec." - Idan Gazit

* Don't try to prematurely optimize your code; keep it readable and
  understandable.
* Your CSS should look the same as the rest of the CSS in the project.


<a name="whitespace"></a>
## 2. Whitespace

* Use whitespace to improve readability.
* Use 4 spaces for indentation.
* Don't use more than one blank line as a separator.
* Strip all end-of-line and end-of-file whitespace.


<a name="html"></a>
## 3. HTML

<a name="html-format"></a>
### 3.1. Format

* Always use lowercase tag and attribute names.
* Write one discrete element per line.
* Use one additional level of indentation for each nested element.
* Use valueless boolean attributes (e.g. `checked` rather than
  `checked="checked"`).
* Always use double quotes to quote attribute values.
* Omit the `type` attributes from `link` stylesheet, `style` and `script`
  elements.
* Always include closing tags.
* Don't include a trailing slash in self-closing elements.

(Keep line-length to a sensible maximum, e.g., 80 columns.)

Example:

```html
<div class="Tweet">
    <a href="{url}">
        <img src="{avatar}" alt="">
    </a>
    <p>{text}</p>
    <button disabled>Reply</button>
</div>
```

#### Exceptions and slight deviations

Elements with multiple attributes can have attributes arranged across multiple
lines in an effort to improve readability and produce more useful diffs.

Example:

```html
<a class="{class}"
 data-action="{action}"
 data-id="{id}"
 href="{url}">
    <span>{text}</span>
</a>
```


<a name="html-attrs"></a>
### 3.2. HTML attribute order

HTML attributes should be listed in an order that reflects the fact that class
names are the primary interface through which CSS and JavaScript select
elements.

1. `class`
2. `id`
3. `data-*`
4. Everything else

Example:

```html
<a class="{class}" id="{id}" data-name="{name}" href="{url}">{text}</a>
```


<a name="html-naming"></a>
### 3.3. Naming

Naming is hard, but very important. It's a crucial part of the process of
developing a maintainable code base, and ensuring that you have a relatively
scalable interface between your HTML and CSS/JS.

* Use clear, thoughtful, and appropriate names for HTML classes. The names
  should be informative both within HTML and CSS files.
* Avoid _systematic_ use of abbreviated class names. Don't make things
  difficult to understand.

Example with "bad" names:

```html
<div class="cb s-scr"></div>
```

```css
.cb {
  background: #000;
}

.cb.s-scr {
  overflow: auto;
}
```

Example with better names:

```html
<div class="ColumnBody is-scrollable"></div>
```

```css
.ColumnBody {
    background: #000;
}

.ColumnBody.is-scrollable {
    overflow: auto;
}
```


<a name="html-example"></a>
### 3.4. HTML practical example

An example of various conventions.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <link rel="stylesheet" href="main.css">
        <script src="main.js"></script>
    </head>
    <body>
        <article class="Post" id="1234">
            <time class="Post-timestamp">{date}</time>
            <a data-id="1234"
             data-analytics-category="{category}"
             data-analytics-action="{action}"
             href="{url}">{text}</a>
            <ul>
                <li>
                    <a href="{url}">{text}</a>
                    <img src="{src}" alt="">
                </li>
                <li>
                    <a href="{url}">{text}</a>
                </li>
            </ul>

            <a class="u-linkComplex" href="{url}">
                <span class="u-linkComplex-target">{text}</span>
                {text}
            </a>

            <input value="text" readonly>
        </article>
    </body>
</html>
```


<a name="css"></a>
## 4. CSS

<a name="css-comments"></a>
### 4.1. Comments

Well commented code is extremely important. Take time to describe components,
how they work, their limitations, and the way they are constructed. Don't leave
others in the team guessing as to the purpose of uncommon or non-obvious
code.

Comment style should be simple and consistent within a single code base.

* Place comments on a new line above their subject.
* Keep line-length to a sensible maximum, e.g., 80 columns.
* Make liberal use of comments to break CSS code into discrete sections.
* Use "sentence case" comments and consistent text indentation.
* Use numeric end-of-line comments to reference documentation for individual declarations.

Tip: configure your editor to provide you with shortcuts to output agreed-upon
comment patterns.

Example:

```css
/* ==========================================================================
   Section comment block
   ========================================================================== */

/* Sub-section comment block
   ========================================================================== */

/**
 * Short description using Doxygen-style comment format
 *
 * The first sentence of the long description starts here and continues on this
 * line for a while finally concluding here at the end of this paragraph.
 *
 * The long description is ideal for more detailed explanations and
 * documentation. It can include example HTML, URLs, or any other information
 * that is deemed necessary or useful.
 *
 * TODO: This is a todo statement that describes an atomic task to be completed
 *   at a later date. It wraps after 80 characters and following lines are
 *   indented by 2 spaces.
 *
 * @tag This is a tag named 'tag'
 *
 * 1. A helpful description of a declaration's purpose.
 * 2. Another declaration or collection of declarations can reference this
 *    comment with an inline comment corresponding to the lists number.
 */

/* Basic comment */
```


<a name="css-format"></a>
### 4.2. Format

The chosen code format ensures that code is: easy to read; easy to clearly
comment; minimizes the chance of accidentally introducing errors; and results
in useful diffs and blames.

* Use one discrete selector per line in multi-selector rulesets.
* Include a single space before the opening brace of a ruleset.
* Include one declaration per line in a declaration block.
* Use one level of indentation for each declaration.
* Include a single space after the colon of a declaration.
* Use lowercase and shorthand hex values, e.g., `#aaa`.
* Use single or double quotes consistently. Preference is for double quotes,
  e.g., `content: ""`.
* Quote attribute values in selectors, e.g., `input[type="checkbox"]`.
* _Where allowed_, avoid specifying units for zero-values, e.g., `margin: 0`.
* Include a space after each comma in comma-separated property or function
  values.
* Include a semi-colon at the end of the last declaration in a declaration
  block.
* Place the closing brace of a ruleset in the same column as the first
  character of the ruleset.
* Separate each ruleset by a blank line.

```css
.selector-1,
.selector-2,
.selector-3[type="text"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background: #fff;
    background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
    box-sizing: border-box;
    color: #333;
    display: block;
    font-family: helvetica, arial, sans-serif;
}

.selector-a,
.selector-b {
    padding: 10px;
}
```

#### Declaration order

Use alphabetical ordering of declarations unless the cascade requires otherwise.

```css
.selector {
    background: #000;
    border: 10px solid #333;
    box-sizing: border-box;
    color: #fff;
    display: inline-block;
    font-family: sans-serif;
    font-size: 16px;
    text-align: right;
    width: 100%;
}
```

#### Exceptions and slight deviations

Large blocks of single declarations can use a slightly different, single-line
format. In this case, a space should be included after the opening brace and
before the closing brace.

```css
.selector-1 { width: 10%; }
.selector-2 { width: 20%; }
.selector-3 { width: 30%; }
```

Long, comma-separated property values - such as collections of gradients or
shadows - can be arranged across multiple lines in an effort to improve
readability and produce more useful diffs.

```css
.selector {
    background-image:
        linear-gradient(#fff, #ccc),
        linear-gradient(#f3c, #4ec);
    box-shadow:
        1px 1px 1px #000,
        2px 2px 1px 1px #ccc inset;
}
```

<a name="example"></a>
### 4.3. Practical example

An example of various conventions.

```css
/* ==========================================================================
   Grid layout
   ========================================================================== */

/**
 * Column layout with horizontal scroll.
 *
 * This creates a single row of full-height, non-wrapping columns that can
 * be browsed horizontally within their parent.
 *
 * Example HTML:
 *
 * <div class="Grid">
 *     <div class="Grid-cell Grid-cell--3"></div>
 *     <div class="Grid-cell Grid-cell--3"></div>
 *     <div class="Grid-cell Grid-cell--3"></div>
 * </div>
 */

/**
 * Grid container
 *
 * Must only contain `.Grid-cell` children.
 *
 * 1. Remove inter-cell whitespace
 * 2. Prevent inline-block cells wrapping
 */

.Grid {
    font-size: 0; /* 1 */
    height: 100%;
    white-space: nowrap; /* 2 */
}

/**
 * Grid cells
 *
 * No explicit width by default. Extend with `.Grid-cell--n` classes.
 *
 * 1. Reset font-size inherited from `.Grid`
 * 2. Set the inter-cell spacing
 * 3. Reset white-space inherited from `.Grid`
 */

.Grid-cell {
    border: 2px solid #333;
    box-sizing: border-box;
    display: inline-block;
    font-size: 16px; /* 1 */
    height: 100%;
    overflow: hidden;
    padding: 0 10px; /* 2 */
    position: relative;
    vertical-align: top;
    white-space: normal; /* 3 */
}

/* Cell states */

.Grid-cell.is-animating {
    background-color: #fffdec;
}

/* Cell dimension modifiers
   ========================================================================== */

.Grid-cell--1 { width: 10%; }
.Grid-cell--2 { width: 20%; }
.Grid-cell--3 { width: 30%; }
.Grid-cell--4 { width: 40%; }
.Grid-cell--5 { width: 50%; }

/* Cell modifiers
   ========================================================================== */

.Grid-cell--detail,
.Grid-cell--important {
    border-width: 4px;
}
```


Based on work at
[github.com/necolas/idiomatic-html](https://github.com/necolas/idiomatic-html)
and
[github.com/necolas/idiomatic-css](https://github.com/necolas/idiomatic-css).
