<div align="center">

# 🧭 Multi-Step Quiz Navigation

### Learn `disabled`, `classList`, Dynamic IDs & Step Navigation with JavaScript

<p>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=900&center=true&vCenter=true&width=720&lines=JavaScript+DOM+Practice;Next+%7C+Previous+%7C+Submit;Dynamic+Question+Navigation;Master+button.disabled" alt="Typing SVG">
</p>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

</div>

---

## 📌 Project Overview

This mini project demonstrates a **multi-step quiz** where only one question is visible at a time.

The JavaScript controls:

- Next / Previous navigation
- Showing and hiding questions
- Disabling `Prev` on the first question
- Changing `Next` to `Submit` on the last question
- Counting selected answers
- Displaying the final score

The most important line is:

```js
document.getElementById('qPrev').disabled = (qStep === 1);
```

In plain English:

> **Disable the Previous button when the user is on Question 1.**

---

# 🎯 Learning Goals

| Concept | Meaning |
|---|---|
| `let qStep = 1` | Stores current question |
| `navStep(dir)` | Moves between questions |
| `getElementById()` | Selects an HTML element |
| `` `q${qStep}` `` | Creates a dynamic ID |
| `classList.add()` | Adds a CSS class |
| `classList.remove()` | Removes a CSS class |
| `.hidden` | Hides an element |
| `.disabled` | Enables/disables controls |
| `===` | Strict comparison |
| `+=` | Updates a variable |
| `querySelectorAll()` | Selects multiple elements |
| `:checked` | Finds selected inputs |
| `.length` | Counts elements |
| `.innerText` | Changes visible text |
| `onclick` | Assigns click behavior |
| `() => {}` | Arrow function |

---

# 🧩 Project Structure

```text
multi-step-quiz/
│
├── index.html
├── style.css
└── app.js
```

---

# 🖥️ HTML

```html
<html>

<head>
    <link rel="stylesheet" href="style.css" />
</head>

<body>

    <div id="q1" class="q-step">
        <p>Q1: Is JS single-threaded?</p>
        <label>
            <input type="radio" name="q1" value="1">
            Yes
        </label>
    </div>

    <div id="q2" class="q-step hidden">
        <p>Q2: Does CSS mean Cascading Style Sheets?</p>
        <label>
            <input type="radio" name="q2" value="1">
            Yes
        </label>
    </div>

    <div class="nav-btns">
        <button id="qPrev" onclick="navStep(-1)" disabled>
            Prev
        </button>

        <button id="qNext" onclick="navStep(1)">
            Next
        </button>
    </div>

    <h4 id="qScore" class="hidden"></h4>

</body>

<script src="app.js"></script>

</html>
```

---

# 🎨 CSS

```css
.q-step {
    padding: 12px;
    background: #1e293b;
    border-radius: 6px;
}

.hidden {
    display: none !important;
}

.nav-btns {
    display: flex;
    gap: 8px;
    margin-top: 12px;
}
```

---

# ⚙️ JavaScript

```js
let qStep = 1;

function navStep(dir) {

    document.getElementById(`q${qStep}`).classList.add('hidden');

    qStep += dir;

    document.getElementById(`q${qStep}`).classList.remove('hidden');

    document.getElementById('qPrev').disabled = (qStep === 1);

    if (qStep === 2) {

        document.getElementById('qNext').innerText = 'Submit';

        document.getElementById('qNext').onclick = () => {

            let score =
                document.querySelectorAll('input:checked').length;

            document.getElementById('qScore').innerText =
                `Score: ${score} / 2`;

            document.getElementById('qScore').classList.remove('hidden');
        };
    }
}
```

---

# 🔍 Line-by-Line Explanation

## 1. Current Question

```js
let qStep = 1;
```

Stores the current question number.

```text
qStep = 1
   ↓
current question = q1
```

---

## 2. Navigation Function

```js
function navStep(dir) {
```

`dir` tells JavaScript which direction to move.

```html
onclick="navStep(1)"
```

means:

```text
dir = 1 → Next
```

And:

```html
onclick="navStep(-1)"
```

means:

```text
dir = -1 → Previous
```

### Memory trick

