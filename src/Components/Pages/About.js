import React from 'react'
import firstimage from "./layout/black.jpg";


const About = () => {
  return (
        <div className='py-4' style={{backgroundImage: `url(${firstimage})`, height:"450pt"}}>
            <h1 style={{color:"yellow" , fontFamily:"fantasy"}}>About Project</h1>                                
    </div>
  )
}

export default About
