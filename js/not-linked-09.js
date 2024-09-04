"use strict";

//----- JSON -----

// Funkcje nie mogą być przechowywane w JSON, ponieważ JSON jest tylko dla danych, a nie dla metod przetwarzania danych.

{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}

JSON.stringify(value) 
// Metoda JSON.stringify(value) obiera wartość i konwertuje ją do JSON. Wartością może być liczba, wartość logiczna (boolean), null, tablica, obiekt.

const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'


// Jeśli obiekt ma metody, zostaną one zignorowane podczas konwersji i nie będą dołączone do JSON.

const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log("Woof!");
  },
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'


// Ponadto, podczas próby konwersji funkcji na JSON, wynikiem będzie undefined.

const json = JSON.stringify(() => console.log("Well, this is awkward")); 
console.log(json); // undefined


// Parsowanie za pomocą JSON

// Aby uzyskać poprawną wartość JavaScript z JSON, należy go przeparsować (parse). Jest to odwrotność konwersji obiektu JavaScript na JSON przy użyciu metody JSON.stringify(value)

JSON.parse(value) // przyjmuje JSON, czyli ciąg znaków, i konwertuje go na dane JavaScript.

console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null


// Jeśli JSON opisuje złożony typ danych, taki jak obiekt, wynikiem jest poprawny obiekt, z którym można pracować w zwykły sposób.
const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dog = JSON.parse(json);
console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dog.name); // "Mango"


// Przetwarzanie błędów

// Ciąg znaków jest niepoprawnym JSON, ponieważ nie można go przekonwertować na prawidłową wartość JavaScript.

const data = JSON.parse("Well, this is awkward"); 
console.log("❌ You won't see this log");

// Błąd wystąpi również w przypadku próby parsowania niepoprawnego obiektu, który na przykład może pochodzić z backendu. W podanym przykładzie we właściwości username brakuje podwójnych cudzysłowów.

const data = JSON.parse('{username: "Mango"}'); // Error
console.log("❌ You won't see this log");

// Rozwiązanie

// Aby tego uniknąć, stosowany jest konstrukcja try...catch, która pozwala nam „łapać" i przetwarzać błędy wykonania skryptu.

try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}
//----- 

try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parsing error in try...catch");

// Zmienna error jest obiektem błędu zawierającym informacje o tym, co się stało.
// Obiekt ten posiada kilka przydatnych właściwości:
// name to typ błędu. Dla błędu parsowania jest to SyntaxError.
// message to wiadomość o szczegółach błędu.
// stack to stos wywołań funkcji w momencie wystąpienia błędu. Jest on używany do debugowania.

// Więcej o błędach

// W JavaScript kod nie jest wykonywany natychmiast.
// Najpierw interpreter musi przeczytać kod i dowiedzieć się, czy w ogóle można go wykonać.

// Faza interpretacji lub oceny (ang. compile time, evaluation time) to przygotowanie przed wykonaniem kodu: interpreter znajduje błędy składni, błędy typowania itp. Tak więc kod nie jest jeszcze wykonywany, a jedynie oceniany.
// Jeśli ta faza zakończy się sukcesem, oznacza to przynajmniej, że w kodzie nie ma błędów składniowych i można go uruchomić w celu wykonania.

// Faza wykonywania (ang. runtime) to faza, w której skrypt zaczyna się wykonywać: uruchamiane są instrukcje wywołania funkcji i ewaluacji wyrażeń, wyszukiwane są niezbędne identyfikatory w odpowiednich zakresach itp.

// Jeśli ta faza zakończy się sukcesem, oznacza to, że skrypt został napisany bez oczywistych błędów i wykonał swoje zadanie. Ta faza może zawierać błędy związane z brakującymi właściwościami i zmiennymi, konwersjami typów itp., czyli coś, co dzieje się tylko podczas wykonywania kodu.

// Konstrukcja try...catch wychwytuje tylko błędy, które wystąpiły podczas wykonywania kodu (runtime errors). Oznacza to, że kod musi być poprawny składniowo, w przeciwnym razie faza wykonywania po prostu się nie rozpocznie. Błędy występujące podczas fazy ewaluacji nazywane są błędami parsowania.

//----------------

// Web Storage
// Web Storage to mechanizm w przeglądarkach internetowych, który umożliwia aplikacjom internetowym przechowywanie i pobieranie danych po stronie klienta, czyli na komputerze użytkownika. Za każdym razem, gdy użytkownik zmienia motyw kolorystyczny między jasnym a ciemnym, ogląda wideo, dodaje przedmiot do koszyka, otwiera lub zamyka sidebar, popularne aplikacje internetowe mogą zapamiętać stan interfejsu i przywrócić go przy następnej wizycie.