```text
navStep(1)   → NEXT
navStep(-1)  → PREVIOUS
```

---

# 3. Hide Current Question

```js
document.getElementById(`q${qStep}`).classList.add('hidden');
```

If:

```js
qStep = 1;
```

then:

```js
`q${qStep}`
```

becomes:

```text
"q1"
```

So JavaScript effectively executes:

```js
document.getElementById('q1')
```

Then:

```js
.classList.add('hidden')
```

adds the `hidden` class.

CSS:

```css
.hidden {
    display: none !important;
}
```

Therefore Q1 disappears.

---

# 4. Move to the Next Step

```js
qStep += dir;
```

This is shorthand for:

```js
qStep = qStep + dir;
```

### Next

```text
qStep = 1
dir = 1

1 + 1 = 2
```

### Previous

```text
qStep = 2
dir = -1

2 + (-1) = 1
```

---

# 5. Show the New Question

```js
document.getElementById(`q${qStep}`).classList.remove('hidden');
```

If:

```js
qStep = 2;
```

then:

```js
`q${qStep}`
```

becomes:

```text
"q2"
```

JavaScript selects Q2 and removes `hidden`.

```text
hidden removed
      ↓
Q2 becomes visible
```

---

# ⭐ MOST IMPORTANT LINE

```js
document.getElementById('qPrev').disabled = (qStep === 1);
```

Decode it from **right to left**.

### Step 1 — Compare

```js
qStep === 1
```

Asks:

> Is the current question number 1?

It returns:

```text
true
```

or:

```text
false
```

### Step 2 — Find button

```js
document.getElementById('qPrev')
```

Selects:

```html
<button id="qPrev">
```

### Step 3 — Control `disabled`

```js
button.disabled = condition;
```

If the condition is `true`:

```text
disabled = true
→ button disabled ❌
```

If the condition is `false`:

```text
disabled = false
→ button enabled ✅
```

### Final meaning

```text
qStep === 1 ?
     │
   YES → Prev disabled
   NO  → Prev enabled
```

### Example

```js
qStep = 1;
```

becomes:

```js
qPrev.disabled = true;
```

But:

```js
qStep = 2;
```

becomes:

```js
qPrev.disabled = false;
```

---

# 🧠 Important Pattern

Memorize:

```js
element.disabled = condition;
```

Examples:

```js
button.disabled = age < 18;
```

```js
submit.disabled = password === '';
```

```js
prev.disabled = currentStep === 1;
```

The rule:

```text
condition = true
      ↓
disabled

condition = false
      ↓
enabled
```

---

# 6. Detect Last Question

```js
if (qStep === 2) {
```

There are two questions, so Q2 is the final step.

When Q2 is reached, the navigation changes from:

```text
Next
```

to:

```text
Submit
```

---

# 7. Change Next → Submit

```js
document.getElementById('qNext').innerText = 'Submit';
```

`.innerText` changes visible text.

```text
Next
 ↓
Submit
```

---

# 8. Change the Button's Click Action

```js
document.getElementById('qNext').onclick = () => {
```

This assigns a new click function.

The arrow function:

```js
() => {
    // code
}
```

means:

> Run this code when the button is clicked.

So the same button changes behavior:

```text
Q1 → Next
Q2 → Submit
```

---

# 9. Find Selected Answers

```js
document.querySelectorAll('input:checked')
```

`querySelectorAll()` selects all matching elements.

The selector:

```css
input:checked
```

means:

> Find all selected input elements.

If:

```text
Q1 ✓
Q2 ✓
```

then two inputs are found.

---

# 10. Count Selected Answers

```js
let score =
    document.querySelectorAll('input:checked').length;
```

`.length` tells us how many elements were found.

```text
2 checked inputs
       ↓
.length
       ↓
2
```

Therefore:

```js
score = 2;
```

---

# 11. Display the Score

```js
document.getElementById('qScore').innerText =
    `Score: ${score} / 2`;
```

If:

```js
score = 2;
```

the template literal becomes:

```text
Score: 2 / 2
```

---

# 12. Show the Score

Initially:

```html
<h4 id="qScore" class="hidden"></h4>
```

It is hidden.

