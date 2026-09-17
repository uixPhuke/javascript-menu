# 🔥 JavaScript Modal --- DOM & Event Handling Practice

```{=html}
<p align="center">
```
`<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=36BCF7&center=true&vCenter=true&width=850&lines=JavaScript+Modal+Practice;DOM+Manipulation;Events+%7C+classList+%7C+setTimeout;Accenture+Placement+Prep" alt="Typing Animation">`{=html}

```{=html}
</p>
```
```{=html}
<p align="center">
```
`<b>`{=html}🚀 A JavaScript DOM practice project focused on modal UI,
click events, CSS classes, event targets, and delayed
actions.`</b>`{=html}

```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">`{=html}
`<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">`{=html}
`<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">`{=html}

```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/DOM-Manipulation-36BCF7?style=flat-square" alt="DOM">`{=html}
`<img src="https://img.shields.io/badge/Level-Beginner%20%7C%20Intermediate-success?style=flat-square" alt="Level">`{=html}
`<img src="https://img.shields.io/badge/Purpose-Placement%20Prep-orange?style=flat-square" alt="Placement Prep">`{=html}

```{=html}
</p>
```

------------------------------------------------------------------------

## 📌 Project Overview

This project implements a **simple interactive promotional modal** using
HTML, CSS, and JavaScript.

The modal can:

-   Open when the user clicks a button
-   Close using the Close button
-   Close when the user clicks the backdrop
-   Automatically open after 4 seconds

The main goal is to understand how JavaScript controls the DOM and
changes the UI dynamically.

### Core flow

``` text
User Action
    ↓
onclick Event
    ↓
JavaScript Function
    ↓
Find DOM Element
    ↓
Change CSS Class
    ↓
Browser Updates UI
```

------------------------------------------------------------------------

## ✨ Features

  Feature               Description
  --------------------- -------------------------------------------------
  🔓 Open Modal         Opens the promotional popup
  ❌ Close Modal        Hides the popup
  🖱️ Backdrop Click     Clicking outside the popup closes it
  ⏱️ Auto Open          Opens automatically after 4 seconds
  🎨 CSS Overlay        Covers the screen with a dark transparent layer
  ⚡ Dynamic UI         Changes without refreshing the page
  🧩 DOM Manipulation   JavaScript controls HTML classes
  🧠 Event Handling     Uses click event information

------------------------------------------------------------------------

## 🎯 Learning Objectives

  JavaScript / Web Concept   Purpose
  -------------------------- ----------------------------------------------
  `onclick`                  Run JavaScript when an element is clicked
  `event`                    Get information about the click
  `event.target`             Find the exact element that was clicked
  `getElementById()`         Find an HTML element by ID
  `classList`                Access an element's CSS classes
  `classList.toggle()`       Add/remove a CSS class
  `!`                        Logical NOT operator
  `true / false`             Control show/hide state
  `setTimeout()`             Run code after a delay
  `display: none`            Hide an element
  `position: fixed`          Position an element relative to the viewport
  `inset: 0`                 Stretch an element across the viewport
  `place-items: center`      Center content using CSS Grid

------------------------------------------------------------------------

## 📁 Project Structure

``` text
javascript-modal/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

### File Responsibilities

``` text
index.html
    ↓
Modal Structure

style.css
    ↓
Modal Appearance + Hidden State

app.js
    ↓
Open + Close + Backdrop + Timer Logic

README.md
    ↓
Project Documentation
```

------------------------------------------------------------------------

# 🧩 Complete Project Code

## 1️⃣ `index.html`

``` html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <button onclick="toggleModal(true)">
        Open Promo Modal
    </button>

    <div id="demoModal"
         class="modal-overlay hidden"
         onclick="closeOnBackdrop(event)">

        <div class="modal-content">
            <h3>🔥 Exclusive Offer!</h3>
            <p>Get 20% Off your purchase!</p>

            <button onclick="toggleModal(false)">
                Close
            </button>
        </div>

    </div>

    <script src="app.js"></script>
</body>
</html>
```

------------------------------------------------------------------------

## 2️⃣ `style.css`

``` css
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);

    display: grid;
    place-items: center;
}

.modal-content {
    background: #1e293b;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.hidden {
    display: none !important;
}
```

------------------------------------------------------------------------

## 3️⃣ `app.js`

``` javascript
function toggleModal(show) {

    document
        .getElementById("demoModal")
        .classList
        .toggle("hidden", !show);

}

function closeOnBackdrop(e) {

    if (e.target.id === "demoModal") {
        toggleModal(false);
    }

}

