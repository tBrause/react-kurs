// Ab Version 17 muss React nicht mehr in Dateien mit JSX importiert werden
// import React from 'react';

import { Fragment } from 'react';
import PicsumImage from './PicsumImage';
import Quote from './Quote';

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
			{/*    	 <FirstComponent />
   		 <Emoji icon="🍀" description="Kleeblatt" />
   		 <Emoji icon="🚲" description="Fahrrad" />
   		 <Siblings />
   		 <Parent>
   			 <Emoji icon="👧" description="Tochter" />
   			 <Emoji icon="👧" description="Tochter" />
   			 <h3>Meine Tiere</h3>
   			 <Emoji icon="🐈‍⬛" description="Katze" />
   		 </Parent>
   		 <Quote text="React rockt!" />
   		 <Collection />
   		 <PicsumImage id="15" alt="Landschaft" />
   		 <ImageGrid images={images} />
   		 <Conditionals name="" email="" />
   		 <SemanticHtml headingLevel={3} />*/}
			<HtmlString />
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
	// console.log(props);

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

/* Möchte man einen Array direkt in JSX darstellen, kann man die map-Methode
nutzen, um jeden Eintrag im Array in ein Element umzuwandeln. Arrays mit
HTML oder React-Komponenten werden automatisch dargestellt.
Damit React Elemente, die dynamisch aus einem Array erzeugt werden, korrekt
und optimiert darstellen und aktualisieren kann, benötigt jedes Element ein
key-Attribut, das einen innerhalb der Sammlung einmaligen Wert hat. Das
key-Attribut ist nur intern für React gedacht, es sollte nicht als prop
in einer Komponente genutzt werden.

https://beta.reactjs.org/apis/react/useState#resetting-state-with-a-key-resetting-state-with-a-key
 */
function Collection() {
	const languages = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }];

	const elementsArray = languages.map(({ name }) => <li key={name}>{name}</li>);

	return <ul>{elementsArray}</ul>;
}

/*
  Üblicherweise wendet man die Array-Funktion (hier map) direkt an der Stelle im JSX-Code ein,
  an der die Inhalte des Arrays dargestellt werden sollen, ohne Umweg über eine Hilfsvariable
  wie componentsArray.
 
  Man sollte den index nur dann als key verwenden, wenn die Inhalte im Array keinen einmaligen
  Wert (id, url, E-Mail etc.) haben, aber nur dann, wenn der Index im Array auch tatsächlich immer das
  selbe Element identifizieren, wenn also keine Elemente im Array ausgetauscht, gelöscht oder
  hinzugefügt werden.
 
  Sieht React den selben Key, geht es davon aus, dass es sich um das identische Element handelt.
  Meist führt ein geänderter Key für das identische Element also zu unerwünschtem Verhalten.
  Man kann sich diesen Umstand aber auch bewusst zunutze machen, um z.B. einen größeren
  Komponentenbaum (etwa ein komplexes Formular) durch einen veränderten Key komplett zurückzusetzen,
  siehe dazu https://beta.reactjs.org/apis/react/useState#resetting-state-with-a-key-resetting-state-with-a-key
 
  */
function Collection2() {
	const languages = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }];

	return (
		<ul>
			{languages.map(({ name }) => (
				<li key={name}>{name}</li>
			))}
		</ul>
	);
}

/*
1. Übergebt ImageGrid den prop images, und verwendet dafür beim
Einsetzen der Komponente den Array images
2. Gebt ein section-Element mit der Klasse image-grid zurück.
3. Innerhalb dieses section-Elements soll für jeden Eintrag in images
eine PicsumImage-Komponente erzeugt werden.
*/

/* Möchte man Daten als props übergeben, die in einem Objekt stecken,
und die Schlüssel in dem Objekt sind identisch mit den props-Namen,
kann man sich id={id} etc. sparen, und stattdessen das Objekt mit
"Objekt-Spread" in die Komponente legen, so wird automatisch aus
jedem key im Objekt ein gleichnamiges Attribut erstellt.
https://de.reactjs.org/docs/jsx-in-depth.html#spread-attributes
*/
function ImageGrid({ images }) {
	return (
		<section className="image-grid">
			{images.map((image) => (
				<PicsumImage {...image} key={image.id} />
			))}
		</section>
	);
}

