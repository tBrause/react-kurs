// import { useState } from 'react';
import { useCount } from '../hooks/useCount';

export default function MoodDisplay() {
	const moods = ['😡', '🙁', '😐', '🙂', '🥳'];

	const {
		count: moodIndex,
		decrement,
		increment,
		reset,
		isMax,
		isMin,
	} = useCount(2, moods.length - 1);

	return (
		<div className="mood">
			<div className="mood__image" role="img" aria-label="Stimmungsanzeige">
				{moods[moodIndex]}
			</div>
			<div className="mood__buttons">
				<button onClick={decrement} disabled={isMin}>
					Schlechter
				</button>
				<button onClick={increment} disabled={isMax}>
					Besser
				</button>
				<button onClick={reset}>Zurücksetzen</button>
			</div>
		</div>
	);
}

/*

Schafft einen State moodIndex, der den Array-Index enhält, der für die Ausgabe
des Emojis verwendet wird. Startwert soll 2 sein.
Schreibt dann drei kleine Hilfsfunktionen increment, decrement und reset,
wobei reset den Index auf den Startwert setzen soll, und die beiden anderen Funktionen
den Wert nur bis zum Maximal- bzw. Minimalwert verändern sollen.
Bonus: Die Schlechter und Besser-Buttons sollen disabled sein, wenn das
jeweilige Limit erreicht ist.

Der nächste Schritt wäre dann die Abstraktion in einen eigenen useCount-Hook.
Der Hook soll Startwert, Minimalwert, Maximalwert und Schrittgröße (mit
default 1) erhalten. Der Hook soll ein Objekt mit den Werten bzw. Funktionen count,
increment, decrement, setCount, reset, isMax und isMin zurückgeben.

*/
