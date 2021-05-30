const mongoose =require('mongoose');

const Schema =mongoose.Schema;

interState=new Schema({
    from :{
        type:String,
        required:true
    },
    to:{
        type: String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:0
    }
},{timestamps:true});

module.exports =mongoose.model('interStates',interState);