const mongoose=require("mongoose");
const signupschema=mongoose.Schema({
  Name:String,
  Email:String,
  Password:String,
})
const signupmodel=mongoose.model("Signupdata",signupschema);
module.exports={
  signupmodel
}