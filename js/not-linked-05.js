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

// Po

function changeEven(numbers, value) {
  const newNumbersArr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newNumbersArr.push(numbers[i] + value);
    } else {
      newNumbersArr.push(numbers[i]);
    }
  }
  return newNumbersArr;
}
// z wykorzystaniem MAP
return numbers.map((number) => (number % 2 === 0 ? number + value : number));

//----
// Większość iteratorów tablicowych to czyste funkcje. Tworzą one nową tablicę, wypełniają ją poprzez zastosowanie określonej funkcji zwrotnej do wartości każdego elementu, a następnie zwracają tę nową tablicę.
// Metoda map(callback) jest używana do przekształcania tablicy. Wywołuje ona funkcję zwrotną dla każdego elementu oryginalnej tablicy i zapisuje wynik swojej pracy do nowej tablicy, która będzie wynikiem metody.

array.map((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});

// Iteruje po oryginalnej tablicy element po elemencie,
// Nie zmienia oryginalnej tablicy,
// Wynik funkcji zwrotnej jest zapisywany w nowej tablicy,
// Zwraca nową tablicę o tej samej długości co tablica, do której została zastosowana.
// Może być użyta do zmiany każdego elementu tablicy. Oryginalna tablica jest używana jako wzorzec, na podstawie którego budowana jest następna kolekcja.

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Oryginalna tablica nie uległa zmianie
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// Korzystanie z anonimowych funkcji strzałkowych z niejawnym zwrotem znacznie zmniejsza "hałas" deklaracji funkcji zwrotnej, dzięki czemu kod jest czystszy i łatwiejszy do odczytania.

//----
// Tablica planets zawiera nazwy planet. Dopełnij kod tak, aby zmienna planetsLengths zawierała tablicę składającą się z długości nazw każdej planety w tablicy planets. Należy użyć metody map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map((planet) => planet.length);

// Wiemy już, że typowym zadaniem jest manipulowanie tablicą obiektów, na przykład po to, aby uzyskać tablicę wartości właściwości ze wszystkich obiektów. Mamy tablicę studentów i musimy uzyskać oddzielną tablicę ich nazwisk.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// Korzystając z metody map(), możesz iterować po tablicy obiektów i zwracać wartość właściwości każdego z nich w funkcji callback.
// Metoda flatMap(callback) jest podobna do metody map(), ale jest używana, gdy wynikiem jest wielowymiarowa tablica, która wymaga "wygładzenia".

array.flatMap((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});

// Tablica students przechowuje kolekcję studentów z listą kursów, na które dany student uczęszcza we właściwości courses. Kilku studentów może uczęszczać na ten sam kurs. Należy utworzyć listę wszystkich kursów, w których uczestniczy ta grupa studentów, nawet jeśli się powtarzają.

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map((student) => student.courses);
console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap((student) => student.courses);
console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// Metoda flatMap wywołuje funkcję zwrotną dla każdego elementu oryginalnej tablicy i zapisuje wynik swojej pracy do nowej tablicy. Różnica w stosunku do map() polega na tym, że nowa tablica jest "wygładzana" do głębokości równej jeden (jedno zagnieżdżenie). Ta wygładzona (płaska) tablica jest wynikiem działania funkcji flatMap().

//---

// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwości title, author, rating. Używając metody map(), spraw, aby zmienna titles zawierała tablicę tytułów wszystkich książek (właściwość title) z tablicy books.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const titles = books.map((book) => book.title);

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

//-----
// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwość genres, której wartością jest tablica gatunków. Używając metody flatMap(), spraw by zmienna genres zawierała tablicę gatunków wszystkich książek (właściwość genres) z tablicy books.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap((book) => book.genres);

console.log(genres); // ["adventure", "history", "fiction", "horror", "mysticism"]

// Dopełnij funkcję strzałkową getUserEmails(users) tak, aby zwracała tablicę adresów email użytkowników (właściwość email) z tablicy obiektów w parametrze users.

const getUserEmails = (users) => users.map((user) => user.email);

//------

//----- Metody filter, find і findIndex -----

// Metoda filter(callback) służy do wykonywania tylko jednej operacji — filtrowania tablicy. Filtrowanie tablicy oznacza wybranie wszystkich elementów z kolekcji według określonego kryterium.

array.filter((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});

