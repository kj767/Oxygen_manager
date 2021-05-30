const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const supplyOut=new Schema({
    state:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
    },
    quantity:{
        type:Number,
        min:0
    },
    center:{
        type:String,
        required:true
    },
    incharge:{
        type:String
    },
    contact:{
        type:String
    }

},{timestamps:true});

module.exports =mongoose.model('supplyOut',supplyOut);