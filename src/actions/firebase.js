import {googleAuthProvider,firebase} from './../firebase/firebase';

export var login=(uuid)=>{
    return{
        type:"LOGIN",
        uuid
    }
}

export var logout=()=>{
    return{
        type:'LOGOUT'
    }
}

export var loginAuth=()=>{
    return ()=>{
    return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}
export var logOutAuth=()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}