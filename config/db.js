const mongoose=require("mongoose")

const connectedDB=()=>{
    try{
mongoose.connect("mongodb+srv://admin:liSULS6Nw2eWYu79@cluster0.jx35bo1.mongodb.net/Blog?retryWrites=true&w=majority")

    }catch(err){
        console.log("error",err)
    }
}
module.exports=connectedDB 