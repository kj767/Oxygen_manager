const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const stateSchema=new Schema({
    name:{
        type:String,
        required: true
    },
    allocated:{
        type:Number,
        min:0,
        default:0
    },
    available:{
        type:Number,
        min:0,
        default:0
    }
},{
    timestamps:true
});

const stateData =mongoose.model('statedatas',stateSchema);

module.exports =stateData;