import { useState } from 'react';

import defaultMovies from '../defaultMovies';
import { fetchMovieDb } from '../movieDb';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

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

/* 
1. Nutzt den useDebouncedValue-Hook, um mit 600 Millisekunden Verzögerung
den Wert von searchTerm in eine Variable namens debouncedSearchTerm zu
speichern.
2. Nutzt fetchMovieDB, um die zu debouncedSearchTerm passenden Filme 
zu laden, debouncedSearchTerm mindestens zwei Buchstaben enthält.
Bei einem kürzeren String sollen die defaultMovies angezeigt werden.
https://developers.themoviedb.org/3/search/search-movies
3. Speichert die geladenen Filme in movies
4. Zeigt zwischen FilterForm und MovieTeasers die Komponente FilterStatus an,
aber nur dann, wenn nicht die defaultMovies angezeigt werden.

*/