// Nie zmienia oryginalnej tablicy.
// Iteruje po oryginalnej tablicy element po elemencie.
// Zwraca nową tablicę.
// Dodaje do zwracanej tablicy elementy, które spełniają warunek funkcji wywołania zwrotnego.
// Jeśli wywołanie zwrotne zwróci true, element zostanie dodany do zwróconej tablicy.
// Jeśli wywołanie zwrotne zwróci false, element nie zostanie dodany do zwróconej tablicy.
// Jeśli żaden element nie spełnia warunku, zwracana jest pusta tablica.

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// positiveValues zawiera wszystkie elementy tablicy wartości, które spełniły warunek wywołania zwrotnego, tj. były >= 0

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// negativeValues zawiera wszystkie elementy tablicy wartości, które spełniły warunek wywołania zwrotnego, tj. były < 0

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []
// negatibigValues eValues zawiera wszystkie elementy tablicy wartości, które spełniły warunek wywołania zwrotnego, tj. były > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Oryginalna tablica values nie uległa zmianie

// Zatem metoda filter wywołuje funkcję zwrotną dla każdego elementu oryginalnej tablicy. Jeśli wynikiem jej wykonania jest true, bieżący element jest dodawany do nowej tablicy.

//----

// Dopełnij kod tak, aby zmienna evenNumbers zawierała tablicę liczb parzystych z tablicy numbers, a zmienna oddNumbers zawierała tablicę liczb nieparzystych. Pamiętaj, aby używać metody filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

//-----
// Metoda filter() na tablicy obiektów

// Podczas pracy z tablicą obiektów filtrowanie odbywa się według wartości określonej właściwości. W rezultacie tworzona jest nowa tablica przefiltrowanych obiektów.

// Spójrzmy na przykład, w którym mamy tablicę studentów z wynikami testów. Twoim zadaniem jest odfiltrowanie studentów, którzy mają:
// wysokie wyniki (od 80 (włącznie)),
// niskie wyniki (poniżej 50),
// średnie wyniki (od 50 (włącznie) do 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Tablica obiektów o nazwach Mango i Kiwi

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Tablica z jednym obiektem Ajax

// W funkcji wywołania zwrotnego można wygodnie destrukturyzować właściwości obiektu
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Tablica obiektów o nazwach Poly і Houston

// W powyższym przykładzie metoda filter() tworzy nową tablicę z tymi obiektami z tablicy students, które spełniają warunki ustawione na podstawie właściwości score. Warunki są zdefiniowane w funkcji zwrotnej, która jest przekazywana do filter() jako argument.
// Do zmiennej best odfiltrowywane są obiekty z wartością właściwości score większą lub równą HIGH_SCORE. Wynikiem będzie tablica obiektów o nazwach "Mango" і "Kiwi".
// Do zmiennej worst odfiltrowywane są obiekty, w których wartość właściwości score jest mniejsza niż LOW_SCORE. Wynikiem będzie tablica z jednym obiektem o nazwie "Ajax".
// Do zmiennej average odfiltrowywane są obiekty, w których wartość właściwości score jest większa lub równa LOW_SCORE i mniejsza niż HIGH_SCORE. Wynikiem będzie tablica obiektów o nazwach "Poly" i "Houston".

//--------------

// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwości title, author, rating. Używając metody filter(), dopełnij kod tak, aby:

// W zmiennej topRatedBooks znalazła się tablica książek, których ocena (właściwość rating) jest większa lub równa wartości zmiennej MIN_RATING.
// W zmiennej booksByAuthor znalazła się tablica książek napisanych przez autora o nazwisku (właściwość author) pasującym do wartości w zmiennej AUTHOR.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// Dopełnij funkcję getUsersWithEyeColor(users, color) tak, aby zwracała tablicę użytkowników, których kolor oczu (właściwość eyeColour) zgadza się z wartością drugiego parametru colour.

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

// Dopełnij kodu do funkcji getUsersWithAge(users, minAge, maxAge), aby zwrócić tablicę użytkowników, których wiek (przechowywany we właściwości age) należy do określonego zakresu od minAge do maxAge.

const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter((user) => user.age >= minAge && user.age <= maxAge);

//----

