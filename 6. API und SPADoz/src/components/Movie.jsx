import { useState } from 'react';

export default function Movie() {
	const [movieData, setMovieData] = useState(null);

	/* Hier die Filmdaten laden und in movieData speichern.
	https://developers.themoviedb.org/3/movies/get-movie-details
	*/

	if (!movieData) {
		return null;
	}

	return (
		<article class="movie">
			<h1 className="movie__title">Titel</h1>
			<em className="movie__original-title">Originaltitel</em>
			<p className="movie__overview">Handlung...</p>
			<h2>Details</h2>
			<dl className="movie__details">
				<dt>Jahr</dt>
				<dd>24.3.2022</dd>
				<dt>Dauer</dt>
				<dd>140 Min.</dd>
				<dt>Genre/Genres</dt>
				<dd>Action, Abenteuer, Science Fiction</dd>
			</dl>
			<section>
				<h2>Ähnliche Filme</h2>
				<div className="movie-teasers">
					Hier max. 8 ähnliche Filme in einer MovieTeasers-Komponente
					darstellen.
				</div>
			</section>
		</article>
	);
}

/* 

Hinweise: 
- Originaltitel nur anzeigen, wenn er vom deutschen Titel abweicht

- Overview nur anzeigen, wenn vorhanden.

- Falls Erscheinungsdatum vorhanden, das Datum anzeigen.
Bonus: Datum mit Hilfe der toLocaleDateString-Methode des Date-Objekts
im deutschen Format anzeigen:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- Genres als kommagetrennten String anzeigen, hier können zwei
Array-Methoden mit chaining verbunden und genutzt werden.
Je nachdem, ob es ein oder mehrere Genres gibt, soll in dt Genre oder
Genres stehen.

Bonus: Nutzt Helmet, um den Filmtitel als Seitentitel darzustellen

Bonus: Stellt statt dem article-Element mit den Filmdaten eine Ladeanzeige 
   von https://mhnpd.github.io/react-loader-spinner/ dar, bis die Filmdaten 
   geladen sind. 

   
Infos zum HTML-Element dl (description list):
https://www.mediaevent.de/xhtml/dl.html
http://html5doctor.com/the-dl-element/ 

*/
