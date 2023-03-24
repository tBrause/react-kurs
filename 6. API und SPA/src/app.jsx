import React from 'react';
import ReactDOM from 'react-dom/client';

import LocationFinder from './components/LocationFinder';
import MoviesFinder from './components/MoviesFinder';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LocationFinder />
		{/* <MoviesFinder /> */}
	</React.StrictMode>
);