// Wiesz już, że metoda filter(callback) jest używana do znalezienia wszystkich elementów spełniających określony warunek.
// Metoda find(callback) pozwala znaleźć i zwrócić pierwszy pasujący element, który spełnia warunek, po czym iteracja jest zatrzymywana. Oznacza to, że w przeciwieństwie do metody filter(callback), przeszukuje ona do pierwszego dopasowania.

array.find((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});

// Nie zmienia oryginalnej tablicy;
// Iteruje po oryginalnej tablicy element po elemencie;
// Zwraca pierwszy element, który spełnia warunek, czyli gdy wywołanie zwrotne zwróci true;
// Jeśli żaden element nie spełnia warunku, czyli dla wszystkich elementów wywołanie zwrotne zwróciło false, metoda zwraca undefined.
// Metoda find() jest używana do jednego zadania — znalezienia pierwszego elementu, który spełnia warunek. Na przykład wyszukiwanie użytkownika po adresie e-mail, samochodu po numerze seryjnym, książki po tytule itp.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined

// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwości title, author, rating.

// Używając metody find(), dopełnij kod tak, aby:

// W zmiennej bookWithTitle został utworzony obiekt książki, której nazwa (właściwość title) odpowiada wartości zmiennej BOOK_TITLE.
// W zmiennej bookByAuthor został utworzony obiekt książki, którego autor (właściwość author) odpowiada wartości zmiennej AUTHOR.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
const bookByAuthor = books.find(({ author }) => author === AUTHOR);

//---
// Dopełnij funkcję getUserWithEmail(users, email) tak, aby zwracała obiekt użytkownika, którego email (właściwość email) zgadza się z wartością drugiego parametru email.

const getUserWithEmail = (users, email) => {
  const userEmail = users.find((user) => user.email === email);
  return userEmail;
};

//-------

//----- Metody every, some і reduce -----

// Metoda every(callback) sprawdza, czy wszystkie elementy spełniają warunek funkcji wywołania zwrotnego.

array.every((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});

// Metoda:
// Nie zmienia oryginalnej tablicy;
// Iteruje po oryginalnej tablicy element po elemencie;
// Zwraca true, jeśli wszystkie elementy tablicy spełniają warunek
// Zwraca false, jeśli przynajmniej jeden element tablicy nie spełnia warunku.
// Iteracja jest zatrzymywana, jeśli wywołanie zwrotne zwróci false.

// Czy wszystkie elementy są większe lub równe zero? - tak
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Czy wszystkie elementy są większe lub równe zero? - nie
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// Podczas pracy z tablicą obiektów sprawdzana jest wartość niektórych z ich właściwości. Na przykład, przechodząc przez tablicę obiektów towarów, możemy sprawdzić, czy wszystkie towary są w magazynie.

const products = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every((product) => product.quantity > 0);
console.log(hasEveryProduct); // false

// Dopełnij funkcję isEveryUserActive(users) tak, aby sprawdzała, czy wszyscy użytkownicy są teraz aktywni (właściwość isActive) i zwracała true lub false.

const isEveryUserActive = (users) =>
  users.every((user) => user.isActive === true);

// Metoda some(callback) sprawdza, czy co najmniej jeden element spełnia warunek funkcji wywołania zwrotnego.

array.some((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});

// Metoda:
// Nie zmienia oryginalnej tablicy;
// Iteruje po oryginalnej tablicy element po elemencie;
// Zwraca true, jeśli co najmniej jeden element tablicy spełnia warunek;
// Zwraca false, jeśli żaden element tablicy nie spełnia warunku;
// Iteracja jest zatrzymywana, jeśli wywołanie zwrotne zwróci false.

