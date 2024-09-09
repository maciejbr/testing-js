"use strict";

// Internet i protokoły
// Protokół HTTP

// Żądania HTTP
// Serwer i backend

// API (application programming interface) to zestaw jasno zdefiniowanych reguł dotyczących komunikacji między różnymi komponentami oprogramowania. Interfejs opisuje, jakie żądania można przekazać programowi i co się w związku z tym stanie.
// REST (representational state transfer) styl architektury backendu. Opiera się na zestawie zasad opisujących sposób definiowania i adresowania zasobów sieciowych.

// REST API to backend zbudowany na zasadzie REST. Służy jako warstwa między aplikacją internetową a bazą danych. Posiada standardowy interfejs dostępu do zasobów. Działa jak strona internetowa: wysyłamy żądanie HTTP od klienta do serwera, a jako odpowiedź, zamiast strony HTML, otrzymujemy dane w formacie JSON.

// Ścieżka do zasobu

// Endpointy (ang. endpoints) w kontekście usług webowych i API to określone adresy URL, za pomocą których można uzyskać dostęp do określonych funkcji lub zasobów serwera. Służą one jako punkty wejścia do interakcji klient-serwer, umożliwiając pobieranie, wysyłanie, aktualizowanie lub usuwanie danych.

<https://jsonplaceholder.typicode.com/users>

// Taka ścieżka (endpoint) jasno wskazuje na zasób, nawet jeśli nigdy wcześniej go nie widzieliśmy. Ta ścieżka URL jest hierarchiczna i opisowa. Wysyłamy żądanie do interfejsu REST API, aby uzyskać zasób /users.

// Fetch API to interfejs wbudowany w przeglądarkę i dostępny za pośrednictwem obiektu window. Zapewnia on zestaw właściwości i metod, które umożliwiają wysyłanie, odbieranie i przetwarzanie zasobów z serwera.

// Metoda fetch() zapewnia nowoczesny interfejs do generowania żądań do serwera i jest zbudowana na obietnicach.

fetch(url, options)

//

fetch("<https://jsonplaceholder.typicode.com/users>")
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

// Metoda fetch zwraca promise więc do wyniku jej wywołania dodajemy łańcuch metod then() i catch() w celu przetworzenia odpowiedzi.

// Kody odpowiedzi

//  Kody są podzielone na grupy w zależności od cyfry, jaką zaczyna się kod błędu.
// 1XX — mają cel informacyjny
// 2XX — oznaczają pomyślne działanie
// 3XX — opisują wszystko, co jest związane z przekierowaniem (redirect)
// 4XX — wskazują błędy po stronie klienta
// 5XX — wskazują błędy po stronie serwera

// Sprawdzanie odpowiedzi

// Wartością promise zwracaną przez metodę fetch() jest obiekt z informacją serwisową o stanie odpowiedzi serwera. Obiekt ten jest instancją klasy Response, która zawiera różne metody i właściwości. W zależności od typu otrzymanej zawartości używane są różne metody do przekształcania ciała odpowiedzi w dane.

// json() — parsuje dane w formacie JSON.
// text() — parsuje dane w prostym formacie tekstowym, takim jak .csv (dane w postaci tabeli).
// blob() — parsuje dane opisujące plik, takie jak obrazy, audio lub wideo.

// W poniższym przykładzie pierwsza metoda then() sprawdza status odpowiedzi. Jeśli wynik jest pomyślny, konwertuje dane do poprawnego formatu (parsowanie) lub jawnie powoduje błąd w celu obsługi nieudanego żądania HTTP w metodzie catch().

fetch("<https://jsonplaceholder.typicode.com/users>")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
		console.log(data);
  })
  .catch(error => {
    // Error handling
		console.log(error);
  });

// Jest to konieczne, aby fetch() poprawnie zareagował na kod statusu 404, który technicznie nie jest błędem, ale dla klienta jest nieudanym wynikiem.

// Metody HTTP

// Istnieje kilka podstawowych metod HTTP do pracy z usługą REST.
// POST — tworzenie nowego zasobu
// GET — pobieranie zestawu zasobów lub pojedynczego zasobu
// PUT — aktualizacja istniejącego lub utworzenie nowego zasobu
// PATCH — aktualizacja istniejącego zasobu
// DELETE — usunięcie zasobu

// Aby określić metodę HTTP, należy użyć drugiego argumentu metody fetch, a mianowicie obiektu ustawień żądania. We właściwości method należy przekazać ciąg znaków opisujący metodę HTTP.

const options = {
	method: "GET"
};

