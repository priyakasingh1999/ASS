import React from "react";
import Head from "./Pages/Head";
import Content from "./Pages/Content";
import { Box, Container, Grid } from "@mui/material";


const RecentSession = ({setRecentSession}) => {
  return (
    <>
     
        <Grid container sx={{minWidth:"1110px"}}>
          <Grid xs={12} sx={{backgroundColor:"#fff",minHeight:"470px"}}>
            <Grid container sx={{alignItems:"left" , justifyContent:"left"}}>
              <Grid xs={12} sx={{padding:"0px"}}>
                <Box>
                  <Head setRecentSession={setRecentSession}/>
                </Box>
              </Grid>
              <Grid xs={12}>
                <Box sx={{borderBottom:"4px solid #dee7f5"}}>
                  <Content />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    
    </>
  );
};

export default RecentSession;