/*
Oft möchte man kompakt innerhalb eines JSX-Blocks Bedingungen prüfen
und darauf basierend Elemente darstellen.
1. Der oder-Operator || gibt den ersten Wert zurück, der "truthy"
ist, und bricht die Prüfung anschließend ab. Dieser Ausdruck würde z.B. "Hallo"
ergeben:
false || 0 || "Hallo" || "Welt"
In JSX kann man dies nutzen, um Alternativwerte darzustellen. Wenn im Beispiel
name nicht falsy ist (also z.B. kein leerer String), wird name ausgegeben, andernfalls
"Anonymous".

2. Der und-Operator && gibt den letzten geprüften Wert zurück, wenn alle Bedingungen bzw.
Werte davor truthy waren. Andernfalls wird der Ausdruck zu false werden.
Dieser Ausdruck würde "Welt" ergeben:
true && "Hallo" && "Welt"
In JSX kann man damit sehr leicht ein Element ausgeben oder nichts ausgeben, da false
einfach nichts ausgibt.
Der E-Mail-Link wird nur ausgegeben, wenn email nicht falsy
(z.B. ein leerer String) ist. Häufig wird auch eine State-Wert geprüft, um ein Element
ein- und auszublenden.
Aber Achtung: React gibt nur bei null, undefined, "" oder false nichts aus. Die Zahl
0 dagegen ist zwar falsy, aber würde die Augabe 0 erzeugen. Möchte man z.B. etwas nur
dann anzeigen, wenn ein Array nicht leer ist, muss man explizit fragen, ob length > 0 ist.

3. Der ternäre Operator (Kurzform von if-else) kann eingesetzt werden, um das eine oder
das andere Element darzustellen.

Weitere Informationen:
https://de.reactjs.org/docs/conditional-rendering.html
https://de.reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored
https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx
https://thoughtspile.github.io/2022/01/17/jsx-conditionals/
}
*/
function Conditionals({
	name = 'Anonymous',
	email,
	items = [],
	approved = true,
}) {
	return (
		<div>
			{/* Anonymous wird nur angezeigt, wenn name undefined ist. */}
			<h2>{name}</h2>
			{/* Anonymous wird auch bei falsy Wert in name genutzt, z.B. leerer String. */}
			<h2>{name ? name : 'Anonymous'}</h2>
			{/* Oder: Der erste truthy Wert wird genommen. */}
			<h2>{name || 'Anonymous'}</h2>
			{/* Und: Bricht ab, sobald ein Wert als falsch gilt, d.h. Link wird nicht ausgegeben. */}
			{email && <a href={`mailto:${email}`}>{email}</a>}
			{/* Achtung: Anders als die falsy-Werte null, false, undefined, "" etc. wird 0 ausgegeben. */}
			{items.length && 'Liste'}
			{/* false ergibt keine Ausgabe. */}
			{items.length > 0 && 'Liste'}
			{/* Die eine oder die andere Sache ausgeben. */}
			{approved ? <strong>Genehmigt</strong> : <strong>Nicht genehmigt</strong>}
		</div>
	);
}

function SemanticHtml({ headingLevel = 2 }) {
	/* Möglichkeit, die verwendeten HTML-Elemente dynamisch zu machen,
    z.B. für die korrekte Überschrift. Wichtig ist, dass die Variable,
    hier Heading, mit Großbuchstaben beginnt.  */
	const Heading = `h${headingLevel}`;
	return (
		<section>
			<Heading>Überschrift</Heading>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, delectus?
			</p>
		</section>
	);
}

/* Um zu verhindern, dass schädlicher Code - also insbesondere JavaScript -
  in der Ausgabe auftaucht, "escaped" React standardmäßig alles HTML, das
  in Strings auftaucht. Andernfalls könnten z.B. Angreifer in einem Kommentar
  unter einem Blogeintrag JavaScript schreiben, und der Code würde bei allen
  Usern ausgeführt, welche den Kommentar betrachten. (XSS, cross-site scripting)
  Wenn man sicher ist, dass der Text mit HTML aus einer vertrauenswürdigen
  Quelle stammt (etwa der eigenen Datenbank), kann man wie unten demonstriert
  einem HTML-Element das Attribut dangerouslySetInnerHTML geben, und als Wert
  ein Objekt das unter dem Schlüssel __html (zwei Unterstriche) den eigentlichen
  Text (mit HTML) enthält. (Die erste geschweifte Klammer öffnet den JavaScript-
  Bereich in JSX, die zweite ist dann das Objekt.)
  Wichtig: Auch HTML-Entities wie &mdash; (Bindestrich) werden standardmäßig
  nicht in die HTML-Entsprechung umgewandelt.
  https://de.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
  https://de.wikipedia.org/wiki/Cross-Site-Scripting
  Wenn man weitere Optionen benötigt, und der String nicht nur HTML-Elemente,
  sondern auch React-Komponenten enthält, hilft diese Bibliothek:
  https://www.npmjs.com/package/html-react-parser
  */
function HtmlString() {
	const textWithHtml =
		'Text mit <i onmouseover="alert(`Hacked!`)">Formatierung</i>';

	return (
		<>
			<div>{textWithHtml}</div>
			<div dangerouslySetInnerHTML={{ __html: textWithHtml }} />
		</>
	);
}
