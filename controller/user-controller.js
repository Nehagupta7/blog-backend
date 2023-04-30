const User=require('../model/user-modal');
const bcrypt=require("bcryptjs")
const signUp=async(req,res,next)=>{
    const {name,email,password}=req.body;
    let existingUser;
try{   
    existingUser=await User.findOne({email});
    const hashPassword= bcrypt.hashSync(password)
    if(!existingUser){
            const NewUser=await new User({
            name,email,password:hashPassword,blogs:[]
                }).save()
        return res.json({
           error:false,
           message:"Sign Up User Successfully",
           data:NewUser,
        })
    }else{
        return        res.status(400).json({
            error:true,
            message:"User Already Exists! Login Instead" 
        })
    }
    
}catch(error){
    console.log(error)
}
}

const loginUser =async (req,res,next)=>{
    const {email,password}=req.body;

    let userExist= await User.findOne({email});
console.log(userExist,"userExist")
    try{
if(userExist){
    const PasswordMatch= await bcrypt.compareSync(password,userExist.password)
    if(PasswordMatch){
  
    return res.json({
        error:false,
        message: `Welcome to the Blog ${userExist.name}`,
        data:userExist 
    }) }else{
        return res.status(400).json({
            error:true,
            message: `Password not Matched`
        })
    }
}else{
    return res.status(400).json({
        error:true,
        message: "Could not find user by this Email"
    })
}
    }catch(error){
console.log("error==>",error)
    }
}
const getAllUser=async(req,res,next)=>{
    let users;
    try{  
         users= await User.find({})

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
module.exports={signUp,loginUser,getAllUser,updateUser,deteteUser}