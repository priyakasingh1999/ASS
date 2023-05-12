import React from "react";
import {
  Stack,
  Grid,
  Box,
  Typography,
  InputBase
} from "@mui/material";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import InfoSubHead from "../../GlobalComponent/InfoSubHead";



const data = [
  { id: 1, name: "Cerner Upgrade",visit:
  <Badge badgeContent={1} color="primary">
  <MailIcon color="action" />
</Badge>},
  { id: 2, name: "Single Sign-on",visit: <Badge badgeContent={2} color="primary">
  <MailIcon color="action" />
</Badge>},
  { id: 3, name: "Bar Codings",visit: <Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>},
  { id: 4, name: "Help Desk",visit: <Badge badgeContent={3} color="primary">
  <MailIcon color="action" />
</Badge>},
  
];

const ProjectTaskComment = ({setTBC}) => {
  return (
    <>
      <Box sx={{minWidth:"390px",boxShadow:24}}>
        <Box>
            <InfoSubHead name={<Typography sx={{fontSize:"13px"}}>Project Task Comments</Typography>} urlname={<Typography onClick={()=>{setTBC(false)}}>X</Typography>}  backgroundColor={"#1688ca"}
              color={"#fff"}/>
        </Box>
        <Box sx={{bgcolor:"#fff",py:1}}>
            
           
            <Box sx={{px:1}}>
        {data.map((data) => {
            const {id,name,visit}=data
          return (
            <Grid container key={id} sx={{justifyContent:"center",alignItems:"center",mt:1}}>
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

export default ProjectTaskComment;
