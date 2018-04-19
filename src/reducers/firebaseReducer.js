export default (state={},action)=>{
switch(action.type){
    case "LOGIN":
    console.log(state);
    return action.uuid
    case "LOGOUT":
    return {};
    default:
    return state;
}
}