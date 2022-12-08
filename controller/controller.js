const user=require('../model/model')
const signUp=async(req,res,next)=>{
    const {name,email,password}=req.body;
    let existingUser;
try{   
    existingUser=await user.findOne({email});
    if(!existingUser){
               const user=await new user({
            name,email,password,blogs:[]
                }).save()
        return res.json({
           error:false,
           message:"successfully",
           data:user,
        })
    }
    
}catch(error){
    console.log(error)
}
}
const getAllUser=async(req,res,next)=>{
    let users;
    try{  
         users= await user.find({})

   return  res.json({
       error:false,
       message:"succesfuly",
       data:users
    })
}catch(error){
        console.log(error,"dada")
        return  res.json({
            error:true,
            message:"no user found",
           
         })
    }
}

const updateUser=(req,res)=>{
try{
    console.log("jjg")
    res.send("updaete user")

}catch(error){
    console.log(error,"datta")
}
}
const deteteUser =(req,res)=>{
    try{
        console.log("jjg")
        res.send("delete user")
    }catch(error){
        console.log(error,"datta")
    }
}
module.exports={signUp,getAllUser,updateUser,deteteUser}