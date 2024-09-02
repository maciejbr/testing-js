"use strict";

event.target; // zdarzenie wystąpiło

event.currentTarget; // nasłuchiwacz przechwycił (event listener)

event.stopPropagation(); // zatrzymuje, ale nie przeszkadza inny nasłuchiwaczom

event.stopImmediatePropagation(); // zatrzymuje wykonanie wszystkich innych obsługiwaczy zdarzeń, które nasłuchują tego samego zdarzenia na danym elemencie, nawet jeśli zostały zarejestrowane wcześniej

handleButtonClick;

// Delegowanie wydarzeń
// Propagacja pozwala na zastosowanie jednej z najbardziej przydatnych technik - delegowania zdarzeń

const box = document.querySelector(".box");

box.addEventListener("click", function (event) {
  console.log(event.target); // Element, na którym wystąpiło zdarzenie kliknięcia
});

//----- Sprawdzenie docelowego elementu zdarzenia

<p class="output">Wybrany kolor: -</p>
<div class="color-palette"></div>
//
const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
  console.log(event.target);
  const selectedColor = event.target.dataset.color;
}

// Sprawdzanie czy kliknął dokładnie w przycisk:

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return; // użytkownik kliknął między przyciskami
  }

  const selectedColor = event.target.dataset.color; // użytkownik kliknął przycisk, więc mamy dostęp do jego atrybutów
}

//----- Biblioteki ------
// Zbiór uprzednio napisanego kodu gotowego do użycia w projekcie

<!DOCTYPE html>
<html lang="en">
  <head>
	 <!-- tagi nagłówka -->
  </head>
  <body>
    <!-- znaczniki HTML -->

    <!-- Plik skryptu biblioteki Lodash -->
		<script async src="<https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js>"></script>
    <!-- Twój plik skryptu -->
    <script defer src="path/to/script.js"></script>
  </body>
</html>
//
console.log(_); // Cały obiekt biblioteki Lodash, po zainstalowaniu mona testować:

console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// basicLightbox

const instance = basicLightbox.create(`
	<h1>Nie można zamknąć</h1>
	<p>Nie można zamknąć tego okna modalnego kliknięciem.</p>
`, {
	closable: false
})

//----- Destrukturyzacja -----

// Bez destrukturyzacji

const user = {
	name: "Jacob",
	age: 32
};

console.log(user.name); // Jacob
console.log(user.age); // 32

// Z destrukturyzacją

const user = {
	name: "Jacob",
	age: 32
};

const { name, age } = user;
console.log(name); // Jacob
console.log(age); // 32

// Destrukturyzacja obiektów

// Po słowie kluczowym const lub let umieszczamy nawiasy klamrowe, podobnie jak w przypadku deklaracji obiektu.
// Wewnątrz nawiasów klamrowych, oddzielając przecinkami, podajemy nazwy zmiennych, którym zostaną przypisane odpowiednie wartości właściwości zdestrukturyzowanego obiektu.

// Bez destrukturyzacji

