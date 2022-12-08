const express = require("express");
const router =require("./router/router")
const app = express();
 const Port=8080
const bosyParser=require("body-parser")
// liSULS6Nw2eWYu79
//  ***connect to mongoes 
app.use(express.json({}))
app.use("/api/user",router)
const connectedDB=require("./config/db")
connectedDB();

const user=require("./router/router")
app.use(bosyParser.json())
// app.use(bosyParser.urlencoded({extends:false}))

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(Port,()=>{
    console.log("server running")
})