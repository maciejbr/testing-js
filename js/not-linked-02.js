"use strict";

//----------------- Rozgałęzienia

let price = 0;
const subscription = "pro";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 100
//------------------

let price = 0;
const subscription = "free";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 0
//------------------ If jest W funkcji !
function checkAge(age) {
  if (age >= 18) {
    return `You are an adult`;
  }
}

console.log(checkAge(21)); // You are an adult
//-------------------
const grade = 85;

if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}
//-------------------
function checkStorage(available, ordered) {
  if (available >= ordered) {
    return `Order is processed, our manager will contact you`;
  } else {
    return `Not enough goods in stock!`;
  }
}
console.log(checkStorage(100, 50)); //Order is processed, our manager will contact you
//-------------------

let grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}
//-------------------
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "The order is accepted, our manager will contact you";
  }
}
console.log(checkStorage(100, 50)); //The order is accepted, our manager will contact you
//--------------------

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // 'adult'
//---- operator trójargumentowy:
const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // 'adult'
//---------------------

const a = 5;
const b = 10;
let biggerNumber;

if (a > b) {
  biggerNumber = a;
} else {
  biggerNumber = b;
}

console.log(biggerNumber); // 10
//----
const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;

console.log(biggerNumber); // 10
//-------------------

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}
console.log(checkPassword("jqueryismyjam")); // Access granted

//-------------------- Switch

const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  default:
    console.log("The fruit is unknown"); // Apple(...)
}
//------
const day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("This is a working day");
    break;
  case 6:
  case 7:
    console.log("It is a day off");
    break;
  default:
    console.log("Invalid");
}
//------
function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;
      break;

    case "professional":
      return 20;
      break;

    case "organization":
      return 50;
      break;

    default:
      return "Invalid subscription type!";
  }
}

console.log(getSubscriptionPrice("professional")); // 20
//-----------------

// Operatory logiczne Boolean

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

if (null) {
  console.log("Block if");
} else {
  console.log("Block else"); // Block else
}

if (0) {
  console.log("Block if");
} else {
  console.log("Block else"); // Block else
}

if (5) {
  console.log("Block if");
} else {
  console.log("Block else"); // Block if
}

console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

//--------- &&
// Zwraca wartość ostatniego gdy oba "true", lub tego który pierwszy "false"

console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3

console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""
//----

const a = 20;
console.log(a > 10 && a < 30); // true && true -> true

const b = 50;
console.log(b > 10 && b < 30); // true && false -> false
console.log(b > 80 && b < 120); // false && true -> false
//-----
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if (screenWidth <= sm) {
  console.log("Mobile screen");
} else if (screenWidth > sm && screenWidth <= md) {
  console.log("Tablet screen");
} else if (screenWidth > md && screenWidth <= lg) {
  console.log("Desktop screen");
} else {
  console.log("Godzilla screen"); // Tablet screen
}
//------------
function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}

console.log(makeMessage("Radar", 6150)); // You picked Radar, price per item is 6150 credits

//---------- ||

console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

console.log(5 || 3); // 5
console.log(3 || 5); // 3

console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"

console.log(0 || false); // false
console.log(false || 0); // 0

console.log(null || ""); // ""
console.log("" || null); // null
//----
const a = 5;
console.log(a < 10 || a > 30); // true || false -> true

const b = 50;
console.log(b < 10 || b > 30); // false || true -> true

const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40
//----

function checkAccess(subType) {
  if (subType === "pro" || subType === "vip") {
    return true;
  } else {
    return false;
  }
}
console.log(checkAccess("pro")); // true
//------
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true

const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if (canChat) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!"); // Can type in chat!
}
//----
const isOnline = true;
const isBlocked = false;
const canChat = isOnline && !isBlocked;
// true && !false -> true && true -> true

if (canChat) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!"); // Can type in chat!
}

//------------ Metody ciągów znaków
// właściwości jak Length
const message = "JavaScript is awesome";
console.log(message.length); // 21

// Metody czyli wykonanie czynności na obiekcie.
// Wywołanie metody jest bardzo podobne do dostępu do właściwości, ale na końcu dodaje się nawiasy okrągłe, jak przy wywoływaniu funkcji:
objectName.method();
// np.:
const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

//--- slice
str.slice(startIndex, endIndex);

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

const fullName = "Jacob Mercer";
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer'

const fullName = "Jacob Mercer"; // slice() bez argumentów, tworzy dokładną kopię ciągu i zwraca ją.
console.log(fullName.slice()); // 'Jacob Mercer'
//---
const fullName = "Jacob Mercer";
const firstName = fullName.slice(0, 5);
const lastName = fullName.slice(6);

console.log(fullName); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer"

//---
function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring("Hello world", 8)); // Hello wo
//------
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"

const message = "Welcome to Bahamas!";
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"
//---
const brandName = "samsung";
const userInput = "saMsUng";
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true
//---
function normalizeInput(input, to) {
  return to === "upper" ? input.toUpperCase() : input.toLowerCase();
}
console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam"
console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM"

//------ includes
str.includes(substring);

const username = "Jacob Mercer";
console.log(username.includes("Jacob")); // true
console.log(username.includes("John")); // false
console.log(username.includes("Mercer")); // true
console.log(username.includes("Doe")); // false

