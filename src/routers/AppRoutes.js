import React from "react";
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom';
import Dashboard from './../components/homePage';
import Edit from "./../components/editExpense";
import Create from './../components/createExpense';
import Header from './../components/header';     
    
      var NotExit=()=>(
           <div>
        <p>404! Not found</p>
      <Link to="/">Go home</Link>
    </div>
     )
      
var Router=()=>(
<BrowserRouter>
        <div>
            <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit} exact/>
            <Route path="/edit/:id" component={Edit} />
            <Route component={NotExit} />
        </Switch>
        </div>
        
        </BrowserRouter>
);

   export default Router;
    