import React from "react";
import {Link} from 'react-router-dom';
const Signup=()=>{
  return(
    <div className="mycard">
      <div className="card auth-card">
        <h2 className="brand-logo">Social</h2>
         <input type="text" placeholder="name"></input>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <a className="waves-effect waves-light btn">Login In</a>
        <h5>
          <Link to='/login'>already have an account</Link>
        </h5>
      </div>
  </div>
  );
}
export default Signup;