console.log(username.includes("Jacob")); // true
console.log(username.includes("jacob")); // false
console.log(username.includes("Mercer")); // true
console.log(username.includes("mercer")); // false
//---
const message = "Please buy our stuff!";
const hasSpam = message.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}
// Warning: This message contains forbidden words.
//---
function checkForName(fullName, firstName) {
  firstName = firstName.toLowerCase();
  fullName = fullName.toLowerCase();

  if (fullName.includes(firstName)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForName("Jason Neis", "jAsOn")); // true
console.log(checkForName("Caty Stars", "Andromeda")); // false
//-----

const str = "Hello, world!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (metoda jest wrażliwa na wielkość liter)

console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (metoda jest wrażliwa na wielkość liter)

//-----
function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}
console.log(checkFileExtension("styles.css", ".css")); // File extension matches
console.log(checkFileExtension("app.js", ".html")); // File extension does not match

//----- index Of

// Metoda indexOf() jest używana do wyszukiwania w ciągu znaków. Zwraca:
// indeks pierwszego wystąpienia (indeks pierwszego znaku) podciągu, jeśli zostanie znaleziony, lub
// -1, jeśli podciąg nie zostanie odnaleziony

const message = "Welcome to Bahamas!";
const index = message.indexOf("to");
console.log(index); // 8
//---

const message = "Welcome to Bahamas!";
const index = message.indexOf("hello");
console.log(index); // -1

//--- trim
const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "

//---
function createFileName(name, ext) {
  return `${name.trim()}.${ext}`;
}
console.log(createFileName("report ", "csv")); // report.csv

//---

//---------- PĘTLE ----------//

//--- while - może nie wykonać się ani razu
let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}
//---
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
//---
// zwraca sumę wszystkich liczb całkowitych od jeden do tej liczby włącznie
function calculateTotal(number) {
  let totalNumber = 0;
  let i = 1;
  while (i <= number) {
    totalNumber += i;
    i++;
  }
  return totalNumber;
}
console.log(calculateTotal(3)); // 6
console.log(calculateTotal(24)); // 300
//------

// do ... while - wykonuje się co najmniej raz
let count = 0;

do {
  console.log(`Count: ${count}`);
  count += 1;
} while (count < 5);

// pętla FOR posiada zmienną-licznik LET
for (inicjalizacja; warunek; post - wyrażenie) {
  statement;
}
for (initialization; condition; afterthought) {
  statement;
}
//

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
// 0, 5, 10, 15, 20

//
for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}
// 20, 15, 10, 5, 0

// zwraca sumę wszystkich liczb całkowitych od jeden do tej liczby włącznie
function calculateTotal(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}
console.log(calculateTotal(4)); // 10
//

// Inkrementacja
// Prefiksowa inkrementacja (++value) najpierw zwiększa wartość zmiennej, a potem używa nowej wartości w wyrażeniu.
let x = 5;
const y = ++x;
console.log(x); // 6
console.log(y); // 6

// Postfiksowa inkrementacja (value++) najpierw używa bieżącej wartości zmiennej w wyrażeniu, a następnie wykonuje zwiększenie wartości.
let x = 5;
const y = x++;
console.log(x); // 6
console.log(y); // 5

// Dekrementacja
// Prefiksowa dekrementacja (--value) najpierw zmniejsza wartość zmiennej, a potem używa nowej wartości w wyrażeniu.
let x = 5;
const y = --x;
console.log(x); // 4
console.log(y); // 4

// Postfiksowa dekrementacja (value--) najpierw używa bieżącej wartości zmiennej w wyrażeniu, a następnie wykonuje zmniejszenie wartości.
let x = 5;
const y = x--;
console.log(x); // 4
console.log(y); // 5
//----
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// 0, 1, 2, 3, 4, 5

//
// zwraca sumę wszystkich parzystych liczb całkowitych od 1 do tej liczby włącznie
function calculateEvenTotal(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}
console.log(calculateEvenTotal(6)); // 2 + 4 + 6 = 12
//

// Aby do zmiennej number została zapisana pierwsza liczba w przedziale od start do end, która jest podzielna przez 5 bez reszty

const start = 6;
const end = 17;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);
//-----

function findNumberFromFive(max, target) {
  console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number ${target}, interrupt the cycle`);
      break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumberFromFive(20, 8);
console.log("Log after exiting function");
// Log in the body of the function before the cycle
// 5, 6, 7, 8;
//Found the number 8, interrupt the cycle;
// Log in body function after cycle,
// Log after exiting function

//----------
function getFileName(file) {
  const endIndex = file.indexOf(".");
  if (endIndex === -1) {
    return file;
  } else {
    return file.slice(0, endIndex);
  }
}
console.log(getFileName("styles.css"));
// Sprawdzała ona obecność rozszerzenia w nazwie pliku (nazwa rozszerzenia powinna być oddzielona od nazwy pliku kropką)
// Jeśli nazwa pliku nie zawiera rozszerzenia, aby zwracała nowy podciąg zawierający nazwę pliku bez zmian
//W przeciwnym razie zwracała podciąg z nazwą pliku, ale bez rozszerzenia
