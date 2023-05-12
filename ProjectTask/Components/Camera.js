import React from 'react'
import { Box, Typography, OutlinedInput, FormControl, Divider, Stack } from '@mui/material'
import { Button } from 'bootstrap'

const Camera = (props) => {

    const {setcamera} = props
  return (
    <Box sx={{
        position: 'absolute',
        top: '30%',
        left: '65%',
        zIndex: 999,
        bgcolor: 'white',
        border:'1px solid #C3C3C3',
    }}>


        <Box>
            <Stack p={1} direction='row' sx={{ justifyContent: 'space-between',backgroundColor:'#C3C3C3' }}>
                <Box></Box>
                <Box><Typography sx={{color:"white"}} >
                    Camera
                </Typography></Box>

                <Box>
                    <span onClick={() => { setcamera(false); }}>X</span>
                </Box>
            </Stack>
            <Stack m={2}>
                <FormControl  >
                    <OutlinedInput type="file" placeholder="Search" color="primary" size="small" />
                    
                </FormControl>
               
            </Stack>

        </Box>

    </Box>
  )
}

export default Camera