// Automatically open after 4 seconds
setTimeout(() => {
    toggleModal(true);
}, 4000);
```

------------------------------------------------------------------------

# 🧠 JavaScript Architecture

The JavaScript has two main functions:

``` javascript
toggleModal(show)

closeOnBackdrop(e)
```

and one delayed action:

``` javascript
setTimeout(...)
```

They work together:

``` text
             PAGE LOAD
                 │
                 ▼
          setTimeout()
                 │
            Wait 4 sec
                 │
                 ▼
        toggleModal(true)
                 │
                 ▼
            SHOW MODAL
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
   Close Button      Backdrop Click
        │                 │
        ▼                 ▼
toggleModal(false)  closeOnBackdrop(e)
        │                 │
        │                 ▼
        │          Check event.target
        │                 │
        │                 ▼
        │          Is it demoModal?
        │                 │
        └────────┬────────┘
                 ▼
          HIDE MODAL
```

------------------------------------------------------------------------

# 1️⃣ `toggleModal(show)`

``` js
function toggleModal(show) {

    document
        .getElementById("demoModal")
        .classList
        .toggle("hidden", !show);

}
```

This function controls whether the modal is **visible or hidden**.

It receives one parameter:

``` text
show
```

The value can be:

``` text
true
false
```

------------------------------------------------------------------------

## `show`

When we write:

``` html
<button onclick="toggleModal(true)">
```

the function receives:

``` text
show = true
```

This means:

> Show the modal.

When we write:

``` html
<button onclick="toggleModal(false)">
```

the function receives:

``` text
show = false
```

This means:

> Hide the modal.

------------------------------------------------------------------------

# 2️⃣ `document`

``` js
document
```

`document` represents the current HTML page.

JavaScript uses it to access and modify elements in the webpage.

Think:

``` text
Browser Page
     ↓
 document
     ↓
 HTML Elements
```

------------------------------------------------------------------------

# 3️⃣ `getElementById()`

``` js
document.getElementById("demoModal")
```

This finds the HTML element with:

``` html
id="demoModal"
```

For example:

``` html
<div id="demoModal">
```

After this line, JavaScript has a reference to that `<div>`.

### Mental model

``` text
document
    ↓
getElementById()
    ↓
"demoModal"
    ↓
HTML <div>
```

------------------------------------------------------------------------

# 4️⃣ `classList`

``` js
element.classList
```

`classList` gives JavaScript access to the CSS classes attached to an
element.

For:

``` html
<div class="modal-overlay hidden">
```

the classes are:

``` text
modal-overlay
hidden
```

JavaScript can add, remove, or toggle those classes.

------------------------------------------------------------------------

# 5️⃣ `classList.toggle()`

``` js
classList.toggle("hidden", !show);
```

This is the most important line.

The second argument controls the action.

``` text
true
  ↓
ADD class

false
  ↓
REMOVE class
```

So:

``` js
toggle("hidden", true)
```

means:

> Add `hidden`.

And:

``` js
toggle("hidden", false)
```

means:

> Remove `hidden`.

------------------------------------------------------------------------

# 6️⃣ Why `!show`?

The `!` operator means **NOT**.

``` text
!true  → false
!false → true
```

This creates the desired relationship:

``` text
show = true
    ↓
!show = false
    ↓
remove "hidden"
    ↓
SHOW MODAL
```

and:

``` text
show = false
    ↓
!show = true
    ↓
add "hidden"
    ↓
HIDE MODAL
```

------------------------------------------------------------------------

## 📊 `true / false` Table

  Function Call             `show`   `!show` `hidden`   Result
  ---------------------- --------- --------- ---------- ---------
  `toggleModal(true)`       `true`   `false` Removed    👀 Show
  `toggleModal(false)`     `false`    `true` Added      🙈 Hide

### ⭐ Remember

``` text
true  → SHOW
false → HIDE
```

------------------------------------------------------------------------

# 🖱️ 7️⃣ What Is `onclick`?

Example:

``` html
<button onclick="toggleModal(true)">
```

`onclick` means:

> Run this JavaScript when the element is clicked.

It is not limited to buttons.

A `<div>` can also have `onclick`:

``` html
<div onclick="hello()">
    Click me
</div>
```

Other HTML elements can also respond to click events.

------------------------------------------------------------------------

# 🧱 8️⃣ Why Does a `<div>` Have `onclick`?

Your overlay is:

``` html
<div
    id="demoModal"
    class="modal-overlay"
    onclick="closeOnBackdrop(event)"
