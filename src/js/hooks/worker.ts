// Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Store
import { listWorkers, addWorker, editWorker, removeWorker } from '../store/workers/actions';
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

export function useRemoveWorker () {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const dispatch = useDispatch();

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onDelete = React.useCallback((data) => {
		dispatch(removeWorker(data));

		return true;
	}, [dispatch]);

	// -------------------------------------------------
	// Response
	// -------------------------------------------------

	return onDelete;
}

export function useWorker (cpf: string) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [worker, setworker] = React.useState<workerInterface>();

	// hooks
	const dispatch = useDispatch();

	// store
	const list = useSelector((store: any) => store.workers);

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	React.useEffect(() => {
		setworker(list.find((item: workerInterface) => item.cpf === cpf));
	}, [cpf, list]);

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onEdit = React.useCallback((data) => {
		dispatch(editWorker(data));

		return true;
	}, [dispatch]);

	// -------------------------------------------------
	// Response
	// -------------------------------------------------

	return [worker, onEdit] as [workerInterface, (data: workerInterface) => boolean];
}