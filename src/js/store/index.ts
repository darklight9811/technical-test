// Packages
import { combineReducers } from "redux";

// Reducers
import workerReducer from './workers/reducers';

export default combineReducers({
	workers: workerReducer,
});