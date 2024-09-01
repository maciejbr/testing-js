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

<button class="my-button">Następny</button>

const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("Przycisk został wciśnięty, teraz pojawi się następny obraz");
};

button.addEventListener("click", handleClick);

// z CodePen

const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

// Metoda removeEventListener()

element.removeEventListener(zdarzenie, obsługa, opcje)


const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("Przycisk został wciśnięty, teraz pojawi się następny obraz");
};

button.addEventListener("click", handleClick);

// z CodePen:
const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector(".target-btn");

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
});

// Obiekt zdarzenia Event

const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);

// z codePen:

const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);

// Zdarzenia klawiatury

// W przeciwieństwie do innych zdarzeń, zdarzenia klawiatury są obsługiwane
// na dokumencie, a nie na konkretnym elemencie.Obiekty zdarzeń klawiatury 
// dziedziczą po bazowej klasie KeyboardEvent.

document.addEventListener("keydown", event => {
  console.log("Naciśnięcie klawisza: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Zwolnienie klawisza: ", event);
});

// Właściwości key i code

// Właściwość obiektu zdarzenia key zwraca symbol wygenerowany przez naciśnięcie 
// klawisza na klawiaturze.Ta właściwość uwzględnia:
// - stan klawiszy modyfikujących, na przykład Shift
// - bieżący język

// Właściwość obiektu zdarzenia code zwraca kod fizycznego klawisza na klawiaturze 
// i nie zależy od języka oraz stanu klawiszy modyfikujących.

document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});

// z CodePen

HTML  CSS  Babel Result  
EDIT ON

 const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

console.log(clearLogBtn)

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}

// Klawisze modyfikatorów

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("Kombinacja «Ctrl + s» lub «Command + s»");
  }
});

// Ostatnio do obsługi kombinacji klawiszy używano właściwości keyCode.
// Wiele wpisów na forach i blogach może nadal z niej korzystać.
// Pamiętaj jednak, że keyCode jest już przestarzała, a zamiast niej 
// warto używać właściwości key i code.

//----- Zdarzenia elementów formularza ------

// Zdarzenie submit

const form = document.querySelector("form");

form.addEventListener("submit", event => {
	// ...
});

// Aby anulować domyślną akcję przeglądarki, używamy standardowej metody
// obiektu zdarzenia preventDefault().

const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();
});

// Zdarzenie submit można wykorzystać do walidacji formularza przed wysłaniem,
// ponieważ obiekt zdarzenia zawiera wiele przydatnych właściwości związanych 
// z elementami formularza.

// z CodePen
const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

// Właściwość elements obiektu DOM formularza zawiera obiekt z odnośnikami do wszystkich jego elementów, które posiadają atrybut name. Dlatego w przykładzie uzyskujemy wartości pól, odwołując się do event.target.elements.login.value i event.target.elements.password.value.

// Zdarzenie change

// z CodePen
const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

// Zdarzenie input
// z CodePen

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

// Zdarzenie focus i blur
// z CodePen

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});