// pamięć lokalna (Local Storage) i pamięć sesji (Session Storage)

// Web Storage API

console.log(window.localStorage);
// Storage {length: 0}

console.log(localStorage);
// Storage {length: 0}

// Dodawanie danych
// Dodajmy parę klucz-wartość do pamięci lokalnej za pomocą metody setItem(key, value) dostępnej w obiekcie localStorage:

localStorage.setItem("ui-theme", "light");

// Spowoduje to utworzenie nowego zapisu w pamięci z kluczem "ui-theme" i wartością "light". Jeśli teraz wywołasz obiekt localStorage, zobaczysz zapisane dane.

console.log(localStorage); // Storage {ui-theme: "light", length: 1}


// Dodawanie złożonych danych

// Jeśli chcesz zapisać coś innego niż ciąg znaków, na przykład tablicę lub obiekt, należy je przekonwertować na ciąg znaków za pomocą metody JSON.stringify().

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

// Pobieranie danych

getItem(key)
// Metoda getItem(key) umożliwia odczytanie z pamięci zapisu o kluczu key i zwraca jego wartość w formacie JSON.

// Jeśli w pamięci nie ma zapisu z takim kluczem, metoda zwraca wartość null.

const savedItem = localStorage.getItem("key-that-does-not-exist"); 
console.log(savedItem); // null

// Jeśli wartość jest typu prymitywnego, nie ma potrzeby jej parsowania.
// W przeciwnym razie, jeśli jest to tablica lub obiekt, należy sparsować wartość za pomocą metody JSON.parse(), aby uzyskać poprawne dane.

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object


// Usuwanie danych

// Metoda removeItem(key) usuwa z pamięci lokalnej istniejący zapis z kluczem key. W wyniku jej działania wartość nie jest zwracana.

localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null

// Jeśli chcesz całkowicie wyczyścić zawartość Local Storage musisz wywołać metodę clear().
localStorage.setItem("ui-theme", "light");
localStorage.setItem("notif-level", "mute");

console.log(localStorage); 
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

localStorage.clear();
console.log(localStorage); // Storage {length: 0}

// Operacja całkowitego wyczyszczenia pamięci jest ryzykowna. Może zakłócić zapisy utworzone przez innych deweloperów projektu. Lepiej jest usunąć tylko te zapisy, które naprawdę nie są potrzebne, zamiast polegać na pełnym czyszczeniu Local Storage.

//------- Session Storage

console.log(window.sessionStorage); // Storage {length: 0}

setItem(key, value)
// Metoda setItem(key, value) może być używana do zapisu zarówno ciągów znaków, jak i złożonych typów danych.

sessionStorage.setItem("user-id", "123");
sessionStorage.setItem(
  "tickets",
  JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
);
console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

getItem(key) 
// Metoda getItem(key) pozwala na odczytywanie zapisów przy użyciu przechowywanego klucza.
const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// I oczywiście można usuwać elementy według klucza i czyścić całą pamięć używając odpowiednio metod removeItem(key) i clear()

sessionStorage.removeItem("tickets");
console.log(sessionStorage); // Storage {user-id: '123', length: 1}

sessionStorage.clear();
console.log(sessionStorage); // Storage {length: 0}

// Przechowywanie sesji może być wykorzystywane w procesach wieloetapowych, takich jak rezerwacja lotów, hoteli, biletów do kina, pociągów i innych. Możesz przechowywać szczegóły poprzednich kroków w pamięci sesji przeglądarki, aby wstępnie wypełnić te formularze lub pola wejściowe.

// Innym przykładem mogą być blogi, newslettery, strony szkoleniowe itp. Takie strony mają wielu odwiedzających, którzy czytają treść bez tworzenia konta. W takich sytuacjach można poprosić odwiedzającego o utworzenie konta — za każdym razem, gdy czyta wpis na blogu lub artykuł na nowej zakładce. Może to być świetny sposób na zaoferowanie użytkownikom doświadczenia bez blokowania, a jednocześnie skutecznie przekształcić ich w zarejestrowanych użytkowników.

//------- Case study: Formularz z wiadomością

<form class="feedback-form">
  <textarea name="message"></textarea>
  <button type="submit">Send feedback</button>
</form>

