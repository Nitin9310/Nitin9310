// day2-------------------------------------
// console.log("file is running");

// let add=(a,b)=>{
//     return a+b;
// }

// let res= add(4,5);
// console.log(res);

// (function(){
//     console.log("I am an anonymous function");
// })(); 

// function callback(){
//     console.log("nitin is calling");
// }

// let addd=(a,b,nitin)=>{
// //     let res=a+b;
// //     console.log(res);
// //     nitin();//it is act as callback function here.

// // }

// // // addd(5,3,function(){
// // //     console.log("nitin is calling again");
// // // });

// // addd(5,3,()=> console.log("nitin is calling again"));


// let os = require('os');
// var _ = require('lodash');//_ is their name
// let  fs = require('fs');
 
// let user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>{console.log("file is created");});

// const notes= require('./notes.js');//importing notes file in server file
//  console.log('server file is avalible');


//  let age=notes.age;
// let res=notes.addnum(age,18);
// console.log(age);
// console.log(res);

// let data=["nitin","adii",1,4,1,5,4,"nitin","age"];
// let filter=_.uniq(data);//give a array which have no repeated elements
// console.log(filter);

// console.log(_.isString(3));//return false bcz 3 is not a string




//day3-----------------------------------------------------------
const jsonString = '{"name":"john","age":30,"city":"new york"}';
const obj = JSON.parse(jsonString);//here we convert json string to object
console.log(obj.name);

const objectToConvert ={
    name:"Nitin",
    age:30,
};

const json = JSON.stringify(objectToConvert);//here we convert object to json string
console.log(json);

console.log(typeof json);