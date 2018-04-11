import React from "react";
import AddExpense from './addExpense';
import CreateAddExpense from './create.addExpense';
import {connect} from 'react-redux';
import {addExpense} from './../actions/expenses';
var Create=(props)=>(
    <div>
        <p>this is you</p>
        
        <CreateAddExpense onSubmit={(expense)=>{
        props.dispatch(addExpense(expense));
        props.history.push('/')
        }} />
     </div>
     );

     var CreateAddExpenseComponent=connect((state)=>({
        addExpense:state.expensify
    }))(Create); 
     export default CreateAddExpenseComponent