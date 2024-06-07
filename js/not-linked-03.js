// Tablice

const planets = ["Earth", "Mars", "Venus"]; // tablica ciągów
const numbers = [1, 2, 3, 4, 5]; // tablica liczb

const planets = ["Earth", "Mars", "Venus"];
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'
console.log(planets[9]); // undefined

console.log(planets.length); // 3

const fruits = ["apple", "plum", "pear", "orange"];
firstElement = fruits[0];
secondElement = fruits[1];
lastElement = fruits[fruits.length - 1];

const planets = ["Earth", "Mars", "Venus"];
const firstElement = planets[0];
console.log(firstElement); // 'Earth'

const planets = ["Earth", "Mars", "Venus", "Uranus"];
planets[0] = "Jupiter";
planets[2] = "Neptune";
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

//----------
const planets = ["Earth", "Mars", "Venus"];

if (planets.length >= 3) {
  console.log("3 or more elements"); // 3 or more elements
} else {
  console.log("2 or less elements");
}
//--------

function getOrderQuantity(order) {
  return order.length;
}

console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // 4
//---------

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); // "Venus"
//----------

// pierwszy element to indeks ostatniego elementu w tablicy array
// drugi element to wartość ostatniego elementu w tablicy array

function getLastElementMeta(array) {
  const newArray = [array.length - 1, array[array.length - 1]];
  return newArray;
}
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // [3, "banana"]
//----------

// zwraca tablicę składającą się z dwóch elementów - pierwszego i ostatniego elementu parametru array

function getExtremeElements(array) {
  const newArray = [array[0], array[array.length - 1]];
  return newArray;
}
console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
//--------

// przez odniesienie (by reference)
// Tablice (typ złożony) są przypisywane przez odniesienie, co oznacza, że zmienna po prostu otrzymuje odnośnik (wskaźnik w pamięci) do istniejącej tablicy.

const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

b[0] = "Ajax";
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"]
//----------

// Dwie tablice nigdy nie są sobie równe, nawet jeśli są puste lub mają te same elementy.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false
console.log([] === []); // false

//-------
const array = [false];
const result = array ? "A" : "B";
console.log(result); // A
//-------

// Tablica → Ciąg
// Podczas konwersji tablicy na ciąg znaków, wszystkie elementy tablicy są łączone w pojedynczy ciąg znaków oddzielony przecinkami.

const array = [1, true, "Poly"];
console.log(String(array)); // "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

// Tablica → Liczba
// Podczas konwersji tablicy na liczbę algorytm składa się z dwóch kroków:
// najpierw tablica jest konwertowana na ciąg znaków,
// następnie ciąg ten jest konwertowany na wartość liczbową.
// Na przykład, pusta tablica jest konwertowana na pusty ciąg znaków, który jest konwertowany na liczbę 0.
console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

// Tablica → Wartość logiczna
// Podczas konwersji tablicy na wartość logiczną, każda tablica, nawet pusta, jest konwertowana na wartość true.
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if (emptyArray) {
  console.log("if is in progress"); //
} else {
  console.log("else is not performed");
}

if (nonEmptyArray) {
  console.log("if is in progress"); //
} else {
  console.log("else is not performed");
}
//----------

//---------  Metody tablicowe

// join(delimiter)

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

// split(delimiter)

const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

// konwertuje ciągi z snake_case (notacja wężowa z podkreśleniami) na kebab-case (notacja z myślnikami)
function transformString(string) {
  const words = string.split("_");
  return words.join("-");
}

transformString("user_age"); // "user-age"
transformString("price_per_droid"); // "price-per-droid"
//--------

// liczba słów oddzielonych spacjami i liczba/cena za słowo
function calculateEngravingPrice(message, pricePerWord) {
  const messageToNumber = message.split(" ").length;
  return messageToNumber * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50

//----------
// by konwertowała tablicę na ciąg znaków bez separatorów i zwracała liczbę znaków w wynikowym ciągu.

function getLength(array) {
  const arrayToNumber = array.join("").split(""); // wszytko złączyć a potem rozdzielić na znaki
  return arrayToNumber.length;
}
console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // 22 znaki
//----------

// Metoda tablicowa slice(begin, end) zwraca nową tablicę zawierającą kopię części oryginalnej tablicy bez jej zmiany. Kopia jest tworzona od indeksu begin do indeksu end, ale bez jego uwzględnienia.
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
//--------

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
const result = planets.slice(1, 3);
console.log(result); // ["Mars", "Venus"]
//---------

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]
//---------

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]
//--------

