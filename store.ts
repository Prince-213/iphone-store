import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		increment: () => {},
		decrement: () => {},
		reset: () => {}
	};
}

export const auth = createCount();
