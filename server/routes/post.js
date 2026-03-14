const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Post = mongoose.model("Post"); //
const requireLogin=require('../middleware/requireLogin');
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"uploads/");
  },
  filename: function(req,file,cb){
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({storage});
router.get('/allpost',(req,res)=>{
  Post
  .find()
  .populate('postedBy',"_id name")
  .then(posts=>{
    res.json({posts})
  })
  .catch(err=>{
    console.log(err);
  })
})
router.post('/createpost',requireLogin,(req,res)=>{
  const {title,body,photo}=req.body;
  if(!title || !body || !photo)
  {
    return res.status(422).json({error:"please add all fields"});
  }
  req.user.password=undefined;
  const post =new Post({
    title,
    body,
     photo: req.file ? req.file.path : "no photo",
    postedBy:req.user
  })
  post.save().then(result=>{
    res.json({post:result})
  }).catch(error=>{
    console.log(error);
  })
})

router.get('/mypost',requireLogin,(req,res)=>{
  Post.find({postedBy:req.user._id})
  .populate('postedBy',"_id name")
  .then(myposts=>{
    res.json({myposts})
  })
  .catch(err=>{
    console.log(err);
  })
})
module.exports=router;