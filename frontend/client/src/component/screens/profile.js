import React from "react";
const Profile=()=>{
  return(
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid black"}}>
        <div>
          <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D">
          </img>
        </div>
        <div style={{ width: "60%" }}>
          <h4>Varun</h4>
          <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
            <h5>40 post</h5>
            <h5>40 followers</h5>
            <h5>40 following</h5>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img className="Item"src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D">
        </img>
        <img className="Item"src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D">
        </img>
        <img className="Item"src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D">
        </img>
        <img className="Item"src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D">
        </img>
        <img className="Item"src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D">
        </img>
      </div>
    </div>
  );
}
export default Profile;