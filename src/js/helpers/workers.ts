// Packages
import Cookie from 'js-cookie';

// Services
import defaultWorkers from '../services/defaultWorkers.json';

// Interfaces
import workerInterface from '../store/workers/interfaces';

export function initializeWorkers (): workerInterface[] {
	const memory = Cookie.get('workers');

	return memory ? JSON.parse(memory):defaultWorkers;
}