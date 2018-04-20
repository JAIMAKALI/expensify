import React from "react";
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { logOutAuth } from "../actions/firebase";
import {Menu,Input,Icon} from 'semantic-ui-react'
import {textFilter, sortByAmmount} from './../actions/filterExpense';
// var Header=(props)=>{
    // <header>  
    //   <h1>Expensify</h1>
    //   <Link to="/dashboard">Home</Link>  
    //  <Link to="/create">Create</Link>
    //  <Link to="/edit">Edit expense</Link> 
    //  <Link to="/help">help </Link>  
    //  <Button positive onClick={()=>{
    //      props.dispatch(logOutAuth());
    //  }}>log out</Button>
    // </header>   
{/* <div class="ui fixed inverted menu">
    <div class="ui container">
      <a href="#" class="header item">
        <img class="logo" src="assets/images/logo.png" />
        Project Name
      </a>
      <a href="#" class="item">Home</a>
      <div class="ui simple dropdown item">
        Dropdown <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item" href="#">Link Item</a>
          <a class="item" href="#">Link Item</a>
          <div class="divider"></div>
          <div class="header">Header Item</div>
          <div class="item">
            <i class="dropdown icon"></i>
            Sub Menu
            <div class="menu">
              <a class="item" href="#">Link Item</a>
              <a class="item" href="#">Link Item</a>
            </div>
          </div>
          <a class="item" href="#">Link Item</a>
        </div>
      </div>
    </div>
  </div> */}


// 

class Header extends React.Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <div>
        <Menu pointing fixed='top' inverted  color={"red"} stackable={true}>
          <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} as={Link} to='/dashboard'/>
          <Menu.Item name='create' active={activeItem === 'create'} onClick={this.handleItemClick} as={Link} to='/create' />
          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
            <Input
     type="text"   
    icon={<Icon name='search' inverted circular link />}
    placeholder='Search...'
    onChange={(e)=>{
        this.props.dispatch(textFilter({text:e.target.value}));
      }}
  />
            </Menu.Item>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={()=>{
          this.props.dispatch(logOutAuth());
     }} />
          </Menu.Menu>
        </Menu>
        </div>
      )
    }
}



export default connect((state)=>{
return{
    state:state
}
})(Header);