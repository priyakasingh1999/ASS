import React, { useState } from "react";
import { Container, Grid, Box, Typography,Stack,Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddAssociateForm from "../GlobalComponent/AddAssociateForm";
import InfoSubHead from "../GlobalComponent/InfoSubHead";

const InviteAssociates = () => {
    const [AssociatesEmail , setAssociatesEmail]=useState(false)
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ mt: 2, justifyContent: "center" }}>
        <Grid item sm={8} sx={{ bgcolor: "#fff" }}>
          <Grid container>
            <Grid item sm={12}>
              <Box sx={{textAlign:"center",bgcolor:"#1688ca",color:"#fff",py:"5px",fontSize:"20px"}}>Invite Associates</Box>
            </Grid>
          </Grid>
          <Grid container sx={{p:2}}>
            <Grid item sm={6} sx={{mb:1}}>
              <Box sx={{fontSize:"14px"}}>Select internal network Associates</Box>
            </Grid>
            <Grid item sm={6} sx={{mb:1}}>
              <Stack direction="row" onClick={()=>{setAssociatesEmail(!AssociatesEmail)}}>
                <Link to="#"><Typography sx={{fontSize:"14px",color:"#337ab7",":hover":{textDecoration:"underline",color:"#23527c"}}}>Associates Emails</Typography></Link>
                <Typography variant="body2" color="initial">+</Typography>
              </Stack>
            </Grid>
            <Grid item sm={12} sx={{position:"relative"}}>
                <Box sx={{textAlign:"center",borderTop:"1px solid #1688ca",py:1}}>
                    <Typography sx={{fontSize:"14px"}}>Or enter their email below. This is for existing Associates only</Typography>
                </Box>
                {
                    AssociatesEmail &&
                    <Box sx={{position:"absolute",top:0,right:"10px",bgcolor:"#fff",boxShadow:24,zIndex:999,minWidth:"550px"}}>
                        <Box><InfoSubHead backgroundColor={"#1688ca"} color={"#fff"} urlname={<Typography onClick={()=>{setAssociatesEmail(false)}}>X</Typography>}/></Box>
                        <Box sx={{px:1,pb:13}}>
                        <AddAssociateForm/>
                        </Box>
                    </Box>
                }
            </Grid>
            <Grid item sm={3} sx={{mb:1}}>
                <Box>
                    <Typography sx={{fontSize:"14px"}}>Enter Email Address:</Typography>
                </Box>
            </Grid>
            <Grid item sm={9} sx={{mb:1}}>
                <Box>
                    <input className="form-control"/>
                </Box>
            </Grid>
            <Grid item sm={3}>
                <Box>
                    <Typography sx={{fontSize:"14px"}}>Message:</Typography>
                </Box>
            </Grid>
            <Grid item sm={9}>
                <Box>
                    <textarea className="form-control" rows={2} placeholder="I would like to invite you as my Associate"/>
                </Box>
            </Grid>
            <Grid item sm={12} sx={{textAlign:"center",mt:2}}>
                <Box>
                    <Button variant="contained"  size="small" sx={{textTransform:"capitalize"}}>Invite</Button>
                </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InviteAssociates;
