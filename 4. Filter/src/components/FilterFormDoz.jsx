import products from '../products';
import { useEffect, useState } from 'react';
import FilterForm from './FilterForm';
import ProductsList from './ProductsList';
import FilterStatus from './FilterStatus';

export default function Finder() {
	const [saleOnly, setSaleOnly] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [keyword, setKeyword] = useState('');
	const [loading, setLoading] = useState(true);

	/* Ersetzt diesen Hook mit unserem useDocumentTitle-Hook. */
	useEffect(() => {
		console.log('Titel-Effekt!');

		let title = 'React-Filter';

		if (saleOnly) {
			title += ' - Sonderangebote 🤑';
		}

		document.title = title;
	}, [saleOnly]);

	useSearchParams();

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

		const oldKeyword = url.searchParams.get('keyword');
		if (oldKeyword) {
			setKeyword(oldKeyword);
		}

		setLoading(false);
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

		url.searchParams.delete('keyword');
		if (keyword.length >= 2) {
			url.searchParams.set('keyword', keyword);
		}

		/*	Ersetze den aktuellen Eintrag im Browser-Verlauf mit der neu
	erzeugten URL, ohne die Seite neu zu laden. Die ersten beiden
	Argumente sind hier nicht relevant. */
		window.history.replaceState({}, '', url);
	}, [selectedCategory, saleOnly, keyword]);

	const filteredProducts = getFilteredProducts(
		products,
		saleOnly,
		selectedCategory,
		keyword
	);

	/*   Stelle beim ersten Durchgang (bei dem der Filterzustand aus der URL
  noch nicht wiederhergestellt wurde) nichts dar, um zu verhindern, dass
  am Anfang für einen kurzen Moment alle Produkte dargestellt werden. */
	if (loading) {
		return null; // Wenn null zurückgegeben wird, wird nichts dargestellt
	}

	return (
		<div>
			<FilterForm
				saleOnly={saleOnly}
				setSaleOnly={setSaleOnly}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				keyword={keyword}
				setKeyword={setKeyword}
			/>
			<FilterStatus count={filteredProducts.length} />
			<ProductsList products={filteredProducts} />
		</div>
	);
}

function getFilteredProducts(products, saleOnly, selectedCategory, keyword) {
	const noSaleFilter = saleOnly === false;
	const noCategoryFilter = selectedCategory === 0;
	const noKeywordFilter = keyword.length < 2;

	/* Regulärer Ausdruck, um zu testen, ob ein Muster in einem
  anderen String vorkommt. "i" bedeutet "case insensitive",
  also Großschreibung ignorieren.
  Das RegExp-Objekt hat u.a. die Methode test(), um zu prüfen, ob ein String
  die Bedingungen des regulären Ausdrucks erfüllt.
  https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp */

	const keywordRegExp = new RegExp(keyword, 'i');

	const filteredProducts = products
		.filter(({ sale }) => noSaleFilter || sale === saleOnly)
		.filter(({ category }) => noCategoryFilter || category === selectedCategory)
		.filter(({ title }) => noKeywordFilter || keywordRegExp.test(title));

	return filteredProducts;
}

/* Bewegt den ganzen Code der beiden useEffect-Hooks, die sich mit
der URL beschäftigen, in diese Funktion. */
function useSearchParams() {}
