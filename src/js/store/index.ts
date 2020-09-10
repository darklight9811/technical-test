// Packages
import { combineReducers, createStore } from "redux";

// Reducers
import workerReducer from './workers/reducers';

const reducers = combineReducers({
	workers: workerReducer,
});

export default createStore(reducers);