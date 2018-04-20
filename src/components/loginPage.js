import React from 'react';
import {Button,Icon} from 'semantic-ui-react';
import {loginAuth} from './../actions/firebase';
import {connect} from 'react-redux';
var LoginPage=(props)=>{
return(
    <div className="login-layout">
    <div className="login-layout__box">
    <h1>Expensify</h1>
    <p className="login-layout__content">You can mange your expense by this application</p>
    <Button color='google plus' onClick={()=>{
            props.dispatch(loginAuth());
        }}>
      <Icon name='google plus' /> Google Plus
    </Button>
    </div>
       
    </div>
)
}

var LoginPageConnect=connect((state)=>{
 return{
     login:state
 }
})(LoginPage)

export default LoginPageConnect;