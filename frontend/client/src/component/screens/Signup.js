import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import m from "materialize-css"
const Signup=()=>{
  const navigate = useNavigate();
  const [name,setname]=useState("");
  const [password,setpassword]=useState("");
  const [email,setemail]=useState("");
  function Postdata(){
    if(!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email))
    {
      m.toast({html:"invalid email",classes:"#c62828 red darken-3"});
      return 
    }
    fetch("/signup",{
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res => res.json())
      .then(data => {
        if(data.error){
          m.toast({html:data.error,classes:"#c62828 red darken-3"});
        }
        else{
          m.toast({html:data.message,classes:"#43a047 green darken-1"});
          navigate('/login');
        }
        console.log(data);
      });
  }
  return(
    <div className="mycard">
      <div className="card auth-card">
        <h2 className="brand-logo">Social</h2>
         <input type="text" 
         placeholder="name" 
         value={name} 
         onChange={(e)=>{setname(e.target.value)}}>
         </input>
        <input type="text" 
        placeholder="email" 
        value={email} onChange={(e)=>{setemail(e.target.value)}}>
        </input>
        <input type="text" 
        placeholder="password" 
        value={password} onChange={(e)=>{setpassword(e.target.value)}}>
        </input>
        <a className="waves-effect waves-light btn" onClick={()=>Postdata()}>Signup</a>
        <h5>
          <Link to='/login'>already have an account</Link>
        </h5>
      </div>
  </div>
  );
}
export default Signup;