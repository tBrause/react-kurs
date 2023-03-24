import { useState } from 'react';

export default function LocationFinder() {
	const [search, setSearch] = useState('');

	const [locations, setLocations] = useState([]);

	return (
		<div>
			<label htmlFor="search">PLZ oder Ortsname</label>
			<input
				id="search"
				type="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}
