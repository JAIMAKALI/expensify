import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class CreateAddExpense extends React.Component{
  
    
    state={
        description:this.props.expense? this.props.expense.description :'',
        ammount:this.props.expense ? this.props.expense.ammount : undefined,
        createdAt:this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        focused:false,
        error:''
    }
handleDescription=(e)=>{
   var description=e.target.value;
   this.setState(()=>({description}));
   }

 handleAmmount=(e)=>{
    var ammount=e.target.value;
   this.setState(()=>({ammount}));
    }

    handleDate=(createdAt)=>{
       this.setState(()=>({createdAt}));
        }

     handleSubmit=(e)=>{
     e.preventDefault();
     if(!this.state.description || !this.state.ammount){
        this.setState(()=>({error:'please enter the description and ammount'}))
     }
     else{
         this.setState(()=>({error:''}))
         this.props.onSubmit({ id:this.props.id,
            description:this.state.description,
            ammount:this.state.ammount,
            createdAt:this.state.createdAt.valueOf()
        });
     }
     }   
    render(){
      return(
  <div>
        {this.state.error && <p>{this.state.error}</p>}
        {console.log(this.state.ammount)}
<form onSubmit={this.handleSubmit} >
    <input type="text" placeholder="description"  onChange={this.handleDescription} value={this.state.description} />
    <input type="number" placeholder="ammount"  onChange={this.handleAmmount} value={this.state.ammount}
    />
     <SingleDatePicker
  date={this.state.createdAt} // momentPropTypes.momentObj or null
  onDateChange={this.handleDate} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({focused})} // PropTypes.func.isRequired 7519308172
 />  
    <input type="submit" value="add" /> 
</form>
  
    </div>
        )
    }
}

export default CreateAddExpense;