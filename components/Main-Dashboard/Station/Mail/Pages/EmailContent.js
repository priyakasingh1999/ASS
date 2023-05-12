import React from "react";
import { Box, Typography } from "@mui/material";

const EmailContent = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
        transition: "all .4s",
        height:"100%",
        zIndex:9999,
        borderRadius:"1rem"
      }}
      className="content_box"
    >
      <Typography
        align="center"
        color="#fff"
        sx={{ bgcolor: "rgba(0,0,0,.2)", borderRadius: "1rem 1rem 0 0",fontSize:{xs:"19px" ,sm:"15px",md:"16px"},height:"100%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"1rem"}}
      >
        Station Statement
      </Typography>
      
    </Box>
  );
};

export default EmailContent;
