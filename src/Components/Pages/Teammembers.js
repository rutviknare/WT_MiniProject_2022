import React from 'react'
import firstimage from "./layout/black.jpg";


const Teammembers = () => {
  return (
    <div className='py-4' style={{backgroundImage: `url(${firstimage})`, height:"450pt"}}>
    <h1 style={{color:"yellow", fontFamily:"fantasy"}}>Team Members Details</h1>  
    <table class="table table-striped table-dark" align="center" style={{width:"80%", align:"center"}}>
  <thead>
    <tr>
      <th scope="col">Roll No</th>
      <th scope="col">Student Name</th>
      <th scope="col">Division</th>
      <th scope="col">Mobile No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">TECOC362</th>
      <td>Avadhut Joshi</td>
      <td>C</td>
      <td>8380995879</td>
    </tr>
    <tr>
      <th scope="row">TECOC368</th>
      <td>Lalit Shirsath</td>
      <td>C</td>
      <td>7498041827</td>
    </tr>
    <tr>
      <th scope="row">TECOC375</th>
      <td>Rutvik Nare</td>
      <td>C</td>
      <td>9881439608</td>
    </tr>
  </tbody>
</table>                              
</div>
  )
}

export default Teammembers
