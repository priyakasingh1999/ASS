import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextareaAutosize,
  InputBase,
} from "@mui/material";
import { Link } from "react-router-dom";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";

const SFStatement = ({setSFSopen,SFSopen}) => {
  


  return (
    <>

        <Grid container sx={{justifyContent:"center",minWidth:{lg:"600px",xs:"300px",sm:"500px"}}}>
         
          <Grid item xs={12}>
           
                <InfoSubHead urlname1={"Station Focus Statement"} urlname={<Typography onClick={()=>{setSFSopen(false)}}>X</Typography>} backgroundColor={"#1688ca"}
              color={"#fff"}/>
           
            <Box sx={{bgcolor:"#fff",p:2}}>
            <Box sx={{py:1}}>
                <TextareaAutosize value={"Our team works with all hospital departments on IT needs. We plan for the future with integration"} className="form-control"/>
            </Box>
            <Box sx={{textAlign:"center"}}>
                <Button className="btn btn-primary">Submit</Button>
            </Box>
            </Box>
          </Grid>
          
        </Grid>
     
    </>
  );
};

export default SFStatement;
