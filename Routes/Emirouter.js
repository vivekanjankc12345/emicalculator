const express=require("express");
const {emimodel}=require("../Model/Emi")
const emirouter=express.Router();
emirouter.get("/emidata",async(req,res)=>{
  try
  {
    const que= { Loanamount,Annualrate,Tenure}=req.body;
   const get=await emimodel.find(que)
 
  let emi;
  let interest;
  let payment;
  let r=Annualrate/12/100;
  let t=Tenure*12;
  console.log(r,t,Loanamount)
  emi = Loanamount*r *( 1 + r )*t/ ( ( 1 + r )*t - 1 ) ;
  interest=Loanamount-emi;
payment=Loanamount+emi;
res.send({"emi":emi,"interest":interest,"payment":payment})
  }
  catch (err)
  {
 console.log(err)
  }
})
emirouter.post("/emidata",async(req,res)=>{
  const payload=req.body;
  console.log(payload)
  try{
    const post=new emimodel(payload)
    await post.save();
    res.send("data add ho gaya h apka");
  }
  catch (err)
  {
    console.log(err)
  }
})
module.exports={
  emirouter
}