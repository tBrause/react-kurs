import { useState } from 'react';

export default function Counter({ initialValue = 0 }) {
	/* Der useState-Hook gibt einen Array zurück, der an erster
	Stelle die Variable enthält, die immer den aktuellen Wert
	des "State" beinhaltet. An zweiter Stelle im Array ist
	die set-Funktion, mit der man den State ändern kann, also
	den Inhalt von count. Der Array wird mit
	Destructuring in seine zwei Bestandteile zerlegt.
	Beim Aufruf von useState wird der Startwert übergeben, der
	am Anfang in count steckt. */
	const [count, setCount] = useState(initialValue);

	/*
  Mit setCount wird der Wert von count verändert und daraufhin die
  Komponente mit dem neuen Wert frisch dargestellt.
  Wichtig: Nie eine State-Variable, z.B. hier count, direkt manipulieren,
  sondern immer die set-Funktion benutzen. State gilt in React als
  "readonly", direktes manipulieren von state-Variablen führt zu
  fehlerhaftem, unerwartetem Verhalten.
  */
	const increase = () => setCount(count + 1);

	const decrease = () => {
		console.log(`Count vor -1: ${count}`);
		setCount(count - 1);
		console.log(`Count nach -1: ${count}`);
	};

	const buggyMinusThree = () => {
		setCount(count - 1);
		setCount(count - 1);
		setCount(count - 1);
	};

	const minusThree = () => {
		/*
  https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
  */
		setCount((currentCount) => currentCount - 1);
		setCount((currentCount) => currentCount - 1);
		setCount((currentCount) => currentCount - 1);
	};

	return (
		<div>
			<div>{count}</div>
			{/* Event-Listener werden in React inline an die Elemente
  	gehängt. Dabei wird camelCase verwendet, d.h. aus onclick
  	wie in normalem JavaScript wird onClick.
  	Wichtig ist, dass semantisches HTML verwendt wird, d.h. keine
  	Klicks an div-Elemente, sondern an button-Elemente hängen.
  	Außerdem können Event Listener nur an HTML-Elemente gehängt
  	werden, nicht and React-Komponenten.
  	Es kann entweder der Name einer Funktion oder eine anonyme
  	Funktion als Callback-Funktion verwendet werden. */}
			<button onClick={increase}>Plus</button>
			<button onClick={minusThree}>Minus</button>
			{/* Bei Inline-Funktionen ist es wichtig, eine Funktion zu
  	definieren, die setCount(initialValue) aufruft, statt
  	setCount(initialValue) direkt aufzurufen. */}
			<button onClick={() => setCount(initialValue)}>Reset</button>
		</div>
	);
}

const words = ['Hallo', 'Welt'];

/* const firstWord = words[0];
const secondWord = words[1]; */

const [firstWord, secondWord] = words;
