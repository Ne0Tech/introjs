/*
Unit 01 - Intro to JavaScript - Block 01 - Variables, Syntax, Comments
Guided Notes
Students: fill in the blanks by writing answers in COMMENTS and completing the TODO code.
Run this file often to see what happens.

When finished turn this in via Github and Canvas.

This portion is worth 5 points.
*/

// ============================================================
// 0–3 min — Warm-Up: “Code déjà vu”
// Notice the repeated parts. What’s annoying about this?
// Variables help because they let us:
// ✅ store data for reuse
// ✅ reduce repetition
// ============================================================

console.log("Welcome!");
console.log("Here are the rules...");
console.log("Be kind.");
console.log("Welcome!");
console.log("Here are the rules...");
console.log("Be kind.");

console.log("------------------------------------------------------------");

// TODO: Use variables to remove repetition.
// 1) Create a variable called messageWelcome with: "Welcome!"
// 2) Create a variable called messageRules with: "Here are the rules..."
// 3) Create a variable called messageKind with: "Be kind."
// 4) Re-print the same 6 lines using ONLY the variables (no re-typing the text)

let messageWelcome = "Welcome!";
let messageRules = "Here are the rules...";
let messageKind = "Be kind.";

console.log(messageWelcome);
console.log(messageRules);
console.log(messageKind);
console.log(messageWelcome);
console.log(messageRules);
console.log(messageKind);

console.log("------------------------------------------------------------");

// ============================================================
// 3–7 min — What is a variable?
// A variable is a(n) word that stores a value.
// We create one by using the assignment operator and let or const
//
// Two big reasons we use variables:
// 1) Organization: reduces repetition
// 2) Reuse: change it by reassigning it, and it updates everywhere.
// ============================================================

// ============================================================
// 7–12 min — Variable keywords
// Fill in:
// let = used when the value might _____________________________
// const = used when the value should __________________________
// (We usually avoid var because it can cause ___________________)
// ============================================================

// Example: let (can change)
let username = "Ada";
console.log("username =", username);

username = "Grace"; // reassignment (changing the value)
console.log("username =", username);

// Example: const (should NOT change)
const school = "Warren Central";
console.log("school =", school);

// IMPORTANT:
// If you try to reassign a const, it will ______________________.

// ============================================================
// 12–18 min — Syntax basics (how JS is shaped)
// Fill in:
// - A statement often ends with a ____________________________.
// - JavaScript is ____________________________ sensitive (A != a).
// - Strings need quotes: __________________ or __________________.
// - Parentheses ( ) are used for _______________________________.
// - Single-line comments start with ___________________________.
// - Multi-line comments start with ________ and end with ______.
// ============================================================

// Single-line comment example:
// This line is a comment and does not run.

/*
Multi-line comment example:
These lines are comments and do not run.
*/

// TODO: Fix the lines below so they run correctly.
// Steps:
// 1) Uncomment ONE line at a time
// 2) Fix it
// 3) Run the file
// 4) Repeat

// console.log("This quote never closes);
// console.log('This one also never closes);
// console.log("Missing a parenthesis";
// console.log "console.log needs parentheses";

// ============================================================
// 18–26 min — Creating variables (declare + assign)
// Rules for variable names (identifiers):
// - Can include letters, numbers, _
// - Cannot start with a ____________________________
// - Cannot be a JavaScript _________________________
// - Use camelCase: _________________________________
// ============================================================

// TODO 1: Create a let variable called firstName and assign your first name as text.
let firstName = "TODO";

// TODO 2: Create a const variable called courseName and assign: "Intro to JavaScript"
const courseName = "TODO";

// TODO 3: Print both variables using console.log
console.log("firstName =", firstName);
console.log("courseName =", courseName);

// TODO 4: Reassign firstName to a different name (let can change).
// Then print it again.
firstName = "TODO";
console.log("firstName =", firstName);

// TODO 5: Try (but DO NOT leave it uncommented when submitting):
// Uncomment this line to see what happens when you reassign a const.
// courseName = "Something Else";

// ============================================================
// 26–30 min — Comments as “explaining your thinking”
// Add a comment above each line explaining what it does.
// ============================================================

// TODO: Add a comment above this line:
// ________________________________________________
let city = "Indianapolis";

// TODO: Add a comment above this line:
// ________________________________________________
console.log("city =", city);

console.log("------------------------------------------------------------");
console.log("✅ U1B1 Guided Notes complete once all blanks + TODOs are finished.");