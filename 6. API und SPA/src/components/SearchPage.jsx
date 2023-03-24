import { useState } from 'react';

import defaultMovies from '../defaultMovies';

import MovieTeasers from './MovieTeasers';
import FilterForm from './FilterForm';

export default function SearchPage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [movies, setMovies] = useState(defaultMovies);

	return (
		<>
			<FilterForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<MovieTeasers movies={movies} />
		</>
	);
}
