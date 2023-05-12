import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Divider, List, Typography } from '@mui/material';
import { Collapse } from '@mui/material';
import {Link} from 'react-router-dom'

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function SimpleCollapse({setChecked,checked}) {
 

  return (
    
     
     
    <Collapse in={checked}  orientation="vertical" sx={{ width:"10rem",position:"absolute", zIndex:"99",backgroundColor: "#fff",padding:"10px",boxShadow:"2px 2px 2px rgba(0,0,0,.4)"}}>
        <Box>
        <Link to="/inviteassociates"><List sx={{cursor:"pointer"}}>Add Associates</List></Link>
        <Divider sx={{borderColor:"#1688ca", border:"1px solid"}}  />
        <List sx={{cursor:"pointer"}}>All Associates</List>
        <Divider sx={{borderColor:"#1688ca", border:"1px solid"}}  />
        <List sx={{cursor:"pointer"}}>Associate Bio's</List>
        <Divider sx={{borderColor:"#1688ca", border:"1px solid"}}  />
        <List sx={{cursor:"pointer"}}>Search</List>
        <Divider sx={{borderColor:"#1688ca", border:"1px solid"}} />
        <List sx={{cursor:"pointer"}}>Directory</List>
        </Box>
          </Collapse>
         
     
   
  );
}