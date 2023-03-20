import { useState } from 'react';
import biographies from '../biographies.js';
import Pioneer from './Pioneer';

export default function Pioneers() {
	// console.log(biographies);
	return (
		// <ul>
		// 	{biographies.map(({ name }) => (
		// 		<li key={name}>{name}</li>
		// 	))}
		// </ul>
		<div>
			{biographies.map((biography) => (
				<Pioneer {...biography} key={biography.url} />
			))}
		</div>
	);
}
