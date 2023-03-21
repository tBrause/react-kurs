// import image from './JsxDemo';

import { useState } from 'react';
import PicsumImage from './PixumImage';

const images = [
	{ id: 1003, alt: 'Reh', title: 'Test' },
	{ id: 237, alt: 'Hund' },
	{ id: 1001, alt: 'Boot' },
	{ id: 1015, alt: 'Tal' },
];

// console.log(images);

// for (const e of images) {
// 	console.log(e);
// }

// const reformattedArray = images.map(({ id, alt }) => ({ [id]: alt }));
// const reformattedArray = images.map((id) => (images));

// console.log(reformattedArray);

/*
1. Exportiert die Komponente Gallery.
2. Die Komponente soll die props title und images erhalten. images ist
dabei ein Array mit Objekten, die jeweil id und alt enthalten.
3. Wenn title nicht leer ist, soll title in der h2 dargestellt werden,
ansonsten die h2 nicht darstellen.
4. Die Komponente soll den State bigImageIndex mit Startwert 0 haben.
5. In gallery__big-image soll ein PicsumImage-Element mit dem dem Objekt
dargestellt werden, das dem bigImageIndex entspricht. Breite 800, Höhe 600;
6. In thumbnails sollen alle Bilder dargestellt werden (200 x 150), und bei
Klick auf den button soll der Index des kleinen Bildes zum bigImageIndex
werden.
Bonus: Der thumbnail-Button, der dem großen Bild entspricht, soll disabled sein.
*/

/*

  <section class="gallery">
    	<h2>Titel</h2>
    	<div class="gallery__big-image">
      	<img class="image" />
    	</div>
    	<div class="thumbnails">
      	<button class="thumbnails__button">
        	<img class="image" />
      	</button>
    	</div>
  	</section>
	 


*/

export default function Gallery2({ title, images }) {
	const [bigImagesIndex, setbigImagesIndex] = useState(0);
	return (
		<section class="gallery">
			{title && <h2>Titel</h2>}
			<div class="gallery__big-image">
				<PicsumImage {...bigImage} width={800} height={600} />
				<img class="image" />
			</div>
			<div class="thumbnails">
				{images.map(({ id, alt, title }) => (
					<button
						onClick={() => bigImagesIndex(index)}
						key={id}
						class="thumbnails__button"
					>
						<PicsumImage {...image} width={200} height={150} />
					</button>
				))}
			</div>
		</section>
	);
}

// export default function Gallery({ id, height = 150, width = 200, alt = '' }) {
// 	const src = `https://picsum.photos/id/`;
// 	// <div dangerouslySetInnerHTML={{ __html: textWithHtml }} />

// 	return (
// 		<div>
// 			{images.map(({ id, alt, title }) => (
// 				<section key={id} className="gallery">
// 					{title ? `<h2>${title}<h2>` : ''}
// 					<div className="gallery__big-image">
// 						<img
// 							src={`${src}/${id}/${width}/${height}`}
// 							width={width}
// 							height={height}
// 							className="image"
// 							alt={alt}
// 						/>
// 					</div>
// 					<div className="thumbnails">
// 						<button className="thumbnails__button">
// 							<img
// 								src={`${src}/${id}/${width}/${height}`}
// 								width={width}
// 								height={height}
// 								className="image"
// 								alt={alt}
// 							/>
// 						</button>
// 					</div>
// 				</section>
// 			))}
// 		</div>
// 	);
// }
