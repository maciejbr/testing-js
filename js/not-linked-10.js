"use strict";

// Kod asynchroniczny

// Wykonywana jako pierwsza
console.log("First log");

setTimeout(() => {
  // Wykonywana jako trzecia, po 2000 milisekundach (2 sekundy)
  console.log("Second log");
}, 2000);

// Wykonywana jako druga
console.log("Third log");

//------

const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// Anulowanie time-outu

const greet = () => {
  console.log("Hello!");
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);

// W powyższym przykładzie wywołaliśmy funkcję clearTimeout(), która zostanie wykonana przed wywołaniem funkcji greet(). Dlatego timer z timerId zostanie usunięty, a rejestracja odroczonego wywołania greet() zostanie anulowana, więc nic nie zostanie wypisane do konsoli.

// Interwał

const intervalId = setInterval(callback, delay, arg1, arg2, ...);

// Anulowanie interwału
clearInterval(id)

//

const greet = () => {
  console.log("Hello!");
};

const intervalId = setInterval(greet, 3000);

clearInterval(intervalId);

// W powyższym przykładzie wywołaliśmy clearInterval(), który zostanie wykonany przed wywołaniem funkcji greet(). Dlatego interwał z intervalId zostanie usunięty, a rejestracja odroczonego wywołania greet() zostanie anulowana. Dlatego w konsoli nic nie zostanie wyświetlone.

//------ Data i czas ------

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// W przypadku konwersji na ciąg znaków obiekt zwraca wynik wywołania wbudowanej metody toString(), więc w pierwszym logu otrzymujemy ciąg znaków, a nie obiekt.

const date = new Date("2030-03-16");
console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"

//

const date = new Date("2030-03-16T14:25:00");
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

//

console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

//

const date = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 

// Czas Unix

console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// 

const date = new Date();
console.log(date.getTime()); // 1624021654154

// Metoda
Date.now()

// W przypadku, gdy potrzebujesz tylko liczbowej reprezentacji momentu w czasie, nie ma sensu tworzyć całego obiektu. Możesz użyć metody Date.now(), która jest szybkim i wygodnym sposobem na uzyskanie aktualnego czasu w milisekundach

const time = Date.now(); // 1693237207904

//

const startTime = Date.now();

// Twój kod, wykonywany od jakiegoś czasu
for(let i = 0; i <= 100; i += 1) {
	console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);

// Zapisać czas przed zdarzeniem
// Zapisać czas po zdarzeniu
// Obliczyć różnicę między czasem zakończenia i czasem rozpoczęcia

//

// Gettery i settery

// Gettery służą do odczytu całej daty lub pojedynczego elementu. Zwracana wartość zależy od bieżącej strefy czasowej ustawionej na komputerze.

const date = new Date("March 16, 2030 14:25:00");
console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Zwraca dzień miesiąca od 1 do 31
console.log("Day: ", date.getDate()); // 16

// Zwraca dzień tygodnia od 0 do 6, począwszy od niedzieli
console.log("Day of the week: ", date.getDay()); // 6

// Zwraca miesiąc od 0 do 11
console.log("Month: ", date.getMonth()); // 2

// Zwraca rok z 4 cyfr
console.log("Full year: ", date.getFullYear()); // 2030

// Zwraca godziny
console.log("Hours: ", date.getHours()); // 14

// Zwraca minuty
console.log("Minutes: ", date.getMinutes()); // 25

// Zwraca sekundy
console.log("Seconds: ", date.getSeconds()); // 0

// Zwraca milisekundy
console.log("Milliseconds: ", date.getMilliseconds()); // 0

// Wszystko, co można odczytać, można zapisać, a metody zapisu zaczynają się od prefiksu set.

const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50);
console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040);
console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

date.setMonth(4); 
console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300


//----- Obietnice -----

// Promise jest obiektem, który reprezentuje aktualny stan operacji asynchronicznej.

// Obietnica może być w trzech stanach:
// Oczekująca (pending) — stan początkowy, gdy obietnica jest tworzona.
// Spełniona (fulfilled) — operacja została wykonana pomyślnie z dowolnym wynikiem.
// Odrzucona (rejected) — operacja została odrzucona z błędem.

// Gdy obietnica zostaje spełniona lub odrzucona, używany jest termin settled.

// Obietnica jest tworzona jako instancja klasy Promise, która przyjmuje funkcję jako argument (zwaną "executor") i natychmiast ją wywołuje, jeszcze przed utworzeniem i zwróceniem obietnicy.