// Podczas submitu formularza będziemy wyświetlać na konsoli wartość pola tekstowego i oczyszczać formularz.

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", evt => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  form.reset();
});

// Zapewnijmy, że wprowadzona wiadomość zostanie zachowana po odświeżeniu strony.

// Aby to zrobić, użyjemy pamięci lokalnej do zapisania bieżącej wartości pola tekstowego podczas wprowadzania.

const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  form.reset();
});

// Za każdym razem, gdy zmienia się wartość pola, czyli występuje zdarzenie "input", my:
// używamy delegacji zdarzeń;
// przechwytujemy zdarzenie na formularzu;
// używamy właściwości target, aby zapisać bieżącą wartość pola do pamięci lokalnej.

//

// Podczas submitu formularza będziemy czyścić zapisaną wartość za pomocą metody removeItem.
const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

// Ostatnim krokiem jest dodanie kodu, który odczyta zapisaną wiadomość z pamięci lokalnej i ustawi ją jako wartość początkową pola tekstowego po załadowaniu strony.

const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const localStorageKey = "goit-example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

//-------- Narzędzia

// Vite

// Node.js

// W konsoli:
node --version

npm --version

npm config set init.author.name "YOUR_NAME"

npm config set init.author.email "YOUR_EMAIL"

npm create vite@latest

// Instalacja zależności

// Następnym krokiem po zainicjowaniu projektu w terminalu będzie przejście do folderu projektu i instalacja jego zależności.

npm install
// lub 
npm i


// Uruchomienie serwera deweloperskiego
// W pliku package.json pole scripts zawiera listę poleceń projektu, które można wykonać w terminalu.

{
  "name": "my-vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  }
}

// Nazwa właściwości (na przykład „dev") to nazwa polecenia skryptu, które ma zostać wykonane.

// Wartość właściwości (na przykład „vite") to sam skrypt, który ma zostać wykonany. Oznacza to, że pole scripts zawiera aliasy dla często używanych poleceń w projekcie.

npm run [script-name]

npm run dev

// by zakończyć
Control + C

// Instalacja pakietów

npm i validator

{
  "name": "my-vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  },
  "dependencies": {
    "validator": "^13.11.0" //
  }
}

// Aby uzyskać interfejs pakietu w kodzie JavaScript, należy zaimportować go do dowolnego pliku JS projektu, na przykład do main.js, po wcześniejszym usunięciu całego kodu, który się tam znajdował.

// W pliku main.js
import validator from "validator";

console.log(
  "Is mango@mail.com a valid email?: ",
  validator.isEmail("mango@mail.com")
); // Is mango@mail.com a valid email?: true

console.log(
  "Is Mangodogmail.com a valid email?: ",
  validator.isEmail("Mangodogmail.com")
); // Is mango@mail.com a valid email?: false

// Usunięcie pakietów
// Oprócz usunięcia kodu korzystającego z biblioteki należy usunąć ją jako zależność projektu.
// Możemy usunąć dowolną zależność za pomocą polecenia npm uninstall [package-name] lub jego skrótu npm r [package-name].

npm uninstall validator

// z zależnościami projektowymi: niektóre z nich będą wykorzystywane w produkcie końcowym, podczas gdy inne są potrzebne tylko na etapie tworzenia.
// Dlatego polecenia npm install i npm uninstall mają dwa checkboxy.

// --save wskazuje, że dodawana jest zależność, która zostanie włączona do produktu końcowego. Pakiet zostanie zainstalowany lokalnie, w folderze node_modules, a do pola dependencies w pliku package.json zostanie dodany zapis.

// --save-dev wskazuje, że dodawana jest zależność rozwojowa, która nie zostanie włączona do produktu końcowego. Pakiet zostanie zainstalowany lokalnie, w folderze node_modules, a zapis zostanie dodany do pola devDependencies w pliku package.json.

// Jeśli pole wyboru nie zostanie zaznaczone, domyślne ustawienie to --save.

//

//--------- Modularność kodu --------

// ECMAScript Modules (ESM) to nowoczesny standard systemu modułów JavaScript, który odpowiada za organizację i unifikację podejścia do importowania i eksportowania danych pomiędzy różnymi plikami w projekcie.

// Moduł to plik JavaScript z fragmentem kodu, który może być wielokrotnie wykorzystywany. Moduł eksportuje określone obiekty, udostępniając je innym modułom.

// W poniższym przykładzie plik makeMessage.js deklaruje i eksportuje funkcję do tworzenia wiadomości według nazwy użytkownika.

