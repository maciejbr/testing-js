"use strict";

//------- Biblioteka Axios -------

// Biblioteka Axios to prosty klient HTTP, który opiera się na obietnicach (promise) i automatyzuje wiele rutynowych zadań podczas pracy z żądaniami HTTP:

// zapisuje ustawienia globalne, które są automatycznie dodawane do wszystkich żądań,
// automatycznie konwertuje dane żądania na format JSON,
// przetwarza dane odpowiedzi zapisane w formacie JSON,
// obsługuje wszystkie możliwe błędy żądań, w tym 404
// i wiele więcej.

npm install axios

import axios from 'axios';

// Składnia żądania

// Możemy napisać żądanie, wywołując axios i przekazując odpowiedni obiekt konfiguracyjny. Napiszmy kod, który będzie wykonywał żądanie GET.

import axios from "axios";

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>'
});

// Funkcja axios zwraca obiekt Promise (obietnicę), który przetwarzamy przy użyciu standardowych metod then i catch.

import axios from "axios";

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>'
})
	.then(response => console.log(response))
	.catch(error => console.log(error));
// Funkcja axios zwraca obiekt Promise (obietnicę), którą przetwarzamy przy użyciu standardowych metod then i catch.

//------- Aliasy dla metod żądań

// Biblioteka Axios zapewnia aliasy (alternatywne nazwy) dla wszystkich obsługiwanych metod żądań, dzięki czemu można uprościć ich składnię i dodać standardowe ustawienia.

// Wróćmy na chwilę do kodu żądania GET.

import axios from "axios";

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>'
})
	.then(response => console.log(response))
	.catch(error => console.log(error))

// Metoda 
axios.get(url[, config]) // jest prostszym sposobem na utworzenie żądania GET.

// Zgodnie z dokumentacją w nawiasach kwadratowych znajduje się opcjonalny argument, który nie jest częścią kodu.

import axios from "axios";

axios.get('<https://jsonplaceholder.typicode.com/users>')
	.then(response => console.log(response))
	.catch(error => console.log(error))

// Tak więc w metodzie axios.get wystarczy podać adres żądania, a biblioteka użyje metody GET. Ponadto Axios dodaje standardowe nagłówki HTTP do żądania, takie jak Accept z wartością application/json, gdyż najczęściej spodziewamy się danych w formacie JSON wysyłanych przez serwer.

// Metoda
axios.get(url[, config]) // jest uproszczonym sposobem na utworzenie żądania GET.

//------- Obiekt odpowiedzi

// Obiekt odpowiedzi na żądanie zawiera następujące dane:

{
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  request: {}
}

data — obiekt zawierający dane uzyskane w wyniku żądania
status — kod stanu HTTP
statusText — tekstowy opis kodu stanu HTTP
headers — nagłówki HTTP otrzymane w odpowiedzi
config — konfiguracja, która została użyta do wykonania żądania
request — obiekt reprezentujący oryginalne żądanie HTTP

// W metodzie then będą następujące właściwości zawarte w obiekcie odpowiedzi.

import axios from "axios";

axios.get('<https://jsonplaceholder.typicode.com/users>')
	.then(response => {
		console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
	})
	.catch(error => {
		console.log(error);
	})

// Zwróć uwagę na właściwość data, która przechowuje dane odpowiedzi.
// W przeciwieństwie do fetch nie musimy przetwarzać danych odpowiedzi za pomocą metody response.json(), gdyż jest to wykonywane automatycznie, po czym dane są zapisywane we właściwości data. Nie musimy również sprawdzać statusu odpowiedzi we właściwości response.ok. Biblioteka Axios robi to automatycznie i odrzuca żądanie z błędem dla każdego nieudanego kodu odpowiedzi HTTP, w tym 404.

// Dane są przechowywane we właściwości data.
response.data

// Domyślna konfiguracja

// Wyobraźmy sobie sytuację, w której mamy kilka żądań z tym samym bazowym adresem serwera, ale do różnych zasobów. Programista musi powtarzać adres bazowy (https://jsonplaceholder.typicode.com) w kodzie każdego żądania, co nie jest zbyt wygodne.

