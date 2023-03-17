// import { Fragment } from 'react';

/*
1. Exportiert eine React-Komponente Quote als default export.
2. Die Komponente soll dieses HTML erzeugen:
	<figure>
  	<blockquote>Zitat</blockquote>
 	<figcaption>Zitatquelle</figcaption>
	</figure>

3. In blockquote sollen die prop "text" angezeigt werden.
4. Die Zitatquelle soll als prop "source" übergeben werden.
 Wenn keine Zitatquelle übergeben wird, soll in figcaption "Unbekannt" ausgegeben werden.
5. Verwendet die Komponente mit einem Zitat eurer Wahl, z.B. von https://www.quotez.net/german/
*/

export default function Quote({ text, source = 'unbekant' }) {
	// const { text, source = 'unbekant' } = props;

	return (
		<figure>
			<blockquote>{text}</blockquote>
			<figcaption>{source}</figcaption>
		</figure>
	);
}
