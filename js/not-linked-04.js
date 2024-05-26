"use strict";

// Obiekty
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};
//----
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
//--- dostęp do właściwości obiektu
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

//-----
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const locationOf = user.location;
console.log(locationOf); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"

// Można również używać właściwości i metod tablicy, na przykład uzyskać wartość jej długości z właściwości length: user.hobbies.length;
const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

//----- zadanie

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];

console.log(lastTag); // top
//--------

// Drugi sposób na dostęp do właściwości obiektu to składnia objectName["key"].
// Przypomina to odwołanie się do elementu tablicy, ale z tą różnicą, że w nawiasach kwadratowych podaje się nie indeks elementu, lecz łańcuch znaków z kluczem (nazwą właściwości)

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book.title); // "The Last Kingdom"
console.log(book["title"]); // "The Last Kingdom"

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"

// Po utworzeniu obiektu, wartości jego właściwości można zmienić.
// W tym celu należy odnieść się do nich kluczem, na przykład "przez kropkę", i przypisać nową wartość.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]

//---
// Operacja dodania nowej właściwości po utworzeniu obiektu nie różni się od zmiany wartości już istniejącej właściwości.
// Jeśli podczas zapisywania wartości pod kluczem taka właściwość nie istnieje w obiekcie, zostanie ona utworzona.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["es", "pl"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["es", "pl"]
console.log(book); // {title: "The Last Kingdom", author: "Bernard Cornwell", genres: ["historical prose", "adventure"], isPublic: true, rating: 8.38, …}

//---
// Czasami podczas tworzenia obiektu wartość właściwości musi zostać pobrana ze zmiennej lub parametru funkcji o tej samej nazwie co sama właściwość.
// Składnia w następującym przykładzie jest zbyt rozbudowana, ponieważ wymaga powtórzenia nazwy właściwości i nazwy zmiennej, w której przechowywana jest wymagana wartość: name: name, i age: age,
// Składnia krótkich właściwości (shorthand properties) rozwiązuje ten problem, pozwalając użyć nazwy zmiennej jako nazwy właściwości, a jej wartość jako wartość właściwości.
// Czyli podczas deklarowania obiektu wystarczy podać tylko nazwę właściwości, a wartość zostanie pobrana ze zmiennej o tej samej nazwie.

const name = "Henry Sibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25
//---

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};
console.log(tags[1]); // trending

// Zdarzają się sytuacje, kiedy podczas deklarowania obiektu potrzebujemy dodać właściwość o nazwie, której z góry nie znamy, ponieważ jest ona przechowywana jako wartość zmiennej lub jako wynik wykonania funkcji.

// Wcześniej wymagało to najpierw utworzenia obiektu, a następnie dodawania właściwości za pomocą nawiasów kwadratowych, co nie zawsze było wygodne.

const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Henry Sibola";
console.log(user.name); // "Henry Sibola"

// Składnia właściwości obliczeniowych (computed properties) pomaga uniknąć zbędnego kodu i w niektórych przypadkach uprościć go.
// Wartością właściwości obliczeniowej może być dowolne poprawne wyrażenie.

const propName = "name";
const user = {
  age: 25,
  // klucz tej właściwości zostanie pobrany z wartości zmiennej propName
  [propName]: "Henry Sibola",
};

console.log(user.name); // "Henry Sibola"

//---
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

console.log(credentials); // {email: "henry.carter@aptmail.com", password: "jqueryismyjam"}

//----  Iteracja obiektu -------

// W przeciwieństwie do tablicy lub ciągu znaków, obiekt to nie jest iterowalna jednostka, co oznacza, że nie można go przeglądać za pomocą pętli for lub for...of.
// Do iteracji po obiektach używa się specjalnej pętli for...in, która przegląda klucze obiektu object.

const book = {
  title: "Ostatnie Królestwo",
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygoda"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Klucz (title, author itd.)
  console.log(book[key]); // Wartość właściwości o takim kluczu ("Ostatnie Królestwo" itd.)
}
//---
// Przejdź przez obiekt apartment używając pętli for...in i zapisz wszystkie jego klucze do tablicy keys, a wszystkie wartości jego właściwości do tablicy values.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys);

// Wbudowana klasa Object posiada kilka użytecznych metod do pracy z obiektami.
// Pierwszą z nich jest Object.keys(object), która przyjmuje obiekt i zwraca tablicę kluczy jego właściwości. Jeśli obiekt nie posiada właściwości, metoda zwróci pustą tablicę.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

