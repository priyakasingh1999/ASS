import React, { useContext, useState } from "react";
import { Authuser } from "../Context/Auth";
import "./Header.css";
import { Avatar, Typography,Collapse } from "@mui/material";
import logo from "../../img/logo.png";
import userImg from "../../img/header-station.png";
import userImg2 from "../../img/header-edit-station.png";
import userImg3 from "../.././img/john.jpg";
import { Clickcontaxt } from "../Context/DropdownData";
import NavDropDown from "./NavDropDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function NavigationNav({ user }) {
  const [dropopen , setDropopen] = useState(false)
  const { setNotifficationOpen,setColorOpen ,setAssociate} =
    useContext(Clickcontaxt);

  const { auser } = useContext(Authuser);
  console.log(user, "header");
  console.log(auser, "contect wala hai");

  return (
    <div style={{ position: "relative" }}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <li className="navbar-brand nav-item dropdown my-auto d-flex gap-2">
              <div className="d-flex gap-2 align-item-center">
                <div className="img">
                  <img src={logo} className="img-fluid pe-2" />
                </div>
                <div className="name my-auto py-auto">
                  <p className="my-auto">Programs</p>
                </div>

                <div>
                  <ArrowDropDownIcon sx={{color:"#0561a5",fontSize:"30px"}} onClick={()=>{setDropopen(!dropopen)}} />
                </div>
        
                
             
              </div>

              
               
             { dropopen &&
             
              <div>
              <NavDropDown setDropopen={setDropopen} dropopen={dropopen}/>
              </div>
              
           
             }
            </li>
            <button
              className="navbar-toggler my-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon " />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="#">
                    <Avatar
                      variant="rounded"
                      className="bg-blue p-1"
                      sx={{ width: { xs: "65px", md: "100px", lg: "110px" } }}
                    >
                      <Typography
                        sx={{ fontSize: { xs: "8px", md: "10px", lg: "13px" } }}
                        color="#fff"
                      >
                        Sign up for <br /> Free Trial Now
                      </Typography>
                    </Avatar>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" aria-current="page" href="#">
                    <Avatar
                      sx={{
                        width: { xs: "15px", md: "22px" },
                        height: { xs: "15px", md: "22px" },
                      }}
                      src={userImg}
                    />
                  </a>
                </li>
                <li className="nav-item line">
                  <a className="nav-link" aria-current="page" href="#">
                    <Avatar
                      sx={{
                        width: { xs: "15px", md: "22px" },
                        height: { xs: "15px", md: "22px" },
                      }}
                      src={userImg2}
                    />
                  </a>
                </li>
                <li className="nav-item line ">
                  <a className="nav-link" aria-current="page" href="#">
                    <Avatar
                      sx={{
                        width: { xs: "30px", sm: "40px" },
                        height: { xs: "30px", sm: "40px" },
                      }}
                      src={userImg3}
                    />
                  </a>
                </li>
                <li className="nav-item line dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    aria-current="page"
                    href="#"
                    id="John-dropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></a>
                  {/* <Avatar sx={{bgcolor:"transparent",width:"22px",height:"22px"}}> <a
              className="nav-link dropdown-toggle"
              aria-current="page"
              href="#"
              id="John-dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
                 </a></Avatar> */}
                  <ul
                    className="dropdown-menu mt-3 bg-blue"
                    aria-labelledby="John-dropdown"
                  >
                    <li>
                      <a href="/createwiki">Add / Create Articles</a>
                    </li>
                    <li>
                      <a href="/Profile">My Profile</a>
                    </li>
                    <li>
                      <a href="/inviteassociates">Invite Associates</a>
                    </li>
                    <li>
                      <a href="/admin">Admin Access</a>
                    </li>
                    <li>
                      <a href="/add-new-user">Add New User</a>
                    </li>
                    <li>
                      {/* <a href="/colorselection">Color Selection</a> */}
                      <p style={{cursor:"pointer",color:"#fff",fontSize:"14px"}}
                        onClick={() => {
                          setColorOpen(true);
                        }}
                      >
                        Color Selection
                      </p>
                    </li>
                    <li>
                      {/* <a href="/notification">Notifications</a> */}
                      <p style={{cursor:"pointer" ,color:"#fff",fontSize:"14px"}}
                        onClick={() => {
                          {
                            setNotifficationOpen(true);
                          }
                        }}
                      >
                        Notifications
                      </p>
                    </li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item line">
                  <a className="nav-link home" aria-current="page" href="#">
                    <Avatar
                      sx={{
                        bgcolor: "transparent",
                        width: { xs: "30px", md: "40px" },
                        height: { xs: "30px", md: "40px" },
                      }}
                    >
                      <i className="fa fa-home" />
                    </Avatar>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    <Avatar
                      sx={{
                        bgcolor: "transparent",
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <i className="fa fa-question-circle" />
                    </Avatar>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavigationNav;
