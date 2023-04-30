const mongoose=require("mongoose")
console.log(process.env.PORT);
const connectedDB=()=>{
    try{
mongoose.connect("mongodb+srv://admin:liSULS6Nw2eWYu79@cluster0.jx35bo1.mongodb.net/Blog?retryWrites=true&w=majority")
console.log("mongoDB connected")
    }catch(err){
        console.log("error",err)
    }
}
module.exports=connectedDB 