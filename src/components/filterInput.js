import React from 'react';
import {connect} from 'react-redux';
import {textFilter, sortByAmmount} from './../actions/filterExpense';
import {sortByDate} from './../actions/filterExpense';
var FilterInput=(props)=>(
    <div>
        <input type='text'  onChange={(e)=>{
          props.dispatch(textFilter({text:e.target.value}));
        }}/>
    <select onChange={(e)=>{
    if(e.target.value==='ammount'){
      props.dispatch(sortByAmmount({sortBy:e.target.value}));
    }
   else if(e.target.value==='date'){
        props.dispatch(sortByDate({sortBy:e.target.value}));
      }
    }}>
        <option value="date">Date</option>
        <option value="ammount">Ammount</option>
    </select>
    </div>
)

var ConnectFilterInput=connect((state)=>{
return{
    FilterInput:state.filter
}
})(FilterInput);

export default ConnectFilterInput;