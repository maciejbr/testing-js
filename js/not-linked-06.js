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

//--------

// Zdarzają się sytuacje, kiedy funkcję trzeba wywołać w kontekście obiektu, nawet jeśli funkcja nie jest metodą tego obiektu. W JavaScript istnieją specjalne metody: call, apply i bind, które pozwalają określić kontekst wywołania funkcji.
// Zapoznajmy się z sygnaturą tej metody. Sygnatura to nazwa metody i jej parametry.
// Sygnatura metody call() wygląda tak:

foo.call(thisArg, arg1, arg2, ...)

// thisArg — obiekt, który chcemy ustawić jako kontekst (wartość this) dla funkcji
// arg1, arg2, ... — opcjonalne argumenty, które zostaną przekazane funkcji
// Metoda call wywołuje funkcję foo tak, że wartość this w funkcji będzie odnosić się do obiektu thisArg, i również przekazuje jej argumenty arg1, arg2 itd.

// Rozważmy przykład: stwórzmy funkcję greet, która wita różnych gości hotelowych, z których każdy jest reprezentowany przez obiekt z właściwościami username i room. Funkcja przyjmuje jeden parametr, str — ciąg powitania.

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

// Za pomocą metody call możemy wywołać funkcję greet tak, aby wartość this wskazywała na odpowiedni obiekt i wykorzystywała wartości jego właściwości.

greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// Metoda "call" wywołuje funkcję w określonym kontekście i przekazuje listę argumentów.

function showName() { console.log(this.name); } const user = { name: "Alice", }; 

// Jak poprawnie użyć metody call, aby wywołać funkcję showName w kontekście obiektu user?
showName.call(user)

// Jaki będzie wynik, jeśli wywołamy powyższy kod?

function greet(name) { console.log(`Hello, ${name}! I am ${this.person}`); } const person = "John"; const context = { person: "Alice" }; greet.call(context, "Bob"); // "Hello, Bob! I am Alice"

// Metoda apply jest analogiczna do metody call. Różnica polega na tym, że w metodzie apply() składnia przekazywania argumentów wymaga tablicy, nawet jeśli argumenty funkcji to osobne wartości.
// Sygnatura metody apply() wygląda następująco:

foo.apply(thisArg, [arg1, arg2, ...])

// thisArg — obiekt, który chcemy ustawić jako kontekst (wartość this) dla funkcji.
// arg1, arg2, ... — opcjonalne argumenty, które zostaną przekazane funkcji.

// Metoda apply wywołuje funkcję foo w taki sposób, że wartość this w funkcji będzie odnosić się do obiektu obj i przekaże elementy tablicy jako osobne argumenty arg1, arg2 itd.
// Przyjrzyjmy się przykładowi, gdzie użyjemy wcześniej zadeklarowanej przez nas funkcji greet. Tym razem wywołujemy ją, używając metody apply zamiast call.

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// Czyli różnica między call a apply polega tylko na formie przekazywania argumentów. Wybór między call a apply zależy od tego, jak chcesz przekazać argumenty do funkcji w konkretnej sytuacji. We wszystkich innych aspektach działają identycznie: wywołują funkcję w kontekście wskazanego obiektu i przekazują jej argumenty.

// Metody call i apply wywołują funkcję „na miejscu”, czyli od razu.
// Metoda bind tworzy i zwraca nową funkcję, która ma z góry ustalony kontekst, i ta nowa funkcja może być wywołana później z dowolnymi argumentami.
// Sygnatura metody bind() wygląda tak:

const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

// thisArg — obiekt, który chcemy ustawić jako kontekst (wartość this) dla funkcji
// arg1, arg2, ... — opcjonalne argumenty, które zostaną przekazane funkcji przy jej wywołaniu

// Spróbujmy zachować odniesienie do metody obiektu w zmiennej i wywołać ją w globalnym kontekście.

"use strict";

const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

customer.sayHello(); // "Hello, Jacob!"

const greet = customer.sayHello;

greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')


