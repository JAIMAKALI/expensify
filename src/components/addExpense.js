import React from 'react';
import { connect } from 'react-redux';
import {addExpense} from './../actions/expenses'

var AddExpense=(props)=>(
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.dispatch(addExpense({description:e.target.description.value
            ,ammount:e.target.ammount.value
            }));
            alert('item added')
        }}>
        <input type="text" name="description" />
        <input type="number" name="ammount"/>
        <input type='submit' value="add" />
        </form>
    </div>
);

var AddExpenseComponent=connect((state)=>{
    return{
        addExpense:state.expensify
    }
})(AddExpense);
export default AddExpenseComponent;
