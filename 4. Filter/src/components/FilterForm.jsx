import { categories } from '../products';

export default function FilterForm({
	saleOnly,
	setSaleOnly,
	selectedCategory,
	setSelectedCategory,
	queryText,
	setQueryText,
}) {
	return (
		<form className="filter" onSubmit={(e) => e.preventDefault()}>
			{/* 1. Verknüpft das select-Menü mit einem Label "Kategorie"
    	2. Importiert die Kategorien aus products.js
    	3. Nutzt die Map-Methode, um nach der ersten option die
    	weiteren option-Elemente zu erzeugen.
     	4. Erstellt in Finder.jsx den state selectedCategory und
    	gebt ihn samt set-Funktion in FilterForm.
    	5. Verknüpft den state und die set-Funktion mit dem
    	select-Element, ähnlich wie bei einem text-Input.
    	6. Ergänzt in Finder.js die getFilteredProducts-Funktion
    	um den selectedCategory-Filter. Beachtet, dass der ausgelesene
    	value des select-Elements immer ein String ist, und nutzt
    	parseInt, um ihn in einen Integer umzuwandeln.
 	*/}
			<div className="filter__category">
				<label htmlFor="category">Kategorie</label>
				<select
					id="category"
					onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
					value={selectedCategory}
				>
					<option value="0">Alle Kategorien</option>
					{categories.map(({ categoryId, name }) => (
						<option value={categoryId} key={categoryId}>
							{name}
						</option>
					))}
				</select>
			</div>

			<div>
				<label>
					Sonderangebote{' '}
					<input
						type="checkbox"
						onChange={(e) => setSaleOnly(e.target.checked)}
						checked={saleOnly}
					/>
				</label>
			</div>
			<div>
				<label htmlFor="queryText">Text</label>
				<input
					type="text"
					id="queryText"
					value={queryText}
					onChange={(e) => setQueryText(e.target.value)}
				/>
				<div className="text-box">{queryText}</div>
			</div>
		</form>
	);
}
