import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

import JsxDemo from './components/JsxDemo';
import Counter from './components/Counter';

const root = createRoot(document.querySelector('#app'));

root.render(
	<React.StrictMode>
		{/* <JsxDemo /> */}
		<Counter />
	</React.StrictMode>
);

/* const HelloWorld = React.createElement('strong', {}, 'Hallo Welt!');
root.render(HelloWorld); */
