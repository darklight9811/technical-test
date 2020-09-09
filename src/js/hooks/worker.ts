// Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Store
import { listWorkers, addWorker } from '../store/workers/actions';
import workerInterface from '../store/workers/interfaces';

export const useListWorkers = () => {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const dispatch = useDispatch();

	// store
	const list = useSelector((store: any) => store.workers);

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	React.useEffect(() => {
		dispatch(listWorkers());
	}, [dispatch]);

	// -------------------------------------------------
	// Response
	// -------------------------------------------------

	return list as workerInterface[];
}

export function useWorkerAdd () {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const dispatch = useDispatch();

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const addWorkerFunction = React.useCallback((workerInfo: workerInterface) => {
		dispatch(addWorker(workerInfo));

		return true;
	}, [dispatch]);

	// -------------------------------------------------
	// Response
	// -------------------------------------------------

	return addWorkerFunction;
}