axios.get('<https://jsonplaceholder.typicode.com/users>')
	.then()
	.catch();

axios.get('<https://jsonplaceholder.typicode.com/posts>')
	.then()
	.catch();

axios.get('<https://jsonplaceholder.typicode.com/images>')
	.then()
	.catch();

// W tej sytuacji programista mógłby skorzystać z ustawień domyślnych.
axios.defaults.baseURL // to właściwość obiektu 
axios.defaults // która definiuje globalny adres bazowy dla wszystkich żądań HTTP.

import axios from "axios";

axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';

// Teraz można przepisać kod żądań tak, jak pokazano w poniższym przykładzie, podając tylko ostatnią część adresu po adresie bazowym. Axios automatycznie doda wartość baseURL do każdego wysyłanego żądania.

import axios from "axios";

axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';

axios.get('/users')
	.then()
	.catch();

axios.get('/posts')
	.then()
	.catch();

axios.get('/images')
	.then()
	.catch();


//------- Domyślne nagłówki

// Oprócz adresu bazowego można również określić wymagane domyślne nagłówki żądań. Jeśli na przykład masz unikalny klucz API, który musi być dodawany do każdego żądania jako nagłówek HTTP, można go dodać do właściwości
axios.defaults.headers.common

//

import axios from "axios";

const myApiKey = "secret-api-key-for-every-request";

axios.defaults.headers.common["header-name"] = myApiKey;

// W miejscu "header-name" podajemy ciąg znaków z żądaną nazwą nagłówka.
// Innymi słowy, dosłownie dodajemy nową właściwość z kluczem "header-name" do obiektu axios.defaults.headers.common. Następnie Axios automatycznie doda ten nagłówek z określoną wartością do każdego żądania.

//------- Parametry żądania

// Parametry żądania można ustawiać na kilka sposobów.

// Zagnieżdżone w URL.

axios.get("<https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name>");

// Za pomocą klasy URLSearchParams.

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);

// Przekazane w obiekcie konfiguracyjnym (parametr config) we właściwości params. Jest to bardziej wygodne i czytelne.

axios.get("<https://jsonplaceholder.typicode.com/users>", {
	params: {
		_limit: 7,
		_sort: "name"
	}
});

// Axios wykorzystuje ten obiekt, aby dodać parametry żądania do adresu przy użyciu URLSearchParams.

//-------- Składnia async/await --------

//------- Funkcje asynchroniczne

// Składnia async/await służy do tworzenia asynchronicznego kodu, który przypomina kod synchroniczny.
// Każdą funkcję można uczynić asynchroniczną.

// Funkcję asynchroniczną deklarujemy poprzez dodanie słowa async przed słowem kluczowym function.

async function fetchData() {
	// ...
}

// Podobnie w wyrażeniu funkcji async jest dodawane przed słowem kluczowym function.

const fetchData = async function() {
	// ...
}

// Asynchroniczną funkcję strzałkową deklarujemy poprzez dodanie słowa kluczowego async przed listą parametrów.

const fetchData = async () => {
	// ...
}

// Asynchroniczną metodę obiektu deklarujemy poprzez dodanie async przed nazwą metody.

class User {
  async getUsername() {
    // ...
  }
}

// Zwracana wartość

// async/await funkcjonuje w oparciu o obietnice (tzw. promise'y), dzięki czemu funkcje asynchroniczne nie blokują głównego wątku programu. Tak naprawdę jest to współczesny sposób pracy z pętlami wewnątrz funkcji będący alternatywą dla konstrukcji then/catch.

// Funkcja asynchroniczna zawsze zwraca obiekt typu promise (obietnicę). Dlatego zawsze wartość zwracana przez funkcję asynchroniczną jest obietnicą.

const foo = async () => {
	return 5;
};

foo().then(value => {
	console.log(value); // 5
});

// Jeśli nie określimy zwracanej wartości, zostanie zwrócona obietnica undefined.

const foo = async () => {
	// Nie określamy zwracanego wyniku
};

foo().then(value => {
	console.log(value); // undefined
});

