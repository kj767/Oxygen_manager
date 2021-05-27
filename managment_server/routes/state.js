const bodyParser = require('body-parser');
const express = require('express');
const stateData = require('../models/state');
const app = express.Router();

app.get('/getStateData', (req, res,next) => {
    stateData.find({})
        .then((docs) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(docs);
        },(err)=> next(err))
        .catch((err)=>next(err));

});

app.post('/addStateData',(req,res,next)=>{
    stateData.create(req.body)
    .then((result)=>{
        res.statusCode=201;
        res.json(result);
    },(err)=> next(err))
    .catch((err)=>next(err));
});
module.exports =app;