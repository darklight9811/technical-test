// Interfaces
import workerInterface, { ActionInterface } from '../interfaces';

export default function remove (state: workerInterface[], action:ActionInterface) {
	return state.filter((item: workerInterface) => item.cpf !== action.payload);
}