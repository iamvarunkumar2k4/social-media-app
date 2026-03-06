const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const requireLogin=require('../middleware/requireLogin');

router.post('/createpost',requireLogin,(req,res)=>{
  const {title,body}=req.body;
  if(!title || !body)
  {
    return res.status(422).json({error:"please add all fields"});
  }
  console.log(req.user);
  res.send("ok");
})

module.exports=router;