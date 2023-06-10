var jwt = require('jsonwebtoken');
const auth=(req,res,next)=>{
  const token=req.headers.authorization;
  console.log(token);
  if(token)
  {
    const decoded=jwt.verify(token,'shhhhh');
  if(decoded)
{
  next();
} 
else
{
  res.send("please login first jii")
}
}
else
{
  res.send("phale login karo aap");
}
}
module.exports={
  auth
}