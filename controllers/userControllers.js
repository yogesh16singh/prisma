const client = require("../prisma/index");
const cookieToken=require("../utils/cookieToken");

//user signup

exports.signup=async(req,res,next)=>{
try{
const {name,email,password}=req.body;
if(!name || !email || !password)
{
    throw new Error("Please Enter all fields")
}
const user = await client.user.create({
data:{
name,
email,
password
}
})
console.log(user);
cookieToken(user,res)
}
catch(error){
//  throw new Error(error)  
console.log(error); 
}
}