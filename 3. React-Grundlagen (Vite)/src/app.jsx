import { createRoot } from 'react-dom/client';
import React from 'react';

import JsxDemo from './components/JsxDemo';

const root = createRoot(document.querySelector('#app'));

root.render(<JsxDemo />);

/* const HelloWorld = React.createElement('strong', {}, 'Hallo Welt!');
root.render(HelloWorld); */
