import React from 'react'
import {Grid,Box, Typography,Checkbox,Button} from '@mui/material'

const Elapsed = ({setElapsed}) => {
  return (
    <Grid container sx={{justifyContent:"center"}}>
       <Grid item xs={9} >
        <Grid container sx={{bgcolor:"#fff",borderRadius:"0.25rem",boxShadow:24,borderRadius:"0.25rem",p:1}}>
        <Grid item xs={5} sx={{mb:2}} >
            <Box sx={{pr:"13px"}}>Milestone Start Date:</Box>
        </Grid>
        <Grid item xs={7} >
            <Box>
                <input type='date'/>
            </Box>
        </Grid>
        <Grid item xs={5} >
            <Box sx={{pr:"13px"}}>Milestone End Date:</Box>
        </Grid>
        <Grid item xs={7} >
            <Box>
                <input type='date'/>
            </Box>
        </Grid>
        <Grid item xs={11} sx={{mt:1}} >
            <Box>
                <Typography sx={{fontSize:"14px"}}>Automatically adjust milestones based on date</Typography>
                <Typography sx={{fontSize:"14px"}}>* Will send reminders at 25%,50%,75% and 100%</Typography>

            </Box>
        </Grid>
        <Grid item xs={1}  >
            <Box>
               <Checkbox size="small" sx={{width:"17px",height:"17px"}}/>
            </Box>
        </Grid>
        <Grid item xs={6} sx={{textAlign:"center",mt:1}} >
            <Box>
               <Button variant='contained' size="small" onClick={()=>{setElapsed(false)}}>Cancel</Button>
            </Box>
        </Grid>
        <Grid item xs={6} sx={{textAlign:"center",mt:1}} >
            <Box>
               <Button variant='contained' size="small">Save</Button>
            </Box>
        </Grid>
        </Grid>
       </Grid>
    </Grid>
  )
}

export default Elapsed