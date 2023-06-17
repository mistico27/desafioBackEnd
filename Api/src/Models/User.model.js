const mongoose = require('mongoose');
const UsersChema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:10,
        max:20,
    },
    age: {
        type: Number,
        min: 18,
        max: 100
      },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[],
    },
    followins:{
        type:Array,
        default:[],
    },

    desc:{
        type:String,
        max:50,
    },
    gender:{
        type:Number,
        enum:[1,2,3],
    },
},
{timestamps:true}
);


module.exports=mongoose.model("userDesafio",UsersChema,"userDesafio");