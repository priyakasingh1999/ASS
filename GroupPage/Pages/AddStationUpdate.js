import React from "react";
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

const AddStationUpdate = ({setAddStationUpdate}) => {
  return (
    <>

        <Grid container sx={{justifyContent:"center",minWidth:{lg:"600px",xs:"300px",sm:"500px"}}}>
         
          <Grid item xs={12}>
           
                <InfoSubHead urlname1={"Add Station Updates"} urlname={<Typography onClick={()=>{setAddStationUpdate(false)}}>X</Typography>} backgroundColor={"#1688ca"}
              color={"#fff"}/>
           
            <Box sx={{bgcolor:"#fff",p:2}}>
            <Box sx={{py:1}}>
                <TextareaAutosize value={""} className="form-control"/>
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

export default AddStationUpdate;
