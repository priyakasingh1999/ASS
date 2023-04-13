import { Grid, Box, Typography, Container, Link } from '@mui/material'
import React from 'react'
import SocialIcon from './SocialIcon'

const ProfileUserDetails = () => {
    return (
        <Container maxWidth="lg" sx={{
            backgroundImage: "url(./img/binary-3441007_640.jpg)",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,.5)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            py: 3

        }}>
            <Grid container >
                <Grid item xs={12}>
                    <Box sx={{ mb: 4 }} >
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Puja's Bio</Typography>
                        <Typography>10 years experience in IT projects and program implementation in healthcare, Worked on all types of IT projects and programs initiatives. Work with leadership on program implementation. Experienced on complex IT projects in numerous hospitals.</Typography>
                    </Box>

                    <Box sx={{ mb: 4 }} >
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Skills</Typography>
                        <Typography>IT skilled in project management for hospitals throughout the west coast</Typography>
                    </Box>

                    <Box sx={{ mb: 4 }} >
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Projects</Typography>
                        <Typography>Smart room technology and electronic health records</Typography>
                    </Box>

                    <Box >
                        <Typography>Video Link <Link href="#"> http://www.youtube.com</Link></Typography>
                        <Typography>Link <Link href="#"> http://wwww/ashe.com</Link></Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <SocialIcon />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProfileUserDetails