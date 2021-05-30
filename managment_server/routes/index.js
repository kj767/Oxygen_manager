var express = require('express');
var router = express.Router();
var Dashboard=require('../models/dashboard');
var interState=require('../models/interstate');
const stateData=require('../models/state');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/transferOxygen',(req,res)=>{
console.log(req.body);
  interState.create(req.body)
  .then((body)=>{
    
  })
  .catch(err=>{res.status(400).json({error:err})});
 stateData.find({name:req.body.from})
 .then((statefrom)=>{
   console.log(statefrom);
  const favailable=statefrom[0].available-req.body.quantity;
  console.log(req.body.quantity);
  statefrom[0].available=favailable;
    statefrom[0].save()
    .then(fromdata=>{
      console.log(fromdata);
    
     });     
    })
    .catch(err=>{res.status(400).send('An Error Occoured')});
    stateData.find({name:req.body.to})
    .then((stateto)=>{
       console.log(stateto);
      const favailable=stateto[0].available+req.body.quantity;
      console.log(favailable);
      stateto[0].available=favailable;
      stateto[0].save()
      .then(todata=>{
        console.log(todata);
        res.status(200).json({success:'true'});
                
      })
      .catch(err=>{res.status(400).send('error occured in todata')});
    })
    .catch(err=>{res.status(400).send(err)});
 });
 
 

module.exports = router;
