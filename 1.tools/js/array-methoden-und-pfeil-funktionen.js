const numbers = [12, 235, 23.5, 75, 72];
const button = document.querySelector(".click");

button.addEventListener("click", (e) => {
	const clickedElement = e.currentTarget;
	console.log(clickedElement);
});
