import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthService from "../Services/auth-service";
import Logo from "../Media/logo.png";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import BoardUser from "./BoardUser";
import AdminBoard from "./AdminBoard";
import AboutUs from "./AboutUs";
import Bookings from "./ContactUs";


const Navbar = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
      <div className="row">
        <div className="col-sm-3">
          <Link to={"/home"} className="navbar-brand" aria-label="Front">
            <img className="w-75"src={Logo} alt="Logo"></img>
          </Link>
        </div>
        <div className="col-sm-2">
            {/* free area */}
        </div>

        <div className="col-sm-7">
          <div className="row">
            <div className="col-sm-3">

            </div>
            {/* <div className="col-sm-1">
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to={"/home"} style={{"padding-block":"30px"}} className="nav-link">
                Home
                </Link>
                </li>
            </div>
            </div> */}
           
            {/* <div className="col-sm-1">
              {currentUser && (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/user"} style={{"padding-block":"30px"}} className="nav-link">
                    User
                  </Link>
                </li>
                </div>
              )}
            </div> */}
            <div className="col-sm-3"></div>
            <div className="col-sm-1">
              {/* <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/aboutus"} style={{"padding-block":"30px"}} className="nav-link">
                    About
                  </Link>
                </li>
              </div> */}
            </div>

            <div className="col-sm-4">
              {currentUser ? (
                <div className="row">
                    <div className="col-sm-3">
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link to={"/about"} style={{"padding-block":"30px"}} className="nav-link">
                        About
                    </Link>
                    </li>
                </div>
                  </div>

                  <div className="col-sm-3">
                        {currentUser.roles=="ROLE_ADMIN"? 
                    <div>
                    {showAdminBoard && (
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to={"/booking"} style={{"padding-block":"30px"}} className="nav-link">
                            Bookings
                          </Link>
                        </li>
                        </div>
                      )} </div>
                            :
                            <div className="col-sm-3">
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <Link to={"/contact"} style={{"padding-block":"30px"}} className="nav-link">
                                    Book
                                </Link>
                                </li>
                            </div>
                            </div>
                        }

                         
                  </div>


                 
                  <div className="col-sm-3">
                        {currentUser.roles=="ROLE_ADMIN"? 
                    <div>
                    {showAdminBoard && (
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to={"/admin"} style={{"padding-block":"30px"}} className="nav-link">
                            Admin
                          </Link>
                        </li>
                        </div>
                      )} </div>
                            :
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                        {/* <Link to={"/home"} style={{"padding-block":"30px"}} className="nav-link">{currentUser.username}</Link> */}
                        <Link to={"/home"} style={{"padding-block":"30px"}} className="nav-link">Home</Link>

                        </li>
                        </div>
                        }

                         
                  </div>
                  <div className="col-sm-3">
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a style={{"padding-block":"30px"}} href="/login" className="nav-link" onClick={logOut}>
                        Logout
                      </a>
                    </li>
                    </div>
                  </div>
                </div>
                                
              ) : (
                <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/about"} style={{"padding-block":"30px"}} className="nav-link">
                    About
                  </Link>
                </li>
              </div>
                </div>
                <div className="col-sm-4">
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} style={{"padding-block":"30px"}} className="nav-link">
                      Login
                    </Link>
                  </li>
                </div>
                </div>
                </div>
              )}
            </div>
          </div>
          
          {/* {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
              Moderator Board
              </Link>
            </li>
          )}*/}
        </div>
      </div>
      </nav>
      
    </div>
  );
};

export default Navbar;