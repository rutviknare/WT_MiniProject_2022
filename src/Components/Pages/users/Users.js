import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import firstimage from "../layout/black.jpg";


const Users = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4" style={{backgroundImage: `url(${firstimage})`, height:"450pt"}}>
      <Link className="btn btn-primary" to="/Home" style={{position:"absolute",left:"100pt", width:"100pt"}}>
        back to Home
      </Link>
      <h1 className="display" style={{color:"yellow"}}>Students Personal Details</h1>
      <table  className="table table-dark" style={{position:"absolute" ,top:"40%", left:"25%", width:"40%", align:"center"}}>
  <tbody>
    <tr className="table-info">
      <th scope="row">Name:</th>
      <td>Mark</td>
    </tr>
    <tr className="table-info">
      <th scope="row">User Name:</th>
      <td>{user.name}</td>
    </tr>
    <tr className="table-info">
      <th scope="row">Email ID:</th>
      <td>{user.email}</td>
    </tr>
    <tr className="table-info">
      <th scope="row">Phone NO:</th>
      <td>{user.phone}</td>
    </tr>
    <tr className="table-info">
      <th scope="row">Website Name:</th>
      <td>{user.website}</td>
    </tr>
  </tbody>
</table>
      {/* <ul className="list-group w-50 " style={{position:"absolute", left:"24%", top:"30%"}}>
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul> */}
    </div>
  );
};

export default Users;