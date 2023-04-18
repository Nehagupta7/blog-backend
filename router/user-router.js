var express=require("express")
const {signUp,loginUser,getAllUser,updateUser,deteteUser} =require("../controller/user-controller")
const userRouter=express.Router();
userRouter.get('/',getAllUser );
userRouter.post('/signup',signUp );
userRouter.post('/signin',loginUser );
userRouter.get('/update/:id',updateUser );
userRouter.get('/delete/:id',deteteUser );

module.exports=userRouter