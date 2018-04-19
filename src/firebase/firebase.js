import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDxgQ7lnaHYLqZ-_H3dHc0rnrGJQh9nzJc",
    authDomain: "expensify-424c5.firebaseapp.com",
    databaseURL: "https://expensify-424c5.firebaseio.com",
    projectId: "expensify-424c5",
    storageBucket: "expensify-424c5.appspot.com",
    messagingSenderId: "674568068121"
  };

  firebase.initializeApp(config);
 var database=firebase.database();
var googleAuthProvider=new firebase.auth.GoogleAuthProvider();

 export {firebase,googleAuthProvider,database as default}
//   database.ref().set({
//       name:'manish kumar',
//       job:{
//       type:'software development',
//       company:'facebook'
//       },
//       isSingle:false,
//       age:20,
//       location:{
//           city:'motihari',
//           village:'purnahiya kothi'
//       }
//   }).then(()=>{
// console.log('data is saved')
//   }).catch((e)=>{
//       console.error(e);
//   });


//database.ref('isSingle').set(null);

// database.ref().update({
//     name:'vikash kumar',
//     'job/type':'web developer'
// });

// database.ref().once('value').then((data)=>{
// console.log(data.val());
// });

// database.ref().on('value',(data)=>{
// console.log(data.val());
// });

// setTimeout(()=>{
//     database.ref('age').set(50);
// },3000)

//database.ref().remove();
// database.ref('notes').push({
//     name:'react js node js',
//     description:'this is awesome for our website'
// });

// database.ref('notes').once('value').then((data)=>{
//     var arr=[];
//     data.forEach(element => {
//         arr.push({
//             id:element.key,
//             ...element.val()
//         })
//     });
//     console.log(arr);
// })