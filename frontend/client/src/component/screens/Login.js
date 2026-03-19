import React,{useState,useContext} from "react";
import {Link,useNavigate} from 'react-router-dom';
import m from "materialize-css"
import {UserContext} from '../../App'
const Login=()=>{
  const {state,dispatch}=useContext(UserContext);
  const navigate = useNavigate();
  const [password,setpassword]=useState("");
  const [email,setemail]=useState("");
  function Postdata(){
    if(!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email))
    {
      m.toast({html:"invalid email",classes:"#c62828 red darken-3"});
      return 
    }
    fetch("/signin",{
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
      .then(data => {
        if(data.error){
          m.toast({html:data.error,classes:"#c62828 red darken-3"});
        }
        else{
          localStorage.setItem("jwt",data.token);
          localStorage.setItem("user",JSON.stringify(data.user));
          dispatch({type:"USER",payload:data.user});
          m.toast({html:"signedin success",classes:"#43a047 green darken-1"});
          navigate('/');
        }
        console.log(data);
      }).catch(error=>{
        console.log(error);
      })
  }
  return(
    <div className="mycard">
      <div className="card auth-card">
        <h2 className="brand-logo">Social</h2>
        <input type="text" 
        placeholder="email" 
        value={email} onChange={(e)=>{setemail(e.target.value)}}>
        </input>
        <input type="text" 
        placeholder="password" 
        value={password} onChange={(e)=>{setpassword(e.target.value)}}>
        </input>
        <a className="waves-effect waves-light btn" onClick={()=>Postdata()}>Login In</a>
        <h5>
          <Link to='/signup'>do not have an account</Link>
        </h5>
      </div>
  </div>
  )
}
export default Login;