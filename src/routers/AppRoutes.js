import React from "react";
import {Router, Route,Switch,Link} from 'react-router-dom';
import Dashboard from './../components/homePage';
import Edit from "./../components/editExpense";
import Create from './../components/createExpense';
import HomepageLayout from './../components/help';    
import LoginPage from './../components/loginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './privateRouter';
import ProfilePage from "../components/testUpload";
export const history = createHistory();

      var NotExit=()=>(
           <div>
        <p>404! Not found</p>
      <Link to="/">Go home</Link>
    </div>
     )
      
var RouterPage=()=>(
<Router history={history}>
        <div>
           
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path="/create" component={Create} />
            <Route path="/edit" component={Edit} exact/>
            <PrivateRoute path="/edit/:id" component={Edit} />
            <Route path="/help" component={HomepageLayout} />
            <Route path='/profile' component={ProfilePage} />
            <Route component={NotExit} />
        </Switch>
        </div>
        </Router>
);

   export default RouterPage;
    