import {createStore} from "redux";

//action generators
var increseAction=({increaseBy=1}={})=>{
    return{
        type:'INCREMENT',
        increaseBy
    }
}

var decreaseCount=({decreaseBy=1}={})=>{
return{
    type:'DECREMENT',
    decreaseBy
}
}

var reset=({resetTo=0}={})=>{
    return{
        type:'RESET',
        resetTo
    }
}
var count=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':{
            return {
                count:state.count+action.increaseBy
            }
        }
        break;
        case 'DECREMENT':{
            return{count:state.count-action.decreaseBy}
        }
        case 'RESET':
        return{count:action.resetTo};
        default:{
            return state;
        }
    }
}
var store=createStore(count());
 
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(increseAction({increaseBy:5}));
store.dispatch(reset({resetTo:8}));
store.dispatch(decreaseCount({decreaseBy:5}));
store.dispatch(decreaseCount());
//es6 destructing