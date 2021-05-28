const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const supplyInSchema=new Schema({
    oxygen_plant:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        min:0,
        required: true
    },
    date:{
        type:Date,
        required:true,

    },
    center:{
        type:String,
        required: true
    },
    incharge:{
        type:String
    },
    contact :{
        type:String,
        min:0
    }
},{timestamps:true});

module.exports =supplyIn =mongoose.model('suppyIns',supplyInSchema);
