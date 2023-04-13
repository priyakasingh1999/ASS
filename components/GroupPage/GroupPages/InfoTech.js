import { Avatar, Box, Container, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import InfoHead from './InfoPages/InfoHead'
import InfoSubHead from './InfoPages/InfoSubHead'
import GroupContent from './InfoPages/GroupContent'
import SSContent from './InfoPages/SSContent'
import AddComment from '../../AssociatesProfile/AddComment'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const InfoTech = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
    <Box>
        {
            <AddComment name="Station Focus Statement" text="Our team works with all hospital departments on IT needs. We plan for the future with integration"  open={open} setOpen={setOpen}/>
        }
        <Grid container>
            <Grid item xs={12}>
                <Box><InfoHead urlname="" urlname1={""}/></Box>
            </Grid>

            <Grid item xs={12}>
                <Box  onClick={()=>setOpen(true)}><InfoSubHead name={"Station Statement"} backgroundColor={"#d2dee8"} color={"#000"}/></Box>
            </Grid>

            <Grid item xs={12}>
                <GroupContent content={"Our team works with all hospital departments on IT needs. We plan for the future with integration"}/>
            </Grid>

            <Grid item xs={12}>
                <Box><InfoSubHead name={"Station Associates"} backgroundColor={"#d2dee8"} color={"#000"} urlname={<CameraAltIcon/>} urlname1={"./img/john.jpg"}/></Box>
            </Grid>

            <Grid item xs={12}>
                <GroupContent content={<Stack direction="row" spacing={2}>
                    <Avatar src='./img/john.jpg'/>
                    <Avatar src='/img/Picture1.png'/>
                    <Avatar src='./img/puja1.png'/>
                    <Avatar src='./img/john.jpg'/>
                </Stack>}/>
            </Grid>
            <Grid item xs={12}>
                <Box><InfoSubHead name={"Station Sessions"} backgroundColor={"#d2dee8"} color={"#000"} /></Box>
            </Grid>
            <Grid item xs={12}>
                <SSContent/>
            </Grid>
            <Grid item xs={12}>
                <Box><InfoSubHead name={"Station Updates"} backgroundColor={"#d2dee8"} color={"#000"}/></Box>
                <Box sx={{backgroundColor:"#fff", padding:"5px"}}></Box>
            </Grid>
            <Grid item xs={12}>
                <Box><InfoSubHead name={"Recognize Your Associate"} backgroundColor={"#d2dee8"} color={"#000"}/></Box>
                <Box sx={{backgroundColor:"#fff", padding:"5px"}}></Box>
            </Grid>
            <Grid item xs={12} sx={{mb:1}}>
                <Box><InfoSubHead name={"Rate This Station"} backgroundColor={"#d2dee8"} color={"#000"}/></Box>
                <Box sx={{backgroundColor:"#fff", padding:"5px"}}></Box>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default InfoTech