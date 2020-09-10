// Interfaces
import workerInterface, { ActionInterface } from '../interfaces';

export default function add (state: workerInterface[], action:ActionInterface) {
	return [
		...state,
		action.payload as workerInterface
	];
}