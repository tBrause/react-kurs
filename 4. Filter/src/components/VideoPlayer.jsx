import { useRef, useState } from 'react';

export default function VideoPlayer() {
	const inputPlay = useRef();

	const [mute, setMute] = useState(false);

	return (
		<div>
			<video
				muted={isMuted}
				className="video"
				ref={inputPlay}
				src="/climbing.mp4"
			></video>
			<button onClick={() => inputPlay.current.play()}>Play</button>
			<button onClick={() => inputPlay.current.pause()}>Pause</button>
			<button onClick={() => (inputPlay.current.muted = false)}>Ton an</button>
			<button ref={setMute} onClick={() => setMute(false)}>
				Ton
			</button>
		</div>
	);
}

// 				{/* <button ref={setMute} onClick={() => console.log(mute)}> */}
