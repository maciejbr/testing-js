"use strict";

// Kontekst wykonania funkcji

const user = {
  username: "Victor",
  showName() {
    // ❌ Viktor biega szybko, ponieważ Wiktor stara się złapać pociąg
    console.log(user.username);
  },
};
user.showName();

// Zamiast nazwy obiektu, używamy zarezerwowanego słowa kluczowego this.
// Podczas wywoływania funkcji w this zapisywane jest odniesienie do obiektu, w kontekście którego została wywołana. W ten sposób w ciele funkcji możemy uzyskać dostęp do właściwości i metod tego obiektu.

const user = {
  username: "Victor",
  showName() {
    // ✅ Viktor biega szybko, ponieważ on (this) stara się złapać pociąg.
    console.log(this.username);
  },
};
user.showName();

// Metoda showName to funkcja, która jest wywoływana w kontekście obiektu user. Podczas jej wywołania w this zapisywane jest odniesienie do obiektu user, dzięki czemu możemy odwoływać się do jego właściwości i metod.

// Przeprowadź refaktoryzację metod obiektu pizzaPalace, umieszczając brakujące elementy this w miejscach odwołania do właściwości i metod obiektu.

// Przed:
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

// Po:
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

// W określaniu wartości this istnieje ważny niuans. Wartość this jest definiowana nie w momencie deklarowania funkcji (z wyjątkiem funkcji strzałkowych), lecz w momencie jej wywołania. Innymi słowy, this jest określany przez to, w jaki sposób funkcja została wywołana, a nie gdzie została zadeklarowana.

function foo() {
  console.log(this);
}

foo(); // window

// W globalnym kontekście, jeśli funkcja jest wykonywana nie w trybie ścisłym, this odnosi się do obiektu window. Obiekt window zapewnia dostęp do właściwości i funkcji przeglądarki i jest globalnym kontekstem wykonania dla skryptów w przeglądarce.
// W trybie ścisłym wartość this w globalnym kontekście zawsze będzie undefined.

("use strict");

function foo() {
  console.log(this);
}

foo(); // undefined

// Jeśli funkcja została wywołana jako metoda obiektu, to kontekst będzie wskazywał na sam obiekt, do którego należy ta metoda

const user = {
  username: "Poly",
  showThis() {
    console.log(this);
  },
};

user.showThis(); // {username: "Poly", showThis: ƒ}

// Rozważmy bardziej skomplikowany przykład.
// Najpierw tworzymy funkcję w kontekście globalnym i wywołujemy ją. Zwróć uwagę na użycie trybu ścisłego.

("use strict");

function showThis() {
  console.log("this in showThis: ", this);
}

// Wywołujemy w kontekście globalnym
showThis(); // "this in showThis: undefined"

// Następnie przypisujemy tę funkcję do właściwości obiektu i wywołujemy ją jako metodę tego obiektu.

("use strict");

function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Poly",
};

user.showContext = showThis;

// Wywołujemy w kontekście obiektu
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Wywołujemy w kontekście globalnym
showThis(); // "this in showThis: undefined"

// Stworzyliśmy obiekt user z właściwością username
// Obiektowi user jako metodę showContext przypisaliśmy wartość funkcji showThis. Zwróć uwagę, że to nie jest wywołanie — nie ma ()
// Teraz wywołujemy metodę showContext, w której znajduje się odniesienie do funkcji showThis, czyli wywołujemy funkcję w kontekście obiektu. this będzie wskazywać na bieżący obiekt, w którym odbywa się wywołanie
// Ten przykład pokazuje, że kontekst wykonania funkcji (this) jest określany w momencie jej wywołania, a nie w momencie deklaracji.
