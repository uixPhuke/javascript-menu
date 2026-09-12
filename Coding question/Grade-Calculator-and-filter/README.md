# 🎓 Student Result Manager

<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=36BCF7&center=true&vCenter=true&width=750&lines=Student+Result+Manager;JavaScript+DOM+Practice;Add+Students+%7C+Pass+%7C+Fail+%7C+Filter"
    alt="Typing Animation"
  >
</p>

<p align="center">
  <b>🚀 A JavaScript DOM practice project for dynamically managing student results.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/DOM-Manipulation-36BCF7?style=flat-square" alt="DOM">
  <img src="https://img.shields.io/badge/Level-Beginner%20%7C%20Intermediate-success?style=flat-square" alt="Level">
  <img src="https://img.shields.io/badge/Purpose-Placement%20Prep-orange?style=flat-square" alt="Placement Prep">
</p>

---

## 📌 Project Overview

This project implements a simple **Student Result Manager** using HTML, CSS, and JavaScript.

The application allows the user to:

- Enter a student's name
- Enter marks
- Add the student dynamically to a table
- Automatically determine Pass or Fail
- Filter students by result status
- Clear the input fields after adding a student

The main goal is to practice **JavaScript DOM manipulation, validation, dynamic element creation, conditional logic, and event handling**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 👤 Student Name | Accepts student name |
| 📝 Marks | Accepts marks from 0–100 |
| ➕ Add Student | Dynamically creates a table row |
| ✅ Pass Status | Marks `>= 40` |
| ❌ Fail Status | Marks `< 40` |
| 🔍 Filter | Show All, Pass Only, or Fail Only |
| 🛡️ Validation | Rejects invalid names and marks |
| 🧹 Clear Inputs | Resets fields after successful insertion |
| ⚡ Dynamic DOM | Updates table without page refresh |

---

# 🎯 Learning Objectives

| JavaScript Concept | Purpose |
|---|---|
| `function` | Create reusable functionality |
| `getElementById()` | Select HTML elements |
| `.value` | Read input values |
| `.trim()` | Remove unnecessary spaces |
| `parseInt()` | Convert text to integer |
| `isNaN()` | Check whether a value is a number |
| `if` | Validate and make decisions |
| `return` | Stop function execution |
| Ternary operator | Quickly choose Pass/Fail |
| `createElement()` | Create HTML elements dynamically |
| `.className` | Assign CSS classes |
| `.innerHTML` | Insert HTML content |
| `appendChild()` | Add elements to the DOM |
| `querySelectorAll()` | Select multiple rows |
| `forEach()` | Loop through rows |
| `.classList.contains()` | Check a CSS class |
| `.style.display` | Show/hide rows |

---

# 📁 Project Structure

```text
student-result-manager/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

### File Responsibilities

```text
index.html
     ↓
Input Form + Filter + Table

style.css
     ↓
Page Appearance + Pass/Fail Styling

app.js
     ↓
Validation + Student Creation + Filtering

README.md
     ↓
Project Documentation
```

---

# 🧠 JavaScript Architecture

The application has two main functions:

```js
addStudent()
filterStudents(value)
```

They perform two different jobs.

```text
                 USER ENTERS DATA
                        │
                        ▼
                  Add Student
                        │
                        ▼
                  addStudent()
                        │
                ┌───────┴───────┐
                ▼               ▼
            Validate        Calculate
             input           status
                │               │
                └───────┬───────┘
                        ▼
                Create table row
                        │
                        ▼
                  Add to DOM
                        │
                        ▼
                  Clear inputs


                 USER SELECTS FILTER
                        │
                        ▼
                filterStudents()
                        │
                        ▼
                 Check each row
                        │
                        ▼
                  Show / Hide
```

---

# 1️⃣ `addStudent()`

```js
function addStudent() {

    // student creation logic

}
```

This function handles the complete process of adding one student.

It performs:

```text
Read Input
   ↓
Validate Input
   ↓
Determine Status
   ↓
Create Row
   ↓
Insert Data
   ↓
Append Row
   ↓
Clear Inputs
```

---

# 2️⃣ Read Student Name

```js
const name = document.getElementById('sName').value.trim();
```

Let's break this down.

### `getElementById()`

```js
document.getElementById('sName');
```

Finds the input whose ID is:

```html
id="sName"
```

### `.value`

```js
document.getElementById('sName').value;
```

gets what the user typed.

For example:

```text
User types:

Rahul

value
  ↓
