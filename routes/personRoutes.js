const express = require('express');
const router = express.Router();
const person = require('./../models/person');


//Post route to add a person
router.post('/',async(req,res)=>{
    try {
          const data = req.body;//Assuming the request body contains the person data by body parser

         //Create a new person to the database
          const newPerson = new person(data);//newperson is a new object create by blueprint of person of line no. 10  
                        
         //save the new person to the database
         const response = await newPerson.save();//we also use without saving in reponse
        console.log('data saved');
         res.status(200).json(response);
       }
  catch (err) {
         console.log(err);
         res.status(500).json({error:'Internal Server error'});
    }
})

//Get method to get the person data
router.get('/',async(req,res)=>{
    try{
        const  data= await person.find();
        console.log('data fetch');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

router.get('/:worktype',async(req,res)=>{
    try{
        const worktype = req.params.worktype;//Extract the work type from the URL paramerter
        if(worktype=='chef'|| worktype=='manager'||worktype=='waiter'){
        const response= await person.find({work:worktype});
        console.log('data fetch');
        res.status(200).json(response);
    }else{
        res.status(404).json({error:'Invalid work type'});
    }
}
catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
}
})



router.put('/:object_id',async(req,res)=>{
    try{
        const personid = req.params.object_id;//extract the id from the URl passed
        const updatetedpersondata = req.body;//updated person data 
        const response = await person.findByIdAndUpdate(personid,updatetedpersondata,{
            new:true,//Return the updated data
            runValidator:true,// Run Mongoose validation check person.js data
        })

        if(!response){
            return res.status(404).json({error:'person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})


router.delete('/:object_id',async(req,res)=>{
    try{
        const personid = req.params.object_id;//extract the id from the URl passed
        const response = await person.findByIdAndDelete(personid);
        if(!response){
            return res.status(404).json({error:'person not found'});
    }
}
catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'});
}
})
module.exports= router;