# 🎓 Student Result Manager

```{=html}
<p align="center">
```
`<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=36BCF7&center=true&vCenter=true&width=650&lines=Student+Result+Manager;JavaScript+DOM+Practice;Add+%7C+Classify+%7C+Filter+Students" alt="Typing animation" />`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<b>`{=html}🚀 A beginner-friendly JavaScript DOM project designed for
coding-round practice.`</b>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">`{=html}
`<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">`{=html}
`<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## ✨ Project Overview

The **Student Result Manager** is a small interactive web application
where users can:

-   👤 Enter a student's name
-   📝 Enter marks between `0` and `100`
-   ✅ Automatically classify the student as **PASS**
-   ❌ Automatically classify the student as **FAIL**
-   📋 Dynamically add students to a table
-   🔎 Filter students by **All / Pass / Fail**
-   🧹 Automatically clear the input fields after adding a student

The main purpose is not the UI --- it is to practice **JavaScript DOM
manipulation and logic**.

------------------------------------------------------------------------

## 🎯 Learning Objectives

After completing this project, you should understand:

  Concept                  What you learn
  ------------------------ ---------------------------------
  `getElementById()`       Selecting an HTML element
  `.value`                 Reading input values
  `.trim()`                Removing extra spaces
  `parseInt()`             Converting text to an integer
  `isNaN()`                Checking invalid numbers
  `if / else`              Validation and decision making
  Ternary operator         Short `if / else` logic
  `createElement()`        Creating HTML using JavaScript
  `.className`             Assigning CSS classes
  `.innerHTML`             Inserting HTML dynamically
  `appendChild()`          Adding an element to the page
  `querySelectorAll()`     Selecting multiple elements
  `.forEach()`             Looping through elements
  `classList.contains()`   Checking whether a class exists
  `.style.display`         Showing/hiding elements

------------------------------------------------------------------------

# 📁 Project Structure

``` text
student-result-manager/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

### Responsibilities of each file

``` text
index.html
   ↓
Page structure

style.css
   ↓
Appearance / styling

app.js
   ↓
Logic / interaction

README.md
   ↓
Documentation
```

------------------------------------------------------------------------

# 🧠 How the JavaScript Works

The JavaScript has **two main functions**:

``` js
addStudent()
filterStudents()
```

------------------------------------------------------------------------

# 1️⃣ `addStudent()`

The `addStudent()` function runs when the user clicks:

``` text
Add Student
```

### Complete flow

``` text
User enters Name + Marks
          ↓
       Read input
          ↓
       Validate data
          ↓
    ┌─────┴─────┐
    │           │
 Invalid      Valid
    │           │
 Alert          ↓
 Return     Determine status
                ↓
          Create <tr>
                ↓
          Add <td> cells
                ↓
          Append to table
                ↓
          Clear inputs
```

------------------------------------------------------------------------

## Step 1 --- Read the name

``` js
const name = document.getElementById('studentName').value.trim();
```

### Breakdown

``` js
document
```

represents the current HTML document.

``` js
.getElementById('studentName')
```

finds the input with that ID.

``` js
.value
```

gets what the user typed.

``` js
.trim()
```

removes spaces from the beginning and end.

### Example

``` js
"   Rahul   ".trim()
```

becomes:

``` text
"Rahul"
```

------------------------------------------------------------------------

# Step 2 --- Read the marks

``` js
const marks = parseInt(
    document.getElementById('studentMarks').value
);
```

Input values are received as text, so we convert them to an integer.

``` js
parseInt("85")
```

becomes:

``` text
85
```

Now JavaScript can perform numerical comparisons:

``` js
marks >= 40
marks < 0
marks > 100
```

------------------------------------------------------------------------

# Step 3 --- Validate the input

``` js
if (!name || isNaN(marks) || marks < 0 || marks > 100) {
    alert("Invalid name or marks");
    return;
}
```

There are four checks.

### `!name`

Checks whether the name is empty.

``` text
name = ""
!name → true
```

### `isNaN(marks)`

Checks whether marks are not a valid number.

``` js
isNaN(85)   // false
isNaN(NaN)  // true
```

### `marks < 0`

Prevents negative marks.

### `marks > 100`

Prevents marks above 100.

------------------------------------------------------------------------

## Why `||`?

`||` means **OR**.

``` js
A || B || C || D
```

If **any one** condition is true, the entire condition becomes true.

Example:

``` text
Name = Rahul
Marks = 105

!name          → false
isNaN(marks)   → false
marks < 0      → false
marks > 100    → true

false || false || false || true
                  ↓
                true
```