// Czy co najmniej jeden element jest większy lub równy zero? - tak
[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// Czy co najmniej jeden element jest większy lub równy zero? - tak
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Czy jest co najmniej jeden element mniejszy od zera? - nie
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Czy jest co najmniej jeden element mniejszy od zera? - tak
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

// Dopełnij funkcję isAnyUserActive(users) tak, aby sprawdzała obecność przynajmniej jednego aktywnego użytkownika (właściwość isActive) i zwracała true lub false.

const isAnyUserActive = (users) => users.some((user) => user.isActive === true);

//-----

// Metoda reduce(callback, initialValue) służy do sekwencyjnego przetwarzania każdego elementu tablicy przy jednoczesnym zapisywaniu wyniku pośredniego. Jest ona nieco bardziej skomplikowana niż inne metody, ale rezultat jest tego wart.

array.reduce((previousValue, element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
}, initialValue);

// Metoda:
// Nie zmienia oryginalnej tablicy;
// Iteruje po oryginalnej tablicy element po elemencie;
// Zwraca dowolną wartość (obiekt, tablicę, ciąg znaków, liczbę itp.);
// Może zastąpić funkcjonalność dowolnej innej metody iteracyjnej tablicy, a nawet ich kombinację.

// Metoda reduce() oczekuje 2 parametrów:
// Pierwszy parametr (wymagany) — to funkcja wywołania zwrotnego, która "przetwarza" każdy element tablicy;
// Drugi parametr (opcjonalny) — initialValue — początkowa wartość akumulatora.
// Funkcja wywołania zwrotnego oczekuje czterech parametrów od parametru reduce. Parametry te, podobnie jak w wywołaniach zwrotnych innych iteratorów tablic, mogą być pominięte, jeśli ich nie potrzebujesz, ale nie możesz naruszyć ich kolejności:
// parametr (previousValue) jest akumulatorem, czyli wynikiem pośrednim. Wartość zwrócona przez funkcję zwrotną w bieżącej iteracji będzie wartością tego parametru w następnej iteracji;
// parametr — bieżący element tablicy;
// parametr — indeks bieżącej iteracji;
// parametr — odniesienie do oryginalnej tablicy.
// Najłatwiej wyobrazić sobie jego działanie na przykładzie obliczania sumy elementów tablicy.

const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12

//Serwis gamingowy potrzebuje funkcjonalności do obliczania średniego czasu spędzonego w grach przez jednego gracza. Zmienna players przechowuje obiekt, w którym kluczem jest nazwisko gracza, a wartością jego czas gry. Zmienna playtimes przechowuje tablicę wartości obiektu players, czyli tablicę czasu gry wszystkich graczy. Wartością zmiennej averagePlayTime będzie średni czas spędzony przez jednego gracza w grach.

// Dopełnij kod tak, aby zmienna totalPlayTime zawierała całkowity czas gry z tablicy playtimes. Należy użyć metody reduce().

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

// Podczas pracy z tablicą obiektów dokonuje się redukcji według wartości określonej właściwości. Na przykład, mamy tablicę studentów z wynikami testów i musimy uzyskać średni wynik.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Nazwa akumulatora może być dowolna, to tylko parametr funkcji
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

// W powyższym przykładzie metoda reduce() jest używana do obliczenia sumy wartości właściwości score dla wszystkich obiektów tablicy students.
// Zaczynając od wartości 0, funkcja wywołania zwrotnego oblicza sumę wartości właściwości score dla każdego obiektu tablicy students. Wynik (suma) jest przechowywany w zmiennej totalScore.
// Funkcja const averageScore oblicza średnią wartość score dla wszystkich obiektów tablicy students, dzieląc sumę wszystkich wyników przez liczbę studentów.

// Dopełnij funkcję calculateTotalBalance(users) tak, aby obliczała i zwracała sumę wszystkich środków (właściwość balance), które są przechowywane przez użytkowników z tablicy users.

const calculateTotalBalance = (users) =>
  users.reduce((total, user) => {
    return total + user.balance;
  }, 0);

// Zmienna players przechowuje tablicę obiektów, z których każdy posiada właściwości name, playtime i gamesPlayed.

// Nasz serwis musi obliczyć średni czas spędzony w jednej grze dla każdego gracza i uzyskać całkowitą sumę tych wartości czasu w zmiennej totalAveragePlaytimePerGame. Można obliczyć czas dla każdego gracza, dzieląc jego czas (właściwość playtime) przez liczbę gier (właściwość gamesPlayed).

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  acc += player.playtime / player.gamesPlayed;
  console.log(acc, player);
  return acc;
}, 0);

//------

//----- Metoda toSorted -----

// Metoda toSorted() sortuje elementy tablicy.

array.toSorted();

// Sortuje oryginalną tablicę,
// Zwraca nową tablicę,
// Domyślnie sortuje w porządku rosnącym.

