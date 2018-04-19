import React from 'react';
import ReactDOM from 'react-dom';
import RouterPage ,{history} from './routers/AppRoutes';
import './../public/styles/style.scss';
import configStore  from './store/configStore';
import {addExpense, startFetchExpense} from './actions/expenses';
import {login,logout} from './actions/firebase';
import {Provider} from 'react-redux';
//import 'semantic-ui-css/semantic.min.css';
import {firebase} from './firebase/firebase';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
//import {startFetchExpense} from './actions/expenses';
var store=configStore();
//console.log(store);
// store.dispatch(addExpense({description:'this is my expensify app',ammount:800,createdAt:37}));
// store.dispatch(addExpense({description:'hello',ammount:500,createdAt:15}));
// store.dispatch(addExpense({description:'this is my expensify app',ammount:1000,createdAt:25}));
//store.dispatch(textFilter({text:'hello'}));

const jsx=(
    <Provider store={store}>
    <RouterPage />
    </Provider>
);


ReactDOM.render((  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>),document.getElementById('app'))
  
let hasChanged=false;

var isRender=()=>{
  if(!hasChanged){
    ReactDOM.render(jsx,document.getElementById('app'));
    hasChanged=true;
  }
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log(user);
    store.dispatch(login(user.uid));
    store.dispatch(startFetchExpense()).then(()=>{
      isRender();
     // console.log(history);
      if(history.location.pathname==='/'){
        history.push('/dashboard');
      }
  })
  }
  else{
    store.dispatch(logout());
    isRender();
    history.push('/');
  }
})