const express=require("express");
const app=express();
var cors = require('cors')
app.use(cors({
  origin:"*"
}))
app.use(express.json());
const {connection} =require("./Config/db")
const {userrouter}=require("./Routes/Signuploginrputes");
const {  emirouter } = require("./Routes/Emirouter");
app.get("/",async(req,res)=>{
  res.send("welcome")
})
app.use("/user",userrouter)
app.use("/data",emirouter)
app.listen(8080,async()=>{
try
{
  await connection
  console.log("connected to db");
}
catch (err)
{
console.log("kuch probel h ji");
console.log(err)
}
console.log("port 8080 kaam kar raha h");
})