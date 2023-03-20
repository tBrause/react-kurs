import { useState } from 'react';

/*
Exportiert die Komponente MoodToggle.
Die Komponente soll den State "happy" als boolean haben,
Anfangswert soll true sein.
Als image soll entweder ein Glückliches oder ein Trauriges
Emoji dargestellt werden, je nachdem, ob happy true oder false ist.
Der erste Button soll auf Glücklich setzen, der zweite auf Traurig.
Der dritte soll in den jeweils anderen Zustand wechseln und als
Text auch den jeweils anderen Zustand haben, d.h. "Traurig" wenn
man aktuell glücklich ist.
Bonus: Die ersten beiden Buttons sollen das disabled-Attribut so haben,
dass sie inaktiv sind, wenn der aktuelle Zustand schon ihrer
Funktion entspricht, d.h. wenn happy true ist, soll der
Glücklich-Button inaktiv sein. Das geht, in dem man disabled={true}
bzw. disabled={false} setzt.
*/

/*
	<section class="mood">
  	<div class="mood__image">😊</div>
  	<div class="mood__buttons">
    	<button>Glücklich</button>
    	<button>Traurig</button>
    	<button>Traurig</button>
  	</div>
	</section>

*/

export default function Toogle() {
	const [happy, setHappy] = useState(true);

	// const happy = () => setHappy(true);
	// const notHappy = () => setHappy(false);
	// const display = happy ? '😊' : '😒';

	return (
		<section>
			<div className="mood__image">{happy ? '😊' : '😒'}</div>
			<div className="mood__buttons">
				<button onClick={() => setHappy(true)} disabled={happy}>
					Happy
				</button>
				<button onClick={() => setHappy(false)} disabled={!happy}>
					Traurig
				</button>
				<button onClick={() => setHappy(!happy)}>
					{happy ? 'Set 😒' : 'Set 😊'}
				</button>
			</div>
		</section>
	);
}
