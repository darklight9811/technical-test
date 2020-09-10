// Interfaces
import workerInterface, { actionInterface } from '../interfaces';

export default function remove (state: workerInterface[], action:actionInterface) {
	return state.filter((item: workerInterface) => item.cpf !== action.payload);
}