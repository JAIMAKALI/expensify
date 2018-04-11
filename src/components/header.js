import React from "react";
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom';

var Header=()=>(
    <header>  
      <h1>Expensify</h1>
      <Link to="/">Home</Link>  
     <Link to="/create">Create</Link>
     <Link to="/edit">Edit expense</Link>   
    </header>
);

export default Header;