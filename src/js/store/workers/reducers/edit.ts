// Interfaces
import workerInterface, { actionInterface } from '../interfaces';

export default function edit (state: workerInterface[], action:actionInterface) {
	return [
		...state.map((item: workerInterface) => {
			if ((action.payload as workerInterface).cpf === item.cpf) {
				return {
					...item,
					...(action.payload as workerInterface),
				} as workerInterface
			}

			return item;
		})
	];
}