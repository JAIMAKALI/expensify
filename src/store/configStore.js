import {createStore,combineReducers} from 'redux';
import Reducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';


export default ()=>{
   var store= createStore(combineReducers({
        expensify: Reducer,
         filter:filterReducer
       }));
       return store;
}
