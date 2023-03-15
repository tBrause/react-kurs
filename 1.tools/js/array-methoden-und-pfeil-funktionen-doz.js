/* eslint-disable no-unused-vars */

const numbers = [12, 235, 23.5, 75, 72];

/* forEach ist eine Array-Methode, mit der man jeden
Eintrag nacheinander in eine "Callback-Funktion"
geben kann, sprich es wird für jeden Eintrag eine
Funktion aufgerufen, die automatisch als erstes
Argument den Wert und als zweites den Index
des jeweiligen Array-Eintrags erhält. */
numbers.forEach(displayValueAndIndex);

function displayValueAndIndex(value, index) {
	//    console.log(`Index: ${index} Wert: ${value}`);
}

/* An allen Stellen, an denen Callback-Funktionen erwartet werden,
kann man auch direkt eine "anonyme" Funktion schreiben, d.h.
ganz normal die Funktion schreiben und nur den Namen nach
function weglassen. Das ist sinnvoll, wenn man die Funktion nur
an dieser einen Stelle braucht. Man hat den Code dann genau an der
Stelle, an der man ihn braucht, und muss nicht an anderer Stelle
einen benannte Funktion schreiben. */
numbers.forEach(function (value, index) {
	//    console.log(`Index: ${index} Wert: ${value}`);
});

/* Um Callback-Funktionen möglichst kompakt schreiben zu können,
wurden "Pfeil-Funktionen", also Arrow-Functions entwickelt.
Wenn sie mehr als ein Argument erhalten, beginnen sie mit
runden Klammern, in denen die Argumente aufgelistet werden.
Dann folgt der Pfeil: =>
Dann folgt der Körper der Funktion, d.h. die eigentliche
Funktionalität. Wenn nur eine Zeile ausgeführt wird, kann diese
direkt nach dem Pfeil und ohne geschweifte Klammern und ohne Semikolon
am Ende geschrieben werden.
Das Ergebnis dieser Zeile ist dann auch automatisch der Rückgabewert der
Funktion, d.h. auch ohne dass man return davor schreibt. */
numbers.forEach((value, index) =>
	console.log(`Index: ${index} Wert: ${value}`)
);

/* Wenn man nur ein Argument übergibt, können die runden Klammern vor dem Pfeil
auch weggelassen werden. (Prettier hat aber was dagegen...) */
numbers.forEach((value) => console.log(` Wert: ${value}`));

/* Pfeilfunktionen sind von Natur aus Anonym, aber sie können in eine Variable gespeichert
werden, dann kann der Variablennamen als Funktionsnamen genutzt werden. Achtung:
Anders als reguläre Funktionen könnt ihr solche in Variablen gespeicherte Funktionen
erst nutzen, nachdem sie im Code definiert wurden.
Das würde einen Fehler ergeben:
sayHello();
*/

const sayHello = () => console.log("Hallo!");
sayHello();

console.clear();

const button = document.querySelector(".click");

button.addEventListener("click", () => {
	/*   Soll eine Pfeil-Funktion mehr als eine Zeile haben, benötigt man
        	geschweifte Klammern, genau wie in normalen Funktionen. */
	console.log("Klick!");
	console.log("Tu noch was!");
	/*   Aus geschweiften Klammern heraus muss der Rückgabewert ganz wie
        	ein einer normalen Funktion mit return bestimmt werden: */
	return 42;
});

/* Achtung: In Pfeil-Funktionen gilt immer der this-Wert der "Umgebung"
  der Funktion, d.h. wenn sie als Callback-Funktion für einen Event-
  Listener verwendet wird, enthält "this" NICHT das Element, welches
  den Event ausgelöst hat.
  Einfache Lösung: Für Event Listener normale (ggf. anonyme) Funktionen
  verwenden.
  Komplexere Lösung: Jede Event-Callback-Funktion erhält als erstes
  Argument das Event-Objekt mit Informationen zum Event. Dieses
  enthält als Eigenschaft .currentTarget das Element, an dem der
  Event Listener hängt. currentTarget entspricht also "this". */
button.addEventListener("click", function () {
	console.log(this);
	// this.innerHTML = "Noch mal!";
});

button.addEventListener("click", () => console.log(this));

button.addEventListener("click", (e) => console.log(e.currentTarget));

// Statement:
/* const doubledNumbers = [];
for (const number of numbers) {
    doubledNumbers.push(number * 2);
}
console.log(doubledNumbers); */

/* Die Methode .map() gibt einen neuen Array zurück.
Jeder Wert des Arrays wird nacheinander in die Callback-Funktion
gebeben. Dieser kann in dieser Funktion manipuliert werden und am
Ende mit return zurückgegeben werden.
Wenn man Pfeil-Funktionen mit nur einer Zeile nutzt, ist das Ergebnis
dieser Zeile implizit der Return-Wert, d.h. man kann auf return verzichten. */
const doubledNumbers = numbers.map((number) => number * 2); // Expression

// 12,00
const formattedNumbers = numbers.map((number) =>
	number.toFixed(2).replace(".", ",")
);
console.log(formattedNumbers);

/* Methoden, die einen Array zurückgeben, können aneinander gehängt werden.
Aneinanderhängen mit Punkt nennt man "Chaining"; */
const prices = numbers
	.map((number) => number.toFixed(2).replace(".", ","))
	.map((price) => `${price} €`);

