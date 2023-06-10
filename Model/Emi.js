const mongoose=require("mongoose");
const emischema=mongoose.Schema({
  Loanamount:Number,
  Annualrate:Number,
  Tenure:Number
})
const emimodel=mongoose.model("Emi",emischema);
module.exports={
  emimodel
}