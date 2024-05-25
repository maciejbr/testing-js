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