// Połączenie wyniku Object.keys() i pętli for...of umożliwia wygodne przeglądanie właściwości obiektu bez użycia pętli for...in.

const book = {
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygoda"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  console.log(key); // Klucz
  console.log(book[key]); // Wartość właściwości
}
// Przeglądamy tablicę kluczy obiektu i na każdej iteracji otrzymujemy klucz i wartość właściwości.

//---------  Iteracja obiektu ----------
// W przeciwieństwie do tablicy lub ciągu znaków, obiekt to nie jest iterowalna jednostka, co oznacza, że nie można go przeglądać za pomocą pętli for lub for...of.
// Do iteracji po obiektach używa się specjalnej pętli for...in, która przegląda klucze obiektu object.

for (key in object) {
  // instrukcje
}

//Zmienna key jest dostępna tylko w ciele pętli.
// W każdej iteracji zostanie do niej przypisana wartość klucza (nazwa) właściwości.
Aby uzyskać wartość właściwości o takim kluczu (nazwie), używany jest składnia nawiasów kwadratowych.

const book = {
  title: "Ostatnie Królestwo",
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygoda"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Klucz
  console.log(book[key]); // Wartość właściwości o takim kluczu
}

// Wbudowana klasa Object posiada kilka użytecznych metod do pracy z obiektami.
// Pierwszą z nich jest Object.keys(object), która przyjmuje obiekt i zwraca tablicę kluczy jego właściwości. Jeśli obiekt nie posiada właściwości, metoda zwróci pustą tablicę.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

// Połączenie wyniku Object.keys() i pętli for...of umożliwia wygodne przeglądanie właściwości obiektu bez użycia pętli for...in.

const book = {
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygoda"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  console.log(key); // Klucz
  console.log(book[key]); // Wartość właściwości
}
// Przeglądamy tablicę kluczy obiektu i na każdej iteracji otrzymujemy klucz i wartość właściwości.

// Jeśli metoda Object.keys(object) zwraca tablicę nazw właściwości obiektu (czyli kluczy), to metoda Object.values(object) zwraca tablicę wartości jego właściwości.
// Jeśli obiekt nie posiada właściwości, metoda Object.values(object) zwróci pustą tablicę.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]


// Zapisz do zmiennej keys tablicę kluczy właściwości obiektu apartment, a do zmiennej values tablicę ich wartości. Użyj metod Object.keys() i Object.values().
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

// Przejdź przez obiekt apartment używając metody Object.keys() i pętli for...of. Zapisz do zmiennej keys tablicę kluczy właściwości obiektu apartment i dodaj do tablicy values wszystkie wartości jego właściwości.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = Object.values(apartment);
const keys = Object.keys(apartment);

for (const key of keys) {
  console.log(keys);
  console.log(values);
}
//----
function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3
//---
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);
  for (let value of values) {
    totalSalary += value;
  }
  return totalSalary;
}
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))

//-------  Tablica obiektów

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
];
for (const book of books) {
  console.log(book); // Obiekt książki
  console.log(book.title); // Tytuł
  console.log(book.author); // Autor
  console.log(book.rating); // Ocena
}

// Tablica colors zawiera kolekcję kolorów. Każdy kolor jest reprezentowany przez obiekt i zawiera właściwości hex i rgb z odpowiednimi wartościami dla tego formatu i koloru.

// Przejdź przez tablicę obiektów colors używając pętli for...of. Dodaj do tablicy hexColors wartości właściwości hex, a do tablicy rgbColors wartości właściwości rgb ze wszystkich obiektów tablicy colors.

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const key of colors) {
  hexColors.push(key.hex);
  rgbColors.push(key.rgb);
}

console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"] (4)
console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"] (4)

// Funkcja getProductPrice(productName) przyjmuje jeden parametr productName - nazwę produktu. Funkcja zawiera tablicę obiektów products z takimi właściwościami jak name - nazwa produktu, price - cena i quantity - ilość.

// Uzupełnij kod funkcji tak, aby wyszukiwała obiekt produktu o określonej nazwie (właściwość name) w tablicy products i zwracała jego cenę (właściwość price). Jeśli produkt o tej nazwie nie zostanie znaleziony, funkcja powinna zwrócić wartość null.

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}
console.log(getProductPrice("Droid")); // 400 

