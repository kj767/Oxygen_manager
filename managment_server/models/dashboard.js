const mongoose=require('mongoose');

const Schema=mongoose.Schema;

var dashboardSchema=new Schema({
    available:{
        type:Number
    },
    allocated:{
        type:Number
    },
    requirment :{
        type:Number
    },
    inprocess:{
        type:Number
    }
},{
    timestamps: true
});

module.exports =dashboards=mongoose.model('dasboard',dashboardSchema);
