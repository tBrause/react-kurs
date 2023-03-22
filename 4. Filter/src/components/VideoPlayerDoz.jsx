import { useRef, useState } from 'react';

/* eslint-disable jsx-a11y/media-has-caption */

/* 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
*/
export default function VideoPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const videoRef = useRef();

	const play = () => {
		videoRef.current.play();
		setIsPlaying(true);
	};
	const pause = () => {
		videoRef.current.pause();
		setIsPlaying(false);
	};

	const toggleAudio = () => {
		setIsMuted(!isMuted);
	};

	return (
		<div>
			<video
				muted={isMuted}
				className="video"
				ref={videoRef}
				src="/climbing.mp4"
			></video>
			<button onClick={play} disabled={isPlaying}>
				Play
			</button>
			<button onClick={pause} disabled={!isPlaying}>
				Pause
			</button>
			<button
				onClick={toggleAudio}
				aria-label={isMuted ? 'Ton anschalten' : 'Ton ausschalten'}
			>
				{isMuted ? '🔇' : '🔊'}
			</button>
		</div>
	);
}
