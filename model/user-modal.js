const mongoose=require('mongoose')
const userschema= new mongoose.Schema({
    name:{type:String,required:true,},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    blog:[{type:mongoose.Types.ObjectId, ref:"Blog",require:true}],
})

module.exports=mongoose.model("User",userschema)

