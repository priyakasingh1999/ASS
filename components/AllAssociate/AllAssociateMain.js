import React from "react";
import {
  Modal,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import AssociateData from "./AllAssociateData";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
    
};

const CusStyle = createGlobalStyle`
  .allassociate_box:hover .content{
    visibility: hidden;
  }
  `;
const AllAssociateMain = () => {
  

  return (
    <>
     
        <Container   sx={style} >
           
          <Grid container sx={{ bgcolor: "#fff",maxWidth:"800px",padding:"25px",position:"relative"}}>
          <Box sx={{position:"absolute",top:"0",right:"0"}}><HighlightOffIcon/></Box>
            {AssociateData.map((data) => {
              const { id, imgUrl, name, profileName } = data;
              return (
                <Grid item xs={6} sm={6} md={3} key={id} sx={{mb:1}}>
                  <Box
                    className="allassociate_box"
                    sx={{
                      ":hover": { border: "8px solid #52c0ea", transition:"all .4s", },
                      border: "8px solid transparent",
                      textAlign: "center",
                      padding: "20px",
                      transition:"all .4s"
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Avatar
                        src={imgUrl}
                        sx={{ width: "80px", height: "80px" }}
                      />
                    </Box>
                    <Box className="content">
                      <Typography sx={{fontSize:"13px",fontWeight:"bold"}}>{name}</Typography>
                      <Typography sx={{fontSize:"13px"}}>{profileName}</Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
     
    </>
  );
};

export default AllAssociateMain;
