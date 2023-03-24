import products from '../products';
import { useEffect, useState } from 'react';
import FilterForm from './FilterForm';
import ProductsList from './ProductsList';
import FilterStatus from './FilterStatus';

export default function Finder() {
	const [saleOnly, setSaleOnly] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [queryText, setQueryText] = useState('');

	// console.log(queryText);

	useEffect(() => {
		console.log('Titel-Effekt!');

		let title = 'React-Filter';

		if (saleOnly) {
			title += ' - Sonderangebote 🤑';
		}

		document.title = title;
	}, [saleOnly]);

	useEffect(() => {
		// URL, die beim Laden der Seite aufgerufen wurde
		const url = new URL(window.location.href);

		const oldCategory = url.searchParams.get('category');
		if (oldCategory) {
			setSelectedCategory(parseInt(oldCategory));
		}

		// Werte aus URLs werden immer als String ausgelesen
		const oldSaleOnly = url.searchParams.get('sale') === 'true';
		if (oldSaleOnly) {
			setSaleOnly(oldSaleOnly);
		}

		const oldText = url.searchParams.get('queryText');
		if (oldText) {
			setQueryText(oldText);
		}
	}, []);

	useEffect(() => {
		// Konstruiere ein neues URL-Objekt auf Grundlage der aktuellen Url
		const url = new URL(window.location.href);

		// Entferne den category-Parameter
		url.searchParams.delete('category');
		if (selectedCategory) {
			// Füge category nur hinzu, wenn category nicht den Standard-Wert hat (0)
			url.searchParams.set('category', selectedCategory);
		}

		url.searchParams.delete('sale');
		if (saleOnly) {
			url.searchParams.set('sale', saleOnly);
		}

		url.searchParams.delete('query');
		if (queryText.length >= 2) {
			url.searchParams.set('queryText', queryText);
		}

		/*	Ersetze den aktuellen Eintrag im Browser-Verlauf mit der neu
	erzeugten URL, ohne die Seite neu zu laden. Die ersten beiden
	Argumente sind hier nicht relevant. */
		window.history.replaceState({}, '', url);
	}, [selectedCategory, saleOnly, queryText]);

	const filteredProducts = getFilteredProducts(
		products,
		saleOnly,
		selectedCategory,
		queryText,
		setQueryText
	);

	return (
		<div>
			<FilterForm
				saleOnly={saleOnly}
				setSaleOnly={setSaleOnly}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				queryText={queryText}
				setQueryText={setQueryText}
			/>
			<FilterStatus count={filteredProducts.length} />
			<ProductsList products={filteredProducts} />
		</div>
	);
}

function getFilteredProducts(products, saleOnly, selectedCategory, queryText) {
	const noSaleFilter = saleOnly === false;
	const noCategoryFilter = selectedCategory === 0;
	const noQueryFilter = queryText.length <= 2;

	console.log(queryText);

	const filteredProducts = products
		.filter(({ sale }) => noSaleFilter || sale === saleOnly)
		.filter(({ category }) => noCategoryFilter || category === selectedCategory)
		.filter(
			({ title }) =>
				noQueryFilter || title.toUpperCase().includes(queryText.toUpperCase())
		);

	return filteredProducts;
}