const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

//

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

console.log(promise); // Obiekt obietnicy


// Metoda then()

// Metoda obietnicy then() przyjmuje dwa argumenty — dwie funkcje callback, które zostaną wywołane, gdy obietnica zmieni swój stan.
// Wynikiem obietnicy jest wartość lub błąd, które funkcje otrzymają jako argumenty.

promise.then(onResolve, onReject)

// W poniższym przykładzie funkcja zwrotna onResolve zostanie wywołana w ciągu dwóch sekund, jeśli obietnica zostanie spełniona, a onReject zostanie wywołana w ciągu dwóch sekund, jeśli obietnica nie zostanie spełniona.

const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise.then(
  value => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  error => {
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Jeśli funkcje onResolve і onReject zawierają złożoną logikę, są one dla wygody deklarowane jako funkcje zewnętrzne i przekazywane do metody 
then() // według nazwy.

// Metoda catch()

promise
	.then(value => {
		// Promise fulfilled
	})
	.catch(error => {
	  // Promise rejected
	});

// Przenieśmy obsługę błędów z metody then do metody catch.

const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then(value => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch(error => {
    console.log(error); // "Error! Error passed to reject function"
  });

// Metoda finally()

// Ta metoda może być przydatna, jeśli musisz wykonać kod po wykonaniu obietnicy, niezależnie od wyniku (fulfilled lub rejected).

promise
	.then(value => {
	  // Promise fulfilled
	})
	.catch(error => {
	  // Promise rejected
	})
	.finally(() => {
	  // Promise fulfilled or rejected
	});

// Metoda finally() pozwala uniknąć powielania kodu w procedurach then() і catch().

// Funkcja wywołania zwrotnego nie otrzyma żadnych argumentów, ponieważ nie można określić, czy obietnica została spełniona, czy odrzucona. Zostanie tu wykonany kod, który musi zostać uruchomiony w każdym przypadku.

const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

// Łańcuchy obietnic

// Metoda then() zwraca obietnicę. Zanim zostanie ona wykonana, może upłynąć trochę czasu, więc pozostała część łańcucha będzie czekać na wynik. Jeśli w dowolnym miejscu łańcucha wystąpi błąd, wykonanie wszystkich kolejnych then() zostanie anulowane, a kontrola zostanie przekazana do metody catch(). Dlatego powinna ona znajdować się na końcu łańcucha wszystkich then().

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });


//------ Promisyfikacja ------

// Wywołania zwrotne kontra obietnice
// Wyobraźmy sobie, że mamy funkcję, która wykonuje operację asynchroniczną, na przykład żądanie do serwera o udzielenie informacji o użytkowniku według jego nazwy.

const fetchUserFromServer = (username, onSuccess, onError) => {
  // ...
};

// Obecnie funkcja wie zbyt wiele o kodzie, który wykorzysta wynik jej pracy. Oczekuje ona wywołań zwrotnych dla pomyślnego żądania (onSuccess) i błędu (onError) i będzie odpowiedzialna za ich wywołanie w określonych warunkach.

// Lepiej będzie, jeśli funkcja nie będzie przejmować się kodem, który wykorzysta jej wynik, a będzie po prostu wykonywać operację i zwracać wynik swojej pracy do zewnętrznego kodu. Aby zwrócić wynik operacji asynchronicznej, należy zwrócić obietnicę z funkcji.

// Promisyfikacja  — to przekształcenie funkcji z wywołaniami zwrotnymi tak, aby nie akceptowała wywołań zwrotnych, ale zwracała obietnicę. Taka funkcja jest nazywana funkcją promisyfikowaną.

// Funkcja promisykowana - funkcja, która zwraca obietnicę

// Promisyfikowanie funkcji

// Uzupełnijmy kod do pracy z funkcją fetchUserFromServer wywołując ją i przekazując argumenty dla nazwy użytkownika i wywołań zwrotnych przetwarzania wyników.

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);
};

fetchUserFromServer(
	"Mango", 
	user => console.log(user), 
	error => console.error(error)
);

// Następnie użyjemy timera, aby zasymulować operację asynchroniczną i wywołać wywołania zwrotne za pomocą warunku. Możemy zmienić wartość zmiennej isSuccess na true lub false, aby zasymulować stan operacji asynchronicznej.

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

fetchUserFromServer(
	"Mango", 
	user => console.log(user), 
	error => console.error(error)
);

