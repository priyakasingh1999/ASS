import { Avatar, Box, Stack } from '@mui/material'
import React from 'react'
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialIcon = () => {
    return (
        <Box>
            <Stack direction="row" spacing={1} sx={{justifyContent:"right",alignItems:"center"}}>
                <Avatar
                    sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        width: "32px",
                        height: "32px",
                    }}
                >

                    <FaFacebookF sx={{ width: "20px", height: "20px" }} />
                </Avatar>
                <Avatar
                            sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                width: "32px",
                                height: "32px",
                            }}
                        >
                            <FaLinkedinIn sx={{ width: "20px", height: "20px" }} />
                        </Avatar>
                        <Avatar
                            sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                width: "32px",
                                height: "32px",
                            }}
                        >
                            <TwitterIcon sx={{ width: "20px", height: "20px" }} />
                        </Avatar>
            </Stack>
          
        </Box>
    )
}

export default SocialIcon