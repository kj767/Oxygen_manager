var express = require('express');
var dashboardRouter = express.Router();
var Dashboards=require('../models/dashboard');
/* GET home page. */


dashboardRouter.get('/getDashboardDetails',(req,res)=>{
  Dashboards.find()
  .then(data=>{
    res.status(200).json(data);
  })
  .catch(err=>{res.status(400).send("Error occured")});
});

module.exports = dashboardRouter;
