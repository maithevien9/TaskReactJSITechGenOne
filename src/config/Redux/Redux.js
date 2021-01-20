import { createStore, combineReducers } from 'redux';
import StudentReducer from './Reducer/StudentsReducer';
import CheckMenuReducer from './Reducer/CheckMenuReduce';
const reducer = combineReducers({
	StudentReducer: StudentReducer,
	CheckMenuReducer: CheckMenuReducer
});
const store = createStore(reducer);

export default store;
