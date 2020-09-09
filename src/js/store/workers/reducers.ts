// Packages
import { v4 as uuid } from 'uuid';

// Interfaces
import workerInterface, { actionInterface } from './interfaces';

// Types
import { LIST_WORKERS, ADD_WORKER, EDIT_WORKER, REMOVE_WORKER} from './types';

export default (state: workerInterface[] = [], action: actionInterface) => {
	switch(action.type) {
		default:
		case LIST_WORKERS:
			return state;

		case ADD_WORKER:
			return [
				...state,
				{
					id: uuid(),
					...(action.payload as workerInterface),
				} as workerInterface
			];

		case EDIT_WORKER:
			return [
				...state.map((item: workerInterface) => {
					if ((action.payload as workerInterface).id === item.id) {
						return {
							...item,
							...(action.payload as workerInterface),
						} as workerInterface
					}

					return item;
				})
			];

		case REMOVE_WORKER:
			return state.filter((item: workerInterface) => item.id !== action.payload);
	}
}