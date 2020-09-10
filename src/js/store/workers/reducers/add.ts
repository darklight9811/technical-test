// Interfaces
import workerInterface, { actionInterface } from '../interfaces';

export default function add (state: workerInterface[], action:actionInterface) {
	return [
		...state,
		action.payload as workerInterface
	];
}