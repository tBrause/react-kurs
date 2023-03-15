/* eslint-disable no-unused-vars */
/* Beim entpacken von Arrays kann man dem letzten Variablennamen
drei Punkte ("rest operator") voranstellen.
In ihm wird dann ein Array gespeichert, der alle zusätzlichen
Werte enthält.
Achtung: Nach dieser letzten Rest-Variable darf kein hängendes
Komma ("trailing comma") stehen. */
const [firstNumber, secondNumber, ...additionalNumbers] = [1, 2, 3, 4, 5, 6];

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

/* Stehen die drei Punkte allerdings nicht links, sondern rechts
vom Gleich-Zeichen, handelt es sich um einen "spread operator",
d.h. alle Werte des folgenden Arrays werden nacheinander an diese
Stelle eingefügt. So kann man z.B. leicht zwei Arrays kombinieren: */
const combinedArray = [...arrayOne, ...arrayTwo, 7];

/* Da NodeLists zwar Array-ähnlich sind, aber nicht alle
Methoden von Arrays haben, kann man alle Elemente einer
NodeList auf diese Weise leicht in einen Array legen. */
const allNumbers = document.querySelectorAll(".numbers li");
// Gibt einen Fehler, weil .reverse() eine Array-Methode ist:
//allNumbers.reverse();

const allNumbersArray = [...allNumbers];

// Kurze Schreibweise ohne Hilfsvariable:
//const allNumbersArray = [...document.querySelectorAll(".numbers li")];

// Funktioniert:
allNumbersArray.reverse();

/* Spread bei Objekten
Man kann den Spread-Operator auch nutzen, um mehrere Objekte zu einem neuen
Objekt zusammenzuführen.
Wenn Schlüssel mehrfach existieren, wird die letzte Version genommen, a wird
also den Wert 99 haben.
*/
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 99, c: 42 };

const mergedObject = { ...obj1, ...obj2, d: 77 };
