import React from 'react'
import firstimage from "./layout/black.jpg";
// `url(${firstimage})`
const Notfound = () => {
  const myStyle={
    backgroundImage: `url(${firstimage})`  ,
    height:'100vh',
    // marginTop:'-70px',
    // fontSize:'50px',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
};
  return (
    <div>
      <div style={myStyle}>
        <h1 style={{color:"white", fontFamily:"fantasy", fontSize:"80pt", position:"absolute", top:"40%", left:"3%"}}> Welcome To Web Technology Mini-Project</h1>
      </div>
      {/* <img src={firstimage} style={{width:"100%", height:"100%"}} alt='first image'/> */}
      
    </div>
  )
}

export default Notfound
