import React from 'react'
import {Box,Grid,Typography} from '@mui/material'

const FormSearch = () => {
  return (
    <Grid container>
         <Grid item xs={3}className="my-auto">
            <Box>
              <Typography  sx={{fontSize:{xs:"12px",md:"14px"}}}>Search By Name:</Typography>
            </Box>
          </Grid>

          <Grid item xs={4} >
            <Box>
              <input type="text" placeholder="Search Associate" className="form-control py-1"/>
            </Box>
          </Grid>
    </Grid>
  )
}

export default FormSearch