"Rahul"
```

### `.trim()`

```js
"   Rahul   ".trim();
```

becomes:

```text
"Rahul"
```

It removes unnecessary spaces from the beginning and end.

---

# 3️⃣ Read Marks

```js
const marks = parseInt(
    document.getElementById('sMarks').value
);
```

The input value normally comes as text.

For example:

```text
"75"
```

Using:

```js
parseInt("75");
```

gives:

```text
75
```

Now JavaScript can compare the marks numerically.

---

# 4️⃣ Validate the Input

```js
if (!name || isNaN(marks) || marks < 0 || marks > 100) {
    alert('Enter valid name and marks (0-100)');
    return;
}
```

This is one of the most important parts of the program.

It checks four conditions.

---

## Condition 1: `!name`

```js
!name
```

means:

> Is the name empty?

Example:

```text
name = ""
```

Then:

```text
!name
 ↓
true
```

The input is invalid.

---

## Condition 2: `isNaN(marks)`

```js
isNaN(marks)
```

means:

> Is marks Not a Number?

For example:

```js
isNaN(75);
```

returns:

```text
false
```

But an invalid numeric value can produce:

```text
true
```

---

## Condition 3: `marks < 0`

```js
marks < 0
```

prevents negative marks.

Example:

```text
marks = -10

-10 < 0
     ↓
true
```

Invalid.

---

## Condition 4: `marks > 100`

```js
marks > 100
```

prevents marks above 100.

Example:

```text
marks = 150

150 > 100
     ↓
true
```

Invalid.

---

# 5️⃣ Why `return`?

```js
return;
```

stops the function immediately.

Without `return`, the program could continue creating a student row even after invalid input.

Think:

```text
Invalid input
     ↓
alert()
     ↓
return
     ↓
STOP
```

---

# 6️⃣ Determine Pass or Fail

```js
const status = marks >= 40 ? 'pass' : 'fail';
```

This uses the **ternary operator**.

General syntax:

```js
condition ? valueIfTrue : valueIfFalse
```

Here:

```text
marks >= 40
```

is the condition.

If true:

```text
'pass'
```

If false:

```text
'fail'
```

Example:

```text
marks = 75

75 >= 40
     ↓
true
     ↓
pass
```

Another example:

```text
marks = 25

25 >= 40
     ↓
false
     ↓
fail
```

Equivalent `if/else` version:

```js
let status;

if (marks >= 40) {
    status = 'pass';
} else {
    status = 'fail';
}
```

---

# 7️⃣ Create a Table Row

```js
const tr = document.createElement('tr');
```

This creates a new `<tr>` element using JavaScript.

It exists in memory initially.

```text
JavaScript
    ↓
createElement('tr')
    ↓
New <tr>
```

It is not visible on the webpage until it is added to the DOM.

---

# 8️⃣ Assign the Status Class

```js
tr.className = status;
```

If:

```text
status = "pass"
```

then:

```html
<tr class="pass">
```

If:

```text
status = "fail"
```

then:

```html
<tr class="fail">
```

This allows CSS to style the row differently.

---

# 9️⃣ Insert Table Cells

```js
tr.innerHTML = `
    <td>${name}</td>
    <td>${marks}</td>
    <td class="${status}">${status.toUpperCase()}</td>
`;
```

This is a very important JavaScript pattern.

---

## Template Literals

The backticks:

```js
`
`
```

allow us to write multi-line strings.

They also allow:

```js
${variable}
```

to insert JavaScript values into the string.

---

## `${name}`

If:

```text
name = "Rahul"
```

then:

```html
<td>${name}</td>
```

becomes:

```html
<td>Rahul</td>
```

---

## `${marks}`

If:

```text
marks = 75
```

then:

```html
<td>${marks}</td>
```

becomes:

```html
<td>75</td>
```

---

## `${status}`

If:

```text
status = "pass"
```

then:

```html
class="${status}"
```

becomes:

```html
class="pass"
```

---

# 🔠 Understanding `toUpperCase()`

```js
status.toUpperCase();
```

If:

```text
"pass"
```

then:

```text
"PASS"
```

If:

```text
"fail"
```

then:

```text
"FAIL"
```

So the table displays:

```text
PASS
```

or:

```text
FAIL
```

---

# 🔟 Add the Row to the Table

```js
document.getElementById('sBody').appendChild(tr);
```

First:

```js
document.getElementById('sBody');
```

finds:

```html
<tbody id="sBody">
```

Then:

```js
.appendChild(tr);
```

adds the newly created row.

Think:

```text
New <tr>
   ↓
appendChild()
   ↓
<tbody>
   ↓
