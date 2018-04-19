import uuid from 'uuid';
import database from './../firebase/firebase';

 export var addExpense=(expense)=>{
    return{
      type:'ADD_EXPENSE',
      expense
    }
  }
  
export var startAddExpense=(expenseData={})=>{
  return (dispatch,getState)=>{
    var id=getState().auth;
         const {
      description='',ammount=0,createdAt=0
     }=expenseData;
   const expense={description,ammount,createdAt};
   database.ref(`users/${id}/expensify`).push(expense).then((ref)=>{
    dispatch(addExpense({id:ref.key,...expense}))
   })
  }
}  

 export  var removeExpense=(id)=>{
    return{
      type:'REMOVE_EXPENSE',
      id
    }
  }
  
export var startRemoveExpense=({id})=>{
  return (dispatch,getState)=>{
    var authId=getState().auth;
    database.ref(`users/${authId}/expensify/${id}`).remove().then(()=>{
      dispatch(removeExpense(id));
    })
  }
}

export var editExpense=(expense)=>{
   return{
     type:'EDIT_EXPENSE',
      expense
   } 
  }
 
export var startEditExpense=(expense={})=>{
  return (dispatch,getState)=>{
    var id1=getState().auth;
    const {
     id='', description='',ammount=0,createdAt=0
     }=expense;
     const expenseData={id,description,ammount,createdAt};
     database.ref(`users/${id1}/expensify/${id}`).update(expenseData ).then(()=>{
      dispatch(editExpense({...expenseData}));
    })
  }
}

  export var fetchExpense=(expense)=>{
    return{
      type:"FETCH_EXPENSE",
      expense
    }
  }

 export var startFetchExpense=()=>{
   return (dispatch,getState)=>{
     var array=[];
     var id=getState().auth;
     return database.ref(`users/${id}/expensify`).once('value').then((expenseData)=>{
       expenseData.forEach(element => {
         array.push({id:element.key,...element.val()})
       });
       console.log(array);
       dispatch(fetchExpense(array));
     })
   }
 } 