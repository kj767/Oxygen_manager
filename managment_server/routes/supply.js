const express=require('express');

var supplyrouter=express.Router();
const supplyIn =require('../models/supplyIn');
const authenticate=require('../authenticate');
supplyrouter.get('/in',(req,res)=>{
    supplyIn.find({})
    .then((supplies)=>{
        res.status(200).json(supplies);
    })
    .catch(err=>{res.status(400).send('Error fetching Supplies')});
})
supplyrouter.post('/in',authenticate.verifyUser, (req,res)=>{
    console.log(req.body);
    supplyIn.create(req.body)
    .then((supply)=>{
        return res.status(200).json(supply);
    })
    .catch(err=>{res.status(400).send(err)});
});

module.exports =supplyrouter;

