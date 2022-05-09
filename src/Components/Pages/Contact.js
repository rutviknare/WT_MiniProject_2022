import React from 'react'
import firstimage from "./layout/black.jpg";
import html from "./layout/html.png";
import css from "./layout/css.png";
import js from "./layout/js.png";
import react from "./layout/react.png";
import nodejs from "./layout/nodejs.png";
import npm from "./layout/npm.png";




const Contact = () => {
  return (
    // <div style={{backgroundColor:"grey", width:"100%"}}>
    <div className='py-4' style={{backgroundImage: `url(${firstimage})`, height:"450pt"}}>
    <h1 style={{color:"yellow" , fontFamily:"fantasy"}}>Technology Used</h1>     
    <img src={html} alt="html" style={{position:"absolute",left:"50pt", width:"200pt"}}/> 
    <img src={css} alt="html" style={{position:"absolute",left:"70pt", top:"350pt", width:"150pt"}}/> 
    <img src={js} alt="html" style={{position:"absolute",left:"400pt", top:"160pt", width:"150pt"}}/>
    <img src={react} alt="html" style={{position:"absolute",left:"400pt", top:"350pt", width:"150pt"}}/>
    <img src={nodejs} alt="html" style={{position:"absolute",left:"710pt", top:"130pt", width:"230pt"}}/>                          
    <img src={npm} alt="html" style={{position:"absolute",left:"710pt", top:"370pt", width:"230pt"}}/>                          

                          
                         
                         
</div>
                                
    // </div>
  )
}

export default Contact
