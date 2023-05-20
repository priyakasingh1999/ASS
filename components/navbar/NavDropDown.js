import React, { useState } from "react";
import { Modal,Grid,Box,Collapse} from "@mui/material";
import HAssociates from "./Pages/HAssociates";
import { createGlobalStyle } from "styled-components";
import HStationSession from "./Pages/HStationSession";
import MediaControlCard from "./Pages/HStation";
import ProjectBoard from "../../ProjectBoards/ProjectBoard";
import HProjectBoard from "./Pages/HProjectBoard";
import HmyInbox from "./Pages/HmyInbox";


const NavDropDown = ({ setDropopen,dropopen }) => {

  const [associate , setAssociate]=useState(false)
  const [station , setStation]=useState(false)
  const [session, setSession]=useState(false)
  const [projectboards, setProjectBoards]=useState(false)
  const [Email , setEmail]=useState(false)

  const CusStyle = createGlobalStyle `
  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop{
    top:60px;
  }
  
  `


  return (
    
    <Modal
      open={() => {
        setDropopen(true);
      }}
      onClose={() => {
        setDropopen(false);
      }}
      sx={{mt:"60px",width:"100%",border:"none !important"}}
    >
     
     
     <Grid container sx={{position:"relative",height:"100%",maxWidth:"1125px",mx:"auto",outline:"none !important",":focus-visible":{outline:"none !important"}}}>  <CusStyle/>
      
      <Grid item xs={3} sx={{outline:"none !important",":focus-visible":{outline:"none !important"}}}>
     
          <Box sx={{bgcolor:"#1688ca",height:"100vh",width:"100%",minWidth:"250px"}} className="position-relative">
          <div className="cusDropdown position-absolute" style={{left:0,right:0}}>
          <ul className="dropdown-menu d-block line bg-trans">
            <li onMouseEnter={()=>{setAssociate(true)}} onMouseLeave={()=>{setAssociate(false)}}>
              <div className="d-flex justify-content-center">
                <div>
                  <a href="#">
                    <img src="./img/associates.png" className="img-fluid" />
                  </a>
                </div>
  
                <div>
                  <a className="dropdown-item" href="/associates">
                    <p >Associates</p>
                  </a>
                </div>
              </div>
              <div className="count">
                <span>1</span>
              </div>
            </li>
            <li onMouseEnter={()=>{setStation(true)}} onMouseLeave={()=>{setStation(false)}}>
              <div className="d-flex justify-content-center">
                <div>
                  <a href="#">
                  <img src="img/stations.png" className="img-fluid" />
                  </a>
                </div>
  
                <div>
                <a className="dropdown-item" href="/all-stations">
                  Station Sessions
                </a>
                </div>
              </div>
  
              <div className="count">
                <span>19</span>
                <span>54</span>
              </div>
            </li>
            <li onMouseEnter={()=>{setSession(true)}} onMouseLeave={()=>{setSession(false)}}>
            <div className="d-flex justify-content-center">
                <div>
                  <a href="#">
                  <img src="img/workstation.png" className="img-fluid" />
                  </a>
                </div>
  
                <div>
                <a className="dropdown-item" href="#">
                  Stations
                </a>
                </div>
              </div>
  
              
              <div className="count">
                <span>21</span>
              </div>
            </li>
            <li onMouseEnter={()=>{setProjectBoards(true)}} onMouseLeave={()=>{setProjectBoards(false)}}>
            <div className="d-flex justify-content-center">
                <div>
                <a href="#">
                  <img src="img/stationborad.png" className="img-fluid" />
                </a>
                </div>
  
                <div>
                <a className="dropdown-item" href="/project-boards">
                  Project Boards
                </a>
                </div>
              </div>
            </li>
            <li onMouseEnter={()=>{setEmail(true)}} onMouseLeave={()=>{setEmail(false)}}>
            <div className="d-flex justify-content-center">
                <div>
                <a href="#">
                  <img src="img/emails.png" className="img-fluid" />
                </a>
                </div>
  
                <div>
                <a className="dropdown-item" href="#">
                  Emails
                </a>
                </div>
              </div>
              <div className="count">
                <span>237</span>
              </div>
            </li>
  
            <li>
            <div className="d-flex justify-content-center">
                <div>
                <a href="#">
                  <img src="img/projecttask.png" className="img-fluid" />
                </a>
                </div>
  
                <div>
                <a className="dropdown-item" href="#">
                  Project Tasks
                </a>
                </div>
              </div>
              
            </li>
          </ul>
        </div>
          </Box>

         
         
      </Grid>

      <Grid item xs={9} sx={{p:0,outline:"none !important",":focus-visible":{outline:"none !important"}}}>
        {
          associate &&
          <Box sx={{bgcolor:"#fff"}} onMouseEnter={()=>{setAssociate(true)}} onMouseLeave={()=>{setAssociate(false)}}>
            <HAssociates/>
        </Box>
        }
        {
          station &&
          <Box sx={{bgcolor:"#fff"}} onMouseEnter={()=>{setStation(true)}} onMouseLeave={()=>{setStation(false)}}>
            <HStationSession/>
        </Box>
        }
        {
          session &&
          <Box sx={{bgcolor:"#9dc3e6"}} onMouseEnter={()=>{setSession(true)}} onMouseLeave={()=>{setSession(false)}}>
            <MediaControlCard/>
        </Box>
        }
        {
          projectboards &&
          <Box sx={{bgcolor:"#9dc3e6"}} onMouseEnter={()=>{setProjectBoards(true)}} onMouseLeave={()=>{setProjectBoards(false)}}>
           <HProjectBoard/>
           
        </Box>
        }
        {
         Email &&
          <Box sx={{bgcolor:"#9dc3e6"}} onMouseEnter={()=>{setEmail(true)}} onMouseLeave={()=>{setEmail(false)}}>
           <HmyInbox/>
           
        </Box>
        }
      </Grid>
      
     </Grid>
     
    </Modal>
   
  );
};

export default NavDropDown;
