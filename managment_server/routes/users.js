const { useRadioGroup } = require('@material-ui/core');
const e = require('express');
var express = require('express');
const Users = require('../models/User');
var router = express.Router();
const config=require('../config');
const jwt=require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',(req,res)=>{
      console.log(req.body);
      if(req.body.email && req.body.password){
      Users.findOne({email:req.body.email}) 
      .then((user)=>{
        if(user){
          res.statusCode=400;
          res.json('User Already Exits');
        }
        else {
          Users.create(req.body)
          .then((user)=>{
            res.statusCode=201;
            res.json({success:true, user:user});
          })
          .catch(err=>{res.statusCode=400; res.send(err)});
        }
      });
      }
      else{
        res.status(400);
        res.json({error:"Please enter proper fields"});
      }
});

router.post('/login',(req,res)=>{
  Users.findOne({email:req.body.email})
  .then((user)=>{
    if(!user){
      return res.status(404).json({error:"Please enter proper fields"});
    }
    else if(req.body.password===user.password){
      jwt.sign(
        {_id: user._id},
        config.secretOrKey,
        {expiresIn:3600},
        (err,token)=>{
         return res.json({success:true,token:'Bearer '+token,user:user});
        });
      
    }
    else {
      res.json({error:"Please enter proper fields"});
    }
  })
});
module.exports = router;