// Tablica liczb
// Rozważmy przykład, w którym trzeba posortować tablicę scores.
// Oryginalna tablica scores pozostaje niezmieniona. Nowa tablica ascendingScores zawiera tablicę liczb posortowanych rosnąco.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Jako, że domyślnie, przed sortowaniem, metoda toSorted() konwertuje wszystkie elementy tablicy na ciągi znaków, elementy są faktycznie sortowane jako ciągi znaków, czyli na podstawie ich wartości w tablicy Unicode. Standardowe sortowanie liczb wygląda nietypowo, gdy myślimy o liczbach, ale jest to zrozumiałe, jeśli wiesz, że liczby zostały przekonwertowane na ciągi.

const scores = [27, 2, 41, 4, 7, 3, 75];

console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// W tym sortowaniu ciągi są porównywane według znaków od lewej do prawej, tj. najpierw porównywane są ciągi 2 i 27. Pierwszy znak 2 jest taki sam, ale ciąg 2 ma tylko 1 znak, więc jest mniejszy niż ciąg 27 i dlatego jest pierwszy.
// Następnie porównywane są ciągi 27 i 3. Pierwszy znak w ciągu 3 jest większy niż pierwszy znak 2 w ciągu 27, więc ciąg 3 znajduje się po 27.

// Tablica ciągów znaków
// Tablica ciągów znaków jest sortowana alfabetycznie.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// Jednocześnie numer porządkowy wielkich liter jest mniejszy niż małych liter.

const letters = ["b", "B", "a", "A", "c", "C"];

console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

//------

// Zmienna releaseDates jest tablicą liczb, określających lata publikacji książek. Zmienna authors jest tablicą ciągów znaków obejmującą autorów książek.

// Dopełnij kod tak, aby zmienna ascendingReleaseDates zawierała kopię tablicy releaseDates posortowaną rosnąco, a zmienna alphabeticalAuthors zawierała kopię tablicy nazwisk autorów authors posortowaną alfabetycznie. Użyj metody toSorted()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();

const alphabeticalAuthors = authors.toSorted();

// Aby określić kolejność sortowania, należy przekazać funkcję zwrotną z dwoma parametrami do metody toSorted(compareFunction).
// Jest to funkcja porównująca (compare function), a kolejność sortowania zależy od jej wyniku. Metoda toSorted() wywoła ją dla dwóch dowolnych elementów.

array.toSorted((a, b) => {
  // Callback function body
});
// a - pierwszy element do porównania, b - drugi element do porównania

// Sortowanie w porządku rosnącym
// Jeśli wywołanie compareFunction(a, b) zwróci jakąkolwiek wartość ujemną, tj. a jest mniejsze niż b, sortowanie umieści a przed b.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Sortowanie w porządku malejącym
// Jeśli wywołanie compareFunction(a, b) zwróci jakąkolwiek wartość dodatnią, tj. b jest większe niż a, sortowanie umieści b przed a.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Jeśli wywołanie compareFunction(a, b) zwróci 0, sortowanie pozostawi a i b bez zmian względem siebie, ale posortuje je względem wszystkich innych elementów.
// Zwróć uwagę, że podczas sortowania tablicy liczb i przekazywania jej do metody toSorted() funkcji zwrotnej, liczby nie będą już konwertowane na ciągi, czyli ich sortowanie będzie oczekiwane i znane.

//----
// Zmienna releaseDates jest tablicą liczb, określających lata publikacji książek.

// Biblioteka online powinna wyświetlać książki posortowane według daty publikacji, w porządku rosnącym lub malejącym. Dopełnij kod tak, aby zmienna ascendingReleaseDates otrzymała kopię tablicy releaseDates posortowaną rosnąco, a zmienna descendingReleaseDates otrzymała kopię posortowaną malejąco.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

//---

// Aby posortować ciągi w kolejności alfabetycznej, rosnąco lub malejąco, używa się metody ciągów localeCompare().

firstString.localeCompare(secondString);

// Jest ona wywoływana na ciągu, który chcesz porównać (firstString) z tym, który został przekazany jako argument (secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

// Zwraca wartość ujemną, jeśli firstString powinien być przed secondString.
// Zwraca wartość dodatnią, jeśli firstString musi być po secondString.
// Jeśli ciągi są takie same, zwracana jest wartość zero, a ich kolejność względem siebie nie ulega zmianie.
// Metoda localeCompare() jest wygodna do sortowania ciągów, ponieważ metoda toSorted() oczekuje tych samych wartości od funkcji wywołania zwrotnego.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