//------- Promisyfikacja -------

// Wywołania zwrotne kontra obietnice

const fetchUserFromServer = (username, onSuccess, onError) => {
  // ...
};

// Aby zwrócić wynik operacji asynchronicznej, należy zwrócić obietnicę z funkcji.

// Promisyfikacja  — to przekształcenie funkcji z wywołaniami zwrotnymi tak, aby nie akceptowała wywołań zwrotnych, ale zwracała obietnicę. Taka funkcja jest nazywana funkcją promisyfikowaną.

// Promisyfikowanie funkcji

// Uzupełnijmy kod do pracy z funkcją fetchUserFromServer wywołując ją i przekazując argumenty dla nazwy użytkownika i wywołań zwrotnych przetwarzania wyników.

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);
};

fetchUserFromServer(
	"Mango", 
	user => console.log(user), 
	error => console.error(error)
);

// Następnie użyjemy timera, aby zasymulować operację asynchroniczną i wywołać wywołania zwrotne za pomocą warunku. Możemy zmienić wartość zmiennej isSuccess na true lub false, aby zasymulować stan operacji asynchronicznej.

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

fetchUserFromServer(
	"Mango", 
	user => console.log(user), 
	error => console.error(error)
);

// Jak już zauważyliśmy, funkcja wie obecnie zbyt wiele o kodzie, który wykorzysta wynik jej pracy. Oznacza to, że przekazujemy coś wewnątrz funkcji (wywołanie zwrotne) i mamy nadzieję, że zadziała poprawnie, co jest niepewne. Promisyfikujmy ją.

// Najpierw napiszmy kod, który zwróci obietnicę z funkcji. Aby to zrobić, utwórz w niej obietnicę za pomocą new Promise i zwróćmy ją.

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
		// ...
  });
};

// Otrzymujemy obietnicę w kodzie zewnętrznym i dodajemy do niej procedury obsługi w metodach then і catch.

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
		// ...
  });
};

const userPromise = fetchUserFromServer("Mango"); // wynikiem wywołania fetchUserFromServer("Mango") będzie obietnica

// przetwarzamy obietnicę w metodach then() i catch()
userPromise
	.then(user => console.log(user))
  .catch(error => console.error(error));

// Programy obsługi zazwyczaj dodają obietnicę do wyniku wywołania funkcji bez zapisywania jej w dodatkowej zmiennej.

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
		// ...
  });
};

fetchUserFromServer("Mango")  // wynikiem wywołania fetchUserFromServer("Mango") będzie obietnica
	.then(user => console.log(user))  // przetwarzamy obietnicę w metodzie then()
  .catch(error => console.error(error));  // przetwarzamy obietnicę w metodzie catch()

// Cały kod związany z logiką pracy dodajemy wewnątrz funkcji tworzenia obietnicy.

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("success value");  // wartością parametru resolve będzie funkcja zwrotna metody then()
      } else {
        reject("error");  // wartością parametru reject będzie funkcja wywołania zwrotnego metody catch()
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango")
  .then(user => console.log(user))
  .catch(error => console.error(error));

// Większość nowoczesnych bibliotek opiera się na obietnicach. Kiedy wywołujesz metodę dla operacji asynchronicznej, jej wynik jest dostępny jako obietnica, do której możesz dołączyć procedury obsługi w metodach then() і catch().

Promise.resolve() Promise.reject() // to statyczne metody tworzenia obietnic, które są rozwiązywane lub odrzucane natychmiastowo. Działają podobnie do new Promise(), zwracając obietnicę, ale mają krótszą składnię.

// W ten sposób tworzona jest pomyślnie wykonana obietnica przy użyciu new Promise():

new Promise(resolve => resolve("success value"))
	.then(value => console.log(value));
	.catch(error => console.log(error));

// W ten sposób tworzona jest pomyślnie wykonana obietnica przy użyciu Promise.resolve():

Promise.resolve("success value");
	.then(value => console.log(value));
	.catch(error => console.log(error));

// W ten sposób tworzona jest obietnica, która nie powiodła się za pomocą new Promise():

new Promise((resolve, reject) => reject("error"));
	.then(value => console.log(value));
	.catch(error => console.log(error));

// W ten sposób tworzona jest obietnica, która nie powiodła się za pomocą Promise.reject():

Promise.reject("error");
	.then(value => console.log(value));
	.catch(error => console.log(error));


// Promisyfikowanie funkcji synchronicznych

// Metody Promise.resolve і Promise.reject są używane do promisyfikowania funkcji, gdy nie musisz czekać na wynik operacji asynchronicznej, ale po prostu chcesz zbudować łańcuch obietnic i masz już wartość początkową.

// Przeprowadźmy refaktoryzację kodu funkcji, która akceptuje dwa wywołania zwrotne i wywołuje je według warunku.

const makeGreeting = (guestName, onSuccess, onError) => {
  if (!guestName) {
    onError("Guest name must not be empty");
  } else {
		onSuccess(`Welcome ${guestName}`);
	}
};

makeGreeting(
  "Mango",
  greeting => console.log(greeting),
  error => console.error(error)
);

// Promisyfikujmy funkcję makeGreeting, aby całkowicie wyeliminować jej zależność od zewnętrznego kodu. Powinna ona po prostu zwracać obietnicę.

const makeGreeting = guestName => {
	return new Promise((resolve, reject) => {
		  if (!guestName) {
				reject("Guest name must not be empty");
		  } else {
				resolve(`Welcome ${guestName}`);
			}
	})
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));

