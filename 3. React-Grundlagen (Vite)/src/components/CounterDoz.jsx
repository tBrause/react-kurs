import { useState } from 'react';

export default function Counter() {
	/* Der useState-Hook gibt einen Array zurück, der an erster
	Stelle die Variable enthält, die immer den aktuellen Wert
	des "State" beinhaltet. An zweiter Stelle im Array ist
	die set-Funktion, mit der man den State ändern kann, also
	den Inhalt von count. Der Array wird mit
	Destructuring in seine zwei Bestandteile zerlegt.
	Beim Aufruf von useState wird der Startwert übergeben, der
	am Anfang in count steckt. */
	const [count, setCount] = useState(0);

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

	return (
		<div>
			<div>{count}</div>
			<button onClick={increase}>Plus</button>
			<button onClick={decrease}>Minus</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}

const words = ['Hallo', 'Welt'];

/* const firstWord = words[0];
const secondWord = words[1]; */

const [firstWord, secondWord] = words;
