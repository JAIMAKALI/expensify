import React from 'react';
import {Button,Icon} from 'semantic-ui-react';
import {loginAuth} from './../actions/firebase';
import {connect} from 'react-redux';
var LoginPage=(props)=>{
return(
    <div>
        <p>login page</p>
        
        <Button color='google plus' onClick={()=>{
            props.dispatch(loginAuth());
        }}>
      <Icon name='google plus' /> Google Plus
    </Button>
    </div>
)
}

var LoginPageConnect=connect((state)=>{
 return{
     login:state
 }
})(LoginPage)

export default LoginPageConnect;