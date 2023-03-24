import { useState } from 'react';

export function useToggle(initialStale) {
	const [state, setState] = useState(initialStale);

	const toggle = () => setState((currentState) => !currentState);

	return [state, toggle, setState];
}
