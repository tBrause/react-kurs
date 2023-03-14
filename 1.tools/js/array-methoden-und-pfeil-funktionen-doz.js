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
