const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:Number,required:true,minlength:6}

});
module.exports=mongoose.model("user",userschema)