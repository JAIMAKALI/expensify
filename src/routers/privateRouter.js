import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import Header from './../components/header'; 
var PrivateRouter =({component:Component,isAuthenticated,...rest})=>{
    return(
<Route {...rest} render={(props)=>(
    isAuthenticated ? (
        <div>
            <Header />
    <Component {...props}/>
    </div>
    ):(
        <Redirect to='/' />
    )
)}/>
    )
}

var PrivateRouterConnect=connect((state)=>{
    {console.log("statet",state)}
return{
    isAuthenticated:!!state.auth
}
})(PrivateRouter)
export default PrivateRouterConnect;