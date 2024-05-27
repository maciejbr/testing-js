"use strict";

// Metody iteracji

// Funkcje wywołania zwrotnego

// Wartość funkcji (odnośnik do niej) może być przechowywana w zmiennej lub przekazywana jako argument do innej funkcji. W tym sensie funkcje nie różnią się od liczb, ciągów znaków czy tablic.

function greet(name) {
  return `Welcome ${name}!`;
}

// Wywołujemy funkcję greet i wyświetlamy wynik w konsoli
console.log(greet("Mango")); // "Welcome Mango!"

// Wyświetlamy funkcję greet w konsoli bez jej wywoływania
console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// Zadeklarujmy dwie funkcje — greet i notify, które akceptują nazwę użytkownika i wyświetlają różne komunikaty.
function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}
// Następnie zadeklarujmy kolejną funkcję registerGuest, która przyjmie dwa parametry.
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
// name — imię użytkownika,
// callback — odwołanie do funkcji, która ma zostać wywołana w treści registerGuest i przekazać jej nazwę użytkownika

// Teraz używamy zadeklarowanych funkcji podczas wywoływania registerGuest.
function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest("Mango", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

// Przekazujemy odwołanie do funkcji greet lub notify jako argument, więc zostaną one przypisane do parametru callback i wywołane wewnątrz funkcji registerGuest przy użyciu nawiasów.

//---------------------
// Funkcja makePizza zwraca ciąg znaków z wiadomością do klienta.
//Dopełnij kod w taki sposób, aby zmienna result zawierała wynik działania funkcji makePizza, a zmienna pointer zawierała referencję do funkcji makePizza.
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;
//---------

// Funkcja wywołania zwrotnego (callback) to funkcja, która jest przekazywana do innej funkcji jako argument, a ta z kolei używa przekazanej funkcji.

// W tym przykładzie funkcje greet i notify są funkcjami wywołania zwrotnego, ponieważ przekazujemy je jako argument do funkcji registerGuest. Nazwa parametru wywołania zwrotnego może być dowolna, najważniejsze jest, aby pamiętać, że wartość będzie funkcją.

// Funkcja wyższego rzędu (higher order function) to funkcja, która przyjmuje inne funkcje jako parametry lub zwraca funkcję jako wynik.
// W tym przykładzie jest to funkcja registerGuest, ponieważ oczekuje ona innej funkcji jako parametru i wywołuje ją.

// Funkcja makeMessage przyjmuje jeden parametr, nazwę pizzy do doręczenia, pizzaName, i zwraca ciąg znaków z wiadomością do klienta.

// Dopełnij funkcję makeMessage w taki sposób, aby oczekiwała jako drugiego parametru (parametr callback) funkcji zwrotnej, a następnie zwracała wynik jej wywołania. Funkcje deliverPizza lub makePizza będą przekazywane jako callback do makeMessage oraz będą oczekiwać jako argumentu nazwy gotowej pizzy, która powinna zostać doręczona.

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza)); // Pizza Royal Grand is being prepared, please wait...
console.log(makeMessage("Pepperoni", deliverPizza)); // Delivering Pepperoni pizza.

//-----
// Jeśli funkcja wywołania zwrotnego jest niewielka i musi zostać przekazana tylko jako argument, można ją zadeklarować bezpośrednio w momencie wywołania funkcji, do której przekazywane jest wywołanie zwrotne. Takie funkcje nazywane są wywołaniami zwrotnymi inline. Będą one dostępne tylko jako wartość parametru i nigdzie indziej w kodzie.

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Przekazujemy funkcję inline greet jako wywołanie zwrotne
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Przekazujemy funkcję inline notify jako wywołanie zwrotne
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

//-------

// Funkcja makePizza ma dwa parametry: pizzaName — nazwa pizzy oraz callback — funkcja zwrotna. Podczas uruchamiania, makePizza wywołuje ten callback, przekazując mu pizzaName jako argument.
// Dopełnij drugie wywołanie funkcji makePizza(pizzaName, callback), przekazując jako drugi argument inline'ową funkcję callback eatPizza(pizzaName). Callback eatPizza loguje ciąg "Eating pizza <nazwa pizzy>", gdzie <nazwa pizzy> jest wartością parametru pizzaName.

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  return `Eating pizza ${pizzaName}`;
});

//----
// Metoda forEach(callback) — to metoda iteracji tablicy, która jest używana do zastąpienia pętli for і for...of podczas pracy z kolekcją.

array.forEach(function callback(element, index, array) {
  // Ciało funkcji wywołania zwrotnego
});

// Iteruje po tablicy array element po elemencie;
// Wywołuje funkcję zwrotną dla każdego elementu tablicy;
// Zwraca undefined, nawet jeśli jawnie określisz wyrażenie po return.

// Funkcja wywołania zwrotnego metody forEach() zawsze otrzymuje następujące parametry: wartość bieżącego elementu tablicy element, jego indeks index i odwołanie do oryginalnej tablicy array. Zwróć uwagę, że nazwy parametrów są dowolne, ale ich kolejność(!) jest bardzo ważna. Ponadto, nie wszystkie parametry muszą być zadeklarowane. Jeśli potrzebujesz tylko pierwszego parametru element (jest to najczęstszy przypadek), następujące parametry index i array mogą zostać pominięte.

const numbers = [5, 10, 15, 20, 25];

// Klasyczna metoda for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Metoda iterująca forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Jedynym przypadkiem, w którym należy używać pętli for lub for...of do iteracji po tablicy, jest sytuacja, w której musisz przerwać pętlę. Metody forEach nie możesz przerwać, gdyż będzie ona zawsze iterować po tablicy do końca.

//---------

// Funkcja calculateTotalPrice(orderedItems) przyjmuje jeden parametr orderedItems — tablicę liczb, oraz oblicza całkowitą sumę jej elementów, która jest przechowywana w zmiennej totalPrice i zwracana jako wynik funkcji.

// Dopełnij wywołanie metody forEach, przekazując jej funkcję callback, która przy każdej iteracji dodaje wartość bieżącego elementu tablicy orderedItems do totalPrice.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (orderedItems) {
    totalPrice += orderedItems;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([164, 48, 291])); // 503

// Funkcja filterArray(numbers, value) przyjmuje jako pierwszy parametr tablicę liczb numbers i zwraca nową tablicę, zawierającą tylko te elementy oryginalnej tablicy, które są większe niż wartość drugiego parametru value. Jeśli takie wartości nie zostaną znalezione, funkcja zwraca pustą tablicę.

// Dokonaj refaktoryzacji funkcji w taki sposób, aby zamiast pętli for używała metody forEach.

function filterArray(numbers, value) {
  const result = [];
  numbers.forEach(function (number) {
    if (number > value) {
      result.push(number);
    }
  });
  return result;
}

console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

//-------