//----- !!!
// Wywołanie używane do sortowania liczb:
(a, b) => a - b;

//  Wywołanie używane do sortowania ciągów:
(a, b) => a.localeCompare(b);

//-----

// Zmienna authors jest tablicą ciągów znaków obejmującą autorów książek.

// Biblioteka online powinna wyświetlać książki posortowane według autora w kolejności alfabetycznej i odwrotnej kolejności alfabetycznej. Dopełnij kod tak, aby zmienna authorsInAlphabetOrder otrzymywała kopię tablicy authors posortowaną alfabetycznie, a zmienna authorsInReversedOrder otrzymywała kopię posortowaną w odwrotnej kolejności alfabetycznej.

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

//-----

// Podczas pracy z tablicą obiektów sortowanie odbywa się według wartości liczbowej lub ciągowej określonej właściwości. Na przykład, mamy grupę studentów z wynikami testów i musimy posortować tablicę obiektów według trzech różnych scenariuszy:
// w porządku rosnącym według liczby punktów,
// w porządku malejącym według liczby punktów,
// według nazwiska studenta w porządku alfabetycznym.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

//---

// Tablica books zawiera tablicę obiektów książek, z których każdy zawiera właściwości title, author, rating.

// Dopełnij kod tak, aby:
// Zmienna sortedByAuthorName zawierała tablicę książek posortowanych według nazwiska autora w porządku alfabetycznym.
// Zmienna sortedByReversedAuthorName zawierała tablicę książek posortowanych według nazwiska autora w odwrotnej kolejności alfabetycznej.
// Zmienna sortedByAscendingRating zawierała tablicę książek posortowanych rosnąco.
// Zmienna sortedByDescentingRating zawierała tablicę książek posortowanych malejąco.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = books.toSorted(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = books.toSorted(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);

//-----

// Mamy tablicę obiektów z nazwiskami, ocenami i kursami, na które uczęszcza każdy student.

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

// Musisz uzyskać tablicę ich nazwisk posortowaną rosnąco według wyników testów.
// Aby to zrobić:
// Posortuj tablicę używając metody toSorted(),
// Następnie, używając metody map(), utwórz tablicę wartości właściwości name z posortowanej tablicy.

const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map((student) => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// Problem polega na tym, że po wykonaniu każdej operacji otrzymujemy zmienne pośrednie, z wyjątkiem ostatniej. Zmienna sortedByAscendingScore jest niepotrzebna. Jest ona potrzebna tylko do przechowywania wyniku pośredniego.
// Możesz pozbyć się takich "martwych" zmiennych grupując wywołania metod w łańcuchy. Każda kolejna metoda będzie wykonywana na podstawie wyniku poprzedniej.

const names = students
  .toSorted((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// Wywołujemy na tablicy metodę toSorted().
// Do wyniku metody toSorted() stosujemy metodę map().
// Zmiennej names zostanie przypisany wynik metody map().
// Otrzymujemy tablicę unikalnych odwiedzanych kursów, posortowanych alfabetycznie.

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// Na oryginalnej tablicy wywołujemy funkcję flatMap() i tworzymy wypłaszczoną (wygładzoną) tablicę wszystkich kursów.
// Do wyniku metody flatMap() stosujemy metodę filter(), aby odfiltrować unikalne elementy.
// Na wyniku metody filter() wywołujemy metodę toSorted().
// Zmiennej uniqueSortedCourses zostanie przypisany wynik metody sort().
// Łańcuch metod może mieć dowolną długość, ale zwykle nie więcej niż 2-3 operacje.
// Po pierwsze, metody iteracyjne są używane do stosunkowo prostych operacji na kolekcji. Po drugie, wywołanie każdej kolejnej metody jest dodatkową iteracją tablicy, co może wpływać na wydajność, jeśli liczba metod jest duża.

//-----

// Tablica books zawiera tablicę obiektów książek, z których każdy zawiera właściwości title, author, rating.

// Dopełnij kod tak, aby zmienna names zawierała tablicę nazwisk autorów w kolejności alfabetycznej, których oceny książek są większe niż wartość zmiennej MIN_BOOK_RATING. Należy użyć łańcucha metod.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .toSorted((firstName, secondName) => firstName.localeCompare(secondName));
