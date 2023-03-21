import { useState } from 'react';
import PixsumImages from './PixumImages';

const images = [
	{ id: 1003, alt: 'Reh', title: 'Test' },
	{ id: 237, alt: 'Hund' },
	{ id: 1001, alt: 'Boot' },
	{ id: 1015, alt: 'Tal' },
];

export default function Gallery({ title, images }) {
	const [bigImageIndex, setBigImageIndex] = useState(0);

	const bigImage = images[bigImageIndex];

	return (
		<section className="gallery">
			<PixsumImages />
			{title && <h2>{title}</h2>}
			<div className="gallery__big-image">
				<PixsumImages {...bigImage} width={800} height={600} />
			</div>
			<div className="thumbnails">
				{images.map((image, index) => (
					<button
						onClick={() => setBigImageIndex(index)}
						className="thumbnails__button"
						key={image.id}
						disabled={index === bigImageIndex}
					>
						<PixsumImages {...image} width={200} height={150} />
					</button>
				))}
			</div>
		</section>
	);
}
