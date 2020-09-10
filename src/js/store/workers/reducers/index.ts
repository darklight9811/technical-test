// Packages
import Cookie from 'js-cookie';

// Parts
import list from './list';
import add from './add';
import edit from './edit';
import remove from './remove';

// Interfaces
import workerInterface, { actionInterface } from '../interfaces';

// Types
import { LIST_WORKERS, ADD_WORKER, EDIT_WORKER, REMOVE_WORKER} from '../types';

// Helpers
import { initializeWorkers } from '../../../helpers/workers';

// -------------------------------------------------
// Actions
// -------------------------------------------------

const actions: any = {};
actions[LIST_WORKERS] = list;
actions[ADD_WORKER] = add;
actions[EDIT_WORKER] = edit;
actions[REMOVE_WORKER] = remove;

// -------------------------------------------------
// Prepare
// -------------------------------------------------

export default (state: workerInterface[] = initializeWorkers(), action: actionInterface) => {
	if (!actions[action.type]) return state;

	// Update store data
	const response = actions[action.type](state, action);

	// Save to database
	Cookie.set('workers', JSON.stringify(response));

	// Return it
	return response;
}