const book = {
  title: "Ostatnie królestwo",
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygodowa"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "publiczny" : "prywatny";
const message = `Książka ${book.title} autorstwa ${book.author} o ocenie ${book.rating} jest dostępna ${accessType}!`;

// Z destrukturyzacją

const book = {
  title: "Ostatnie królestwo",
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygodowa"],
  isPublic: true,
  rating: 8.38,
};

// Destrukturyzacja
const { title, author, isPublic, rating } = book;

// Użycie
const accessType = isPublic ? "publiczny" : "prywatny";
const message = `Książka ${title} autorstwa ${author} o ocenie ${rating} jest dostępna ${accessType}!`;

// W przypadku, gdy nazwa zmiennej jest taka sama jak nazwa właściwości, dochodzi do przypisania.

// Kiedy w obiekcie nie ma właściwości o takiej nazwie, zmiennej zostanie przypisane undefined.

const book = {
  title: "Ostatnie królestwo",
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygodowa"],
  isPublic: true,
  rating: 8.38,
};

// Destrukturyzacja
const { title, bookTitle, coverImage, bookRating } = book;
console.log(title); // "Ostatnie królestwo"
console.log(bookTitle); // undefined
console.log(coverImage); // undefined
console.log(bookRating); // undefined

// Aby uniknąć przypisania undefined podczas destrukturyzacji nieistniejących właściwości, można przypisać zmiennym wartości domyślne za pomocą operatora =. Ta wartość zostanie przypisana tylko wtedy, gdy w obiekcie brakuje właściwości o takiej nazwie.

const book = {
  title: "Ostatnie królestwo",
  author: "Bernard Cornwell",
};

// Dodajemy obraz okładki, jeśli brakuje go w obiekcie książki
const {
  title,
  author,
  coverImage = "<https://via.placeholder.com/640/480>"
} = book;

console.log(title); // "Ostatnie królestwo"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "<https://via.placeholder.com/640/480>"

// Przemianowanie zmiennej
// Podczas destrukturyzacji możemy przemianować zmienną, do której rozpakowujemy wartość właściwości, używając :

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Destrukturyzacja
const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
console.log(title); // "The Last Kingdom"
console.log(bookAuthor); // "Bernard Cornwell"
console.log(isPublic); // true
console.log(bookRating); // 8.38

// Wartość domyślna
//Podczas przemianowywania zmiennej, do której rozpakowujemy wartość właściwości obiektu, możemy również przypisać wartość domyślną.
// Aby to zrobić, po nowej nazwie umieszczamy znak równości = i określamy jej wartość domyślną.

const book = {
  title: "The Last Kingdom",
  coverImage:
    "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>",
};

const {
  title,
  coverImage: bookCoverImage = "<https://via.placeholder.com/640/480>",
} = book;

console.log(title); // "The Last Kingdom"
console.log(bookCoverImage); // "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>"


// Jeśli taka właściwość istnieje w obiekcie, zostanie do niej przypisana wartość zmiennej.
// W przeciwnym razie zmiennej zostanie przypisana wartość domyślna.

const book = {
  title: "The Dream of a Ridiculous Man",
};

const {
  title,
  coverImage: bookCoverImage = "<https://via.placeholder.com/640/480>",
} = book;

console.log(title); // "The Dream of a Ridiculous Man"
console.log(bookCoverImage); // "<https://via.placeholder.com/640/480>"

// Destrukturyzacja w pętlach

// Podczas iteracji po tablicy obiektów za pomocą pętli for...of wielokrotnie odwołujemy się do właściwości obiektu.

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
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

// Aby zmniejszyć liczbę powtórzeń, można zdestrukturyzować właściwości obiektu do lokalnych zmiennych w ciele pętli.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

// Jeśli obiekt zawiera niewiele właściwości, destrukturyzację można wykonać bezpośrednio w miejscu deklaracji zmiennej book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// Destrukturyzacja parametrów

// Podczas przekazywania obiektów do funkcji można zdestrukturyzować te obiekty, aby uzyskać dostęp do potrzebnych danych. Pozwala to jawnie określić, które pola obiektu są używane w funkcji.

// Bez destrukturyzacji obiektu:

function printUserInfo(user) {
  console.log(`Imię: ${user.name}, Wiek: ${user.age}, Hobby: ${user.hobby}`);
}

printUserInfo({
	name: "Alice",
	age: 25,
	hobby: "taniec"
}); // Imię: Alice, Wiek: 25, Hobby: taniec

// Z destrukturyzacją obiektu w ciele funkcji:

function printUserInfo(user) {
const { name, age, hobby } = user
  console.log(`Imię: ${name}, Wiek: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
	name: "Alice",
	age: 25,
	hobby: "taniec"
}); // Imię: Alice, Wiek: 25, Hobby: taniec

// Z destrukturyzacją obiektu w miejscu deklaracji parametrów:

function printUserInfo({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing

// Wzorzec „Parametry Obiektowe"
// Jeśli funkcja przyjmuje więcej niż 2-3 parametry, łatwo jest się pogubić w kolejności i tym, co przekazywać.
// W rezultacie kod w miejscu jej wywołania staje się bardzo niejasny.

function doStuffWithBook(title, pages, downloads, rating, isPublic) {
  // Operujemy na parametrach
  console.log(title);
  console.log(numberOfPages);
  // I tak dalej
}

// ❌ Co to jest 736? Co to jest 10283? Co to jest true?
doStuffWithBook("Ostatnie Królestwo", 736, 10283, 8.38, true);

// Wzorzec „Parametry Obiektowe" pomaga rozwiązać ten problem. Zamiast zestawu parametrów używa tylko jednego - obiektu z nazwanymi właściwościami.

function doStuffWithBook(book) {
  // Operujemy na właściwościach obiektu
  console.log(book.title);
  console.log(book.pages);
  // I tak dalej
}

// W ten sposób, podczas jej wywoływania przekazujemy jeden obiekt z wymaganymi właściwościami.

// ✅ Wszystko jest jasne
doStuffWithBook({
  title: "Ostatnie Królestwo",
  pages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

// Kolejną zaletą jest to, że można zdestrukturyzować obiekt w parametrze book.
// Można to zrobić zarówno w ciele funkcji...

function doStuffWithBook(book) {
  const { title, pages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(pages);
}

// Jak i w sygnaturze funkcji - nie ma to znaczenia.

function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
  console.log(title);
  console.log(pages);
}


//----- Głęboka destrukturyzacja -----

// Najczęściej dane będą reprezentowane jako obiekty z więcej niż jednym poziomem zagnieżdżenia.

// Na przykład, obiekt opisujący użytkownika mediów społecznościowych może wyglądać następująco:

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// Do destrukturyzacji właściwości zagnieżdżonych obiektów stosuje się te same zasady. Na początek napiszemy kod destrukturyzacji właściwości obiektu użytkownika.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, stats } = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }

// Teraz dodajmy głęboką destrukturyzację właściwości obiektu stats.
// W tym celu po nazwie właściwości w destrukturyzacji stawiamy dwukropki : i zaczynamy destrukturyzację obiektu dla tej właściwości.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views, likes },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(views); // 4827
console.log(likes); // 1308

// Podczas głębokiej destrukturyzacji można również zmieniać nazwy zmiennych i przypisywać wartości domyślne, korzystając ze znajomego ci składni.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

//-------------------

//----- Destrukturyzacja tablicy ------

// Składnia

// Destrukturyzowane przypisanie można stosować nie tylko do obiektów, ale także do tablic, ale z pewnymi różnicami.

// Zamiast nawiasów klamrowych {} używane są nawiasy kwadratowe [].
// Zmiennym zdefiniowanym w nawiasach kwadratowych [] zostaną przypisane wartości kolejnych elementów tablicy.

// Na przykład, mamy tablicę liczb. Chcemy uzyskać wartości każdej składowej koloru w osobnych zmiennych.

const color = [200, 255, 100];
const [ red, green, blue ] = color;

console.log(`rgb(${red}, ${green}, ${blue})`); // "rgb(200, 255, 100)"

// Po słowie kluczowym const lub let dodajemy nawiasy kwadratowe, podobnie jak w przypadku deklaracji tablicy. Wewnątrz nawiasów, oddzielając przecinkami, podajemy nazwy zmiennych, do których zostaną przypisane wartości odpowiednich elementów tablicy.

// W wyniku takiego zapisu zostaną utworzone 3 zmienne, a do nich zostaną przypisane elementy w kolejności numerowania: od 0 do końca tablicy.

//

// Wartości domyślne
// Jeśli zmiennych jest więcej niż elementów w tablicy, zostaną im przypisane wartości undefined. Aby temu zapobiec, można określić wartości domyślne.
// Składnia jest taka sama jak w przypadku obiektów, po nazwie zmiennej stawiamy = i wartość domyślna.

const color = [200, 100, 255];
const [ red, green, blue, alfa = 0.3 ] = color;

console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`); // "rgba(200, 100, 255, 0.3)"

// Częściowa destrukturyzacja

// Czasem z tablicy potrzebujemy zdekstrukturyzować tylko pierwsze N elementów, a resztę zachować w jednej zmiennej jako tablicę.

// Destrukturyzując tablicę, możemy rozpakować potrzebne elementy i przypisać resztę elementów tablicy do zmiennej, używając operatora ...rest.

const color = [200, 255, 100];

const [ red, ...otherColors ] = color;

console.log(red); // 200
console.log(otherColors); // [255, 100]

// W ten sposób oryginalna tablica nie zostanie zmieniona, a w zmiennej otherColors pojawi się nowa tablica z kopiami zebranych wartości.

// Z obiektami również działa to samo. Możemy zdekstrukturyzować określone właściwości do osobnych zmiennych, a resztę zebrać w nowy obiekt.

const user = {
	name: "Jacob",
	age: 32,
	email: "j.cob@mail.com",
	isOnline: true
};

const { name, isOnline, ...otherProps } = user;

console.log(name); // "Jacob"
console.log(isOnline); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}


// Pomijanie wartości

// W przeciwieństwie do nazwanych właściwości obiektu, elementy tablicy są zbiorem zindeksowanych wartości. Jeśli chcesz zdekstrukturyzować tylko na przykład trzeci element, pierwsze dwa należy pominąć.

// Załóżmy, że z tablicy color chcesz wziąć tylko ostatnią wartość. W destrukturyzacji należy oddzielić przecinkami pomijane elementy.

const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Niebieski: ${blue}`); // "Niebieski: 255"
// W praktyce ta możliwość jest rzadko używana w tablicach, ale dobrze wiedzieć, że taka opcja istnieje.

// ---- Destrukturyzacja parametrów ---- //

// Podczas przekazywania tablicy do funkcji można zdekstrukturyzować jej elementy.

// Bez destrukturyzacji:

function printFruits(fruits) {
  console.log(fruits[0], fruits[1], fruits[2]);
}

printFruits(["jabłko", "banan", "pomarańcza"]); // "jabłko banan pomarańcza"

// Z destrukturyzacją w miejscu deklaracji parametrów:

function printFruits([pierwszyOwoc, drugiOwoc, trzeciOwoc]) {
  console.log(pierwszyOwoc, drugiOwoc, trzeciOwoc);
}

printFruits(["jabłko", "banan", "pomarańcza"]); // "jabłko banan pomarańcza"

// W ten sposób można od razu przypisać elementy tablicy do osobnych zmiennych podczas deklaracji funkcji.

function printFruits([firstFruit, secondFruit, thirdFruit]) {
  console.log(firstFruit, secondFruit, thirdFruit);
}

printFruits(["apple", "banana", "orange"]); // "apple banana orange"
