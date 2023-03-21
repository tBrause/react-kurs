import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

import JsxDemo from './components/JsxDemo';
import Counter from './components/Counter';
import MoodToggle from './components/MoodToggle';
import CrontrolledInput from './components/CrontrolledInput';
import UncrontrolledInput from './components/UncrontrolledInput';
// import Gallery from './components/Gallery';

const root = createRoot(document.querySelector('#app'));

const images = [
	{ id: 1003, alt: 'Reh', title: 'Test' },
	{ id: 237, alt: 'Hund' },
	{ id: 1001, alt: 'Boot' },
	{ id: 1015, alt: 'Tal' },
];

root.render(
	<React.StrictMode>
		{/* <JsxDemo /> */}
		{/* <Counter /> */}
		{/* <MoodToggle /> */}
		{/* {<Gallery />} */}
		{/* <CrontrolledInput /> */}
		<UncrontrolledInput />
	</React.StrictMode>
);

/* const HelloWorld = React.createElement('strong', {}, 'Hallo Welt!');
root.render(HelloWorld); */
