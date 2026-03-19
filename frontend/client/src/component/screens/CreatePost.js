import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom';
import m from "materialize-css"

const CreatePost=()=>{
  const navigate=useNavigate();
  const [title,settitle]=useState("");
  const [body,setbody]=useState("");
  const [photo,setphoto]=useState("");
  const postDetails=()=>{
    const data=new FormData();
    data.append("file",photo);
    data.append("upload_preset","insta-clone");
    data.append("clous_name","derfoal4d");
    fetch("https://api.cloudinary.com/v1_1/derfoal4d/image/upload",{
      method:"post",
      body:data
    })
    .then(res => res.json())
    .then(result => {
      const imageUrl = result.url;

      return fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          title,
          body,
          photo: imageUrl
        })
      });
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        m.toast({ html: data.error, classes: "#c62828 red darken-3" });
      } else {
        m.toast({ html: "Post created successfully", classes: "#43a047 green darken-1" });
        navigate("/");
      }
    })
    .catch(err => console.log(err));
};
  return(
    <div className="card input-filled" style={{
      margin:"30px auto",
      maxWidth:"500px",
      padding:"20px",
      textAlign:"center"
    }}>
      <input type="text" 
      placeholder="title"
       value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
      <input type="text" placeholder="body"  value={body} onChange={(e)=>{setbody(e.target.value)}}></input>
      <div className="file-filed input-field">
        <div className="button">
          <span>Upload image</span>
          <input type="file" onChange={(e)=>{setphoto(e.target.files[0])}}></input>
        </div>
        <div className="file-path-wrapper">
          <input className="file-path-value" type="text"></input>
        </div>
      </div>
      <button className="waves-effect waves-light btn #64b56 blue darken-1" onClick={()=>postDetails()}>
        submit post
      </button>
    </div>
  );
 }
 export default CreatePost;