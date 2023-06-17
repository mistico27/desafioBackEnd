const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema(
{
    userId:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
        min:10,
        max:20,
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type:String,
    },
    likes:{
        type:Array,
        default:[],
    },
    saves:{
        type:Array,
        default:[],
    },
},  
    {timestamps:true}
);

module.exports=mongoose.model("post",PostSchema,"post");