//---- uzyskanie tablicy wszystkich wartości określonej właściwości obiektów:
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 6.8,
  },
];

const titles = [];

for (const book of books) {
  titles.push(book.title);
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

//---- średnia ocen tej kolekcji:
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", , rating: 6.8 }
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating); // 8

// Napisz funkcję getAllPropValues(propName), która przyjmuje jeden parametr propName - nazwę (klucz) właściwości. Funkcja powinna zwrócić tablicę wszystkich wartości właściwości o tej nazwie z każdego obiektu w tablicy products. Jeśli obiekty nie mają właściwości o tej nazwie, funkcja powinna zwrócić pustą tablicę.

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const values = [];
  for (const product of products) {
    if (propName in product) values.push(product[propName]);
  }
  return values;
}
console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]

// Funkcja calculateTotalPrice(productName) przyjmuje jeden parametr productName - nazwę produktu. Funkcja zawiera tablicę obiektów products z takimi właściwościami jak name - nazwa produktu, price - cena i quantity - ilość.

// Uzupełnij kod funkcji tak, aby zwracała ona całkowity koszt (cena * ilość) produktu o tej nazwie z tablicy products.

// Jeśli nie ma produktu o tej nazwie, funkcja powinna zwrócić ciąg "Product <productName> not found!", gdzie <productName> jest nazwą produktu.

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let totalPrice = 0;

  for (const product of products) {
    if (product.name === productName) {
      return (totalPrice = product.price * product.quantity);
    }
  }
  return `Product ${productName} not found!`;
}
console.log(calculateTotalPrice("Radar")); // 5200
console.log(calculateTotalPrice("Droid")); // 2800
console.log(calculateTotalPrice("Scanner")); // 8100
console.log(calculateTotalPrice("Dupa")); // Product Dupa not found!

//----- Metody obiektów ----

// Obiekty mogą przechowywać nie tylko dane, ale również funkcje do pracy z tymi danymi. Jeśli wartość właściwości to funkcja, taka właściwość nazywa się metodą obiektu.

const obj = {
	method(value) {
		console.log(`I'm a method with ${value}!`);
	}
};

obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"

// Metoda to zwykła funkcja zadeklarowana jako właściwość obiektu (patrz przykład powyżej), a nie jako oddzielna zmienna.
// Do odwołania się do metody obiektu używa się standardowej składni z kropką.
// Obiekty, które łączą dane i metody do pracy z tymi danymi, można nazwać "modelami".

// Stwórzmy obiekt bookShelf dla kolekcji książek books i metod interakcji z kolekcją getBooks i addBook.
//                              ??????????????
// ✅ Logicznie i składniowo pogrupowane jednostki
const bookShelf = {
  books: ["Ostatnie Królestwo", "Strażnik Marzeń"],
  // To jest metoda obiektu
  getBooks() {
    return "Zwracam wszystkie książki";
  },
  // To jest metoda obiektu
  addBook(bookName) {
    return `Dodaję książkę ${bookName}`;
  },
};

// Wywołania metod
bookShelf.getBooks(); // zwróci "Zwracam wszystkie książki"
bookShelf.addBook("Nowa książka 1"); // zwróci "Dodaję książkę Nowa książka 1"
bookShelf.addBook("Nowa książka 2"); // zwróci "Dodaję książkę Nowa książka 2"

// Aplikacja musi dodawać, usuwać, wyszukiwać i aktualizować mikstury.
// Zadeklaruj obiekt atTheOldToad z następującymi właściwościami:
// potions — tablica, w której przechowywane będą mikstury. Niech na razie będzie pusta
// getPotions() — metoda zwracająca ciąg "List of all available potions"
// addPotion(potionName) — metoda zwracająca ciąg znaków "Adding <potionName>", gdzie potionName jest wartością parametru potionName

const atTheOldToad = {
  potions: [],
  getPotions() {
    return `List of all available potions`;
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};
console.log(atTheOldToad.getPotions("Power")); // List of all available potions
console.log(atTheOldToad.addPotion("Invisibility")); // Adding Invisibility

// Metody są używane do pracy z właściwościami obiektu i ich modyfikacji.
// Do dostępu do obiektu w metodzie nie używa się nazwy zmiennej tego obiektu, na przykład bookShelf, ale słowa kluczowego this.

// Słowo kluczowe this to kontekst wykonania funkcji.

const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    console.log(this);
  },
};

bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
// Wartością this będzie odniesienie do obiektu przed "kropką", czyli obiektu, który wywołał tę metodę, w naszym przypadku - to odniesienie do obiektu bookShelf.

// Do dostępu do właściwości obiektu w metodach odnosimy się do niego przez this i dalej, standardowo, "przez kropkę" do właściwości.
const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// Zmień kod metody obiektu getPotions() tak, aby zwracała wartość właściwości potions
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};

//----
// Właściwość books obiektu bookShelf przechowuje tablicę.
// Zatem możemy zmieniać tablicę przez referencję, odwołując się do właściwości bookShelf.books, ponieważ jest to referencja do tablicy.

const bookShelf = {
  books: ["The Last Kingdom"],
};

bookShelf.books.push("The Mist");
console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

// W poniższym przykładzie w słowie kluczowym this przechowywana jest referencja do obiektu, który wywołał odpowiednią metodę.

// Podczas odwoływania się do this.books wewnątrz metody, odnosimy się do tablicy przechowywanej w właściwości books. Oznacza to, że można ją zmieniać przez referencję, na przykład używając metody tablicy push() do dodawania nowego elementu.

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
//---
// Zmień kod metody addPotion(potionName) tak, aby dodawała miksturę potionName na koniec tablicy we właściwości potions.
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.getPotions());

//---
// Już wiesz, że obiekt pozwala zgrupować cechy encji, na przykład książki.
// Dlatego najczęściej będziemy pracować z tablicą obiektów. W tym celu będziemy przechowywać w właściwości books nie ciągi znaków, ale obiekty z nazwą książki i oceną, a w przyszłości, być może, także innymi cechami.

const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
};

// Teraz metoda getBooks będzie zwracać tablicę obiektów. A metoda addBook oczekuje w parametrze nie ciągu znaków, ale obiektu książki i dodaje go do tablicy w właściwości books.

const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });

console.log(bookShelf.getBooks());

// Przy przeglądaniu tablicy w właściwości books trzeba pamiętać, że jest to tablica obiektów.
// Na przykład, dodamy metodę getAverageRating(), która zwróci średnią ocenę książek.

const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

console.log(bookShelf.getAvarageRating()); // 7

// Klientka chce, aby każda mikstura była reprezentowana nie tylko przez nazwę, ale także przez cenę. Dlatego teraz właściwość potions będzie przechowywać tablicę obiektów z właściwościami name i price.

// Obiekt atTheOldToad ma następujące właściwości:

// potions — tablica ciągów znaków z nazwami mikstur
// getPotions() — metoda zwracająca wartość właściwości potions
// addPotion() — metoda, która przyjmuje parametr obiektu nowej mikstury newPotion i dodaje go na koniec tablicy we właściwości potions.
// Dodaj metodę getTotalPrice(), która powinna zwracać całkowitą cenę wszystkich mikstur z właściwości potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.getPotions());

// Cała grupa zadań sprowadza się do zmiany wartości właściwości określonego obiektu w tablicy. Na przykład zmiana oceny książki. Wyszukiwanie potrzebnego obiektu w tablicy odbywa się po unikalnej wartości właściwości, na przykład po nazwie książki.

const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
	}
};

// Metoda changeRating oczekuje na nazwę książki, której należy zmienić ocenę, i nową wartość oceny, którą trzeba podstawić w obiekcie. Proces zmiany właściwości obiektu w tablicy rozpoczyna się od takich kroków:
// Przejście przez tablicę obiektów w pętli, na przykład for...of.
// Dodanie sprawdzenia, czy wartość właściwości obiektu na bieżącej iteracji i podana wartość są zgodne.

const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				// Znaleziono potrzebny obiekt po nazwie książki
			}
		}
	}
};
// Wykonując if, możemy być pewni, że na danej iteracji w zmiennej book znajduje się odniesienie do potrzebnego nam obiektu, ponieważ obiekty są przekazywane przez odniesienie. Teraz wystarczy zwrócić się do właściwości tego obiektu i przypisać jej nową wartość.
// ????????????????????
const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				book.rating = newRating;
			}
		}
	}
};

changeRating("The Mist", 9);
changeRating("The Last Kingdom", 4);

// Po wywołaniu metody changeRating właściwość rating obiektu o nazwie zgodnej z bookName zostanie zaktualizowana na newRating.

