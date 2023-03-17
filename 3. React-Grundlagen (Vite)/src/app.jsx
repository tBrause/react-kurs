import { createRoot } from 'react-dom/client';
import React, {StrictMode} from 'react';

import JsxDemo from './components/JsxDemo';

const root = createRoot(document.querySelector('#app'));

root.render(
    <React.StrictMode>
        <JsxDemo />
    </React.StrictMode>);

/* const HelloWorld = React.createElement('strong', {}, 'Hallo Welt!');
root.render(HelloWorld); */
