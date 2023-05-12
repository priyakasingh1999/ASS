import { Container, Grid, Stack, Typography, Box, Avatar, ImageList, ImageListItem } from "@mui/material";
import * as React from "react";
import Progress from "./CIrcleProgressBar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const ProfileDetails = () => {
    return (
        <>
            <Container maxWidth='lg' sx={{ color: "#fff", pt: 2 }}>
                <Grid container>
                    <Grid item xs={12} sm={7} sx={{ mb: 1 }}>
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
                    <Grid item xs={12} sm={5}>
                        <Box sx={{my:{xs:1}}}>
                        <Stack direction="row" sx={{ flexWrap: "wrap",justifyContent:{xs:"space-between"}}}>
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
                        <Box sx={{my:{xs:1,sm:0}}}>
                        <Box sx={{ mt:{md:"2",xs:0}, textAlign: {xs:"center"} }}>
                            <Typography variant="body1">Accomplishments</Typography>
                        </Box>
                        <Stack direction="row"  spacing={1} sx={{ alignItems: "center",my:{md:"2",xs:1}, justifyContent: {xs:"center"} }}>
                            <Avatar variant="rounded" sx={{ width: "25px", height: "25px" }} src="./img/john.jpg" />
                            <Avatar variant="rounded" sx={{ width: "25px", height: "25px" }} src="./img/john.jpg" />
                        </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container>
                            <Grid item xs={4} sm={2}>
                                <Box>
                                    <Box><Avatar variant="rounded" src="./img/invite.png" /></Box>
                                    <Box sx={{ mt: {md:"2",xs:1}}}><ImageList sx={{ width:{xs:"100%",sm:100} }} cols={1} rowHeight={"100%"}>
                                        <ImageListItem>
                                            <img src="./img/puja1.png" loading="Puja" className="img-fluid"/>
                                        </ImageListItem>
                                    </ImageList></Box>
                                </Box>
                            </Grid>
                            <Grid item xs={8} sm={10} >
                                <Box sx={{pt:{md:3,xs:2}}} >
                                    <Box sx={{ textAlign: "center" }}> <Typography className="fs-7-300"  sx={{fontSize:{xs:"12px",sm:"14px"}}}>Recognize Your Associate <ArrowDropDownIcon /> </Typography></Box>
                                    <Box sx={{borderBottom:"1px solid #fff"}} className="h-200">
                                        <Typography className="fs-6-300"  sx={{fontSize:{xs:"10px",sm:"14px"},px:1}}>Sue, thanks for completing the project on time and to our satisfaction. Everyone was pleased with the outcome and your leadership was awesome. John S Smith, Mar 19, 2019</Typography>
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