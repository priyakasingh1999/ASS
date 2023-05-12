import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileIcon from "./ProfileIcon";


const ProfileHeader = ({ children }) => {
    return (
        <>
            <Container maxWidth='lg' sx={{ bgcolor: '#1688ca', color: "#fff", py: 1 }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box>
                            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems:"center" }}>
                                <Box><MenuIcon /></Box>
                                <Box><Typography sx={{fontSize:{xs:"10px", sm:"16px" , md:"20px"}}}>{children}</Typography></Box>
                                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}><ProfileIcon icon="AA" /><ProfileIcon icon="SP" /></Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default ProfileHeader