The input is rejected.

------------------------------------------------------------------------

# Step 4 --- Stop with `return`

``` js
return;
```

`return` immediately stops the function.

Without it, JavaScript would continue executing the code after the
validation error.

``` text
Invalid input
     ↓
   alert
     ↓
  return
     ↓
 STOP
```

------------------------------------------------------------------------

# Step 5 --- Determine Pass or Fail

``` js
const status = marks >= 40 ? 'pass' : 'fail';
```

This is the **ternary operator**.

General syntax:

``` js
condition ? valueIfTrue : valueIfFalse
```

So:

``` js
marks >= 40 ? 'pass' : 'fail'
```

means:

``` text
marks >= 40?
    │
    ├── YES → pass
    │
    └── NO  → fail
```

### Examples

``` js
75 >= 40
```

→ `pass`

``` js
25 >= 40
```

→ `fail`

------------------------------------------------------------------------

# Step 6 --- Create a table row

``` js
const row = document.createElement('tr');
```

This creates a new HTML element using JavaScript.

It creates:

``` html
<tr></tr>
```

At this moment, the row is **not yet visible** on the page.

It only exists in JavaScript memory.

------------------------------------------------------------------------

# Step 7 --- Give the row a class

``` js
row.className = status;
```

If:

``` js
status = "pass";
```

then:

``` html
<tr class="pass">
```

If:

``` js
status = "fail";
```

then:

``` html
<tr class="fail">
```

This is useful because CSS can style the two statuses differently.

------------------------------------------------------------------------

# Step 8 --- Insert the student's data

``` js
row.innerHTML = `
    <td>${name}</td>
    <td>${marks}</td>
    <td class="${status}">${status.toUpperCase()}</td>
`;
```

The backticks create a **template literal**.

`${...}` allows JavaScript variables to be inserted into the HTML.

If:

``` js
name = "Rahul";
marks = 85;
status = "pass";
```

the generated HTML becomes approximately:

``` html
<tr class="pass">
    <td>Rahul</td>
    <td>85</td>
    <td class="pass">PASS</td>
</tr>
```

------------------------------------------------------------------------

# Step 9 --- `toUpperCase()`

``` js
status.toUpperCase()
```

converts:

``` text
pass
```

into:

``` text
PASS
```

and:

``` text
fail
```

into:

``` text
FAIL
```

Notice:

``` text
class       → pass
display text → PASS
```

The lowercase class is useful for filtering.

------------------------------------------------------------------------

# Step 10 --- Add the row to the table

``` js
document.getElementById('studentBody').appendChild(row);
```

First:

``` js
document.getElementById('studentBody')
```

finds the table body.

Then:

``` js
.appendChild(row)
```

adds the newly created row.

### Remember this pattern

``` text
createElement()
      ↓
innerHTML
      ↓
appendChild()
```

Meaning:

``` text
Create → Fill → Add to page
```

------------------------------------------------------------------------

# Step 11 --- Clear the inputs

``` js
document.getElementById('studentName').value = '';
document.getElementById('studentMarks').value = '';
```

After successfully adding the student, both input fields become empty.

------------------------------------------------------------------------

# 2️⃣ `filterStudents()`

The second function handles:

``` text
All
Pass Only
Fail Only
```

The function receives the selected value:

``` js
function filterStudents(value) {
```

Possible values:

``` text
"all"
"pass"
"fail"
```

------------------------------------------------------------------------

# Step 1 --- Select all student rows

``` js
document.querySelectorAll('#studentBody tr')
```

This means:

> Find every `<tr>` inside `#studentBody`.

For example:

``` text
<tr class="pass">
<tr class="fail">
<tr class="pass">
<tr class="fail">
```

------------------------------------------------------------------------

# Step 2 --- Loop through every row

``` js
.forEach(row => {
```

`forEach()` executes the code once for every row.

``` text
row 1 → check
row 2 → check
row 3 → check
row 4 → check
```

------------------------------------------------------------------------

# Step 3 --- Check the selected filter

The core logic is:

``` js
row.classList.contains(value)
```

Suppose:

``` html
<tr class="pass">
```

Then:

``` js
row.classList.contains('pass')
```

returns:

``` text
true
```

But:

``` js
row.classList.contains('fail')
```

returns:

``` text
false
```

So `classList.contains()` asks:

> Does this element have this class?

------------------------------------------------------------------------

# Step 4 --- Show or hide

The filtering logic can be expressed as:

``` js
if (value === 'all') {
    // show row
}
else if (row.classList.contains(value)) {
    // show row
}
else {
    // hide row
}
```

Using a ternary operator, the same idea becomes:

``` js
row.style.display =
    (value === 'all' || row.classList.contains(value))
        ? ''
        : 'none';
```

### Meaning

``` text
                 Is filter "all"?
                       │
                  YES ─┴─ NO
                   ↓       ↓
                 SHOW    Has selected class?
                              │
                         YES ─┴─ NO
                          ↓       ↓
                        SHOW    HIDE
```

------------------------------------------------------------------------

# 🔥 Complete Logic in One Diagram

``` text
                  STUDENT MANAGER
                         │
             ┌───────────┴───────────┐
             │                       │
        addStudent()           filterStudents()
             │                       │
       Read inputs             Get filter value
             │                       │
         Validate              Get all rows
             │                       │
       ┌─────┴─────┐            forEach()
       │           │                 │
    Invalid      Valid              ↓
       │           │          Check row class
     Alert         ↓                 │
     Return    Pass / Fail     ┌────┴────┐
                   │           │         │
             Create <tr>      Match    No match
                   │           │         │
             Add table cells  SHOW      HIDE
                   │
             appendChild()
                   │
             Clear inputs
```

------------------------------------------------------------------------

# 🧪 Example

### Input

``` text
Name: Rahul
Marks: 82
```

JavaScript calculates:

``` js
status = "pass";
```

Creates:

``` html
<tr class="pass">
    <td>Rahul</td>
    <td>82</td>
    <td class="pass">PASS</td>
</tr>
```

------------------------------------------------------------------------

### Another student

``` text
Name: Amit
Marks: 25
```

Creates:

``` html
<tr class="fail">
    <td>Amit</td>
    <td>25</td>
    <td class="fail">FAIL</td>
</tr>
```

------------------------------------------------------------------------

### Select "Pass Only"

``` js
value = "pass";
```

JavaScript checks:

``` js
row.classList.contains("pass")
```

Result:

``` text
Rahul → true  → SHOW
Amit  → false → HIDE
```

------------------------------------------------------------------------

# ⚡ Important JavaScript Patterns to Remember

These patterns are especially useful for beginner DOM coding questions.

### 1. Get input

``` js
const value = document.getElementById("id").value;
```

### 2. Convert input to number

``` js
const num = parseInt(value);
```

### 3. Validate

``` js
if (!value || isNaN(num)) {
    return;
}
```

### 4. Conditional value

``` js
const result = condition ? "yes" : "no";
```

### 5. Create element

``` js
const element = document.createElement("tr");
```

### 6. Insert HTML

``` js
element.innerHTML = `...`;
```

### 7. Add to page

``` js
parent.appendChild(element);
```

### 8. Select multiple elements

``` js
document.querySelectorAll("...");
```

### 9. Loop

``` js
elements.forEach(element => {
    // logic
});
```

### 10. Check class

``` js
element.classList.contains("pass");
```

### 11. Hide element

``` js
element.style.display = "none";
```

### 12. Show element

``` js
element.style.display = "";
```

------------------------------------------------------------------------

# 🎯 Coding Round Checklist

Before considering this problem complete, verify:

-   [ ] Empty name is rejected
-   [ ] Marks below `0` are rejected
-   [ ] Marks above `100` are rejected
-   [ ] Non-numeric marks are rejected
-   [ ] `40` is **PASS**
-   [ ] `39` is **FAIL**
-   [ ] Student row is created dynamically
-   [ ] Correct class is assigned
-   [ ] Inputs are cleared after successful addition
-   [ ] All filter shows everyone
-   [ ] Pass filter shows only pass students
-   [ ] Fail filter shows only fail students

------------------------------------------------------------------------

# 🚀 What This Question Is Testing

This looks like a simple UI, but the coding concepts are important:

``` text
Input Handling
      +
Validation
      +
Conditional Logic
      +
DOM Creation
      +
DOM Manipulation
      +
Array/NodeList Iteration
      +
CSS Class Handling
      +
Dynamic Filtering
```

Master these patterns and you'll be able to solve many **basic
JavaScript frontend coding-round questions**, not just this student
example.

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<b>`{=html}💡 Don't memorize the code. Understand the flow: Read →
Validate → Decide → Create → Add → Filter.`</b>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
⭐ `<i>`{=html}Practice it once without looking at the
solution.`</i>`{=html} ⭐
```{=html}
</p>
```
