/*
  1. Erstellt und exportiert eine Komponente namens
  PicsumImage.
  2. Die Komponenten soll ein img-Element erzeugen,
  dass die css-Klasse image hat.
  3. id (für picsum.photos), width, height und alt sollen als props übergeben
  und dann sofort per Objekt-Destructuring in einzelne Variablen gespeichert werden.
  4. In der Funktion einen Template-String erstellen, der den Pfad zu
  einem picsum.photos-Bild mit der übergebenen id, width und height enthält.
  Die URL beginnt immer mit https://picsum.photos/id/
  Speichert den String in einer Variable src und setzt diese im img-HTML ein.
  5. Importiert die Komponente in JsxDemo und stellt sie mit einem Bild
  eurer Wahl dar.
  6. width und height sollen beim Destructuring der
  props 400 und 300 als Standardwert haben haben.
 
  */

// import { images } from './JsxDemo';

export default function PicsumImage({
	id,
	height = 300,
	width = 400,
	alt = '',
}) {
	const src = `https://picsum.photos/id/${id}/${width}/${height}`;

	return (
		<img className="image" src={src} width={width} height={height} alt={alt} />
	);
}

export function ImageGrid({ images }) {
	console.log(images);

	return (
		<section className="image-grid">
			{images.map((image) => (
				<PicsumImage {...image} key={image.id} />
			))}
		</section>
	);
}

export function Conditionals({
	name = 'Anonymouse',
	email,
	items = [],
	approved = true,
}) {
	return (
		<div>
			<h2>{name}</h2>
			<h2>{name ? name : 'Anonymouse'}</h2>
			{/* bevorzugte Variante */}
			<h2>{name || 'Anonymouse'}</h2>
			{email && <a href={`mailto:${email}`}>{email}</a>}

			{items.length > 0 && 'Liste'}

			{approved ? <strong>Genemigt</strong> : <strong>Nicht genemigt</strong>}
			<hr />
		</div>
	);
}
