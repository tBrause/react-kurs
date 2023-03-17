// Ab Version 17 muss React nicht mehr in Dateien mit JSX importiert werden
// import React from 'react';

import { Fragment } from 'react';
import Quote from './Quote';
import PicsumImage, { Conditionals, ImageGrid } from './PixumImages';

const images = [
	{ id: 1003, alt: 'Reh' },
	{ id: 237, alt: 'Hund' },
	{ id: 1001, alt: 'Boot' },
	{ id: 1015, alt: 'Tal' },
];

export default function JsxDemo() {
	// Hier ist JavaScript!

	return (
		<div>
			{/* Kommentar */}
			{/* <FirstComponent />
			<Emoji icon="🍀" description="Kleeblatt" />
			<Emoji icon="🚲" description="Fahrrad" />
			<Siblings />
			<Parent>
				<Emoji icon="👧" description="Tochter" />
				<Emoji icon="👧" description="Tochter" />
				<h3>Meine Tiere</h3>
				<Emoji icon="🐈‍⬛" description="Katze" />
			</Parent>
			<Quote text="React rockt" source="dev" /> */}
			{/* Kommentar */}
			{/* <Collection /> */}
			{/* <Collection2 /> */}

			{/* Übung: Pixum */}
			{/* <PicsumImage id="1003" alt="Hund" /> */}

			{/* Übung: ImageGrid */}
			{/* <ImageGrid images={images} /> */}

			<Conditionals name="" email="torsten.brause@gmail.com" />
			<Conditionals name="" />
		</div>
	);
}

/* Eine React-Komponente ist eine Funktion, die mit return HTML
(oder andere React-Komponenten) zurückgibt. Man kann sie wie HTML-Elemente
einsetzen, und dabei den Funktionsname als Elementnamen nutzen.
Der Name der Funktion sollte immer mit Großbuchstaben beginnen und
Wörter mit Großbuchstaben Trennen (sog. PascalCase-Schreibweise).
Wichtig ist, dass alle HTML-Elemente und React-Komponenten geschlossen
werden müssen, es gibt (wie in XML) keine selbstschließenden Elemente.
Aus dem HTML-Element <img> wird also entweder <img></img> oder in der
Kurzschreibweise <img /> (mit Slash vor der schließenden eckigen Klammer).
Untenstehende Komponente könnte so verwendet werden: <FirstComponent />
*/
function FirstComponent() {
	return <strong>Meine erste Komponente!</strong>;
}

/* Damit Komponenten nicht immer den gleichen Inhalt ausgeben,
können sie wie HTML-Elemente eigene Attribute erhalten, die in
React props heißen. Die Attribute können frei gewählt werden, 
ihr Inhalt wird der Funktion in einem Objekt übergeben.
https://de.reactjs.org/docs/components-and-props.html

Die Attribute der HTML-Elemente funktionieren wie gewohnt,
müssen aber zum Teil anders geschrieben werden, weil sie
mit geschützten JavaScript-Begriffen kollidieren. Am wichtigsten
ist, dass statt class className geschrieben werden muss.
Liste der Abweichungen:
https://de.reactjs.org/docs/dom-elements.html#differences-in-attributes
*/
function Emoji(props) {
	console.log(props);

	return (
		<span className="emoji" aria-label={props.description}>
			{props.icon}
		</span>
	);
}

/* React-Komponenten müssen in return immer EIN alles umfassendes
Element zurückgeben, man kann also nicht z.B. h2 und p neben bzw.
nacheinander zurückgeben. Als Ausweg kann man Fragment (muss aus react
importiert werden) als Klammer um die beiden Elemente verwenden.
Fragment ist nur ein Hilfe für React und wird nicht in HTML umgewandelt,
d.h. im HTML wird wie gewünscht nur h2 gefolgt von p ausgegeben.
(Als Sonderfall kann man aus einer Komponente auch null zurückgeben, um
gar kein HTML zu erzeugen.)
*/
function Siblings() {
	return (
		<Fragment>
			<h2>Geschwister</h2>
			<p>Untertitle</p>
		</Fragment>
	);
}

/* Die Kurzschreibweise von Fragment (die nicht importiert werden muss)
	ist <> und </>. 
	Achtung: Die Kurzschreibweise kann keine props erhalten,
	insbesondere das key-Prop in einer Schleife kann nur mit der Fragment-
	Schreibweise verwendet werden. */
function Siblings2() {
	return (
		<>
			<h2>Geschwister</h2>
			<p>Untertitle</p>
		</>
	);
}

/* Möchte man eine React-Komponente wie ein HTML-Element verwenden,
dass zwischen öffnendem und schließendem Element beliebige weitere
Elemente beeinhaltet, erhält man automatisch in props.children die
Kindelemente, die man dann an beliebiger Stelle platzieren kann.
Weitere Details und Anwendungmöglichkeiten:
https://de.reactjs.org/docs/jsx-in-depth.html#children-in-jsx 
*/
function Parent(props) {
	console.log(props);

	return (
		<div className="parent">
			<h2>Meine Familie</h2>
			{props.children}
		</div>
	);
}

function Collection() {
	const languages = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }];
	const liArray = languages.map(({ name }) => <li key={name}>{name}</li>);
	return <ul>{liArray}</ul>;
}

function Collection2() {
	const languages = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }];

	return (
		<ul>
			{languages.map(({ name }) => (
				<li key={name}>{name}</li>
			))}
		</ul>
	);
}
