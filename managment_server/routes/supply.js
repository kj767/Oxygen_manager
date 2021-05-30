const express=require('express');
const stateData = require('../models/state');
var supplyrouter=express.Router();
const supplyIn =require('../models/supplyIn');
const authenticate=require('../authenticate');
const Dashboards=require('../models/dashboard');
const supplyOut=require('../models/supplyout');
const interState=require('../models/interstate');
//const { Dashboard, ContactSupportOutlined } = require('@material-ui/icons');
supplyrouter.get('/in',(req,res)=>{
    supplyIn.find({})
    .then((supplies)=>{
        res.status(200).json(supplies);
    })
    .catch(err=>{res.status(400).send('Error fetching Supplies')});
});
supplyrouter.get('/interState',(req,res)=>{
    interState.find({})
    .then((supplies)=>{
        res.status(200).json(supplies);
    })
    .catch(err=>{res.status(400).send('Error fetching Supplies')});
});

supplyrouter.post('/in', (req,res)=>{
    console.log(req.body);
    supplyIn.create(req.body)
    .then((supply)=>{
        console.log(supply);
        Dashboards.find().
        then(data=>{
            console.log(data);
        var favailable=(supply.quantity+data[0].available);
        console.log(data[0].available);
            Dashboards.updateOne({$set:{available:favailable}})
            .then((d)=>{
                
            })
            .catch(err=>{res.status(400).send('An Error Occoured')});

        })
        res.status(200).json(supply);
    })
    .catch(err=>{res.status(400).send(err)});
});
supplyrouter.get('/out',(req,res)=>{
    supplyOut.find({})
    .then((supplies)=>{
        res.status(200).json(supplies);
    })
    .catch(err=>{res.status(400).send('Error fetching Supplies')});
})
supplyrouter.post('/out', (req,res)=>{
    console.log(req.body);
    supplyOut.create(req.body)
    .then((supply)=>{
        console.log(supply);
        Dashboards.find().
        then(data=>{
            console.log(data);
        var favailable=(data[0].available-supply.quantity);
        var fallocated=(data[0].allocated+supply.quantity);
        console.log(data[0].available);
            Dashboards.updateOne({$set:{available:favailable,allocated:fallocated}})
            .then((d)=>{
                
            })
            stateData.findOne({name:supply.state})
            .then((state)=>{
                const favailable=state.available+supply.quantity;
                state.available=favailable;
                state.save()
                .then((update)=>{
                    console.log(update)
                })
                .catch(err=>{res.status(400).send('An Error Occoured')});
            })
            .catch(err=>{res.status(400).send('An Error Occoured')});

            })

           
            res.status(200).json(supply);
        })
        .catch(err=>{res.status(400).send('An Error Occoured')});
        
    });

    supplyrouter.post('/urgentRequirement',(req,res)=>{
        if(req.body.quantity){
            return    res.status(200).send('Request sent to plant');
        }
        else {
            res.status(400).send('Some Error Occured');
        }
    })
    


module.exports =supplyrouter;

