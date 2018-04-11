import React from 'react';

class EditExpense extends React.Component{
 
state={
    description:''
}    

handleEditDescription=(e)=>{
    var description=e.target.value;
    this.setState(()=>({
        description
    }))
}

handleEditSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit({id:this.props.id,description:this.state.description});
}
    render(){
        return(
            <div>
            <form onSubmit={this.handleEditSubmit}>
                <input type="text" placeholder="description" value={this.state.description} 
                onChange={this.handleEditDescription}/>
                <input type="submit" value="edit"/>
            </form>
            </div>
        )
    }
}

export default EditExpense;