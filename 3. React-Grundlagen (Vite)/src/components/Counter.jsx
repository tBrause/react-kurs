import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	const increase = () => setCount(count + 1);
	const decrease = () => setCount(count - 1);
	// const clear = () => setCount(0);

	return (
		<div>
			<div>{count}</div>
			<button onClick={increase}>Plus</button>
			<button onClick={decrease}>Minus</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}
