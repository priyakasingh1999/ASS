import React from "react";
import {
  Stack,
  Grid,
  Box,
  Typography,
  InputBase
} from "@mui/material";

import InfoSubHead from "../../GlobalComponent/InfoSubHead";



const data = [
  { id: 1, name: "Add Your Project Name",visit:1},
  { id: 2, name: "Add Your Project Name",visit:6},
  { id: 3, name: "Add Your Project Name",visit:7},
  { id: 4, name: "Add Your Project Name",visit:0},
  { id: 5, name: "Add Your Project Name",visit:1},
  { id: 6, name: "Add Your Project Name",visit:3},
  { id: 7, name: "Add Your Project Name",visit:5},
  { id: 8, name: "Add Your Project Name",visit:2},
  { id: 9, name: "Add Your Project Name",visit:4},
  { id: 10, name: "Add Your Project Name",visit:6},
  { id: 11, name: "Add Your Project Name",visit:9},
  { id: 11, name: "Add Your Project Name",visit:7}
];

const BrowserProjectBoard = ({setBPBoard}) => {
  return (
    <>
      <Box sx={{minWidth:"390px",boxShadow:24}}>
        <Box>
            <InfoSubHead name={<Typography sx={{fontSize:"13px"}}>BROWSE PROJECT BOARDS</Typography>} urlname={<Typography onClick={()=>{setBPBoard(false)}}>X</Typography>}  backgroundColor={"#1688ca"}
              color={"#fff"}/>
        </Box>
        <Box sx={{bgcolor:"#fff"}}>
            <Box sx={{display:"flex",justifyContent:"right",p:1}}>
            <Box sx={{maxWidth:"100px"}}>
                <InputBase size="small" className="p-1 border rounded"/>
            </Box>
            </Box>
            <Grid container sx={{bgcolor:"#d2dee8",p:1}}>
                <Grid item xs={6}>
                    <Box>
                    <Box><Typography sx={{fontSize:"13px",color:"#1688ca",fontWeight:"bold"}}>TITLE OF PROJECT BOARD</Typography></Box>
                <Box></Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{textAlign:"right"}}>
                    <Box>
                    <Box></Box>
                <Box><Typography sx={{fontSize:"13px",color:"#1688ca",fontWeight:"bold"}}>VISITS</Typography></Box>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{px:1}}>
        {data.map((data) => {
            const {id,name,visit}=data
          return (
            <Grid container key={id} sx={{justifyContent:"center",alignItems:"center"}}>
              <Grid item xs={6}>
                <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"#000",cursor:"pointer",":hover":{textDecoration:"underline",color:"#23527c"}}}>{name}</Typography>
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right",pr:2}}>
                <Box>
                    {visit}
                </Box>
              </Grid>
            </Grid>
          );
        })}
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default BrowserProjectBoard;