Visible table
```

---

# 1️⃣1️⃣ Clear the Name Input

```js
document.getElementById('sName').value = '';
```

After adding the student, the name field becomes empty.

Before:

```text
Rahul
```

After:

```text
""
```

---

# 1️⃣2️⃣ Clear the Marks Input

```js
document.getElementById('sMarks').value = '';
```

This clears the marks field.

The user can now enter another student.

---

# 🔍 `filterStudents(value)`

The second function is:

```js
function filterStudents(val) {

    // filtering logic

}
```

Its job is to show only the rows matching the selected filter.

Possible values:

```text
all
pass
fail
```

---

# 1️⃣3️⃣ Select All Student Rows

```js
document.querySelectorAll('#sBody tr')
```

This finds every `<tr>` inside:

```html
<tbody id="sBody">
```

Suppose there are:

```text
Rahul
Priya
Amit
Sneha
```

Then all four rows are selected.

---

# 1️⃣4️⃣ Loop Through Rows

```js
.forEach(r => {
```

`forEach()` executes the code once for every student row.

```text
Rahul  → execute
Priya  → execute
Amit   → execute
Sneha  → execute
```

The variable `r` represents the current row.

You could also write:

```js
.forEach(row => {
```

which is more descriptive.

---

# 1️⃣5️⃣ Check the Row's Class

```js
r.classList.contains(val)
```

This checks whether the current row contains a particular CSS class.

Example:

```html
<tr class="pass">
```

Then:

```js
r.classList.contains('pass');
```

returns:

```text
true
```

But:

```js
r.classList.contains('fail');
```

returns:

```text
false
```

---

# 1️⃣6️⃣ Understand the Filter Condition

```js
r.style.display =
    (val === 'all' || r.classList.contains(val))
        ? ''
        : 'none';
```

This line uses:

- `style.display`
- `===`
- `||`
- `classList.contains()`
- ternary operator

Let's break it down.

---

## `val === 'all'`

If the user selected:

```text
All
```

then:

```text
val = "all"
```

So:

```js
val === 'all'
```

is:

```text
true
```

Every row should be visible.

---

## `r.classList.contains(val)`

If the user selected:

```text
pass
```

then JavaScript checks:

```js
r.classList.contains('pass');
```

Only rows with:

```html
class="pass"
```

will match.

---

## `||`

The operator:

```js
||
```

means **OR**.

Therefore:

```js
val === 'all' || r.classList.contains(val)
```

means:

> Show the row if the user selected All OR if the row has the selected status.

---

# 1️⃣7️⃣ `style.display`

If the condition is true:

```js
r.style.display = '';
```

The row is shown.

If false:

```js
r.style.display = 'none';
```

The row is hidden.

So:

```text
Condition true
     ↓
display = ''
     ↓
SHOW

Condition false
     ↓
display = 'none'
     ↓
HIDE
```

---

# 🔥 Complete Filtering Flow

```text
User selects filter
        ↓
filterStudents(value)
        ↓
Find all <tr>
        ↓
forEach(row)
        ↓
Check selected value
        ↓
Is value "all"?
     /       \
   YES        NO
    ↓          ↓
  SHOW      Check class
               ↓
        Does class match?
           /       \
         YES        NO
          ↓          ↓
        SHOW       HIDE
```

---

# 🧪 Example

Suppose the table contains:

| Name | Marks | Status |
|---|---:|---|
| Rahul | 80 | PASS |
| Priya | 25 | FAIL |
| Amit | 65 | PASS |
| Sneha | 30 | FAIL |

If:

```text
Filter = pass
```

the application checks every row.

```text
Rahul → pass → SHOW
Priya → fail → HIDE
Amit  → pass → SHOW
Sneha → fail → HIDE
```

Result:

| Name | Marks | Status |
|---|---:|---|
| Rahul | 80 | PASS |
| Amit | 65 | PASS |

---

# 🧠 Full JavaScript Logic

The complete JavaScript is:

```js
function addStudent() {

    const name =
        document.getElementById('sName').value.trim();

    const marks =
        parseInt(document.getElementById('sMarks').value);

    if (!name || isNaN(marks) || marks < 0 || marks > 100) {
        alert('Enter valid name and marks (0-100)');
        return;
    }

    const status = marks >= 40 ? 'pass' : 'fail';

    const tr = document.createElement('tr');

    tr.className = status;

    tr.innerHTML = `
        <td>${name}</td>
        <td>${marks}</td>
        <td class="${status}">${status.toUpperCase()}</td>
    `;

    document.getElementById('sBody').appendChild(tr);

    document.getElementById('sName').value = '';
    document.getElementById('sMarks').value = '';
}


function filterStudents(val) {

    document.querySelectorAll('#sBody tr').forEach(r => {

        r.style.display =
            (val === 'all' || r.classList.contains(val))
                ? ''
                : 'none';

    });

}
```

---

# 🔥 Complete Logic Flow

```text
              ENTER STUDENT DATA
                       │
                       ▼
                  addStudent()
                       │
                       ▼
                 Read name
                       │
                       ▼
                 Read marks
                       │
                       ▼
                  Validate
                  /      \
               Invalid    Valid
                 │          │
                 ▼          ▼
               Alert    Determine status
                 │          │
                 ▼          ▼
                STOP     Pass / Fail
                            │
                            ▼
                     Create <tr>
                            │
                            ▼
                    Add table cells
                            │
                            ▼
                     Append to DOM
                            │
                            ▼
                     Clear inputs


              SELECT FILTER
                    │
                    ▼
             filterStudents()
                    │
                    ▼
              Find all rows
                    │
                    ▼
                forEach()
                    │
                    ▼
             Check row class
                    │
                ┌───┴───┐
                ▼       ▼
              Match   No Match
                │       │
                ▼       ▼
              SHOW     HIDE
```

---

# 🎯 What This Coding Question Tests

This question combines many common frontend coding concepts:

```text
DOM Selection
      +
Input Handling
      +
String Manipulation
      +
Number Conversion
      +
Validation
      +
Conditional Logic
      +
Ternary Operator
      +
Dynamic Element Creation
      +
Template Literals
      +
DOM Insertion
      +
Loops
      +
Class Checking
      +
Dynamic Filtering
      +
CSS Manipulation
```

---

# ⭐ Important Patterns to Remember

## Pattern 1 — Read an Input

```js
const value =
    document.getElementById('id').value;
```

---

## Pattern 2 — Convert Input

```js
const marks =
    parseInt(input.value);
```

---

## Pattern 3 — Validate

```js
if (invalidCondition) {
    alert('Invalid');
    return;
}
```

---

## Pattern 4 — Create an Element

```js
const row = document.createElement('tr');
```

---

## Pattern 5 — Add HTML

```js
row.innerHTML = `
    <td>${value}</td>
`;
```

---

## Pattern 6 — Add to Page

```js
parent.appendChild(row);
```

---

## Pattern 7 — Find Multiple Elements

```js
document.querySelectorAll('selector');
```

---

## Pattern 8 — Loop

```js
elements.forEach(element => {
    // logic
});
```

---

## Pattern 9 — Check Class

```js
element.classList.contains('pass');
```

---

## Pattern 10 — Show / Hide

```js
element.style.display = '';
```

```js
element.style.display = 'none';
```

---

# 🏆 Accenture Frontend Coding Pattern

When you see a similar question, think:

```text
USER INPUT
    ↓
SELECT ELEMENT
    ↓
READ .value
    ↓
CONVERT DATA
    ↓
VALIDATE
    ↓
PROCESS LOGIC
    ↓
CREATE / MODIFY DOM
    ↓
APPEND / UPDATE
    ↓
CLEAR INPUT
```

For filtering:

```text
SELECT ALL
    ↓
LOOP
    ↓
CHECK CONDITION
    ↓
SHOW / HIDE
```

---

# 📝 Quick Revision Cheat Sheet

| Concept | Meaning |
|---|---|
| `getElementById()` | Select one element by ID |
| `.value` | Read input value |
| `.trim()` | Remove outer spaces |
| `parseInt()` | Convert text to integer |
| `isNaN()` | Check for invalid number |
| `createElement()` | Create an element |
| `.className` | Assign CSS class |
| `.innerHTML` | Insert HTML |
| `${}` | Insert JS value into template literal |
| `appendChild()` | Add child to DOM |
| `querySelectorAll()` | Select multiple elements |
| `forEach()` | Loop through elements |
| `classList.contains()` | Check class |
| `style.display` | Show/hide |
| `? :` | Ternary operator |
| `||` | OR |
| `===` | Strict equality |
| `return` | Stop function |

---

# 💡 Don't Memorize the Code

Remember this:

```text
READ
 ↓
VALIDATE
 ↓
DECIDE
 ↓
CREATE
 ↓
APPEND
 ↓
CLEAR
```

And for filtering:

```text
SELECT
 ↓
LOOP
 ↓
CHECK
 ↓
SHOW / HIDE
```

Once you understand these two flows, you can solve many similar JavaScript DOM questions without memorizing the exact code.

---

<p align="center">
  <b>🚀 Practice Goal</b>
</p>

<p align="center">
  <b>Try rebuilding this project from scratch without looking at the solution.</b>
</p>

<p align="center">
  READ → VALIDATE → DECIDE → CREATE → APPEND → FILTER
</p>

---

<p align="center">
  ⭐ <i>Built for JavaScript DOM practice and placement preparation.</i> ⭐
</p>