fetch("<https://jsonplaceholder.typicode.com/users>", options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

// Jeśli chcesz wykonać żądanie GET, nie musisz określać go w opcjach fetch, jest to domyślna metoda żądania.
// Lista możliwych metod dla każdego zasobu jest opisana w dokumentacji samego backendu.

// Nagłówki HTTP

// nagłówek Accept określa typ treści, którą klient może zaakceptować i poprawnie przetworzyć w odpowiedzi z serwera;
// nagłówek Content-Type opisuje typ zasobu w żądaniu lub odpowiedzi, aby odbiorca wiedział, jak poprawnie interpretować te dane.

Accept: text/html
Content-Type: application/json

// Tak więc nagłówek składa się z nazwy i wartości. Wartość nagłówka jest typem MIME (typem treści) używanym do określania typu zawartości żądania lub odpowiedzi. Składa się z typu i podtypu oddzielonych ukośnikiem (/).

// Na przykład:
// Plik tekstowy zawierający HTML będzie opisany przez typ text/html.
// Jeśli plik tekstowy zawiera CSS, zostanie opisany jako text/css.
// Dane w formacie JSON będą opisane jako application / json.

// Aby utworzyć nagłówki zapytań, należy użyć literału obiektu z właściwościami, gdzie każdy nagłówek i jego wartość są opisane osobną właściwością. Wszystko to jest opisane w obiekcie ustawień metody fetch we właściwości headers.

fetch("some-url", {
	headers: {
	  "Content-Type": "application/json",
	  "X-Custom-Header": "custom value",
	}
})

// Na przykład, jeśli chcemy wyraźnie wskazać, że oczekujemy tylko JSON w odpowiedzi z backendu, dodajemy nagłówek Accept z wartością application/json.

fetch("<https://jsonplaceholder.typicode.com/users>", {
  headers: {
    Accept: "application/json",
  },
}).then(response => {
  // ...
});

// Oto najpopularniejsze z nich:
// User-Agent: identyfikuje oprogramowanie klienckie, które wykonuje żądanie.
// Accept: określa typy mediów, które klient może przetwarzać.
// Content-Type: wskazuje typ zawartości w treści żądania lub odpowiedzi.
// Authorization: służy do przekazywania danych uwierzytelniających.
// Cache-Control: dyrektywy do zarządzania cache'owaniem.
// Host: nazwa domeny zasobu, do którego kierowane jest żądanie.

// Żądania międzydomenowe

// Ta polityka przeglądarki nazywa się CORS i oznacza Cross-Origin Resource Sharing, gdzie Origin to jest domena, port lub protokół. Dosłowne tłumaczenie to „współdzielenie zasobów między różnymi źródłami".

// Dla każdego żądania przeglądarka sama dodaje nagłówek HTTP Origin, w którym wskazuje adres strony internetowej, która chce wykonać żądanie HTTP. Na przykład, jeśli wykonamy żądanie fetch ze strony https://my-site.com/about do https://my-api.com/users, nagłówki będą następujące:

GET /users
Host: my-api.com
Origin: <https://my-site.com>

// Serwer sprawdza nagłówek Origin. I jeśli obsługuje żądania międzydomenowe, dodaje do odpowiedzi specjalny nagłówek HTTP Access-Control-Allow-Origin.

# Private API
Access-Control-Allow-Origin: <https://my-site.com>

# Public API
Access-Control-Allow-Origin: *


// Nagłówek Access-Control-Allow-Origin określa dozwolone źródła, które są uprawnione do otrzymywania odpowiedzi na żądania międzydomenowe. Dla prywatnego backendu nagłówek ten będzie miał wartość **<https://my-site.com>**, a dla publicznego backendu będzie to symbol specjalny *****, który zezwala na dostęp dla wszystkich.
    
// Przeglądarka jest więc rodzajem pośrednika między kodem JavaScript a backendem. Dodaje nagłówek Origin z prawidłową wartością do każdego żądania i sprawdza obecność nagłówka Access-Control-Allow-Origin w odpowiedzi. Jeśli nagłówek jest obecny, a jego wartość jest odpowiednia, oryginalne żądanie zostanie wykonane, a kod JavaScript otrzyma wynik. W przeciwnym razie zostanie wygenerowany błąd CORS.

//------- AJAX -------

// AJAX (Asynchronous JavaScript and XML) to metoda odbierania lub wysyłania danych, a następnie aktualizowania interfejsu na podstawie tych danych, bez konieczności przeładowywania strony. Skraca to czas odpowiedzi i sprawia, że strona internetowa jest bardziej interaktywna.

// AJAX interpretuje się jako dowolną komunikację z serwerem bez przeładowywania strony.

<button type="button" class="btn">Fetch users</button>
<ul class="user-list"></ul>

// Po kliknięciu przycisku Fetch users wykonujemy żądanie HTTP używając znanej nam już metody fetch.

const fetchUsersBtn = document.querySelector(".btn");

fetchUsersBtn.addEventListener("click", () => {
  fetch("<https://jsonplaceholder.typicode.com/users>")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
			// Dane z backendu
			console.log(users);
		})
    .catch((error) => console.log(error));
});

// W drugim bloku then uzyskujemy dostęp do danych odpowiedzi z backendu. To właśnie tutaj można wykorzystać te dane do aktualizacji interfejsu, tworzenia znaczników HTML i dodawania ich do DOM do istniejącego elementu.

// Do tworzenia znaczników HTML można użyć dowolnej wygodnej metody, takiej jak createElement lub insertAdjacentHTML. Przyjrzyjmy się jednej ze standardowych technik.

