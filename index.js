const express = require("express");
const userRouter =require("./router/user-router")
const blogRouter =require("./router/blog-router")
const app = express();
const cors= require("cors")
var morgan = require('morgan')

app.use(morgan('tiny'))
app.use(cors());
 const Port=8080
const bosyParser=require("body-parser")
// liSULS6Nw2eWYu79
app.use(express.json({}))
app.use("/api/user",userRouter)
app.use("/api/blog",blogRouter)
//  ***connect to mongoes 
const connectedDB=require("./config/db")
connectedDB();

app.use(bosyParser.json())
// app.use(bosyParser.urlencoded({extends:false}))

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(Port,()=>{
    console.log("server running")
})