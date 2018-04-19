
export default (state=[],action)=>{
    switch(action.type){
      case 'ADD_EXPENSE':
        return state.concat(action.expense);
      case 'REMOVE_EXPENSE':
        return state.filter(({id})=>{
      return id!==action.id
        })
        case "EDIT_EXPENSE":
        return state.map((expense)=>{
        if(expense.id===action.expense.id){
         // console.log('sattt',expense)
           return{...expense,description:action.expense.description,
            ammount:action.expense.ammount,createdAt:action.expense.createdAt};
        }
          else{
            return expense;
          }
        })
       case "FETCH_EXPENSE":
      //  console.log("this ism",action)
       return action.expense
        default:
        return state;
    }
  }