//-------- Operator await --------

// W funkcjach asynchronicznych można używać operatora await, umieszczając go po prawej stronie każdego wyrażenia, które zwraca obiekt typu promise (obietnicę).

const foo = async () => {
	console.log("Before await");

	const promiseValue = await new Promise(resolve => {
		setTimeout(() => resolve(5), 2000)
	});	

	console.log("After await", promiseValue);
};

foo(); // po 2 sekundach w konsoli zostanie wyświetlony komunikat "After await" 5


// Gdy interpreter napotyka await, wykonanie funkcji jest wstrzymywane, ponieważ interpreter czeka na zakończenie zadania powiązanego z obietnicą umieszczoną po prawej stronie od await.

// Jeśli operacja asynchroniczna zakończy się sukcesem, jej wynik zostanie zwrócony, a funkcja kontynuuje swoje działanie.

// Zmienna promiseValue nie przechowuje obietnicy jako takiej, tylko wynik powiązanej z nią operacji (w przykładzie jest to liczba 5). Wynika to z faktu, że interpreter wstrzymuje funkcję foo po napotkaniu instrukcji await i czeka, aż operacja powiązana z odpowiednią obietnicą zostanie zakończona, a następnie, gdy wynik zostanie zwrócony, kontynuuje wykonywanie funkcji, przypisując go do zmiennej.

// Reasumując:
// Operator await może być wykorzystywany wyłącznie wewnątrz funkcji asynchronicznych (async).
// await nie może być wykorzystany bez async, ale async może być wykorzystany bez await.
// Operator await wstrzymuje wykonywanie funkcji do czasu zakończenia zadania powiązanego z obietnicą (możliwe wartości to fulfilled lub rejected).
// Jeśli obietnica zostanie spełniona (fulfilled), operator await zwróci jej wartość.
// Jeśli obietnica zostanie odrzucona (rejected), operator await wygeneruje błąd.
// Funkcja asynchroniczna zawsze zwraca obiekt typu promise, więc każda zwrócona wartość jest obietnicą.
// Jeśli nie określisz zwracanej wartości, zostanie zwrócona obietnica undefined.

//------- Żądania HTTP -------

// Pracując z żądaniami HTTP, używamy składni async/await, dzięki której kod jest czytelniejszy.

// Przeróbmy funkcję fetchUsers, używając składni async/await.

const fetchUsers = () => {
	axios.get("<https://jsonplaceholder.typicode.com/users>")
	  .then(response => {
			console.log(response.data);
	  });
};

// Dodajemy słowo kluczowe async, aby funkcja działała asynchronicznie.

const fetchUsers = async () => {
	// ...
};

// Następnie używamy operatora await oczekującego na zakończenie działania axios.get, żeby później przypisać obiekt odpowiedzi do zmiennej response.

const fetchUsers = async () => {
	const response = await axios.get("<https://jsonplaceholder.typicode.com/users>");
	console.log(response.data);
};

// Jeżeli chcesz wykorzystać wynik żądania HTTP w kodzie zewnętrznym, wystarczy zwrócić jego wartość z funkcji asynchronicznej i przetworzyć ją w metodzie then.

const fetchUsers = async () => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
	return response.data;
};

fetchUsers()
	.then(users => console.log(users));

//
//------- Konstrukcja try…catch

// Konstrukcja try...catch jest mechanizmem obsługi wyjątków. Próbę wykonania pewnego kodu umieszczamy w bloku try, natomiast obsługa ewentualnych błędów, które mogą wystąpić podczas tego wykonania, znajduje się w bloku catch.

try {
  // Blok kodu, w którym mogą wystąpić błędy
} catch (error) {
  // Blok kodu do obsługi błędów, które wystąpiły w bloku try
}

// Jeśli w trakcie wykonywania kodu w bloku try wystąpi błąd (np. rzucenie wyjątku), kontrola przechodzi do bloku catch. Parametr error zawiera różne informacje o błędzie, np. komunikat o błędzie.

