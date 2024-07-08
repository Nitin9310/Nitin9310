const mongoose = require('mongoose');


//define the Person scehma
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: {
        type:Number
    },
    work:{
      type:String,
      enum :['chef','manager','waiter'],//agar user in tino work ka alava work fill karga to data accept nhi hoga
      required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    Salary:{
       type:Number,
       require:true
    }
});

//create Person model
const Person = mongoose.model('Person',personSchema);
module.exports=Person;