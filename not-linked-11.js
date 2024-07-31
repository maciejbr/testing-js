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
      const markup = users
        .map((user) => {
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

// Typowy błąd początkującego

let globalVariable; // undefined

// Wykonanie żądania HTTP
fetch("<https://jsonplaceholder.typicode.com/users>")
  .then((response) => response.json())
  .then((users) => {
    console.log("users inside then callback: ", users);

    // Asynchroniczne zapisywanie wyniku zapytania do zewnętrznej zmiennej
    globalVariable = users;

    // W środku callback metody then wszystko jest w porządku
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// Z zewnątrz callbacku metody then w kodzie synchronicznym nie ma dostępu do danych asynchronicznej odpowiedzi backendu
console.log("globalVariable outside fetch: ", globalVariable); // undefined

// Dlatego bardzo ważne jest, aby pamiętać, że próba zapisania wyniku operacji asynchronicznej do zmiennej zewnętrznej i wykorzystania go w kodzie synchronicznym jest nieefektywnym podejściem. Zamiast tego lepiej jest używać metod .then() i .catch() do przetwarzania wyników operacji asynchronicznych natychmiast po ich otrzymaniu.

fetch("<https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name>");

// Symbol ? oznacza początek parametrów żądania. Każdy parametr jest parą — nazwa=wartość. W ciągu parametry są oddzielone symbolem &.

// Dokumentacja JSONPlaceholder API opisuje możliwe parametry ciągu żądania:
// _limit, który kontroluje liczbę elementów w odpowiedzi;
// _sort, który odpowiada za kolejność sortowania obiektów w tablicy.

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"