export default function makeMessage(username) {
	return `Welcome, ${username}!`;
}

// Funkcja eksportowana przez moduł makeMessage.js może być użyta w dowolnym innym pliku projektu, na przykład w index.js.

import makeMessage from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"

// Z czasem ECMAScript Modules (ESM) będą w pełni obsługiwane przez przeglądarki natywnie, bez potrzeby stosowania dodatkowych narzędzi. Jednak obecnie obsługa przeglądarek nie jest jeszcze w pełni wdrożona, więc ESM jest często używany w połączeniu z kreatorami modułów, takimi jak Vite, co pozwala na to bez dodatkowej konfiguracji.



// Eksport i import domyślny (default)

// Podstawową ideą jest to, że w każdym module może istnieć tylko jeden eksport domyślny (export default). Wartość ta jest uważana za „główną" wartość modułu, gdy jest importowana do innych części kodu.

export default exportedValue //

const makeMessage = username => {
	return `Welcome, ${username}!`;
};

export default makeMessage;

// Import

import name from "..." //


import makeMessage from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"


// Eksport i import nazwany

// Eksport nazwany (named export) to sposób na eksportowanie jednej lub więcej wartości z modułu pod określonymi nazwami.

// Korzystając z nazwanego eksportu, można uzyskać dostęp do dowolnej wartości: zmiennej, funkcji lub obiektu itp. pod określoną nazwą. Później wartości te można zaimportować do innego pliku o tej samej nazwie.

// Operacja eksportu nazwanego jest realizowana przez konstrukcję z export.

export exportedValue //

export const makeMessage = username => {
	return `Welcome, ${username}!`;
};

export const levels = ["easy", "medium", "hard"];

// Liczba nazwanych eksportów w jednym module nie jest ograniczona, w przeciwieństwie do eksportu domyślnego, który może być tylko jeden.

// Operacja importu nazwanego jest realizowana przez konstrukcję z import.

import { name } from "..." //


import { makeMessage, levels } from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
console.log(levels); // ["easy", "medium", "hard"]


// Import nazwany może być przydatny, gdy masz wiele wartości do wyeksportowania z jednego modułu i konieczne jest kontrolowanie, które wartości są importowane w innym pliku. Bez dodatkowych konstrukcji nie da się użyć importu nazwanego do zaimportowania encji z innego modułu, jeśli została ona domyślnie eksportowana w tym module. Oznacza to, że eksporty nazwane mogą być importowane tylko za pomocą importów nazwanych.

//

// Zmiana nazwy (rename export)
// to technika pozwalająca na importowanie nazwanych eksportowanych zmiennych, funkcji itp. z jednego modułu do innego poprzez zmianę ich nazwy podczas importu.

// Aby ustawić nową nazwę podczas importowania z innego modułu, należy użyć słowa kluczowego as.

import { name as newName } from '...' //

// Module myModule.js
export const original = "Hello, World!";

// Your current module, for example app.js
import { original as renamed } from './myModule.js';

console.log(renamed); // "Hello, World!"

// Kiedy należy używać zmiany nazwy? W bibliotekach lub innych modułach nazwy mogą być długie, dość ogólne lub mogą kolidować z nazwami zmiennych w bieżącym module. W takich przypadkach zaleca się użycie zmiany nazwy dla wygody i uniknięcia konfliktów.

//

// Import przestrzeni nazw (namespace import) 
// to technika importowania całej zawartości modułu jako obiektu o nazwie reprezentującej przestrzeń nazw tego modułu. Oznacza to, że wszystkie nazwane eksporty z modułu stają się właściwościami tego obiektu. Jest to przydatne, gdy trzeba zaimportować wiele różnych funkcji, zmiennych lub klas z modułu bez wybierania ich jeden po drugim.

// Module user.js
export const name = "Mango";
export const age = 26;
export const email = "mango@mail.com";

// Your current module
import * as user from './myModule.js';

console.log(user.name); // "Mango"
console.log(user.age); // 26
console.log(user.email); // "mango@mail.com"

// W tym przykładzie importujemy wszystkie nazwane eksporty z modułu user.js jako obiekt user. Wszystkie nazwane eksporty stają się właściwościami tego obiektu. W rezultacie możemy uzyskać do nich dostęp za pomocą kropki.

// Import przestrzeni nazw pozwala uniknąć konfliktów nazw między importowanymi obiektami i nazwami w bieżącym module. Jest to szczególnie przydatne podczas pracy z bibliotekami lub modułami, które mają wiele eksportów nazwanych.
