// Ab Version 17 muss React nicht mehr in Dateien mit JSX importiert werden
// import React from 'react';

import { Fragment } from 'react';
import Quote from './Quote';
export default function JsxDemo() {
    // Hier ist JavaScript!

    return (
   	 <div>
   		 {/* Kommentar */}
   		 <FirstComponent />
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

// Ab Version 17 muss React nicht mehr in Dateien mit JSX importiert werden
// import React from 'react';

import { Fragment } from 'react';
import Quote from './Quote';
export default function JsxDemo() {
    // Hier ist JavaScript!

    return (
   	 <div>
   		 {/* Kommentar */}
   		 <FirstComponent />
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


