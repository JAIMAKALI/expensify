import uuid from 'uuid';

 export var addExpense=({description='',ammount=0,createdAt=0}={})=>{
    return{
      type:'ADD_EXPENSE',
      expense:{
        id:uuid(),
        description,
        ammount,
        createdAt
      }
    }
  }
  
 export  var removeExpense=({id=0}={})=>{
    return{
      type:'REMOVE_EXPENSE',
      id
    }
  }
  
export var editExpense=({id=0,description='',ammount=undefined,createdAt=undefined})=>{
   return{
     type:'EDIT_EXPENSE',
      id,
      description,
      ammount,createdAt
   } 
  }