import React from 'react';
import {removeExpense} from './../actions/expenses';
import {Link} from 'react-router-dom';
import {startRemoveExpense} from './../actions/expenses';
import {Card,Button} from 'semantic-ui-react';
import moment from 'moment';
var ExpenseListItem=(props)=>{
    return(
<div className="ui centered card">
              <Card>
      <Card.Content>
        <Card.Header>
        <Link to={`/edit/${props.id}`}>expense {props.ammount}</Link>
        </Card.Header>
        <Card.Meta>
        {moment(props.createdAt).format('LLLL')}
        
        </Card.Meta>
        <Card.Description>
        {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red' onClick={()=>{props.props.dispatch(startRemoveExpense({id:props.id}))}}>Remove</Button>
        </div>
      </Card.Content>
    </Card>  
    </div>
       
    )
}

export default ExpenseListItem;