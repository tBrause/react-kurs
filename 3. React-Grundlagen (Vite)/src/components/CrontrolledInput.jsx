import { useState } from 'react';

export default function CrontrolledInput({ min = 0, max = 360 }) {
	const [text, setText] = useState('');
	const [hue, setHue] = useState(0);

	// const styles = {
	// 	backgroundColor: 'hsl(' + hue + ', 50%, 50%)',
	// };

	return (
		<div className="input-demo">
			<label htmlFor="text">Text</label>
			<input
				type="text"
				id="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={() => setText('')}></button>
			<div className="text-box">{text}</div>

			{/*
            1. Fügt einen Input vom Type range ein, mit möglichen Werten von
            0 bis 360 (min und max-Attribute). id soll hue sein, dazu ein
            passendes Label mit dem Text "Farbe".
            2. Erzeugt einen zweiten State namens hue mit Startwert 0. Der State
            soll mit dem Input synchron sein.
            3. Gebt im span-Element den Wert von hue als Text aus.
            4. Gebt .color-box per Inline-Style den Wert von hue als CSS-Variable
            --hue aus.
            */}

			<div className="colorBox">
				<label htmlFor="hue">Farbe</label>
				<input
					type="range"
					id="hue"
					min={min}
					max={max}
					value={hue}
					onChange={(e) => setHue(e.target.value)}
				/>

				<span style={{ '--hue': hue }} className="color-box">
					{hue}
				</span>
			</div>
		</div>
	);
}
