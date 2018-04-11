import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./../playground/Home";
import Contact from './../playground/Contact';
import List from "./../playground/List"
import ListItem from "./../playground/ListItem";

var NoMatch=()=>(
<div>
    <p>
        404! oops...
    </p>
</div>
);
var Router=()=>(

<BrowserRouter>

<div>
<Switch>
<Route path="/" component={Home} exact={true}/>
<Route path="/contact" component={Contact} />
 <Route path="/list" component={List} exact={true} />
<Route path="/list/:id" component={ListItem} />
<Route component={NoMatch}/>
</Switch>
</div>

</BrowserRouter>
);

export default Router;