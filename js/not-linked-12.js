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

// Funkcje asynchroniczne