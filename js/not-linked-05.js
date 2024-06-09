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

//----
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
  return `Delivering pizza ${pizzaName}`;
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

//------- Funkcje strzałkowe --------

// Funkcje strzałkowe (slangowo "strzałki") mają krótszą, bardziej zwięzłą składnię, która zmniejsza ilość kodu, zwłaszcza gdy funkcja jest mała lub gdy jest używana jako wywołanie zwrotne.
// Wszystkie strzałki są tworzone jako wyrażenie funkcji i muszą być przypisane do zmiennej.

// Zwykła deklaracja funkcji
function classicAdd(a, b, c) {
  return a + b + c;
}

// To samo, ale za pomocą funkcji strzałkowej
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// Słowo kluczowe function nie jest używane.
// Parametry są deklarowane natychmiast.
// Po parametrach następuje symbol => i ciało funkcji w nawiasach klamrowych.
// Jeśli istnieje kilka parametrów, należy je oddzielić przecinkami w nawiasach, pomiędzy znakiem równości = i strzałką =>.

const add = (a, b, c) => {
  return a + b + c;
};

// Jeśli jest tylko jeden parametr, można go zadeklarować bez nawiasów

const add = (a) => {
  return a + 5;
};

// Jeśli nie ma parametrów, konieczne są puste nawiasy.

const greet = () => {
  console.log("Hello!");
};

// Dokonaj refaktoryzacji funkcji calculateTotalPrice(), aby była zadeklarowana jako funkcja strzałkowa.

function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
// Ciało funkcji strzałkowej znajduje się po symbolu =>.
// Istnieją dwa sposoby zapisu: z nawiasami klamrowymi i bez nich.

// Zapis z nawiasami klamrowymi
// Jeżeli funkcja ma nawiasy klamrowe i musi zwrócić wartość, należy jawnie ustawić return. Nazywa się to zwrotem jawnym (explicit return).

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
// Ta składnia jest używana, gdy oprócz zwracania wartości musisz wykonać jakieś inne instrukcje w ciele funkcji.

// Zapis bez nawiasów klamrowych
// Jeśli funkcja jest bez nawiasów klamrowych, zwracany jest wynik wyrażenia następującego po =>. Nazywa się to zwrotem niejawnym (implicit return). W przykładzie zwracany jest wynik wyrażenia dodawania parametrów a, b i c.

const add = (a, b, c) => a + b + c;

// Składnia niejawnego zwracania znacznie zmniejsza "hałas" związany z deklarowaniem funkcji z ciałem i wartością zwracaną. Jest ona jednak odpowiednia tylko wtedy, gdy w ciele funkcji nie trzeba wykonywać żadnych dodatkowych instrukcji poza zwróceniem wartości.

// Klasyczna
function classicAdd(a, b, c) {
  return a + b + c;
}

// Stzałkowa
const arrowAdd = (a, b, c) => a + b + c;

// Dokonaj refaktoryzacji funkcji calculateTotalPrice(), aby używała niejawnego zwracania.

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//----
// Funkcje strzałkowe nie mają zmiennej lokalnej arguments, która zawiera wszystkie argumenty. Jeśli potrzebne jest zebranie wszystkich argumentów w tablicy, należy użyć operacji rest.

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

// Anonimowe funkcje strzałkowe świetnie nadają się do wywołań zwrotnych iteratorów tablic ze względu na krótszą składnię deklaracji, zwłaszcza jeśli kod w ciele funkcji nie jest zbyt złożony.

const numbers = [5, 10, 15, 20, 25];

// Zwykła funkcja anonimowa
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Strzałkowa funkcja anonimowa
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

// Możesz również zadeklarować funkcję zwrotną osobno i przekazać do niej odwołanie. Należy to zrobić, jeśli pojedyncza funkcja jest używana w kilku miejscach w programie lub jeśli jest ona złożona.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);

// Dokonaj refaktoryzacji funkcji calculateTotalPrice(orderedItems), zastępując jej deklarację funkcją strzałkową. Zastąp również funkcję callback przekazywaną do metody forEach() funkcją strzałkową.

// Przed
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}

// Po
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

// Zastąp deklarację funkcji filterArray() i callback dla metody forEach() funkcjami strzałkowymi.

// Przed
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

// Po
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};

//------------

//------------ Metody map і flatMap -----------

// Funkcja z efektem ubocznym — to funkcja, która podczas wykonywania może:
// zmieniać lub używać zmiennych globalnych,
// zmieniać wartość argumentów typu referencyjnego,
// wykonywać operacje wejścia/wyjścia itp.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Nastąpiła mutacja oryginalnych danych - tablicy numbers
console.log(numbers); // [2, 4, 6, 8, 10]

// Funkcja dirtyMultiply(array, value) mnoży każdy element tablicy array przez wartość liczbową value. Zmienia ona (modyfikuje) oryginalną tablicę przez odniesienie.

// Funkcja czysta (pure function) — to funkcja, której wynik zależy tylko od wartości jej argumentów. Mając te same argumenty, zawsze zwraca ten sam wynik i nie ma efektów ubocznych, tj. nie zmienia wartości argumentów.
// Napiszmy implementację czystej funkcji mnożenia elementów tablicy, która zwraca nową tablicę bez zmiany oryginalnej.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach((element) => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Nie doszło do mutacji oryginalnych danych
console.log(numbers); // [1, 2, 3, 4, 5]
// Funkcja zwróciła nową tablicę ze zmienionymi danymi
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// JavaScript posiada metody tablicowe, które pochodzą z języków funkcjonalnych. Większość iteracyjnych metod tablicowych to czyste funkcje. Tworzą one nową tablicę, wypełniają ją poprzez zastosowanie określonej funkcji zwrotnej do wartości każdego elementu, a następnie zwracają tę nową tablicę.

// Wszystkie iteracyjne metody tablicowe mają podobną składnię. Na oryginalnej tablicy array wywoływana jest metoda iteracyjna method, do której jako argument przekazywana jest funkcja zwrotna callback.

array.method(callback(currentValue, index, array));

// W większości metod, funkcje wywołania zwrotnego otrzymują następujące trzy parametry jako argumenty:
// Pierwszym parametrem będzie wartość bieżącego elementu tablicy currentValue;
// Drugim parametrem będzie indeks bieżącego elementu tablicy index;
// Trzecim parametrem będzie odniesienie do oryginalnej tablicy array.

array.method((item, idx, arr) => {
  // logika, która będzie wykonywana w każdej iteracji
});

// Wszystkie parametry z wyjątkiem wartości bieżącego elementu tablicy item są opcjonalne. Nazwy parametrów mogą być dowolne, o ile są jasne dla Ciebie i innych programistów.

array.method((item) => {
  // logika, która będzie wykonywana w każdej iteracji
});

//----
// Funkcja changeEven(numbers, value) przyjmuje tablicę liczb numbers i aktualizuje każdy element, którego wartością jest liczba parzysta, dodając do niego wartość parametru value, który jest dokładnie liczbą.

// Dokonaj refaktoryzacji funkcji, aby została czysta — nie zmieniała tablicy liczb numbers, ale tworzyła, wypełniała i zwracała nową tablicę ze zaktualizowanymi wartościami.

// Przed

function changeEven(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
}

function changeEven(numbers, value) {
  const newNumbers = [];
  {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers + value);
    }
  }
  return newNumbers;
}
// Po