// Teraz użyjmy metod klasy Promise, aby zmniejszyć ilość kodu.

const makeGreeting = guestName => {
  if (!guestName) {
   return Promise.reject("Guest name must not be empty");
  } else {
		return Promise.resolve(`Welcome ${guestName}`);
	}
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));

// Zamiast przyjmować callbacki i je wywoływać, funkcja zwraca obietnicę (return) do zewnętrznego kodu. Dalszy los tej obietnicy nie leży już w gestii funkcji.

// Tworzenie opóźnionej obietnicy

// Stwórzmy funkcję makePromise(options), która będzie tworzyć i zwracać obietnice z różnymi opóźnieniami wykonania.

const makePromise = options => {	
	// ...
};

makePromise({
	value: "Some value",
	delay: 2000,
	shouldResolve: true
})

// Funkcja przyjmuje jeden parametr options. Jest to obiekt z właściwościami, w których przekażemy następujące wartości:
// value — wartość, która będzie wartością obietnicy.
// delay — opóźnienie w milisekundach, po którym obietnica zostanie wykonana.
// shouldResolve — wartość logiczna wskazująca, czy obietnica powinna zostać wykonana (true) czy odrzucona (false).

// Uzupełnijmy kod funkcji tak, aby zwracała obietnicę.

const makePromise = options => {
  return new Promise((resolve, reject) => {
		// ...
  });
};

// Następnie sprawmy, aby obietnica została wykonana lub odrzucona z wartością określoną we właściwości value po opóźnieniu wynoszącym delay milisekund. Domyślnie obietnica zostanie wykonana pomyślnie, w tym celu określamy domyślną wartość true dla właściwości shouldResolve podczas destrukturyzacji.

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			if(shouldResolve) {
				resolve(value)
			} else {
				reject(value)
			}
		}, delay);
  });
};

// Jest to więc tylko ponownie wykorzystana funkcja, która zawiera kod do tworzenia obietnicy z opóźnieniem, dzięki czemu nie musisz pisać tego kodu za każdym razem, gdy musisz utworzyć obietnicę.

// Przetestujmy tę funkcję, tworząc kilka obietnic z różnym czasem opóźnienia i różnymi wartościami.

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
	   setTimeout(() => {
				if(shouldResolve) {
					resolve(value)
				} else {
					reject(value)
				}
			}, delay);
  });
};

makePromise({ value: "A", delay: 1000 })
	.then(value => console.log(value)) // "A"
	.catch(error => console.log(error));

makePromise({ value: "B", delay: 3000 })
	.then(value => console.log(value)) // "B"
	.catch(error => console.log(error));

makePromise({ value: "C", delay: 2000, shouldResolve: false })
	.then(value => console.log(value)) 
	.catch(error => console.log(error)); // "C"

// Bez funkcji ten sam kod wyglądałby następująco:

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fulfilled A');
  }, 1000);
})
  .then(value => console.log(value))
  .catch(error => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fulfilled B');
  }, 3000);
})
  .then(value => console.log(value))
  .catch(error => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected C');
  }, 2000);
})
  .then(value => console.log(value))
  .catch(error => console.log(error)); // "Rejected C"

//

//------- Obsługa wielu obietnic -------

// Metoda Promise.all()

