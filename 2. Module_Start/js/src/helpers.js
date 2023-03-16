export function shuffle(arr) {
	arr.sort(() => 0.5 - Math.random());
	return arr;
}

export function fahrenheitToCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

export default function () {
	console.log('Ich bin der Default-Export');
}
