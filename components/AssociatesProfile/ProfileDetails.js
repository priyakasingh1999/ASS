import { Container, Grid, Stack, Typography, Box, Avatar, ImageList, ImageListItem } from "@mui/material";
import * as React from "react";
import Progress from "./CIrcleProgressBar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const ProfileDetails = () => {
    return (
        <>
            <Container maxWidth='lg' sx={{ color: "#fff", py: 1 }}>
                <Grid container>
                    <Grid item xs={12} sm={9} sx={{ mb: 1 }}>
                        <Stack direction="column">
                            <Typography variant="caption">puja patel</Typography>
                            <Typography variant="body2">IT Technician</Typography>
                            <Typography variant="body2">mpujapatel@gmail.com</Typography>
                            <Typography variant="body2">Department Name</Typography>
                            <Typography variant="body2">Street Address*</Typography>
                            <Typography variant="body2">City*</Typography>
                            <Typography variant="body2">State*</Typography>
                            <Typography variant="body2">787878</Typography>
                            <Typography variant="body2">6786875756756</Typography>
                            <Typography variant="body2">Company Name</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box sx={{mb:{md:1}}}>
                        <Stack direction="row" sx={{ flexWrap: "wrap",justifyContent:{md:"space-between", sm:"center"},gap:{md:0,xs:"10px"}}}>
                            <Box className="progress_box" >
                                <Progress data={1} />
                                <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
                                    Tenure
                                </Typography>
                            </Box>
                            <Box>
                                <Progress data={2} />
                                <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
                                    Training
                                </Typography>
                            </Box>
                            <Box>
                                <Progress data={3} />
                                <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
                                    Experience
                                </Typography>
                            </Box>
                        </Stack>
                        </Box>
                        <Box sx={{ mt:{md:"2",xs:0}, textAlign: {sm:"center",xs:"left"} }}>
                            <Typography variant="body1">Accomplishments</Typography>
                        </Box>
                        <Stack direction="row"  spacing={1} sx={{ alignItems: "center",my:{md:"2",xs:1}, justifyContent: {sm:"center",xs:"left"} }}>
                            <Avatar variant="rounded" sx={{ width: "25px", height: "25px" }} src="./img/john.jpg" />
                            <Avatar variant="rounded" sx={{ width: "25px", height: "25px" }} src="./img/john.jpg" />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container>
                            <Grid xs={12} sm={2}>
                                <Box>
                                    <Box><Avatar variant="rounded" src="./img/invite.png" /></Box>
                                    <Box sx={{ my: {md:"2",xs:1}}}><ImageList sx={{ width: 100 }} cols={1} rowHeight={100}>
                                        <ImageListItem>
                                            <img src="./img/puja1.png" loading="Puja" />
                                        </ImageListItem>
                                    </ImageList></Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={10}>
                                <Box sx={{pt:{md:3,xs:1}}}>
                                    <Box sx={{ textAlign: "center" }}> <Typography variant="subtitle1">Recognize Your Associate <ArrowDropDownIcon /> </Typography></Box>
                                    <Box sx={{borderBottom:"1px solid #fff"}}>
                                        <Typography variant="subtitle2">Sue, thanks for completing the project on time and to our satisfaction. Everyone was pleased with the outcome and your leadership was awesome. John S Smith, Mar 19, 2019</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default ProfileDetails