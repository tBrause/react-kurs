import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

import JsxDemo from './components/JsxDemo';
import Counter from './components/Counter';
import MoodToggle from './components/MoodToggle';
// import Gallery from './components/Gallery';

const root = createRoot(document.querySelector('#app'));

root.render(
	<React.StrictMode>
		<JsxDemo />
		{/* <Counter /> */}
		{/* <MoodToggle /> */}
		{/* {<Gallery />} */}
	</React.StrictMode>
);

/* const HelloWorld = React.createElement('strong', {}, 'Hallo Welt!');
root.render(HelloWorld); */