// Iterujemy po tablicy obiektów przy użyciu metody map
// W każdej iteracji zwracamy znaczniki HTML dla jednego elementu kolekcji
// Wynikową tablicę ciągów zszywamy w jeden ciąg przy użyciu metody join("")
// Dodajemy wiersz ze znacznikami HTML do DOM za pomocą metody insertAdjacentHTML

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetch("<https://jsonplaceholder.typicode.com/users>")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
      const markup = users.map((user) => {
				return `<li>
	          <p><b>Name</b>: ${user.name}</p>
	          <p><b>Email</b>: ${user.email}</p>
	          <p><b>Company</b>: ${user.company.name}</p>
	        </li>`;
        })
        .join("");

			userList.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));
});

// Przeanalizuj żywy przykład kodu. Zauważ, jak zrefaktoryzowaliśmy kod, aby był bardziej czytelny.

// Przenieśliśmy kod żądania do funkcji fetchUsers(), która wykonuje żądanie HTTP i zwraca wynik.
// W obsłudze zdarzenia kliknięcia wywołujemy ją i dodajemy łańcuch metod then() i catch() do wyniku jej wywołania.
// Przenieśliśmy kod do tworzenia i dodawania znaczników HTML do funkcji renderUsers(users), która oczekuje tablicy użytkowników.

//

//------- Błąd początkującego -------

// Przeanalizujmy powszechny błąd popełniany podczas pracy z kodem asynchronicznym — próbę użycia danych żądania HTTP poza callbackiem metody then() w kodzie synchronicznym.

// Początkujący próbuje zapisać „wynik fetch" do zewnętrznej zmiennej i użyć go poniżej w kodzie synchronicznym natychmiast po wywołaniu metody fetch().

let globalVariable; // undefined

// Wykonanie żądania HTTP
fetch("<https://jsonplaceholder.typicode.com/users>")
  .then(response => response.json())
  .then(users => {
    console.log("users inside then callback: ", users);

    // Asynchroniczne zapisywanie wyniku zapytania do zewnętrznej zmiennej
    globalVariable = users;

    // W środku callback metody then wszystko jest w porządku
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// Z zewnątrz callbacku metody then w kodzie synchronicznym nie ma dostępu do danych asynchronicznej odpowiedzi backendu
console.log("globalVariable outside fetch: ", globalVariable); // undefined

// W naszym powyższym przykładzie poza callbackiem metody then() nie ma żadnych danych. Ponieważ ostatni console.log() zostanie wykonany wcześniej (kod synchroniczny), niż nastąpi odpowiedź serwera (kod asynchroniczny). W momencie wywołania console.log("globalVariable outside fetch: ", globalVariable) zmienna globalVariable nadal ma wartość undefined. Wartość obietnicy (promise), która została wykonana, jest dostępna tylko w kodzie asynchronicznym, w naszym przykładzie w callbacku metody then().

// Dlatego bardzo ważne jest, aby pamiętać, że próba zapisania wyniku operacji asynchronicznej do zmiennej zewnętrznej i wykorzystania go w kodzie synchronicznym jest nieefektywnym podejściem. Zamiast tego lepiej jest używać metod .then() i .catch() do przetwarzania wyników operacji asynchronicznych natychmiast po ich otrzymaniu.

// Czy możliwe jest uzyskanie dostępu do danych żądania HTTP poza metodą then w kodzie synchronicznym?
// NIE, te dane są wartością obietnicy (promise), która jest przetwarzana asynchronicznie przez metodę then.

// Parametry ciągu żądania
// Parametry żądania pozwalają określić dodatkowe kryteria dla backendu
// Symbol ? oznacza początek parametrów żądania. Każdy parametr jest parą — nazwa=wartość. W ciągu parametry są oddzielone symbolem &.

// Dokumentacja JSONPlaceholder API opisuje możliwe parametry ciągu żądania:
// _limit, który kontroluje liczbę elementów w odpowiedzi;
// _sort, który odpowiada za kolejność sortowania obiektów w tablicy.

fetch("<https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name>")

// Żądanie GET w powyższym przykładzie zwróci tablicę zawierającą siedmiu użytkowników (łącznie 10) posortowanych alfabetycznie według nazwy (pole name). Podkreślenia w nazwach parametrów są specyficzne dla tego backendu, nie jest to standard.

// Klasa URLSearchParams

// Parametrów może być wiele i niewygodne jest łączenie ich w jeden długi ciąg, zarówno dla czytelności, jak i dalszej edycji.

// Podczas komponowania ciągów parametrów tworzona jest instancja klasy URLSearchParams, która jest inicjowana obiektem. Wynikiem będzie specjalny obiekt (iterator) z metodami. W przypadku konwertowania ciągów zwraca on wynik wywołania metody toString() — swoje odwzorowanie ciągu.

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"

// W postaci ciągu znaków właściwości obiektu staną się parametrami i ich wartościami. Parametry będą oddzielone znakiem &. Podczas interpolacji wartości w szablonach ciągów znaków, zostaje niejawnie przekonwertowana na ciąg znaków. Więc nie ma potrzeby wywoływania metody toString() podczas tworzenia adresu URL. Nie zapomnij rozpocząć ciąg od znaku ?.