// Metoda concat(arr1, arr2, ..., arrN) służy do łączenia dwóch lub więcej tablic.
const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(firstArray); // ["Mercury", "Venus"];
console.log(secondArray); // ["Mars", "Jupiter"];
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// kolejność ma znaczenie

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Neptune"];

console.log(firstArray.concat(secondArray, thirdArray));
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

console.log(firstArray.concat(thirdArray, secondArray));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

//------

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);

console.log(allClients); // ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"] (6)

// Metoda tablicowa indexOf(elem) jest używana do określenia indeksu pierwszego wystąpienia elementu elem w tablicy. Zwraca indeks elementu, jeśli został znaleziony, lub -1, jeśli element nie został znaleziony.
const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

// Funkcja getSlice(array, value) przyjmuje dwa parametry:
// array - tablica dowolnych elementów
// value - wartość elementu tablicy do wyszukania
// Uzupełnij kod funkcji getSlice(array, value) tak, aby wyszukiwała wartość value w tablicy array i zwracała:
// pustą tablicę, jeśli nie ma elementu z wartością value w array
// podtablicę zaczynającą się od początku array i aż do elementu z wartością value włącznie, jeśli taki element znajduje się w array

function getSlice(array, value) {
  const position = array.indexOf(value);
  const newArray = array.slice(0, position + 1);
  return newArray;
}
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // []

//---------
//  push()
const planets = ["Earth", "Mars", "Venus"];

planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

//------
// Dzięki pętli możemy wykonywać powtarzające się operacje i używać metody push do dodawania nowych elementów do tablicy przy każdej iteracji. Jest to bardzo przydatne, gdy musimy utworzyć tablicę z elementami, które mogą być dodawane dynamicznie.
const tags = [];

for (let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
}

console.log(tags); // ["tag-0", "tag-1", "tag-2"]
//-----
// Metoda sort()
//-----
// Funkcja createArrayOfNumbers(min, max) przyjmuje dwa parametry:
// min - liczba całkowita, od której rozpoczynają się obliczenia
// max - liczba całkowita, do której włącznie będą wykonywane obliczenia
// Uzupełnij kod funkcji createArrayOfNumbers(min, max) tak, aby zwracała ona tablicę wszystkich liczb całkowitych od min do max włącznie (więc i <= max)

function createArrayOfNumbers(min, max) {
  let result = [];

  for (let i = min; i <= max; i++) {
    result.push(`${i}`);
  }
  return result;
}
console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]

//-----------

//-----  Iteracja po tablicy

// Iteracja po tablicy przy użyciu pętli for pozwala iterować po elementach tablicy i wykonywać określoną akcję na każdym elemencie.
// W poniższym przykładzie tablica planets zawiera nazwy planet, a pętla for służy do wyświetlania każdego elementu w konsoli.
// Początkowa wartość licznika i jest ustawiona na 0 i pętla jest kontynuowana dopóki i nie będzie mniejsze niż długość tablicy planets.length.
// Przy każdej iteracji pętli, planets[i] jest używane do uzyskania dostępu do elementów tablicy przez ich indeks i.
// Wartość licznika i wzrasta o 1 przy każdej iteracji (wyrażenie i += 1)
// Warunek i < planets.length zwróci true dla wartości licznika 0, 1 i 2. Gdy i osiągnie wartość 3, warunek stanie się false i pętla zostanie zatrzymana.
// Tak więc, przy każdej iteracji pętli, będzie wykonywany blok kodu wewnątrz nawiasów klamrowych, gdzie wyświetlany jest w konsoli bieżący element tablicy planets[i]. Wynikiem pętli będzie wyświetlenie nazw planet jedna po drugiej.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
// Earth, potem Mars, potem Venus
//---------
// Funkcja calculateTotalPrice(order) przyjmuje jeden parametr order - tablicę liczb. Uzupełnij funkcję tak, aby zwracała całkowitą sumę elementów z tablicy order.

