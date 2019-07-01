import { combineReducers } from 'redux';
import inventory from 'reducer/inventory';

const rootReducer = combineReducers({
	inventory
});

export default rootReducer;
