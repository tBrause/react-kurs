const numbers = [12, 235, 23.5, 75, 72];
const button = document.querySelector(".click");

button.addEventListener("click", (e) => {
	const clickedElement = e.currentTarget;
	console.log(clickedElement);
});

// doubleNumbers
// const doubleNumbers = [];
// for (const e of numbers) {
// 	doubleNumbers.push(e * 2);
// 	// console.log(e * 2);
// }

// console.log(doubleNumbers);

// const doubleNumbers = numbers.map((numbers) => numbers * 2);
// console.log(doubleNumbers);

const formattedNumbers = numbers.map((numbers) =>
	(numbers * 2).toFixed(2).replace(".", ",")
);
console.log(formattedNumbers);

/*
1. Schreibt eine Funktion namens getShortenedText.
2. Die Funktion soll drei Parameter erhalten: text, maxWords und suffix.
3. Prüft in der Funktion, ob der Text mehr als maxWords Wörter enthält.
Wenn nein, gebt den Text unverändert zurück.
4. Wenn der Text mehr Wörter enthält, kürzt ihn auf die Wortzahl und hängt
am Ende das suffix an, z.B. '...'. Gebt den String dann zurück.
5. Gebt den Parametern maxWords und suffix einen Standardwert.
*/

const text =
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

function getShortenedText(text, maxWords = 10, suffix = " ...") {
	const textArray = text.split(" ").slice(0, maxWords).join(" ");
	const textReturn =
		text.split(" ").length <= maxWords ? `${text}` : `${textArray} ${suffix}`;

	console.log(textReturn);
	return textReturn;
}

getShortenedText(text);