function calculateTotalPrice(order) {
  let sum = 0;
  let elem = 0;
  for (let i = 0; i < order.length; i++) {
    elem = order[i];
    sum = elem + sum;
  }
  return sum;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
//------

// Funkcja getEvenNumbers(start, end) ma dwa parametry start i end, które są liczbami całkowitymi. Uzupełnij kod funkcji tak, aby zwracała ona tablicę wszystkich liczb parzystych od start do end. Jeśli nie ma liczb parzystych, tablica musi być pusta. Liczba parzysta to liczba, która jest podzielna przez 2 bez reszty (10 % 2 == 0). Użyj pętli for.

function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]

//-----  Metoda tablicowa includes()

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false
//---
const fruits = ["apple", "banana", "orange"];

if (fruits.includes("banana")) {
  console.log("The array has an element banana"); // The array has an element banana
} else {
  console.log("Array does not contain banana element");
}
//---
function checkStorage(storage, item) {
  const checkItem = item.toLowerCase();

  if (storage.includes(checkItem)) {
    return `${checkItem} is available to order!`;
  } else {
    return `Sorry! We are out of stock!`;
  }
}
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); // pear is available to order!
//---------

// Pętla for...of jest wygodnym sposobem iteracji po tablicy. Ciało pętli będzie wykonywane przy każdej iteracji. Jest to dobry zamiennik dla pętli for, jeśli nie potrzebujesz dostępu do licznika.

const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}
// Earth, potem Mars, potem Venus

// Pętla for...of zawsze iteruje po tablicy od pierwszego do ostatniego elementu i nie możesz ustawić warunku zakończenia pętli. Jeśli chcesz przedwcześnie zakończyć pętlę, użyj operatora break.
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}

//-------
// Uzupełnij kod funkcji calculateTotalPrice(order) tak, aby zwracała ona całkowitą sumę liczb w tablicy order. Do iteracji po tablicy użyj pętli for...of.

function calculateTotalPrice(order) {
  let sum = 0;
  for (const price of order) {
    sum += price;
  }
  return sum;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

//---- Funkcje (część 2)

// Możesz uzyskać dostęp do listy wszystkich argumentów za pomocą specjalnej zmiennej arguments. Gdy wywołujesz funkcję z argumentami, są one automatycznie tworzone wewnątrz funkcji i wypełniane przekazanymi wartościami argumentów. Jest pseudotablicą.

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5); // Arguments {0: 2, 1: 5, length: 2}

// Przyjrzyjmy się przykładowi użycia arguments w funkcji, która zwraca wynik mnożenia dowolnej liczby argumentów.
function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

//----------
// Jeśli podczas pracy z arguments musisz użyć metod tablicowych, wówczas pseudotablica musi zostać przekonwertowana na tablicę przy użyciu metody Array.from().

function foo() {
  // Zmienna args będzie zawierać pełną tablicę wszystkich argumentów
  const args = Array.from(arguments);
  return args.join("-");
}

foo(1, 2, 3); // Zwróci "1-2-3"
console.log(foo(1, 2, 3)); // 1-2-3

// Funkcja createReversedArray() może przyjmować dowolną liczbę argumentów. Zmodyfikuj kod funkcji tak, aby zwracała tablicę wszystkich argumentów, ale powinny one być w odwrotnej kolejności w tablicy. Oznacza to, że gdy wywołasz createReversedArray(1, 2, 3), funkcja powinna zwrócić tablicę [3, 2, 1]. Użyj pętli lub metody tablicowej toReversed(), która jest stosowana do tablicy i jako wynik zwraca nową tablicę z elementami w odwrotnej kolejności.
function createReversedArray() {
  const args = Array.from(arguments);
  return args.toReversed();
}
console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
//-----

// Funkcje mogą mieć parametry z wartościami domyślnymi, czyli parametry opcjonalne. Wartości te są używane, jeśli funkcja zostanie wywołana bez przekazania odpowiedniego argumentu dla tego parametru. Wartością domyślną może być dowolny typ danych.