// Mechanizm ten umożliwia elastyczną obsługę błędów, pozwalając na podejmowanie odpowiednich decyzji. Można albo kontynuować wykonywanie programu, obsługując błąd w bloku catch, albo poinformować użytkownika o błędzie.
// Spójrzmy na przykład. Po próbie dzielenia przez zero pojawia się błąd. Używając try...catch, możemy "przechwycić" ten błąd i wyświetlić o nim komunikat.

console.log("Before try...catch");

try {
  const result = 10 / 0;
  console.log(result); // Ta linia nie zostanie wykonana z powodu błędu
} catch (error) {
  // Оbsługa błędu
  console.error(error.message);
}

console.log("After try...catch");

//------- Obsługa błędów

// Jeśli wynik funkcji asynchronicznej (obietnica) nie jest używany w zewnętrznym kodzie, błędy są obsługiwane bezpośrednio w ciele funkcji przy użyciu konstrukcji try...catch. Wartość parametru error w bloku catch jest błędem wygenerowanym przez await, jeśli obietnica została odrzucona.

const fetchUsers = async () => {
	try {
		const response = await axios.get("<https://jsonplaceholder.typicode.com/users>");
		console.log(response.data);
	} catch(error) {
		console.log(error);
	}
};


// Jeśli wynik funkcji asynchronicznej (obietnica) jest używany w zewnętrznym kodzie, tj. poza innymi funkcjami asynchronicznymi, błędy są obsługiwane przez funkcję callback przekazaną do metody catch(). Wartość parametru error w metodzie catch() jest błędem wygenerowanym przez await, jeśli obietnica została odrzucona.

const fetchUsers = async () => {
	const response = await axios.get("<https://jsonplaceholder.typicode.com/users>");
	return response.data;
};

fetchUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error));


// Jeśli wynik funkcji asynchronicznej jest używany w innej funkcji asynchronicznej, błędy są obsługiwane przez konstrukcję try...catch. Wartość parametru error w bloku catch jest błędem wygenerowanym przez await, jeśli obietnica została odrzucona.

const fetchUsers = async () => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
	return response.data;
};

const doStuff = async () => {
 try {
  const users = await fetchUsers();
  console.log(users);
}  catch (error) {
console.log(error);
}
};

doStuff();

//

//-------- Paginacja --------

// Zbiory danych i strony

// Baza danych może przechowywać zbiory zawierające tysiące rekordów. Mamy przykładowo aplikację do przeglądania postów. Czy jest sens wyświetlać cały zbiór postów od początku do końca w odpowiedzi na każde żądanie? Warto pamiętać, że mogą to być tysiące rekordów. Oczywiście, że nie.

// Przetwarzanie odpowiedzi zawierającej tak dużą ilość danych, a następnie wyświetlanie jej w interfejsie wymaga znacznych zasobów obliczeniowych na urządzeniu, z którego korzysta użytkownik. Rozmiar odpowiedzi może być tak duży, że jej odbiór może potrwać kilka sekund, ponieważ im więcej danych zawiera odpowiedź z serwera, tym dłużej trwa jej transmisja przez sieć. Ponadto użytkownicy zazwyczaj nie potrzebują wszystkich wyników na raz.

// Z tego powodu pobieranie całego zbioru danych przy każdym żądaniu GET wiąże się ze zbyt dużym zużyciem zasobów.

// Przyjrzyjmy się bliżej temu, jak serwer my-api.com przechowuje zbiór postów, do którego prowadzi ścieżka /posts. Pamiętajmy, że takie zbiory mogą być bardzo duże.

const fetchPosts = async() => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
	console.log("Posts: ", response.data);
};

// Liczba elementów w odpowiedzi

// Pierwszy parametr określa liczbę elementów w odpowiedzi przesyłanej z serwera.
// W naszym przypadku parametr ten nazywa się per_page. Tak naprawdę nie ma ogólnie przyjętych nazw dla parametrów paginacji, więc kwestia nazewnictwa leży w gestii twórcy aplikacji serwerowej.

// Ogólnie dostępny JSONPlaceholder API obsługuje paginację. Liczba elementów w odpowiedzi jest kontrolowana przez parametr _limit.

