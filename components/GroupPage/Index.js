import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import StationPhotos from './GroupPages/StationPhotos'
import InfoTech from './GroupPages/InfoTech'


const GroupPage = () => {
  return (
    <>
    <Box sx={{backgroundImage: "url(./img/grp_379783899.jpg)",backgroundAttachment:"fixed" , backgroundSize:"100% 400px", backgroundRepeat:"no-repeat", backgroundColor:"rgb(239, 235, 252)"}}>
    
   <Container maxWidth="lg" sx={{mt:5}}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <InfoTech/>
        </Grid>
        <Grid item xs={12} md={6} >
          <StationPhotos />
        </Grid>
    </Grid>
   </Container>
   </Box>
   </>
  )
}

export default GroupPage