Then:

```js
document.getElementById('qScore').classList.remove('hidden');
```

removes the hidden class.

The score becomes visible.

---

# 🔄 Complete Dry Run

### Initial

```text
qStep = 1

┌─────────────────────────────┐
│ Q1: Is JS single-threaded?  │
│ ○ Yes                       │
└─────────────────────────────┘

[Prev] [Next]

Prev = disabled
```

### Click Next

```js
navStep(1);
```

```text
1. Hide Q1
      ↓
2. qStep += 1
      ↓
3. qStep = 2
      ↓
4. Show Q2
      ↓
5. qStep === 1 → false
      ↓
6. Prev becomes enabled
      ↓
7. Next → Submit
```

Now:

```text
[Prev] [Submit]
```

### Click Submit

```text
Find checked inputs
       ↓
Count them
       ↓
score = number selected
       ↓
Display Score
```

---

# 🗺️ Full Logic

```text
                 START
                   │
                   ▼
              qStep = 1
                   │
                   ▼
             Show Question
                   │
                   ▼
              Click Next
                   │
                   ▼
            Hide current
                   │
                   ▼
             qStep += dir
                   │
                   ▼
             Show new step
                   │
                   ▼
          qStep === 1 ?
           /                   YES          NO
          │            │
          ▼            ▼
     Disable Prev   Enable Prev
                       │
                       ▼
                qStep === 2 ?
                       │
                       ▼
                 Next → Submit
                       │
                       ▼
                 Click Submit
                       │
                       ▼
              Find input:checked
                       │
                       ▼
                    .length
                       │
                       ▼
                Display Score
```

---

# ⚡ Quick Revision Cheat Sheet

### Current step

```js
let qStep = 1;
```

### Move

```js
qStep += dir;
```

### Dynamic ID

```js
`q${qStep}`
```

### Hide

```js
element.classList.add('hidden');
```

### Show

```js
element.classList.remove('hidden');
```

### Disable based on condition

```js
button.disabled = condition;
```

### Compare

```js
qStep === 1
```

### Change text

```js
element.innerText = 'Submit';
```

### Find selected inputs

```js
document.querySelectorAll('input:checked');
```

### Count selected inputs

```js
document.querySelectorAll('input:checked').length;
```

---

# 🎯 Accenture Frontend Coding Tips

### Tip 1 — Decode from inside → outside

For:

```js
document.getElementById('qPrev').disabled = (qStep === 1);
```

First understand:

```js
qStep === 1
```

Then:

```js
qPrev.disabled = true/false;
```

This makes long DOM statements much easier.

---

### Tip 2 — Remember the Boolean rule

```js
element.disabled = condition;
```

```text
true  → disabled ❌
false → enabled ✅
```

---

### Tip 3 — Master `classList`

```js
element.classList.add('hidden');
```

```js
element.classList.remove('hidden');
```

```js
element.classList.contains('hidden');
```

These are very common in frontend coding questions.

---

### Tip 4 — Master `querySelectorAll`

Use it when you need multiple elements:

```js
document.querySelectorAll('input:checked')
```

Useful for:

- checked inputs
- table rows
- cards
- list items
- buttons

---

### Tip 5 — `.length` means count

Whenever you see:

```js
querySelectorAll(...).length
```

think:

> **How many matching elements exist?**

---

### Tip 6 — Don't confuse `=` and `===`

```js
=
```

means **assign**.

```js
===
```

means **compare**.

Example:

```js
qStep = 2;
```

means:

> Set qStep to 2.

But:

```js
qStep === 2;
```

means:

> Is qStep 2?

---

# 🧠 Memory Trick

Remember the navigation as:

```text
HIDE → MOVE → SHOW → CHECK → CONTROL
```

```js
// HIDE
current.classList.add('hidden');

// MOVE
qStep += dir;

// SHOW
next.classList.remove('hidden');

// CHECK
qStep === 1;

// CONTROL
qPrev.disabled = (qStep === 1);
```

---

<div align="center">

## 🚀 Master the Pattern

**DOM Selection → Conditions → Classes → Button State → User Interaction**

### Practice this pattern until you can write it without looking.

</div>
