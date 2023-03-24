/*
Durch Klick auf den Button soll zwischen Sonne und Mond
umgeschaltet werden ("🌞" und "🌝"), aria-label soll zwischen
Sonne und Mond wechseln.
Der Text im Button soll zwischen "Hell" und "Dunkel" wechseln,
je nachdem, was der Klick auslöst.
Zusätzlich soll im Seitentitel (document.title) auch immer passend
"Hell" oder "Dunkel" stehen.
*/

import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useToggle } from '../hooks/useToggle';

export default function LightSwitch() {
	const [isLight, toggleLight, , lightOn, lightOff] = useToggle(true);

	useDocumentTitle(isLight ? 'Hell' : 'Dunkel');

	return (
		<div className="light-switch">
			<span
				className="light-switch__icon"
				aria-label={isLight ? 'Sonne' : 'Mond'}
				role="img"
			>
				{isLight ? '🌞' : '🌝'}
			</span>
			<button className="light-switch__button" onClick={toggleLight}>
				{isLight ? 'Dunkel' : 'Hell'}
			</button>
			<button className="light-switch__button" onClick={lightOn}>
				Licht an
			</button>
			<button className="light-switch__button" onClick={lightOff}>
				Licht aus
			</button>
		</div>
	);
}