// Zachowaliśmy odniesienie do metody sayHello w zmiennej greet
// Przy wywołaniu greet() kontekst jest utracony, funkcja jest wywoływana w globalnym kontekście, więc wartość this będzie undefined
// Przy próbie dostępu do właściwości this.username podczas wywołania funkcji greet(), pojawia się błąd, ponieważ undefined to nawet nie obiekt
// Można to naprawić, przypisując kontekst przy pomocy metody bind.

"use strict";

const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

customer.sayHello(); // "Hello, Jacob!"

const greet = customer.sayHello.bind(customer);

greet(); // "Hello, Jacob!"

// Gdy używamy bind(), tworzymy nową funkcję greet. Ta nowa funkcja zawsze będzie miała poprawny kontekst i może używać właściwości username obiektu customer.

// Metoda "bind" tworzy i zwraca nową funkcję związana z kontekstem

// Jakiej składni używamy do wywołania metody bind, gdzie function to funkcja, a context to obiekt?

function.bind(context)

//---

function sayHello(greeting) { console.log(`${greeting}, ${this.name}!`); } const user = { name: "Alice" }; const greet = sayHello.bind(user); greet("Hello"); // "Hello, Alice!"

// Metoda bind() jest bardzo użyteczna. Szczególnie ważne jest jej stosowanie w funkcjach zwrotnych (callbackach) i sytuacjach, gdzie możliwa jest utrata kontekstu podczas wywołania funkcji.

// Rozważmy przykład utraty kontekstu, kiedy przekazujemy metodę obiektu jako funkcję zwrotną:

"use strict";

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

