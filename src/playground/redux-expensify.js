import {createStore,combineReducers} from 'redux';
import uuid from "uuid";
var demoState={
    expenses:[{
      id:"abcdeel",
      description:"it is the expencify app",
      postDate:'date',
      amount:5000,
      createdAt:0
    }],
   filters:{
     text:'rent',
     start:'date',
     endDate:'date'
   }
}

var filterReducerState={
  text:'hghghggfg',
  sortBy:'date',
  startDate:0,
  endDate:0
}

var addExpense=({description='',ammount=0,createdAt=0}={})=>{
  return{
    type:'ADD_EXPENSE',
    expense:{
      id:uuid(),
      description,
      ammount,
      createdAt
    }
  }
}

var removeExpense=({id=0}={})=>{
  return{
    type:'REMOVE_EXPENSE',
    id
  }
}

var editExpense=({id=0,description=''})=>{
 return{
   type:'EDIT_EXPENSE',
    id,
    description
 } 
}
var textFilter=({text})=>{
  return {
    type:'TEXT_FILTER',
    text
  }
}
var setStartDate=(startDate)=>({
  type:'SET_START_DATE',
  startDate
})
var setEndDate=(endDate)=>({
  type:'SET_END_DATE',
  endDate
})

var sortByDate=({sortBy='date'}={})=>({
  type:'SORT_BY_DATE',
  sortBy
})

var sortByAmmount=({sortBy='ammount'}={})=>({
  type:'SORT_BY_AMMOUNT',
  sortBy
})

var visibility=(expensify,{text,sortBy,startDate,endDate})=>{
  return expensify.filter((expense)=>{
    // console.log(expense);
     var startDateFilter=typeof startDate!=='number' || expense.createdAt>=startDate;
     var endDateFilter=typeof endDate!=='number' || expense.createdAt<=endDate;;
     var textFilter=expense.description.toLowerCase().includes(text.toLowerCase());
     return startDateFilter && endDateFilter && textFilter;
 })
} 

var Reducer=(state=[],action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return state.concat(action.expense);
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=>{
    return id!==action.id
      })
      case "EDIT_EXPENSE":
      return state.map((expense)=>{
      if(expense.id===action.id){
         return {...expense,description:action.description}
      }
        else{
          return expense;
        }
      })
      default:
      return state;
  }
}

var filterReducer=(state=filterReducerState,action)=>{
  switch(action.type){
    case "TEXT_FILTER":
    {
      return {...state,text:action.text}
    }
    case 'SORT_BY_DATE':
    return {...state,sortBy:action.sortBy}
    case 'SORT_BY_AMMOUNT':
    return {...state,sortBy:action.sortBy}
    case "SET_START_DATE":
    return{...state,startDate:action.startDate}
    case "SET_END_DATE":
    return{...state,endDate:action.endDate}
    default:
    return state;
  }
}

var store=createStore(combineReducers({
 expensify: Reducer,
  filter:filterReducer
}));

store.subscribe(()=>{
  var getVisibleExpense=store.getState();
  var expensify=getVisibleExpense.expensify;
  var filter=getVisibleExpense.filter;
  console.log(visibility(expensify,filter));
  //console.log(getDetails);
})

store.dispatch(textFilter({text:'hell'}));
var expenseOne=store.dispatch(addExpense({description:'hello',ammount:530,createdAt:22}));
var expenseTwo=store.dispatch(addExpense({description:'hello',ammount:500,createdAt:15}));

store.dispatch(setStartDate(20))
store.dispatch(setEndDate(25))

 
// store.dispatch(sortByAmmount());
// store.dispatch(removeExpense({id:expenseTwo.expense.id}));
// store.dispatch(editExpense({id:expenseOne.expense.id,description:"this is me"}));

