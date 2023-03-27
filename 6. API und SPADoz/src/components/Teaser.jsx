import { imageBase } from '../movieDb';
export default function Teaser({
	title,
	original_title,
	poster_path,
	release_date,
}) {
	const posterUrl = poster_path ? `${imageBase}/w342/${poster_path}` : '';

	/* In year soll nur das Jahr aus release_date gespeichert werden: */
	const year = 2023;

	return (
		<article className="teaser">
			<header className="teaser__header">
				<h3 className="teaser__title">
					Filmtitel {year && <time dateTime={year}>({year})</time>}
				</h3>
				{/* Originaltitel nur anzeigen, wenn er vom Titel abweicht */}
				<em className="teaser__original-title">{original_title}</em>
			</header>

			<div className="teaser__poster">
				{!posterUrl && (
					<div className="teaser__poster__placeholder" aria-hidden="true">
						🎞️
					</div>
				)}
				{posterUrl && <img src={posterUrl} alt={`Filmplakat ${title}`} />}
			</div>
		</article>
	);
}
