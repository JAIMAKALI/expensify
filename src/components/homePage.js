import React from "react";
import ExpenseList from './expenseList';
import FilterInput from './filterInput';



var Dashboard=()=>(
    <div>
     
        <FilterInput /> 
        <ExpenseList />
        <p>this is me</p>
     </div>
     );

     export default Dashboard;