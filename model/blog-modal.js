const mongoose=require("mongoose")
const blogSchema= new mongoose.Schema({
title:{
    type:String,
    require:true,

},
description:{
    type:String,
    require:true,
},
image:{
    type:String,
},
user:{
    type:mongoose.Types.ObjectId, ref:"User",require:true
}
})

module.exports=mongoose.model("Blog",blogSchema)