export default function FilterStatus({ count }) {
	const cssClasses = `filter-status ${
		count === 0 ? 'filter-status--no-results' : ''
	}`;

	return <div className={cssClasses}>{getStatusText(count)}</div>;
}

function getStatusText(count) {
	switch (count) {
		case 0:
			return 'Kein Produkt gefunden';
		case 1:
			return 'Ein Produkt gefunden';
		default:
			return `${count} Produkte gefunden`;
	}
}
