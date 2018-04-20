import React from 'react';
import {connect} from 'react-redux';
import {textFilter, sortByAmmount} from './../actions/filterExpense';
import {sortByDate} from './../actions/filterExpense';
import {Input,Icon,Select,Rail,Sticky,Header} from 'semantic-ui-react';

var FilterInput=(props)=>{
    const options = [
        { key: 'm', text: 'Date', value: 'date' },
        { key: 'f', text: 'ammount', value: 'ammount' },
      ]

    return(     
    <div>
     
        <Sticky >
          <Header as='h3'>Stuck Content</Header>
          <Input
     type="text"   
    icon={<Icon name='search' inverted circular link />}
    placeholder='Search...'
    onChange={(e)=>{
        props.dispatch(textFilter({text:e.target.value}));
      }}
  />
<br />
    <Select placeholder='Select your country' options={options}
     onChange={(e,data)=>{
        if(data.value==='ammount'){
          props.dispatch(sortByAmmount({sortBy:data.value}));
        }
       else if(data.value==='date'){
            props.dispatch(sortByDate({sortBy:data.value}));
          }
        }}
    />
        </Sticky>
       
      
    </div>
)
}
var ConnectFilterInput=connect((state)=>{
return{
    FilterInput:state.filter
}
})(FilterInput);

export default ConnectFilterInput;