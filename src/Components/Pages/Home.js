import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import firstimage from "./layout/black.jpg";


import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadusers();
  };
  return (
    <div style={{backgroundImage: `url(${firstimage})`, height:"450pt"}}>
      <div className="py-4" >
        <h1 style={{fontFamily:"fantasy", color:"yellow"}}>Student Details</h1>
        <table align="center" className="table table-success table-dark border shadow" style={{width:"80%"}}>
          <thead>
            <tr >
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((user, index )=>(
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
        
                  <Link className="btn btn-primary" to={`/users/${user.id}`}>View</Link>
                  <Link className="btn mr-2 btn-outline-primary" to={`/users/Edit/${user.id}`}>Edit</Link>
                  <Link className="btn mr-2 btn-danger" to="" onClick={()=>deleteUser(user.id)}>Delete</Link>

                  </td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
