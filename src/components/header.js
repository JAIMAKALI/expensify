import React from "react";
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { logOutAuth } from "../actions/firebase";
var Header=(props)=>(
    <header>  
      <h1>Expensify</h1>
      <Link to="/dashboard">Home</Link>  
     <Link to="/create">Create</Link>
     <Link to="/edit">Edit expense</Link> 
     <Link to="/help">help </Link>  
     <Button positive onClick={()=>{
         props.dispatch(logOutAuth());
     }}>log out</Button>
    </header>   
);

export default connect((state)=>{
return{
    state:state
}
})(Header);