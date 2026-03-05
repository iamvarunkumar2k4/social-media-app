const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model("User");
const bcrypt=require('bcrypt');

router.get('/',(req,res)=>{
  res.send("hello")
})
router.post('/signup',(req,res)=>{
  const {name,email,password}=req.body;
  if(!email || !password || !name)
  {
    res.status(422).json({error:"please add all the fields"});
  }
  User.findOne({email:email}).then((saveduser)=>{
    if(saveduser){
      res.status(422).json({error:"user already existed"});
    }
    bcrypt.hash(password,12)
    .then(hashedpassword=>{
      console.log(hashedpassword);
        const user=new User({
        email,
        name,
        password:hashedpassword.toString()
      })
      user.save().then(user=>{
      res.json({message:"saved successfully"})
      })
      .catch(error=>{
        console.log(error);
      })
    })
    .catch(error=>{
      console.log(error);
    })
  })
})
module.exports=router;