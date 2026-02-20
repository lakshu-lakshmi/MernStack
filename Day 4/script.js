// ===============================
// Section 1 — Variables & Assignment
// ===============================

// 1 & 2. Declare variables, assign values, and print
let myName = "John";
let myAge = 25;
let isStudent = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);

// 3. Swap two numbers without a third variable
let a = 5;
let b = 10;

console.log("Before swap: a =", a, ", b =", b);

a = a + b; // 15
b = a - b; // 5
a = a - b; // 10

console.log("After swap: a =", a, ", b =", b);

// 4. What will be printed and why?
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x); // 10
// Because y gets a copy of x, not a reference.

// 5. Rewrite using const where appropriate
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area of circle:", area);


// ===============================
// Section 2 — Operators
// ===============================

// 6. Arithmetic operations
let num1 = 12;
let num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7. Predict the output
console.log(5 + "5");   // "55" (string concatenation)
console.log(5 - "2");   // 3 (string converted to number)
console.log(true + 1);  // 2 (true becomes 1)

// 8. Check whether a number is positive, negative, or zero
let number = -7;

if (number > 0) {
    console.log("The number is Positive");
} else if (number < 0) {
    console.log("The number is Negative");
} else {
    console.log("The number is Zero");
}

