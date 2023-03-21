import { useState, useRef } from 'react';

export default function UncontrolledInput() {
	const [text, setText] = useState('');
	/* Der useRef-Hook dient dazu, eine dauerhafte Referenz auf einen Wert
zu erhalten. Die Variable wird nur beim ersten rendern erzeugt, sie bleibt
beim erneuten rendern identisch. */
	const inputRef = useRef();

	/* useRef kann auch genutzt werden, um einen Wert zu speichern und
  zu ändern, ohne dass bei einer Änderung die Komponente neu gerendert
  wird. useRef kann also eine Alternative zu useState sein, wenn die
  Ausgabe nicht direkt vom Inhalt der gespeicherten Variable abhängt.
  Sinnvoll etwa, wenn die Variable sich sehr oft ändert, wenn man
  etwa den Weg des Mauszeigers verfolgt. */
	const counterRef = useRef(0);

	return (
		<div className="input-demo">
			<label htmlFor="text">Text</label>
			{/* Mit dem ref-Attribut wird das DOM-Element in inputRef.current
  	gespeichert. */}
			<input type="text" id="text" ref={inputRef} />
			<button onClick={() => setText(inputRef.current.value)}>
				Aktualisieren
			</button>
			{/* Man kann useRef nutzen, um die focus-Methode, welche input-Elemente
  	in regulärem JS haben, aufzurufen. Der Focus bzw. Cursor wird dann in das Textfeld
  	bewegt. */}
			<button onClick={() => inputRef.current.focus()}>Focus</button>
			<div className="text-box">{text}</div>
			<button onClick={() => counterRef.current++}>Counter Plus</button>
			<button onClick={() => console.log(counterRef.current)}>
				Counter loggen
			</button>
		</div>
	);
}
