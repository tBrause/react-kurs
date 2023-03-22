import React from 'react';
import ReactDOM from 'react-dom/client';

import Finder from './components/Finder';
import VideoPlayer from './components/VideoPlayer';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <Finder /> */}
		<VideoPlayer />
	</React.StrictMode>
);
