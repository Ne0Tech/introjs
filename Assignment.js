/*
Unit 01 - Intro to JavaScript - Block 01 - Variables, Syntax, Comments
Pair Programming Lab: Variables Boot Camp
Names: ______________________  ______________________  (______________________)

Instructions:
- Complete each TODO.
- Run the file after each section to test.
- DO NOT use anything we haven't learned yet:
  ✅ let, const, reassignment (for let), console.log, comments, basic syntax
  🚫 no functions, no if statements, no loops, no arrays, no objects, no typeof, no template literals

Roles (switch halfway)

Driver: types, runs the code, shares screen/keyboard
Navigator: reads instructions, watches for mistakes, explains “why”
(Optional 3rd) Coach: checks requirements, tests edge cases, keeps time

0–3 min: Assign roles, create file, run it once (expect failures).
3–15 min: Complete Parts A–C + run tests after each part.
15 min: Switch Driver/Navigator.
15–25 min: Complete Parts D–E.
25–30 min: Clean up: confirm all output matches, add names, push to GitHub

Each person will turn in a complete copy. So make sure all work is present for both students.

When finished turn this in on Github and Canvas.

This portion is worth 15 points.
*/

console.log("\n=== PART A: Stop Repeating Yourself (Variables) ===\n");

// ------------------------------------------------------------
// 1) Repetition Fix
// Goal: print the SAME 3 lines TWICE, but only type each message ONCE.
// Required lines:
// Welcome!
// Here are the rules...
// Be kind.
// ------------------------------------------------------------

// TODO: Create 3 variables: msgWelcome, msgRules, msgKind
// TODO: Print them in order, then print them again in the same order

let msgWelcome = "TODO";
let msgRules = "TODO";
let msgKind = "TODO";

// TODO: Print twice (6 total console.log lines using ONLY the variables)
console.log(msgWelcome);
console.log(msgRules);
console.log(msgKind);
console.log(msgWelcome);
console.log(msgRules);
console.log(msgKind);

console.log("\n=== PART B: let vs const (and Reassignment) ===\n");

// ------------------------------------------------------------
// 2) let Practice (can change)
// Create a let variable called nickname and set it to "Ace"
// Print it
// Reassign nickname to "Wizard"
// Print it again
// ------------------------------------------------------------

let nickname = "TODO";
console.log("nickname =", nickname);

// TODO: reassign nickname
nickname = "TODO";
console.log("nickname =", nickname);

// ------------------------------------------------------------
// 3) const Practice (should not change)
// Create a const variable called schoolName set to "Warren Central"
// Print it
// IMPORTANT: Do NOT reassign it.
// ------------------------------------------------------------

const schoolName = "TODO";
console.log("schoolName =", schoolName);

console.log("\n=== PART C: Syntax + Comments (Fix the Broken Code) ===\n");

// ------------------------------------------------------------
// 4) Fix the broken lines (one at a time)
// Directions:
// - Uncomment ONE line
// - Fix the syntax
// - Run the file to confirm it works
// - Then move to the next line
// ------------------------------------------------------------

// console.log("This string never closes);
// console.log('This one also never closes);
// console.log("Missing a parenthesis";
// console.log "console.log needs parentheses";
// console.log("Extra parenthesis"))

// ------------------------------------------------------------
// 5) Comment Check
// Add a comment ABOVE each line explaining what it does.
// ------------------------------------------------------------

// TODO comment: ________________________________________________
let city = "Indianapolis";

// TODO comment: ________________________________________________
console.log("city =", city);

console.log("\n=== PART D: Naming Rules + Clean Output ===\n");

// ------------------------------------------------------------
// 6) Good variable names (camelCase)
// Create these variables exactly (spelling matters):
// - firstName  (your first name)
// - lastName   (your last name)
// - classPeriod (example: "2nd" or "B" or "3")
// Then print them like this (exact labels):
// firstName = __
// lastName = __
// classPeriod = __
// ------------------------------------------------------------

let firstName = "TODO";
let lastName = "TODO";
let classPeriod = "TODO";

console.log("firstName =", firstName);
console.log("lastName =", lastName);
console.log("classPeriod =", classPeriod);

// ------------------------------------------------------------
// 7) Identifiers: what's allowed?
// For each line below, write YES or NO (in a comment) if it is a valid variable name.
// DO NOT create the variables. Just answer in comments.
// ------------------------------------------------------------

// 7a) let 2cool = "nope";        // YES / NO: ________
// 7b) let my_name = "ok";        // YES / NO: ________
// 7c) let class = "reserved";    // YES / NO: ________
// 7d) let firstName = "ok";      // YES / NO: ________
// 7e) let $total = 10;           // YES / NO: ________

console.log("\n=== PART E: Final Team Challenge (All Variables, No New Tools) ===\n");

// ------------------------------------------------------------
// 8) Build a simple “profile” printout using ONLY variables + console.log
//
// Requirements:
// - Create 5 variables:
//   1) const courseTitle = "Intro to JavaScript"
//   2) let studentOne = "<name>"
//   3) let studentTwo = "<name>"
//   4) const assignmentName = "Variables Boot Camp"
//   5) let status = "IN PROGRESS"
//
// - Print EXACTLY this format (labels must match):
// Course: Intro to JavaScript
// Assignment: Variables Boot Camp
// Pair: <studentOne> & <studentTwo>
// Status: IN PROGRESS
//
// - Then reassign status to "DONE" and print ONLY this line:
// Status: DONE
// ------------------------------------------------------------

const courseTitle = "TODO";
let studentOne = "TODO";
let studentTwo = "TODO";
const assignmentName = "TODO";
let status = "TODO";

console.log("Course:", courseTitle);
console.log("Assignment:", assignmentName);
console.log("Pair:", studentOne, "&", studentTwo);
console.log("Status:", status);

// TODO: reassign status to "DONE"
status = "TODO";
console.log("Status:", status);

// ============================
// TEST ZONE (Do not delete)
// ============================
// There are no “automated” tests yet in U1B1 (we haven’t learned that).
// Your “test” is running the file and checking the output carefully.