import React from 'react'
import InfoSubHead from '../../GlobalComponent/InfoSubHead'
import {Grid,Box, Typography} from '@mui/material'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Comments = ({setComment}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Box>
                <InfoSubHead name={<Typography sx={{fontSize:"15px"}}>Comments</Typography>}  backgroundColor={"#d2dee8"}
              color={"#000"} urlname1={<Typography onClick={()=>{setComment(false)}} sx={{cursor:"pointer"}}>X</Typography>} urlname={<ArrowDropDownIcon />}/>
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box sx={{textAlign:"center",my:"auto"}}>
               
              <Typography  sx={{cursor:"pointer"}}>No discussions added</Typography>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Comments