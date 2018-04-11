import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/AppRoutes';
import './../public/styles/style.scss';
import configStore  from './store/configStore';
import {addExpense} from './actions/expenses';
import {textFilter} from './actions/filterExpense';
import {Provider} from 'react-redux';
var store=configStore();
//console.log(store);
store.dispatch(addExpense({description:'this is my expensify app',ammount:800,createdAt:37}));
store.dispatch(addExpense({description:'hello',ammount:500,createdAt:15}));
store.dispatch(addExpense({description:'this is my expensify app',ammount:1000,createdAt:25}));
store.dispatch(textFilter({text:'hello'}));

const jsx=(
    <Provider store={store}>
    <Router />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
