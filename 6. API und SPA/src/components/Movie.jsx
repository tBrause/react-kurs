import { useState } from 'react';

export default function Movie() {
	const [movieData, setMovieData] = useState(null);

	if (!movieData) {
		return null;
	}

	return (
		<article className="movie">
			<h2 className="movie__title">Titel</h2>
			<em className="movie__original-title">Originaltitel</em>
			<p className="movie__overview">Zusammenfassung</p>
			<h3>Details</h3>
			<dl className="movie__details">
				<dt>Jahr</dt>
				<dd>2000</dd>
				<dt>Dauer</dt>
				<dd>200 Minuten</dd>
			</dl>
			<div className="movie__similar">
				{/* Hier max. 8 ähnliche Filme in einer MovieTeasers-Komponente darstellen. */}
			</div>
		</article>
	);
}

/* 

Hinweise: 
- Originaltitel nur anzeigen, wenn er vom deutschen Titel abweicht
- Overview nur anzeigen, wenn vorhanden.
- Auch bei Jahr und Dauer vor Anzeige prüfen, ob die Daten vorhanden sind.

Bonus: Nutzt Helmet, um den Filmtitel als Seitentitel darzustellen

Bonus: Stellt statt dem article-Element mit den Filmdaten eine Ladeanzeige 
   von https://mhnpd.github.io/react-loader-spinner/ dar, bis die Filmdaten 
   geladen sind. 

   
Infos zum HTML-Element dl (description list):
https://www.mediaevent.de/xhtml/dl.html
http://html5doctor.com/the-dl-element/ 

*/
