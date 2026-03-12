import React from "react";
 const createPost=()=>{
  return(
    <div className="card input-filled" style={{
      margin:"30px auto",
      maxWidth:"500px",
      padding:"20px",
      textAlign:"center"
    }}>
      <input type="text" placeholder="title"></input>
      <input type="text" placeholder="body"></input>
      <div className="file-filed input-field">
        <div className="button">
          <span>Upload image</span>
          <input type="file"></input>
        </div>
        <div className="file-path-wrapper">
          <input className="file-path-value" type="text"></input>
        </div>
      </div>
      <button className="waves-effect waves-light btn #64b56 blue darken-1">
        submit post
      </button>
    </div>
  );
 }
 export default createPost;