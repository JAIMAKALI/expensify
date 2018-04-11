
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
        if(expense.id===action.id){
           return {...expense,description:action.description,ammount:action.ammount,createdAt:action.createdAt}
        }
          else{
            return expense;
          }
        })
        default:
        return state;
    }
  }