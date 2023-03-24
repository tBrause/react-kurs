import { useState } from 'react';
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
	const handleToppingChange = () => {};

	/* Bonus: Wenn alles funktioniert, speichert den Zustand von selectedToppings
    in der URL und stellt ihn beim Neuladen wieder her. */

	/* Nutzt die Array-Methode reduce, um den Preis zu berechnen. Grundpreis
    für eine Pizza ohne Toppings ist 6,99 €. */
	const totalPrice = 0;

	return (
		<section className="pizza">
			<header className="pizza__header">
				<h1>Pizza</h1>
				<div className="pizza__image">🍕</div>
			</header>
			<form className="pizza__form">
				<fieldset className="pizza__toppings">
					<legend>Belag wählen</legend>

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