>
```

This `<div>` covers the screen because:

``` css
.modal-overlay {
    position: fixed;
    inset: 0;
}
```

Therefore the user can click the dark background.

Visual:

``` text
┌────────────────────────────────┐
│                                │
│       DARK BACKGROUND           │ ← clickable overlay
│                                │
│          ┌──────────┐          │
│          │  MODAL   │          │
│          │          │          │
│          │  Close   │          │
│          └──────────┘          │
│                                │
│       DARK BACKGROUND           │ ← clickable overlay
│                                │
└────────────────────────────────┘
```

------------------------------------------------------------------------

# 9️⃣ `onclick="closeOnBackdrop(event)"`

``` html
onclick="closeOnBackdrop(event)"
```

means:

> When the overlay is clicked, call `closeOnBackdrop()` and pass the
> click event.

The function receives that event:

``` js
function closeOnBackdrop(e) {
```

Here:

``` text
event → e
```

`e` is simply the variable containing information about the click.

------------------------------------------------------------------------

# 🔍 1️⃣0️⃣ What Is `event.target`?

``` js
e.target
```

means:

> The exact HTML element that was clicked.

Example:

### Click background

``` text
e.target
   ↓
#demoModal
```

### Click popup content

``` text
e.target
   ↓
.modal-content
```

### Click Close button

``` text
e.target
   ↓
button
```

------------------------------------------------------------------------

# 1️⃣1️⃣ `e.target.id`

``` js
e.target.id
```

gets the ID of the exact element that was clicked.

If the background is clicked:

``` html
<div id="demoModal">
```

then:

``` js
e.target.id
```

is:

``` text
"demoModal"
```

------------------------------------------------------------------------

# 1️⃣2️⃣ `closeOnBackdrop(e)`

``` js
function closeOnBackdrop(e) {

    if (e.target.id === "demoModal") {
        toggleModal(false);
    }

}
```

This function closes the modal **only when the backdrop itself is
clicked**.

The condition:

``` js
e.target.id === "demoModal"
```

asks:

> Was the exact element clicked the modal overlay?

If yes:

``` js
toggleModal(false);
```

The modal closes.

If not:

``` text
Do nothing
```

------------------------------------------------------------------------

# 🎯 Why Check the Target?

We want:

``` text
CLICK OUTSIDE POPUP
        ↓
      CLOSE
```

but:

``` text
CLICK INSIDE POPUP
        ↓
    DON'T CLOSE
```

Visual:

``` text
┌──────────────────────────────────┐
│                                  │
│  CLICK BACKDROP → CLOSE          │
│                                  │
│       ┌────────────────┐         │
│       │                │         │
│       │     MODAL      │         │
│       │                │         │
│       │  CLICK HERE    │         │
│       │  → DON'T CLOSE │         │
│       │                │         │
│       └────────────────┘         │
│                                  │
│  CLICK BACKDROP → CLOSE          │
│                                  │
└──────────────────────────────────┘
```

------------------------------------------------------------------------

# 🎨 1️⃣3️⃣ What Is `.modal-overlay`?

``` css
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);

    display: grid;
    place-items: center;
}
```

The overlay is the **full-screen layer behind the popup**.

### `position: fixed`

Keeps it positioned relative to the browser viewport.

### `inset: 0`

Shorthand for:

``` css
top: 0;
right: 0;
bottom: 0;
left: 0;
```

Therefore it covers the entire screen.

### `background`

``` css
background: rgba(0, 0, 0, 0.7);
```

Creates a black transparent background.

### `display: grid`

Makes the overlay a CSS Grid container.

### `place-items: center`

Centers the popup.

------------------------------------------------------------------------

# 🫥 1️⃣4️⃣ What Is `.hidden`?

``` css
.hidden {
    display: none !important;
}
```

When HTML contains:

``` html
class="modal-overlay hidden"
```

the browser applies:

``` css
display: none;
```

Therefore:

``` text
MODAL → HIDDEN
```

When JavaScript removes `hidden`:

``` html
class="modal-overlay"
```

the modal becomes visible.

------------------------------------------------------------------------

# 🪟 1️⃣5️⃣ `modal-overlay` vs `modal-content`

This distinction is important.

``` text
modal-overlay
      │
      └── modal-content
```

### `modal-overlay`

``` text
Full-screen layer
```

### `modal-content`

``` text
Actual popup box
```

Example:

``` html
<div class="modal-overlay">

    <div class="modal-content">
        Popup content
    </div>

