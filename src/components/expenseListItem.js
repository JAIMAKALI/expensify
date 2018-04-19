import React from 'react';
import {removeExpense} from './../actions/expenses';
import {Link} from 'react-router-dom';
import {startRemoveExpense} from './../actions/expenses';
var ExpenseListItem=(props)=>{
    return(
        <div>
        <h1>Description<Link to={`/edit/${props.id}`}>{props.description}</Link></h1>
            <h4>Ammount<p>{props.ammount}</p></h4>
            <h5>createdAt<p>{props.createdAt}</p></h5>
            <button onClick={()=>{props.props.dispatch(startRemoveExpense({id:props.id}))}}>remove</button>
        </div>
    )
}

export default ExpenseListItem;