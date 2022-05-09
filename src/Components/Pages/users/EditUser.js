import { Axios } from "axios";
import React,{ useState, useEffect } from "react";
import {Navigate, useHistory } from "react-router-dom";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';


const EditUser = () => {
    let navigate=useNavigate();
    const {id}= useParams();
    //alert(id);  
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

    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit= async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user)
        navigate("/Home");
        
    }
    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:3003/users/${id}`);
        //console.log(result);
            setUser(result.data);
    }
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Edit Students Details</h2>
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
        <button className="btn btn-warning btn-lg btn-block">Update Details</button>
      </form>
    </div>
  </div>
  )
}

export default EditUser
