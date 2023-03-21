import PicsumImage from './PicsumImage';

export default function Thumbnails({
	images,
	bigImageIndex,
	setBigImageIndex,
}) {
	return (
		<div className="thumbnails">
			{images.map((image, index) => (
				<button
					onClick={() => setBigImageIndex(index)}
					className="thumbnails__button"
					key={image.id}
					disabled={index === bigImageIndex}
				>
					<PicsumImage {...image} width={200} height={150} />
				</button>
			))}
		</div>
	);
}
