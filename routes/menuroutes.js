const express = require('express');
const router = express.Router();
const menu = require('./../models/menu');

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenu = new menu(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await menu.find();
        console.log('data fetch');
        res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server error'});
        }}
    )

router.get('/:taste',async(req,res)=>{
   try{
     const taste= req.params.taste;
    if(taste=='spicey'|| taste=='sweet'|| taste=='sour'){
    const response = await menu.find({taste:taste});
    console.log('data fetch');
    res.status(200).json(response);
}else{
    res.status(400).json({error:'Invalid taste'});
}
}
catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'});
    }
}
)



    module.exports =router;