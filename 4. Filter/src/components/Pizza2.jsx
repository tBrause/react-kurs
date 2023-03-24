import { useEffect, useState } from 'react';
import { getFormattedPrice } from '../helpers';

const toppings = [
	{
		name: 'Tomaten',
		icon: '🍅',
		id: 363,
		price: 99,
	},
	{
		name: 'Käse',
		icon: '🧀',
		id: 73,
		price: 179,
	},
	{
		name: 'Pilze',
		icon: '🍄',
		id: 61,
		price: 299,
	},
	{
		name: 'Ananas',
		icon: '🍍',
		id: 89,
		price: 199,
	},
	{
		name: 'Pepperoni',
		icon: '🌶️',
		id: 76,
		price: 99,
	},
	{
		name: 'Oliven',
		icon: '🫒',
		id: 37,
		price: 149,
	},
];

export default function Pizza() {
	const [selectedToppings, setSelectedToppings] = useState([]);

	/* Diese Funktion soll mit jeder Checkbox über onChange verbunden sein.
    Je nachdem, ob die Checkbox an- oder abgewählt wurde, soll die ID
    der Zutat zum State selectedToppings hinzugefügt oder entfernt werden.  */

	const handleToppingChange = (e) => {
		const toppingId = parseInt(e.target.value);

		const selectToppingsSet = new Set(selectedToppings);

		if (e.target.checked) {
			selectToppingsSet.add(toppingId);
		} else {
			selectToppingsSet.delete(toppingId);
		}

		setSelectedToppings([...selectToppingsSet]);
	};

	/* Bonus: Wenn alles funktioniert, speichert den Zustand von selectedToppings
    in der URL und stellt ihn beim Neuladen wieder her. */
	useSearchParams(setSelectedToppings, selectedToppings);

	/* Nutzt die Array-Methode reduce, um den Preis zu berechnen. Grundpreis
    für eine Pizza ohne Toppings ist 6,99 €. */
	const totalPrice = selectedToppings.reduce((sum, selectedId) => {
		const topping = toppings.find(({ id }) => id === selectedId);
		if (!topping) {
			return sum;
		}
		return sum + topping.price;
	}, 699);

	return (
		<section className="pizza">
			<header className="pizza__header">
				<h1>Pizza</h1>
				<div className="pizza__image">🍕</div>
			</header>
			{JSON.stringify(selectedToppings)}
			<form className="pizza__form">
				<fieldset className="pizza__toppings">
					<legend>Belag wählen</legend>
					{toppings.map(({ id, name, price, icon }) => (
						<label className="pizza__topping" key={id}>
							<input
								type="checkbox"
								value={id}
								onChange={handleToppingChange}
								checked={selectedToppings.includes(id)}
							/>
							{icon} <b>{name}</b> {getFormattedPrice(price)}
						</label>
					))}
					{/* Hier für jeden Eintrag in toppings ein Elemnt nach dieser
   				 Vorlage erstellen:
   						 <label className="pizza__topping">
   						 <input
   							 type="checkbox"
   							 value="363"
   						 />
   						 🍅 <b>Tomate</b> 0,99 €
   					 </label>
   				 */}
				</fieldset>
			</form>

			<output className="pizza__price">{getFormattedPrice(totalPrice)}</output>
		</section>
	);
}

function useSearchParams(setSelectedToppings, selectedToppings) {
	useEffect(() => {
		const url = new URL(window.location.href);
		const oldToppingsString = url.searchParams.get('toppings');
		if (!oldToppingsString) {
			return;
		}

		const oldToppingsArray = oldToppingsString
			.split('|')
			.map((id) => parseInt(id))
			.filter((id) => Number.isInteger(id));
		setSelectedToppings(oldToppingsArray);
	}, []);

	useEffect(() => {
		const url = new URL(window.location.href);

		url.searchParams.delete('toppings');
		if (selectedToppings.length) {
			url.searchParams.set('toppings', selectedToppings.join('|'));
		}

		window.history.replaceState({}, '', url);
	}, [selectedToppings]);
}

// Version mit Array-Methoden:
const handleToppingChange = (e) => {
	const toppingId = parseInt(e.target.value);
	if (e.target.checked) {
		/*
   	 Funktioniert nicht, nie bestehende Arrays oder Objekte manipulieren,
   	 weil React nicht den Inhalt der Datencontainer vergleicht, sondern
   	 nur prüft, ob ein neuer Container im State ist.
   	 selectedToppings.push(toppingId); */

		setSelectedToppings([...selectedToppings, toppingId]);
	} else {
		setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
	}
};
