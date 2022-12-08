var express=require("express")
const {signUp,getAllUser,updateUser,deteteUser} =require("../controller/controller")
const routerPost=express.Router();
routerPost.get('/',getAllUser );
routerPost.get('/add',signUp );
routerPost.get('/update/:id',updateUser );
routerPost.get('/delete/:id',deteteUser );

module.exports=routerPost