/* Die Filter-Methode dient dazu, nur Werte in den neuen Array zu geben,
die eine selbstdefinierte Prüfung mit true bestehen. D.h. die
Callback-Funktion muss true oder false zurückgeben. */
const evenNumbers = numbers.filter((number) => number % 2 === 0);

const persons = [
	{ name: "Jonathan", age: 45 },
	{ name: "Jenny", age: 17 },
	{ name: "Ahmed", age: 24 },
	{ name: "Dilan", age: 12 },
	{ name: "Jenny", age: 30 },
];

const adultPersons = persons.filter((person) => person.age >= 18);

const adultPersons2 = persons.filter(({ age }) => age >= 18);

/* .find() dient dazu, einen Eintrag zu finden, der eine bestimmte
Bedingung erfüllt. Wird ein Eintrag gefunden, wird dieser zurückgegeben.
Gäbe es mehrere Einträge, welche die Prüfung bestehen könnten, würde
nur das erste gefundene Ergebnis zurückgegeben.
.find() gibt also keinen Array, sonden einen einzelnen Wert bzw. undefined
zurück, falls kein passender Wert gefunden wurde.
*/

const searchedPerson = persons.find(({ name }) => name === "Jenny");

/* .findIndex() gibt den Index bzw. -1 zurück */
const searchedPersonIndex = persons.findIndex(({ name }) => name === "Dilan");

/* .every() und .some() geben true oder false zurück, je nachdem ob alle
  Einträge bzw. mindestens ein Eintrag eine Bedingung erfüllen, d.h. true
   aus der Callback-Funktion zurückgeben.
  Aufgabe:
  1. Speichert in die Variable includesAdult, ob mindestens eine
  Person in persons volljährig ist.
  2. Speichert in die Variable allAreAdult die Information, ob alle
  volljährig sind.
  3. Gebt in der Konsole "In der Gruppe ist eine volljährige Person" bzw.
  "In der Gruppe ist keine volljährige Person" aus. Nutzt dabei einen
  Template String und den Ternary Operator.
  */

const includesAdult = persons.some(({ age }) => age >= 18);

const allAreAdult = persons.every(({ age }) => age >= 18);

console.log(
	`In der Gruppe ist ${includesAdult ? "eine" : "keine"} volljährige Person.`
);

/* .reduce() dient dazu, die Werte eines Arrays auf einen Wert zu
"reduzieren". Klassisches Beispiel ist die Summer aller Zahlen in einem
Array. Die Callback-Funktion erhält ZWEI Argumente, das erste Argument
ist der "vorherige" oder "akkumulierte" Wert, der zweite ist der
aktuelle Eintrag aus dem Array.
Das zweite Argument der .reduce()-Methode (nicht des Callbacks!) ist
der Startwert von total, also der Startwert, zu dem dann die einzelnen
Einträge hinzugefügt werden. */
const numbersTotal = numbers.reduce((total, number) => total + number, 0);
console.log(numbersTotal);

const listItemsHtml = persons.reduce(
	(html, { name }) => html + `<li>${name}</li>`,
	""
);

const infoHtml = `
<section>
<h2>Die neuesten Zahlen</h2>
<ul>${numbers.reduce((html, number) => html + `<li>${number}</li>`, "")}</ul>
<strong>Summe: ${numbers.reduce((total, number) => total + number, 0)}</strong>
</section>
`;

const main = document.querySelector("main");

main.insertAdjacentHTML("beforeend", infoHtml);

/*
Mit join() können Elemente aus einem Array zu einem String zusammengefügt werden,
das Trenn- bzw. Verbindungszeichen wird als String in join() übergeben.
*/
const beatles = ["John", "George", "Paul", "Ringo"];

const beatlesString = beatles.join(" & ");

console.log(beatlesString);

/*
.split() ist eine String-Methode, mit der ein String in einzelne Teile zerlegt
und in einen Array gespeichert wird. Das Trennzeichen wird dabei nicht gespeichert.
Nimmt man einen leeren String als Trennzeichen, erhält man einen Array mit allen einzelnen
Zeichen.
*/
const beatlesArray = beatlesString.split(" & ");
console.log(beatlesArray);

/*
Mit slice erhält man einen neuen Array, der einen Ausschnitt des
ursprünglichen Arrays enthält, ohne diesen zu verändern.
Der erste Wert ist der Start-Index, der zweite Wert ist der (exklusive)
End-Index.
*/
const firstNumbers = numbers.slice(0, 3);

/*
Nutzt die bisherigen Array-Methoden, um einen längeren Text-String
auf z.B. 10 Wörter zu kürzen.
*/

const longString =
	"The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.";

const shortString = longString.split(" ").slice(0, 10).join(" ");

/*
1. Schreibt eine Funktion namens getShortenedText.
2. Die Funktion soll drei Parameter erhalten: text, maxWords und suffix.
3. Prüft in der Funktion, ob der Text mehr als maxWords Wörter enthält.
Wenn nein, gebt den Text unverändert zurück.
4. Wenn der Text mehr Wörter enthält, kürzt ihn auf die Wortzahl und hängt
am Ende das suffix an, z.B. '...'. Gebt den String dann zurück.
5. Gebt den Parametern maxWords und suffix einen Standardwert.
*/

function getShortenedText(text, maxWords = 10, suffix = "…") {
	const words = text.split(" ");

	if (words.length <= maxWords) {
		return text;
	}

	const shortText = words.slice(0, maxWords).join(" ");

	return shortText + suffix;
}

console.log(getShortenedText(longString));
