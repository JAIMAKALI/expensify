import React from "react";
import {connect} from 'react-redux'
import ExpenseListItem from './expenseListItem';
import selectItem from './../selectors/selector';
var ExpenseList=(props)=>(
    <div>
   { props.expensify.map((expense)=>{
        return <ExpenseListItem key={expense.id} {...expense} props={props}/>;
    })}
    </div>
)

var ConnectExpensify=connect((state)=>{

    return{
        expensify:selectItem(state.expensify,state.filter)
    }
})(ExpenseList);

export default ConnectExpensify;