</div>
```

------------------------------------------------------------------------

# ⏱️ 1️⃣6️⃣ `setTimeout()`

``` js
setTimeout(() => {
    toggleModal(true);
}, 4000);
```

`setTimeout()` means:

> Execute code after a specified delay.

Here:

``` text
4000 milliseconds
       ↓
    4 seconds
```

So:

``` text
PAGE LOAD
    ↓
WAIT 4 SECONDS
    ↓
toggleModal(true)
    ↓
MODAL OPENS
```

------------------------------------------------------------------------

# 🔄 1️⃣7️⃣ Complete Modal Flow

``` text
                    PAGE LOAD
                        │
                        ▼
                 setTimeout()
                        │
                  Wait 4 sec
                        │
                        ▼
               toggleModal(true)
                        │
                        ▼
                Remove "hidden"
                        │
                        ▼
                  MODAL SHOWS
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
       Click Close           Click Backdrop
             │                     │
             ▼                     ▼
    toggleModal(false)      closeOnBackdrop(e)
             │                     │
             │                     ▼
             │              e.target.id
             │                     │
             │                     ▼
             │             === "demoModal"?
             │                     │
             └──────────┬──────────┘
                        ▼
                 Add "hidden"
                        │
                        ▼
                  MODAL HIDES
```

------------------------------------------------------------------------

# 🧪 1️⃣8️⃣ Example Walkthrough

Suppose the page loads.

Initially:

``` html
<div id="demoModal" class="modal-overlay hidden">
```

The `hidden` class means:

``` text
MODAL HIDDEN
```

After 4 seconds:

``` js
toggleModal(true);
```

Inside:

``` text
show = true
!show = false
```

Therefore:

``` js
classList.toggle("hidden", false);
```

The `hidden` class is removed.

Result:

``` text
MODAL VISIBLE
```

Now the user clicks the dark background.

``` js
closeOnBackdrop(event)
```

runs.

If:

``` js
e.target.id === "demoModal"
```

then:

``` js
toggleModal(false);
```

runs.

Result:

``` text
MODAL HIDDEN
```

------------------------------------------------------------------------

# 🧠 1️⃣9️⃣ Important JavaScript Concepts

## `getElementById()`

``` js
document.getElementById("demoModal");
```

> Find one element using its ID.

------------------------------------------------------------------------

## `classList`

``` js
element.classList;
```

> Access the element's CSS classes.

------------------------------------------------------------------------

## `toggle()`

``` js
element.classList.toggle("hidden", true);
```

> Add/remove a class based on a condition.

------------------------------------------------------------------------

## `onclick`

``` html
onclick="hello()"
```

> Run code when clicked.

------------------------------------------------------------------------

## `event`

``` js
function hello(event) {}
```

> Contains information about the event.

------------------------------------------------------------------------

## `event.target`

``` js
event.target;
```

> The exact element that triggered the event.

------------------------------------------------------------------------

## `setTimeout()`

``` js
setTimeout(function, 4000);
```

> Execute code after 4 seconds.

------------------------------------------------------------------------

# 📊 2️⃣0️⃣ Quick Revision Cheat Sheet

  Method / Concept        Remember
  ----------------------- -----------------------
  `onclick`               Runs when clicked
  `event`                 Event information
  `event.target`          Exact clicked element
  `.id`                   Get element ID
  `getElementById()`      Find element by ID
  `classList`             Work with CSS classes
  `classList.add()`       Add class
  `classList.remove()`    Remove class
  `classList.toggle()`    Add/remove class
  `!`                     NOT
  `true`                  Yes / show
  `false`                 No / hide
  `setTimeout()`          Delay execution
  `display: none`         Hide element
  `position: fixed`       Viewport positioning
  `inset: 0`              Fill viewport
  `place-items: center`   Center grid content

------------------------------------------------------------------------

# 🎯 2️⃣1️⃣ Accenture Coding Round Pattern

For similar frontend questions, remember:

``` text
USER ACTION
     ↓
DOM EVENT
     ↓
SELECT ELEMENT
     ↓
READ STATE / VALUE
     ↓
PROCESS LOGIC
     ↓
UPDATE DOM
     ↓
UI CHANGES
```

For this modal:

``` text
Click Open
    ↓
onclick
    ↓
toggleModal(true)
    ↓
getElementById()
    ↓
classList.toggle()
    ↓
Remove "hidden"
    ↓
Modal appears
```

For backdrop:

``` text
Click backdrop
    ↓
onclick
    ↓
closeOnBackdrop(event)
    ↓
