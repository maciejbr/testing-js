"use strict";

let guestName = "Mango";
let roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

guestName = "Maciek";
roomNumber = 203;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"
console.log(guestName.length);

let username = "Dominika";
let message = `Username ${username} is ${username.length} characters long.`;
console.log(message); // Username Dominika is 8 characters long.

const product = "Repair droid";
console.log(product[product.length - 1]); // 'd'

let age = 18;
const isAdult = age >= 18;
console.log(isAdult); //true

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = correctPassword === userPassword;
console.log(isValid); //false

console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4

console.log("10" > 5); // true
console.log(10 > "5"); // true
console.log(5 > true); // true
console.log(5 < true); // false
console.log("5" < true); // false

console.log(Number.parseInt("5")); // 5
console.log(Number.parseInt("5.5")); // 5
console.log(Number.parseInt("5cm")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("cm5")); // NaN
console.log(Number.parseInt("")); // NaN
console.log(Number.parseInt("qweqwe")); // NaN

console.log(Number.parseFloat("5")); // 5
console.log(Number.parseFloat("5.5")); // 5.5
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("5cm")); // 5
console.log(Number.parseFloat("5.5cm")); // 5.5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat("qweqwe")); // NaN

let value = "24.5px";
const numerical = Number.parseFloat(value);
console.log(numerical); // 24.5

let value = "26.5px";
const numerical = parseFloat(value);
console.log(numerical); // 24.5

Number.parseFloat === parseFloat; // true

console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1
console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2
console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2
console.log(Math.max(20, 10, 50, 40)); // 50
console.log(Math.min(20, 10, 50, 40)); // 10
console.log(Math.random()); // liczba losowa z przedziału od 0 do 1, na przykład 0,2 ... 0,9166353649342294

console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
// LUB
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2)); //  "5.00"
console.log((8.762195).toFixed(4)); //  "8.7622"

// Deklaracja parametrów x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}
// Przekazywanie argumentów
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"
//
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
//
function multiply(x, y, z) {
  return x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // 30
//

function add(a, b, c) {
  return a + b + c;
}

console.log(add(15, 27, 10));
//
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");
//
