const mongoose = require('mongoose');
const UsersChema = new mongoose.Schema({
    username:{

        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 100
      },
    email:{
        type: String,
        match:/^.*@.*\..*$/,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        minlength: 10,
        maxlength: 100,
        required:true,
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