import { Axios } from "axios";
import React,{ useState } from "react";
import {Navigate, useHistory} from "react-router-dom";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import firstimage from "../layout/black.jpg";



const AddUsers = () => {
    let navigate=useNavigate();
    const [user,setUser]=useState({
        name: "",   
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users ",user)
        navigate("/Home");
        
    }
  return (
    <div className="form-1" style={{backgroundImage: `url(${firstimage})`, height:"450pt"}}>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4" style={{color:"yellow"}}>Add Students Details</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Name"
              name="name"
              value={user.name}
              autoComplete="none"
              onChange={e=> onInputChange(e)}
              
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your User Name"
              name="username"
              autoComplete="none"
              value={user.username}
              onChange={e=> onInputChange(e)}



            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your E-mail Address"
              name="email"
              autoComplete="none"
              value={user.email}
              onChange={e=> onInputChange(e)}



            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Phone Number"
              name="phone"
              autoComplete="none"
              value={user.phone}
              onChange={e=> onInputChange(e)}



            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Website Name"
              name="website"
              autoComplete="none"
              value={user.website}
              onChange={e=> onInputChange(e)}



            />
          </div>
          <button className="btn btn-primary btn-lg btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
