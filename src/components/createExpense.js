import React from "react";
import AddExpense from './addExpense';
import CreateAddExpense from './create.addExpense';
import {connect} from 'react-redux';
import {startAddExpense} from './../actions/expenses';
var Create=(props)=>(
    <div>
        <p>this is create expense page</p>
        
        <CreateAddExpense onSubmit={(expense)=>{
        props.dispatch(startAddExpense(expense));
        props.history.push('/dashboard')
        }} />
     </div>
     );

     var CreateAddExpenseComponent=connect((state)=>({
        addExpense:state.expensify
    }))(Create); 
     export default CreateAddExpenseComponent