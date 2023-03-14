/* eslint-disable no-unused-vars */
/* Modernes JavaScript erlaubt es, Werte aus Arrays und Objekten
komfortabel zu "entpacken", d.h. in Variablen zu speichern.
Das nennt man "destructuring".
Mit destructuring von insbesondere Objekten kann Code sehr
viel eleganter und kompakter geschrieben werden. */

/* 1. Objekte entpacken
Man kann einzelne Werte in Variablen mit dem gleichen Namen
wie der Schlüssel des gewünschten Werts entpacken: */

const person = {
	firstName: "Lisa",
	lastName: "Simpson",
	age: 12,
};

console.log(`Guten Morgen ${person.firstName} ${person.lastName}!`);

//const firstName = person.firstName;

/**
 * Hier wird der Wert, der im person-Objekt unter firstName bzw. age
 * gespeichert ist, in eine eigenständige const-Variable (let ginge auch)
 * gespeichert. Wichtig ist, dass der Variablenname dem Namen des
 * Schlüssels im Objekt entspricht.
 */
const { firstName, age } = person;

/* Möchte man den Namen der Variable ändern, kann man den gewünschten
     Namen mit Doppelpunkt nach dem Namen des Schlüssels angeben.
     Hier wird der Wert von person.lastName in eine Variable namens
     familyName gespeichert. */
const { lastName: familyName } = person;

console.log(`${firstName} ${familyName} ist ${age} Jahre alt.`);

const { color = "Gelb" } = person;

/*
   Achtung: Der Rückfallwert wird NUR genommen, wenn der gewünschte Wert
   undefinded ist, nicht, wenn er "falsy" ist, also z.B. 0, "", null, false etc.
   Hier wird z.B. in children der Wert 0 gespeicht, nicht der Rückfallwert, weil
   children nicht undefined ist, sondern einen anderen Wert hat, hier die number 0.
   */
person.children = 0;
const { children = "Kinder unbekannt" } = person;
console.log(children);

/* Man kann auch Standardwert und eigenen Variablennamen kombinieren.
  Hier wird nach person.city gesucht, und der Variable homeTown wird
  entweder der gefundene Wert von person.city oder "Springfield"
  zugewiesen: */

const { city: homeTown = "Springfield" } = person;

const books = [
	{
		title: "CSS für Alle",
		pages: 220,
		year: 2009,
	},
	{
		title: "React-Apps",
	},
	{
		title: "Responsives Webdesign",
		year: 2018,
	},
];

// CSS für Alle (2009), 220 Seiten.
for (const book of books) {
	//console.log(`${book.title} (${book.year}), ${book.pages} Seiten.`);
}

for (const book of books) {
	const { title, year, pages } = book;
	//    console.log(`${title} (${year}), ${pages} Seiten.`);
}

for (const book of books) {
	const { title, year = "Jahr unbekannt", pages } = book;
	//    console.log(`${title} (${year}), ${pages} Seiten.`);
}

for (const book of books) {
	const { title, year = "Jahr unbekannt", pages } = book;

	const pagesInfo = pages ? `, ${pages} Seiten` : "";

	// console.log(`${title} (${year})${pagesInfo}.`);
}

/**
 * Überall, wo ein Objekt "ankommt", kann man es sofort in seine Einzelteile zerlegen
 * und die gewünschten Werte in einzelne Variablen speichern.
 */
for (const { title, year = "Jahr unbekannt", pages } of books) {
	const pagesInfo = pages ? `, ${pages} Seiten` : "";

	console.log(`${title} (${year})${pagesInfo}.`);
}

const article = {
	title: "Entpacken in JavaScript",
	image: {
		src: "cat.jpg",
		alt: "Katze",
	},
};

/* Hier werden die Variablen title, src und alt, nicht jedoch
  image erzeugt. */
const {
	title,
	image: { src, alt = "" },
} = article;

const { author } = article;

//console.log(author.id);

if (author) {
	console.log(author.id);
}

/* Optional Chaining Operator ?.
	Der Operator erlaubt es, ohne Gefahr Werte aus einem verschachtelten Objekt auslesen:
	article?.author?.name (Gibt keinen Fehler, selbst wenn article.author undefined ist, es wird
	einfach undefined zurückgegeben.)
	https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Optionale_Verkettung
	https://caniuse.com/#feat=mdn-javascript_operators_optional_chaining */
console.log(author?.id);

console.log(article?.image?.photographer?.name);

// Sicher den Inhalt eines DOM-Elements auslesen, das möglicherweise gar nicht existiert:
const content = document.querySelector(".nix")?.innerHTML;

/*
Der Nullish Coalescing Operator ?? prüft, ob im vor ?? angefragten Wert
null oder undefined ist. Wenn ja, wird der Wert nach ?? genommen, sonst
der Wert vor ??.
Der Unterschied zum ternären Operator ? ist, dass nur null oder undefined
als false gelten, nicht aber leere Strings oder die Zahl 0.
*/
console.log(article.subTitle ? article.subTitle : "");

console.log(article.subTitle ?? "");

/* Achtung: Der ?? Operator dient nicht der Fehlervermeidung
wie der Optional Chaining Operator! */
//console.log(article.author.name ?? '');
console.log(article?.author?.name ?? "");
