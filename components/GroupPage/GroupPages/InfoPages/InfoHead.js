import { Avatar, Box, Container, Grid, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Icon from "./Icon";



const name = ["Information Technology"];

const InfoHead = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: "#1688ca", color: "#fff" }}
      >
        <Grid container>
          <Grid item xs={2} sx={{my:"auto"}}>
           <Avatar sx={{backgroundColor:"#000", color:"#fff",width:"20px",height:"20px",fontSize:"10px"}}>SS</Avatar>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ textAlign: "center",py:1 }}>
              <Typography sx={{fontSize:{xs:"14px",md:"16px",lg:"18px"}}}>{name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "end",
                alignItems: "center",
                height: "100%",
              }}
            >
                
                <Avatar sx={{backgroundColor:"#000", color:"#fff",width:"18px",height:"18px"}}> 
                <ChevronRightIcon sx={{fontSize:"17px"}}/>
                 </Avatar>
                <Avatar sx={{backgroundColor:"#000", color:"#fff",width:"18px",height:"18px"}}> 
                <KeyboardArrowLeftIcon sx={{fontSize:"17px"}}/> 
                </Avatar>
                <Tooltip title="Station Stats">
                <Avatar  sx={{width:"20px",height:"20px", backgroundColor:"transparent"}}><ArrowDropDownIcon/></Avatar>
                </Tooltip>
                <Tooltip >
                <Avatar  sx={{width:"20px",height:"20px", backgroundColor:"transparent"}}><ArrowDropDownIcon/></Avatar>
                </Tooltip>
                
              
             
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InfoHead;
