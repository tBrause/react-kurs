let name = `Torsten`;

name = "Neu";

console.log(name);

// Objekt
const person = {
	firstName: "Lisa",
	lastName: "Simpson",
	age: 12,
};
console.log(`Hallo ${person.firstName} ${person.lastName}`);

// Objekt entpacken
const { firstName, age } = person;
console.log(`${firstName} ist ${age} Jahre alt`);

// Variablen-Name ändern
const { lastName: familyName } = person;
console.log(`${familyName}`);

// Mit Standartwert
const { color = "Gelb" } = person;
console.log(`${color}`);

/* Man kann auch Standardwert und eigenen Variablennamen kombinieren.
Hier wird nach person.city gesucht, und der Variable homeTown wird
entweder der gefundene Wert von person.city oder "Springfield"
zugewiesen: */

const { city: homeTown = "Springfield" } = person;
console.log(`${homeTown}`);

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

// forEach
books.forEach((element) => {
	//console.log(element.title);
	if (element.title === "CSS für Alle") {
		//console.log(`${element.title} (${element.year}), ${element.pages} Seiten`);
	}
});

// forOf
for (const e of books) {
	// console.log(e);
	if (e.title === "CSS für Alle") {
		// console.log(`${e.title} (${e.year}), ${e.pages} Seiten`);
	}
}

// forOf Optimieren
for (const book of books) {
	const { title, pages, year = "Jahr unbekannt" } = book;
	const pagesInfo = pages ? `, ${pages} Seiten` : ``;
	//console.log(`${title} (${year})${pagesInfo}`);
}

// forOf Optimieren (Tenärer Operator)
for (const { title, pages, year = "Jahr unbekannt" } of books) {
	const pagesInfo = pages ? `, ${pages} Seiten` : ``;
	// console.log(`${title} (${year})${pagesInfo}`);
}

// Beispiel: Objekt in Objekt
const article = {
	title: "Entpacken in JavaScript",
	image: {
		src: "cat.jpg",
		alt: "Katze",
	},
};

const {
	title,
	image: { src, alt },
} = article;

console.log(`${title} ${src} ${alt}`);

// Fehlerbehandlung (Optional Chaning Operator)
const { author } = article;
console.log(author?.id);

const content = document.querySelector(".nix")?.innerHTML;

// Nullish Coalescing Operator
// Achtung: dient nicht der Fehlervermeidung
console.log(article.subTitle ?? "");

console.log(article?.author?.name ?? "Kein Name vom Autor");
