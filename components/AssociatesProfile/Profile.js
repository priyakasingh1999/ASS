import { Container, Grid, Stack, Box, Typography } from "@mui/material";
import * as React from "react";
import ProfileHeader from './ProfileHeader';
import ProfileIcon from './ProfileIcon';
import ProfileDetails from "./ProfileDetails";
import ContactIcon from "./ContactIcon";
import ContactSingleIcon from "./ContactSingleIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProfileImages from "./ProfileImages";
import './Profile.css'
import ProfileUserDetails from "./ProfileUserDetails";


const Profile = () => {
    return (
        <>
            <Container maxWidth="lg" >
                <Grid container sx={{ px: 3, py: 5 }}>
                    <Grid item xs={12}>
                        <Box>
                            <ProfileHeader children={"Associates Profile"} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={8} sx={{
                        backgroundImage: "url(./img/profile-img.jpg)",
                        backgroundBlendMode: "overlay",
                        backgroundColor: "rgba(0,0,0,.5)",
                        backgroundSize: "cover",
                    }}>
                        <Box>
                            <ProfileDetails />
                        </Box>

                    </Grid>
                    <Grid item xs={12} lg={4} >
                        <Grid container>
                            <Grid item xs={12} sx={{ bgcolor: "Black", color: "#fff", textAlign: "center" }}>
                                <Box sx={{ py: 1 }}>
                                    <Typography variant="body2">Contact Associate</Typography>
                                </Box>
                                <Box>
                                    <ContactIcon />
                                </Box>
                                <Box sx={{ py: 1 }}>
                                    <Stack direction="row" sx={{ justifyContent: "space-between", px: 1, alignItems: "center" }}>
                                        <Box>
                                            <ContactSingleIcon Icons="PA" />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">Member of these Stations </Typography>
                                        </Box>
                                        <Box>
                                            <ArrowDropDownIcon />
                                        </Box>

                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{maxHeight:"260px",overflowY:"scroll"}}>
                                <Box>
                                <ProfileImages/>
                                </Box>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                       <Box
                       >
                        <ProfileUserDetails/>
                       </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Profile