event.target
    ↓
Check ID
    ↓
toggleModal(false)
    ↓
Modal disappears
```

------------------------------------------------------------------------

# 🧪 2️⃣2️⃣ Practice Questions

### Question 1

What happens?

``` js
toggleModal(true);
```

**Think first.**

```{=html}
<details>
```
```{=html}
<summary>
```
💡 Reveal Answer
```{=html}
</summary>
```
`show = true`.

Therefore `!show = false`.

The `hidden` class is removed.

The modal becomes visible.

```{=html}
</details>
```

------------------------------------------------------------------------

### Question 2

What happens?

``` js
toggleModal(false);
```

**Think first.**

```{=html}
<details>
```
```{=html}
<summary>
```
💡 Reveal Answer
```{=html}
</summary>
```
`show = false`.

Therefore `!show = true`.

The `hidden` class is added.

The modal becomes hidden.

```{=html}
</details>
```

------------------------------------------------------------------------

### Question 3

What does this mean?

``` js
!true
```

```{=html}
<details>
```
```{=html}
<summary>
```
💡 Reveal Answer
```{=html}
</summary>
```
``` text
false
```

```{=html}
</details>
```

------------------------------------------------------------------------

### Question 4

What does this do?

``` js
document.getElementById("demoModal");
```

```{=html}
<details>
```
```{=html}
<summary>
```
💡 Reveal Answer
```{=html}
</summary>
```
It finds the HTML element whose ID is `demoModal`.

```{=html}
</details>
```

------------------------------------------------------------------------

### Question 5

What does this mean?

``` js
e.target
```

```{=html}
<details>
```
```{=html}
<summary>
```
💡 Reveal Answer
```{=html}
</summary>
```
It refers to the exact element that was clicked.

```{=html}
</details>
```

------------------------------------------------------------------------

# 🚀 2️⃣3️⃣ Mini Challenges

Try these without looking at the solution.

### Challenge 1 --- Change the Timer

Change:

``` js
4000
```

to make the modal open after **2 seconds**.

------------------------------------------------------------------------

### Challenge 2 --- New Button

Create a button:

``` text
Open Login
```

that opens the modal.

------------------------------------------------------------------------

### Challenge 3 --- Change Content

Change the modal to:

``` text
Welcome Back!
Please login to continue.
```

------------------------------------------------------------------------

### Challenge 4 --- Escape Key

Add functionality so pressing:

``` text
ESC
```

closes the modal.

------------------------------------------------------------------------

### Challenge 5 --- Form

Add:

``` text
Email
Password
Login Button
```

inside the modal.

------------------------------------------------------------------------

# ⭐ 2️⃣4️⃣ Most Important Pattern

For DOM questions, remember:

``` text
FIND
 ↓
READ
 ↓
PROCESS
 ↓
UPDATE
```

For this project:

``` js
document.getElementById("demoModal")
```

### FIND

Find the modal.

``` js
classList
```

### ACCESS

Access its CSS classes.

``` js
toggle("hidden", !show)
```

### PROCESS

Add/remove the hidden state.

``` text
UI changes
```

### RESULT

The user sees or doesn't see the modal.

------------------------------------------------------------------------

# 🏆 2️⃣5️⃣ Final Mental Model

Don't memorize the entire code.

Remember:

``` text
HTML
  ↓
STRUCTURE

CSS
  ↓
APPEARANCE

JAVASCRIPT
  ↓
BEHAVIOR
```

And the JavaScript flow:

``` text
CLICK
  ↓
EVENT
  ↓
FIND ELEMENT
  ↓
CHECK STATE
  ↓
CHANGE CLASS
  ↓
UI UPDATES
```

The most important line:

``` js
document.getElementById("demoModal")
    .classList.toggle("hidden", !show);
```

Think:

``` text
Find modal
    ↓
Access classes
    ↓
Add/remove "hidden"
    ↓
Show/hide modal
```

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<b>`{=html}💡 Don't memorize the code. Understand the
flow.`</b>`{=html}

```{=html}
</p>
```
```{=html}
<p align="center">
```
`<b>`{=html}Click → Event → Find Element → Change Class → UI
Update`</b>`{=html}

```{=html}
</p>
```
```{=html}
<p align="center">
```
⭐ `<i>`{=html}Practice rebuilding this without looking at the
solution.`</i>`{=html} ⭐

```{=html}
</p>
```

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<sub>`{=html}Built for JavaScript DOM practice and Accenture placement
preparation 🚀`</sub>`{=html}

```{=html}
</p>
```