const fetchPosts = async() => {
	const response = await axios.get("<https://jsonplaceholder.typicode.com/posts?_limit=5>");
	console.log("Posts: ", response.data);
};

// Łącznie zbiór /posts zawiera 10 000 elementów, natomiast domyślnie zwracanych jest 5 elementów na stronie.

// Spróbuj zmienić wartość parametru _limit w tym przykładzie i zobacz, jaka będzie odpowiedź serwera w interfejsie i w zakładce Network.

// Numer strony zbioru

// Poprzez zmianę wartości parametru page, informujemy serwer, którą kolejną stronę zbioru chcemy pobrać. Maksymalną wartością tego parametru jest ostatnia strona zbioru. W przypadku podania wartości ujemnej lub większej niż liczba stron w zbiorze, odpowiedź serwera może być trudna do przewidzenia i zależy od implementacji aplikacji serwerowej.

// W JSONPlaceholder API parametr określający stronę zbioru elementów nazywa się _page.

const fetchPosts = async() => {
	const response = await axios.get("<https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3>");
	console.log("Posts: ", response.data);
};

// Przy paginacji często stosuje się różne techniki określania końca elementów w zbiorze oraz poinformowania o tym użytkownika. W tym celu serwer może zwrócić nie tylko tablicę elementów, ale także:

// metadane, które informują o liczbie pozostałych dostępnych stron obliczoną w oparciu o wartość parametru per_page,
// lub
// całkowitą liczbę stron w zbiorze.

// W naszym przykładzie obliczenie liczby dostępnych stron pozostaje po stronie front-end developera, gdyż niestety JSONPlaceholder API nie dostarcza takich informacji.

// Opcja "Pokaż więcej"

// Aby dynamicznie zmieniać numer strony przy każdym kolejnym żądaniu, należy wykonać szereg czynności opisanych poniżej.
// Zadeklarujmy nową zmienną globalną o nazwie page i ustawmy jej wartość początkową na 1 (odnoszącą się do pierwszej strony zbioru).
// Po każdym kolejnym pomyślnym żądaniu zwiększamy wartość page o jeden w metodzie then(). Następnie zaktualizowaną wartość przekazujemy w parametrach kolejnego żądania.

const fetchPostsBtn = document.querySelector(".btn");
const postList = document.querySelector(".posts");

// Controls the group number
let page = 1;
// Controls the number of items in the group
let perPage = 10;

fetchPostsBtn.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  postList.insertAdjacentHTML("beforeend", markup);
}

// Pobranie pierwszej strony zbioru spowoduje zmianę tekstu przycisku (FETCH POSTS → FETCH MORE POSTS), a sam przycisk zostanie przesunięty na dół strony. Gdy użytkownik przewinie stronę w dół i kliknie przycisk "Pokaż więcej” (FETCH MORE POSTS), serwer zwróci drugą stronę zbioru, dodając ją do już wyświetlonych postów.

// Brak kolejnych postów do pobrania po kliknięciu przycisku "FETCH MORE POSTS" oznacza, że użytkownik dotarł do końca zbioru. W takim przypadku należy wyświetlić odpowiedni komunikat.

// (...)

// Dodaliśmy wykrywanie końca zbioru po stronie frontendowej, ponieważ JSONPlaceholder API nie zapewnia tej funkcjonalności na backendzie. W naszym przypadku wystarczy podzielić całkowitą liczbę elementów w zbiorze (100) przez liczbę elementów na jednej stronie.

// Kontroluje liczbę elementów na stronie
let limit = 30;
// Liczba stron w zbiorze
const totalPages = Math.ceil(100 / limit);

// Przypomina to sytuację, w której backend zwraca całkowitą liczbę elementów w zbiorze, a nie liczbę pozostałych dostępnych stron.

// Przed każdym kolejnym żądaniem porównujemy bieżący numer strony z całkowitą liczbą stron i wyświetlamy komunikat bez wykonywania żądania HTTP.

if (page > totalPages) {
 return iziToast.error({
  position: "topRight",
  message: "We're sorry, there are no more posts to load"
 });
}
