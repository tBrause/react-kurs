import { useState } from 'react';

import ProductsList from './ProductsList';
import products from '../products.js';
import FilterForm from './FilterForm';

export default function Finder() {
	const [saleOnly, setSaleOnly] = useState(false);

	const filteredProducts = getFilterProducts(products, saleOnly);
	// console.log(filteredProducts);

	return (
		<div>
			<FilterForm saleOnly={saleOnly} setSaleOnly={setSaleOnly} />
			<ProductsList products={filteredProducts} />
		</div>
	);
}

function getFilterProducts(products, saleOnly) {
	const noSaleFilter = saleOnly === false;
	const filteredProducts = products.filter(
		({ sale }) => noSaleFilter || sale === saleOnly
	);
	return filteredProducts;
}
