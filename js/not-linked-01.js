"use strict";

const quantity = 17;
console.log(typeof quantity); // wyświetli "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // wyświetli "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // wyświetli "boolean"

let username;
console.log(typeof username); // wyświetli "undefined"

let status = null;
console.log(typeof status); // wyświetli "object"

let guestName = "Mango";
let roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

console.log(guestName.length); // 5

let username = "Dominika";
let message = `Username ${username} is ${username.length} characters long.`;
console.log(message); // Username Dominika is 8 characters long.

// składnia szablonów łańcuchowych (string templates)

const product = "Repair droid";
console.log(product.length); // 12
console.log(product.length - 1); // 11
console.log(product[3]); // 'a'
console.log(product[product.length - 1]); // 'd'

//
let age = 18;
const isAdult = age >= 18;
console.log(isAdult); //true

// Operatory nieścisłej równości, sprawdzają czy wartości operandów są równe
console.log(5 == 5); // true
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 != 5); // false

// Jest to złe, ponieważ niejawnie rzutuje ciągi znaków i wartości logiczne na liczbę
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

// Operatory ścisłej równości. Dobrze, konwersja typu nie jest wykonywana
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// W przeciwieństwie do operatorów nieścisłych, wyrażenia 5 === "5" i 1 === true zwrócą false, ponieważ operandy są różnych typów.

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = correctPassword === userPassword;
console.log(isValid); //false

// Jawna konwersja typów operandów:

console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// Niejawna konwersja:

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
console.log(numerical); // 26.5

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

// Funkcje

// Parametry są podawane w nawiasach po nazwie funkcji. Parametry to lista danych, których funkcja oczekuje po wywołaniu.

// Deklaracja parametrów x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Parametry są zmiennymi lokalnymi, które są dostępne tylko w treści funkcji.
// Parametry są oddzielane przecinkami. Funkcja może mieć dowolną liczbę parametrów lub nie mieć ich wcale — w takim przypadku używane są puste nawiasy.
// Podczas wywoływania funkcji można przekazać argumenty w nawiasach, które są wartościami zadeklarowanych parametrów funkcji.

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
// Jeśli ciało funkcji nie zawiera instrukcji return lub nie wskazuje na konkretną wartość, funkcja zwróci specjalną wartość undefined.

function add(a, b, c) {
  return a + b + c;
}

console.log(add(15, 27, 10)); // 52

//
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");
//

function foo() {
  // Zmienna lokalna
  const value = "I'm a local variable";
  // Można odwołać się do zmiennej globalnej
  console.log(value); // "I'm a local variable"
}

foo();
console.log(value); // ReferenceError: value is not defined
// Błąd: zmienna lokalna nie jest widoczna poza funkcją

// Zmienna value jest zadeklarowana w ciele funkcji foo, czyli w zakresie lokalnym funkcji, ograniczonym do ciała funkcji. Ta zmienna będzie dostępna tylko wewnątrz funkcji, a próba uzyskania do niej dostępu poza ciałem funkcji spowoduje błąd.