// Istnieją sytuacje, w których musisz poczekać na spełnienie wszystkich obietnic jednocześnie, a następnie przetworzyć ich wyniki. Lub sytuacje, w których wystarczy poczekać na wykonanie co najmniej jednej z nich, ignorując inne przypadki. Dla tych scenariuszy klasa Promise posiada statyczne metody do pracy z grupą obietnic.

Promise.all() // ta metoda pozwala na jednoczesne przetworzenie kilku obietnic i uzyskanie ich wyników. Pobiera ona tablicę obietnic jako dane wejściowe, czeka na ich wykonanie i zwraca jedną obietnicę.

Promise.all([promise1, promise2, promise3, ...])

// Jeśli wszystkie obietnice zostaną wykonane pomyślnie, zwrócona obietnica zostanie ustawiona na stan fulfilled, a jej wartość będzie tablicą wyników każdej obietnicy.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
	.then(values => console.log(values)); // [1, 2, 3]
	.catch(error => console.log(error));

// Oznacza to, że funkcja czeka na spełnienie wszystkich obietnic, a następnie tworzy i zwraca nową obietnicę, której wartość jest tablicą wartości spełnionych obietnic.

// Jeśli co najmniej jedna z obietnic zostanie odrzucona, zwrócona obietnica natychmiast przejdzie w stan rejected, a jej wartością będzie błąd.

const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
	.then(values => console.log(values))
	.catch(error => console.log(error)); // "Rejected promise 2"


// Metoda Promise.allSettled()

Promise.allSettled() // również pozwala na przetwarzanie wielu obietnic i uzyskiwanie ich wyników w tym samym czasie. Przyjmuje tablicę obietnic jako dane wejściowe, czeka na ich wykonanie i zwraca pojedynczą obietnicę.

Promise.allSettled([promise1, promise2, promise3, ...])

// Różnica w stosunku do Promise.all polega na tym, że metoda Promise.allSettled() oczekuje na wykonanie wszystkich obietnic, niezależnie od tego, czy niektóre lub nawet wszystkie obietnice zostały odrzucone.

// Zwrócona obietnica nigdy nie zostanie odrzucona, zawsze zostanie pomyślnie wykonana (stan fulfilled). Dodawanie metody catch nie ma nawet sensu, ponieważ nigdy nie zostanie ona wykonana.

const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
	.then(values => console.log(values));
	// [
	//   { status: "fulfilled", value: 1},
  //   { status: "rejected", value: "Rejected promise 2"},
  //   { status: "fulfilled", value: 3}
  // ]

// Wartością zwróconej obietnicy będzie tablica obiektów z wynikami każdej obietnicy.
// status — właściwość przechowująca status, z jakim obietnica została wykonana, jest to ciąg "fulfilled" lub "rejected".
//   value — właściwość przechowująca wartość, z jaką obietnica została spełniona lub odrzucona.

// Metoda Promise.race()

Promise.race // przyjmuje tablicę obietnic i zwraca "najszybszą", tj. pierwszą ukończoną lub odrzuconą obietnicę z przekazanych, wraz z wartością lub powodem jej odrzucenia.

Promise.race([promise1, promise2, promise3, ...])

// Przypadek 1
// Stwórzmy kilka obietnic z różnym czasem wykonania.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

Promise.race([p1, p2])
	.then(value => console.log(value)); // 1
	.catch(error => console.log(error));

// Pierwsza obietnica wejdzie w stan fulfilled po 1 sekundzie (będzie najszybsza), i zostanie wykonane wywołanie zwrotne metody then z wartością pierwszej obietnicy, a pozostałe zostaną odrzucone.

// Gdy co najmniej jedna obietnica z tablicy zostanie wykonana, zwrócona obietnica przejdzie do stanu resolved, a wszystkie pozostałe zostaną odrzucone

// Przypadek 2
// Stwórzmy kilka obietnic z różnym czasem wykonania.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => rejected(2), 1000);
});

Promise.race([p1, p2])
	.then(value => console.log(value)); 
	.catch(error => console.log(error)); // 2

// Druga obietnica wejdzie w stan rejected po 1 sekundzie (będzie najszybsza), zostanie wykonane wywołanie zwrotne metody catch z wartością drugiej obietnicy, a pozostałe zostaną odrzucone.

// Gdy co najmniej jedna obietnica z tablicy zostanie odrzucona, zwrócona obietnica przejdzie do stanu rejected, a wszystkie pozostałe zostaną odrzucone.