// Uzupełnij metodę updatePotionName(oldName, newName) tak, aby aktualizowała nazwę mikstury z oldName na newName w tablicy mikstur we właściwości potions
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for(const potion of this.potions) {
      if(potion.name === oldName) {
        potion.name = newName
      }
    }
  },
};

//------ Składnia spread i rest ------

// Już umiemy rozwiązywać takie zadania, używając pseudotablicy arguments, w której zbierane są wszystkie przekazane argumenty.

function multiply() {
	console.log(arguments)
}

multiply(1, 2); // pseudotablica [1, 2]
multiply(1, 2, 3); // pseudotablica [1, 2, 3]
multiply(1, 2, 3, 4); // pseudotablica [1, 2, 3, 4]

// Od standardu ES6 pojawiło się pojęcie parametrów resztkowych (...rest). Jest to specjalny składnia, która pozwala zebrać grupę niezależnych elementów w tablicę.

function multiply(...args) {
  console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]

// Parametry resztkowe mogą być oznaczone przez trzy kropki .... Dosłownie oznacza to: "zbierz pozostałe parametry i umieść je w tablicy". Nazwa parametru może być dowolna. Najczęściej nazywa się go args lub rest.

// Używając składni parametru resztkowego, uzupełnij kod funkcji add() tak, aby akceptowała dowolną liczbę argumentów do parametru args i zwracała ich sumę.

// function add(...args) {
//   let total = 0;
//   for (let i = 1, i <= args, i++) {
//     total += i;
//   }
//        return total;
// }

function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

// Operacja (...rest) pozwala również zebrać do tablicy tylko tę część argumentów, która jest potrzebna. Aby to zrobić, należy zadeklarować parametry przed "zbieraniem". Można umieścić pierwsze kilka parametrów w zmiennych, a resztę - zebrać do tablicy.

function multiply(first, second, ...args) {
  console.log(first, second, args);
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2 [3] 
multiply(1, 2, 3, 4); // 1 2 [3, 4]

//////////////////////

// Czasami potrzebne jest zrobienie odwrotności — przekazać tablicę element po elemencie do funkcji, która jest wywoływana. Na przykład jest wbudowana funkcja Math.max(), która szuka i zwraca największy z argumentów (liczb), tj. oczekuje nie tablicy wartości, ale dowolnej liczby argumentów.
// Tutaj przyda się operator rozproszenia ...spread.
// Jest podobny do pozostałych parametrów — również używa ..., ale robi absolutnie przeciwne. Gdy funkcjonalność ...spread jest używana przy wywołaniu funkcji, przekształca tablicę na listę argumentów.

const temps = [14, -4, 25, 8, 11];

console.log(...temps); // 14 -4 25 8 11  zestaw pojedynczych liczb

// ✅ Przekażemy kolekcję elementów jako pojedyncze argumenty
console.log(Math.max(...temps)); // 25

console.log(...[1, 2, 3]); // wyświetli 1 2 3

// Operacja ...spread pozwala na stworzenie kopii tablicy lub „połączenie” dowolnej liczby tablic w jedną nową. Dotychczas wykorzystywano do tego metody slice() i concat(), ale operacja rozproszenia umożliwia zrobienie tego samego w krótszej formie.

const temps = [14, -4, 25, 8, 11];

// To dokładna, ale niezależna kopia tablicy temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// Zmienne firstGroupScores, secondGroupScores i thirdGroupScores przechowują wyniki testów poszczególnych grup. Używając sprayu, uzupełnij kod tak, aby:

// Zmienna allScores przechowywała tablicę wszystkich wyników od pierwszej do trzeciej grupy włącznie.
// Zmienna bestScore zawierała najwyższy ogólny wynik.
// Zmienna worstScore zawierała najniższy ogólny wynik.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [... firstGroupScores, ... secondGroupScores, ... thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// Operacja spread pozwala rozłożyć właściwości dowolnej liczby obiektów do jednego nowego.

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Kolejność rozkładania ma znaczenie. Nazwy właściwości obiektu są unikalne, dlatego właściwości obiektu, które są rozkładane, mogą nadpisać wartość już istniejącej właściwości, jeśli ich nazwy się pokrywają.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Podczas rozkładania można dodawać właściwości w dowolnym miejscu. Najważniejsze to pamiętać o unikalności nazwy właściwości i o tym, że jej wartość może zostać nadpisana.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
