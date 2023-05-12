import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  ImageList,
  ImageListItem, Typography,Stack
} from "@mui/material";

import InfoSubHead from "../GlobalComponent/InfoSubHead";
import MenuIcon from "@mui/icons-material/Menu";
import DropDown from "../GlobalComponent/DropDown";
import { Link } from "react-router-dom";




const ArchivedBoard = () => {
  const [showDropdown, setDropdown] = useState(false);
  
  return (
    <>
      
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Grid container sx={{justifyContent:"center",px:2}}>
          <Grid item xs={12} sx={{ position: "relative" }}>
            <InfoSubHead
              name="Archived Project Boards"
              backgroundColor={"#1688ca"}
              color={"#fff"}
              urlname1={<MenuIcon onClick={() => setDropdown(!showDropdown)} />}
              
            />
            {showDropdown && 
            <Box>
            <DropDown
             bgcolor={"#1280c2"} 
             top={"43px"} 
             
              
              name1={<Link to="/project-boards" style={{color:"#fff"}}><Typography sx={{fontSize:"14px"}} > Project Boards</Typography></Link>} 
             display2={"none"}
             display3={"none"}
             display4={"none"}
             display5={"none"}
              color="#fff"
              maxWidth={135}
              />
              
             
              </Box>
              }
          </Grid>

          <Grid container sx={{justifyContent:"center",mt:1}}>
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ArchivedBoard;
