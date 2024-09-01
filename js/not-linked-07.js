"use strict";

element.querySelector(selector);

element.querySelectorAll(selector);

//

console.log(document);

const body = document.body;
console.log(body);

const list = document.querySelector(".list");
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);

//----- Właściwości i atrybuty -----//

// Dostęp do właściwości

<a class="link" href="<https://goit.global>">
  GoIT
</a>;

const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"

const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"
link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
console.log(link.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"

// Właściwość textContent

<p class="text">
  Nazwa użytkownika: <span class="sub-text">Mango</span>
</p>;

const el = document.querySelector(".text");
const nested = document.querySelector(".sub-text");

console.log(el.textContent); // "Nazwa użytkownika: Mango"
console.log(nested.textContent); // "Mango"

const el = document.querySelector(".text");
console.log(el.textContent); // "Nazwa użytkownika: Mango"
el.textContent = "Nazwa użytkownika: Poly";

// Właściwość classList

<a class="link is-active" href="<https://goit.global>">
  GoIT
</a>;

const link = document.querySelector(".link");
console.log(link.classList);
// ["link", "is-active", length: 2, value: "link is-active"]

const hasActiveClass = link.classList.contains("is-active"); // true
const hasTitleClass = link.classList.contains("title"); // false

link.classList.add("special");
console.log(link.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

link.classList.remove("is-active");
console.log(link.classList);
// ["link", "special", length: 2, value: "link special"]

link.classList.toggle("is-active");
console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]

link.classList.replace("special", "regular");
console.log(link.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// Właściwość style

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // obiekt stylów inline

// Dostęp do atrybutów

<img
  class="image"
  src="<https://picsum.photos/id/15/320/240>"
  alt="Rocks and waterfall"
  width="300"
/>;

const image = document.querySelector(".image");
console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false

// Własne atrybuty

<button type="button" data-action="save">Zapisz tekst</button>
<button type="button" data-action="close">Zamknij edytor</button>

// Pobieranie wartości
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

// Zmiana wartości
// Zmieniamy wartość data-action dla przycisku saveBtn
saveBtn.dataset.action = "update";

// Dodajemy nowy data-atrybut data-role
saveBtn.dataset.role = "admin";

// Sprawdzamy nowe wartości
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"

// Usuwanie atrybutu
// Usuwamy data-atrybut data-action
delete saveBtn.dataset.action;

// Sprawdzamy usunięcie
console.log(saveBtn.dataset.action); // undefined

// Data-atrybuty często są używane z kebab-case, gdzie słowa są oddzielone myślnikami. Gdy trzeba uzyskać dostęp do tych data-atrybutów za pomocą właściwości dataset, atrybuty w kebab-case są przekształcane na camelCase. Innymi słowy, myślniki są usuwane, a każda litera po myślniku staje się wielką literą. Na przykład, data-user-role w JavaScript staje się userRole:

const userBlock= document.querySelector('div[data-user-role="admin"]');

// Dodanie nowego atrybutu data-user-status
element.dataset.userStatus = "online";

console.log(element.dataset.userRole); // "admin"
console.log(element.dataset.userStatus); // "online"


// Tworzenie elementów

document.createElement(tagName)

const heading = document.createElement("h1");

const heading = document.createElement("h1");
headding.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "<https://picsum.photos/id/11/320/240>";
image.alt = "Nature";
console.log(image); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />


// Dodawanie elementów

// Aby utworzony element pojawił się na stronie, trzeba go dodać do już istniejącego elementu w drzewie DOM. Zakładając, że dodajemy do pewnego elementu elem, istnieją następujące metody:
// elem.append(el1, el2, ...) — dodaje jeden lub kilka elementów po wszystkich dzieciach elementu elem.
// elem.prepend(el1, el2, ...) — dodaje jeden lub kilka elementów przed wszystkimi dziećmi elementu elem.
// elem.after(el1, el2, ...) — dodaje jeden lub kilka elementów po elemencie elem.
// elem.before(el1, el2, ...) — dodaje jeden lub kilka elementów przed elementem elem.

const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

// Zwróć uwagę! Jeśli element do dodania już istnieje w DOM, zostanie on usunięty ze swojego starego miejsca i dodany w nowe. Zatem obowiązuje zasada: ten sam element nie może jednocześnie znajdować się w dwóch miejscach.

// Usuwanie elementów

element.remove()

<p class="text">Losowa treść tekstu</p>

const text = document.querySelector(".text")
text.remove();

// Właściwość innerHTML

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

// Zmiana
const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title';

// Jeśli do właściwości innerHTML zostanie przypisany pusty ciąg znaków, to zawartość
// elementu zostanie wyczyszczona.To prosty i szybki sposób na usunięcie całej zawartości.

// Metoda insertAdjacentHTML() [lepsza ni innerHTML]

jsx
element.insertAdjacentHTML(pozycja, ciąg)
// "beforebegin" — przed elementem
// "afterbegin" — wewnątrz elementu, przed wszystkimi dziećmi
// "beforeend" — wewnątrz elementu, po wszystkich dzieciach
// "afterend" — po elemencie

// Wartości "beforebegin" i "afterend" działają tylko wtedy, gdy element już znajduje się
// w drzewie DOM.Ograniczenie wynika z faktu, że niemożliwe jest określenie, gdzie wstawić
// znacznik, dopóki element nie zostanie umieszczony w drzewie DOM.

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//----- Zdarzenia ------

// Metoda addEventListener()

element.addEventListener(zdarzenie, obsługa, opcje)
