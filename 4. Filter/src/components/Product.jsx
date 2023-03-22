import { getFormattedPrice } from '../helpers';

export default function Product({ title, image, sale, price }) {
	const cssClasses = `product ${sale ? 'product--sale' : ''}`;

	return (
		<article className={cssClasses}>
			<div className="product__image">{image}</div>
			<h3 className="product__heading">{title}</h3>
			<p className="product__price">{getFormattedPrice(price)}</p>
		</article>
	);
}
