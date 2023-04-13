import { Grid, ImageList, ImageListItem, Box } from '@mui/material'
import React from 'react'
import ImagesData from './ImagesData'

const ProfileImages = () => {
    return (
        <Grid container sx={{ padding:"5px",bgcolor:"#fff"}}>
            {
                ImagesData.map((data) => {
                    const { id, imgUrl } = data
                    return (
                        <Grid item xs={6} key={id} >
                            <Box sx={{width:"100%",height:"100%",border:"4px solid #fff",":hover":{border:"4px solid #1688ca"}}}>
                                <ImageList sx={{ width: "100%",height:"100%"}} cols={1}  >
                                    <ImageListItem >
                                        <img src={imgUrl}/>
                                    </ImageListItem>
                                    
                                </ImageList>
                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ProfileImages