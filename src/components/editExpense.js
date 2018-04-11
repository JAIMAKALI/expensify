import React from "react";
// import EditExpense from "./editExpenseForm";
import {connect} from 'react-redux';
import {editExpense} from './../actions/expenses';
import CreateAddExpense from './create.addExpense';
var Edit=(props)=>{
    return(
       <div>
       <p>this is edit expense{props.match.params.id}</p> 
     
       <CreateAddExpense 
         expense={props.expense}
         id={props.match.params.id}
        onSubmit={(expenseEdit)=>{
          props.dispatch(editExpense(expenseEdit));
       }}/>
     </div> 
    )    
}  

var EditComponent=connect((state,props)=>({
    expense:state.expensify.find((expense)=>{
        return props.match.params.id===expense.id;
    })
}))(Edit);

export default EditComponent;