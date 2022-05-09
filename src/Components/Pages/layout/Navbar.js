import React from "react";
import { Link, NavLink, Routes } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg py-3 navbar-yellow bg-primary">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/firstpage" style={{fontSize:"15pt", color:"yellow"}}>
                Students Database
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-link " aria-current="page" to="/Home">
                    Student Details
                  </NavLink>
                  <NavLink className="nav-link" to="/Contact">
                    Technology Stack
                  </NavLink>
                  <NavLink className="nav-link" to="/About">
                    About Project
                  </NavLink>
                  <NavLink className="nav-link" to="/Teammembers">
                    Team Members
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
          <Link className="btn btn-outline-light" to="/users/Add" >Add Students details</Link>
        </div>
        
      </nav>
    </div>
  );
};

export default navbar;