function makeMessage(callback) {
  // callback() — jest wywołaniem metody getFullName w kontekście globalnym
	const username = callback();
  console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

// W tym przypadku metoda getFullName jest przekazywana jako funkcja zwrotna callback i traci kontekst obiektu customer. Prowadzi to do błędu, ponieważ wartość this w metodzie getFullName, kiedy jest wywoływana jako callback w globalnym kontekście, jest undefined. Zwracając się do właściwości firstName i lastName, otrzymamy błąd, ponieważ undefined nie jest obiektem.
// Aby uniknąć tej utraty kontekstu, można użyć metody bind(). Zamiast przekazywać oryginalną metodę getFullName, przekazujemy jej kopię, do której przypisany jest kontekst obiektu customer.

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
	const username = callback();
	console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

//----

const library = { books: 1923, logBookCount() { console.log(this.books); } }; const showBooks = library.logBookCount.bind({ books: 724 }); showBooks(); // 724
 
//----

"use strict"; const library = { books: 1923, logBookCount() { console.log(this.books); } }; function showBooks(callback) { callback() } showBooks(library.logBookCount); // TypeError: Cannot read properties of undefined (reading 'books')
 
// Przeczytaj przykład kodu:
"use strict";
const library = { books: 1923, logBookCount() { console.log(this.books); } };
function showBooks(callback) { callback() } showBooks(library.logBookCount);

// Jak należy zmienić ostatni wiersz kodu, aby zachować kontekst podczas przekazywania callbacka ?
showBooks(library.logBookCount.bind(library))

// Kontekst wewnątrz funkcji strzałkowej określany jest w miejscu jej deklaracji, a nie wywołania.
// Oznacza to, że this wewnątrz funkcji strzałkowej odnosi się do kontekstu zakresu nadrzędnego, w którym została zadeklarowana, i nigdy się nie zmienia.

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window

// Nawet jeśli przypiszemy odniesienie do funkcji strzałkowej do właściwości obiektu i wywołamy ją w kontekście tego obiektu, this nadal będzie odnosić się do obiektu, który funkcja zapamiętała w momencie jej deklaracji.

const showThis = () => {
  console.log("this in showThis: ", this);
};

const user = {
  username: "Mango",
};

user.showContext = showThis;

user.showContext(); // this in showThis: window

// Funkcje strzałkowe również ignorują obecność trybu ścisłego.
// Jeśli strzałka została zadeklarowana w kontekście globalnym, to this w niej będzie zawierać odniesienie do window, niezależnie od tego, czy skrypt jest wykonywany w trybie ścisłym.

"use strict";

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window

// Rozważmy przykład, który dobrze ilustruje, jak działa kontekst dla funkcji strzałkowych.

const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// Podczas wywoływania metody hotel.showThis() funkcja strzałkowa foo() jest wywoływana w kontekście globalnym bez obiektu, ale wartość this wewnątrz niej odnosi się do kontekstu metody showThis, czyli obiektu hotel. Dzieje się tak, ponieważ została zadeklarowana wewnątrz metody showThis, a w momencie jej deklaracji this zapamiętuje odniesienie do kontekstu nadrzędnego. Innymi słowy, funkcje strzałkowe zapamiętują kontekst w momencie deklaracji z zakresu nadrzędnego.

//-----!!!!!!
// Może to nie jest często wykorzystywane w praktyce, ale takie przypadki są dość typowe dla rozmów kwalifikacyjnych.

// W przeciwieństwie do zwykłych funkcji, nie można zmienić wartości this wewnątrz funkcji strzałkowej po jej deklaracji. Oznacza to, że metody call, apply i bind nie wpływają na wartość this w funkcjach strzałkowych.

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis.call({ username: "Mango" }); // this in showThis: window
showThis.apply({ username: "Mango" }); // this in showThis: window

const boundShowThis = showThis.bind({ username: "Mango" }); 
boundShowThis(); // this in showThis: window

// Ograniczając funkcje strzałkowe do stałego kontekstu, silniki JavaScript mogą je lepiej zoptymalizować, w przeciwieństwie do zwykłych funkcji, których wartość this może być zmieniona.

// Co należy zapamiętać o this w funkcjach strzałkowych?
// Kontekst **this** wewnątrz funkcji strzałkowej jest określony przez miejsce jej deklaracji, a nie wywołania.
// Funkcje strzałkowe ignorują obecność trybu ścisłego. Dlatego w globalnym kontekście w funkcji strzałkowej this zawsze odnosi się do obiektu window.
// Nie można zmienić wartości **this** wewnątrz funkcji strzałkowej po jej deklaracji. Metody call, apply i bind nie wpływają na wartość this w funkcjach strzałkowych.

// Jaki kontekst ma this w funkcjach strzałkowych? - Kontekst, który jest określany w momencie deklaracji funkcji

// Jak można zmienić wartość this w funkcji strzałkowej? - this zawsze ma to samo znaczenie w funkcji strzałkowej

// Co zostanie wyświetlone na konsoli w wyniku wykonania powyższego kodu?
const a = () => { console.log(this); }; function b() { a(); } b.call({ user: "Mango" }); // window

// Słowo kluczowe this to jedna z najbardziej mylących koncepcji dla początkujących, którzy często podstawiają this metodą prób i błędów, aż skrypt zacznie działać.

// Wszystko staje się znacznie prostsze, kiedy poznamy prosty algorytm określania wartości this:

// Krok 1
// Czy to jest funkcja strzałkowa?
// Jeśli odpowiedź brzmi Tak, wartość this jest taka sama, jak this w zewnętrznym zakresie widoczności
// Jeśli odpowiedź brzmi Nie, przejdź do Krok 2
// Krok 2
// Czy używane są metody call, apply lub bind?
// Jeśli odpowiedź brzmi Tak, wartość this to ten sam obiekt, który został przekazany podczas ich wywołania
// Jeśli odpowiedź brzmi Nie, przejdź do Krok 3
// Krok 3
// Czy funkcja jest wywoływana jako metoda obiektu object.method?
// Jeśli odpowiedź brzmi Tak, wartość this to obiekt po lewej stronie kropki
// Jeśli odpowiedź brzmi Nie, przejdź do Krok 4
// Krok 4
// Czy skrypt jest wykonywany w trybie ścisłym?
// Jeśli odpowiedź brzmi Tak, wartość this to undefined
// Jeśli odpowiedź brzmi Nie, wartość this to window