import { createStore, combineReducers } from 'redux';
import StudentReducer from './Reducer/StudentsReducer';
const reducer = combineReducers({
    StudentReducer: StudentReducer,
    
  });
  const store = createStore(reducer);
  
  export default store;
  