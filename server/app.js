const express=require('express');
const app=express();
const port=5000;
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/');
mongoose.connection.on('connected',()=>{
  console.log("database connected succesfully");
})

mongoose.connection.on('error',(error)=>{
  console.log("error "+error);
})
require('../models/user');
require('../models/post');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.listen(port,()=>{
  console.log("server has started on localhost:"+port);
})