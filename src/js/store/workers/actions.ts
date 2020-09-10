// Interfaces
import workerInterface from './interfaces';

// Types
import { ADD_WORKER, EDIT_WORKER, REMOVE_WORKER, LIST_WORKERS } from './types';

export function listWorkers () {
	return {
		type: LIST_WORKERS
	}
}

export function addWorker (workerInfo: workerInterface) {
	return {
		type: ADD_WORKER,
		payload: workerInfo,
	};
}

export function editWorker (workerInfo: workerInterface) {
	return {
		type: EDIT_WORKER,
		payload: workerInfo,
	};
}

export function removeWorker (cpf: string) {
	return {
		type: REMOVE_WORKER,
		payload: cpf,
	};
}