function greet(username = "Guest") {
  console.log(`Hello, ${username}!`);
}

greet("Jacob"); // "Hello, Jacob!"
greet(); // "Hello, Guest!"

//-----------

function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step}`);

  for (let i = from; i <= to; i += step) {
    // ...
  }
}

count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(2, 15); // "from: 2, to: 15, step: 1"

// Funkcja calculateTax(amount, taxRate) deklaruje dwa parametry:
// amount - liczba, kwota, od której chcesz obliczyć podatek. Wymagany parametr.
// taxRate - liczba, stawka podatkowa. Parametr opcjonalny. Domyślną wartością jest 0.2.
// Uzupełnij kod funkcji tak, aby zwracała kwotę podatku, czyli wynik mnożenia kwoty przez stawkę podatku.

function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}

console.log(calculateTax(100, 0.1)); // 10
console.log(calculateTax(200, 0.3)); // 60
console.log(calculateTax(200)); // 40

//-------
// Wyrażenie funkcyjne (function expression) jest niczym innym jak zwykłą deklaracją zmiennej, której wartością jest funkcja. Jest to alternatywny sposób deklarowania funkcji.

// Składnia deklaracji funkcji, którą już znasz (function declaration)

function multiply(x, y, z) {
  console.log(x * y * z);
}

// Składnia wyrażenia funkcyjnego (function expression):

const multiply = function (x, y, z) {
  console.log(x * y * z);
};

// Różnica polega na tym, że wyrażenie funkcyjne (function expression) nie może być wywołane przed jego utworzeniem, tylko po, ponieważ jest to dosłownie deklaracja zmiennej const.
// ❌ Błąd! Wywołanie przed deklaracją nie działa
multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(x * y * z);
};

// ✅ Wywołanie po deklaracji działa
multiply(4, 5, 6);

// Natomiast deklaracja funkcji (function declaration) może zostać wywołana przed jej utworzeniem.
// ✅ Wywołanie działa przed deklaracją
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(x * y * z);
}

// ✅ Wywołanie działa po deklaracji
multiply(4, 5, 6);

//-------------

// Zakres (scope) — mechanizm określający dostępność zmiennych w wykonywanym kodzie.
// Łańcuch zakresów (scope chain) — zakresy tworzą hierarchię, więc zakresy podrzędne mają dostęp do zmiennych z zakresów nadrzędnych, ale nie odwrotnie.

for (let i = 0; i < 5; i += 1) {
  const a = 20;
  console.log(a); // 20

  if (i === 2) {
    const b = 30;
    console.log(a); // 20
    console.log(b); // 30
  }

  if (i === 3) {
    console.log(a); // 20

    // ❌ Błąd! Zmienna b nie jest dostępna w tym zakresie
    console.log(b);
  }
}

//-----------
function fnA() {
  console.log("Log inside fnA function before calling fnB");
  fnB();
  console.log("Log inside fnA function after fnB call");
}

function fnB() {
  console.log("Log inside fnB function");
}

console.log("Log before calling fnA");
fnA();
console.log("Log after calling fnA");

// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after fnB call"
// "Log after calling fnA"

//---------

function bar() {
  console.log("bar"); // 2
}

function baz() {
  console.log("baz"); // 3
}

function foo() {
  console.log("foo"); // 1
  bar();
  baz();
}

foo();
// Będzie foo z 1, potem bar z 2, potem baz z 3.

// Stos wywołań nie jest nieograniczony, ma skończoną ilość pamięci. Czasami w konsoli możesz zobaczyć błąd "Uncaught RangeError: Maximum call stack size exceeded" —- przepełnienie stosu (stack overflow).
// Może się to zdarzyć, gdy wywołania funkcji zapętlają się, tj. jeśli istnieje nieskończona liczba wywołań funkcji, a wynik nie jest zwracany, wówczas stos rośnie. Na przykład, jeśli funkcja wywołuje samą siebie, co nazywa się rekurencją. Po osiągnięciu limitu liczby wpisów na stosie wystąpi taki błąd i skrypt ulegnie awarii.
