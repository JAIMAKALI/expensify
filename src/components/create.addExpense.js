import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { Input, Label,Divider,Message } from 'semantic-ui-react'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import FileUploader from 'react-firebase-file-uploader';
import {firebase} from '../firebase/firebase';

class CreateAddExpense extends React.Component{
  
    
    state={
        description:this.props.expense? this.props.expense.description :'',
        ammount:this.props.expense ? this.props.expense.ammount : undefined,
        createdAt:this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        focused:false,
        error:'',
        avatar: '',
        isUploading: false,
        progress: 0,
        avatarURL: ''
    }
    handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    handleProgress = (progress) => this.setState({progress});
    handleUploadError = (error) => {
      this.setState({isUploading: false});
      console.error('err',error);
    }
    handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then((url) => {
          this.setState({avatarURL: url})
  });
    };

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
         console.log(this.state.avatarURL);
         this.props.onSubmit({ id:this.props.id,
            description:this.state.description,
            ammount:this.state.ammount,
            createdAt:this.state.createdAt.valueOf(),
            avatarURL:this.state.avatarURL
        });
     }
     }   
    render(){
      return(
  <div className="create__expense">
  
  {this.state.error &&<Message warning>
    <Message.Header>{this.state.error}</Message.Header>
   
  </Message>}
    

<form onSubmit={this.handleSubmit} >
    {/* <input type="text" placeholder="description"  onChange={this.handleDescription} value={this.state.description} />
     <input type="number" placeholder="ammount"  onChange={this.handleAmmount} value={this.state.ammount} /> */}
    <Input
    type="text"
    icon='tags'
    iconPosition='left'
    label={{ tag: true, content: 'Add Description' }}
    labelPosition='right'
    placeholder='Enter tags'
    onChange={this.handleDescription} value={this.state.description}
  />
<br />
<Divider horizontal>Ammount</Divider>
    <Input labelPosition='right' type='number' placeholder='Amount' onChange={this.handleAmmount} value={this.state.ammount}>
    <Label basic>$</Label>
    <input />
    <Label>.00</Label>
  </Input>
    <br />
    <Divider horizontal>Date</Divider>
     <SingleDatePicker
  date={this.state.createdAt} // momentPropTypes.momentObj or null
  onDateChange={this.handleDate} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({focused})} // PropTypes.func.isRequired 7519308172
 />  
<br />
<label>Avatar:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.avatarURL &&
            <img src={this.state.avatarURL} />
          }
          <FileUploader
            accept="images/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />

   <Input
    action={{ color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Checkout' }}
    // actionPosition='left'
//    type="submit"
  />
    {/* <input type="submit" value="add" />  */}
</form>
  
    </div>
        )
    }
}

export default CreateAddExpense;