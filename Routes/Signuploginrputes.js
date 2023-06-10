const express=require("express");
const userrouter=express.Router();
const {signupmodel}=require("../Model/Signupmodel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
userrouter.post("/register",async(req,res)=>{
  const {Name,Email,Password}=req.body;
  console.log(Name,Email,Password)
  try{
    bcrypt.hash(Password,5,async(err,securepassword)=> {
      // Store hash in your password DB.
      if(err)
      {
        console.log("hii",err)
      }
      else
      {
        let postdata=new signupmodel({Name,Email,Password:securepassword})
        await postdata.save();
        console.log(postdata);
        res.send("register");
      }

  });
  }
  catch (err)
  {
console.log(err)
  }
})

userrouter.post("/login",async(req,res)=>{
  const {Email,Password}=req.body;
  try
  {
    const postdata=await signupmodel.find({Email});
    console.log("jsjsj",postdata)
    if(postdata.length>0)
    {
      bcrypt.compare(Password,postdata[0].Password, async(err, result)=> {
        // result == true
        if(result)
        {
          const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
         
          res.send({"msg":"Login ho gaya apaka","token":token,})
          userrouter.get("/profile",async(req,res)=>{
            try
            {
             
              res.send(postdata);
            }
            catch (err)
            {
              console.log(err)
            }
          })
        }
        else{
          console.log("wrong data")
        }
    });
    }
    else{
      console.log("wrong data enter")
    }
  }
  catch (err)
  {
    console.log(err)
  }
})

module.exports={
  userrouter
}