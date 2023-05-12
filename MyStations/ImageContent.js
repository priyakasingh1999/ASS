import React from "react";
import { Box, Typography } from "@mui/material";

const ImageContent = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "0px",
        transition: "all .4s",
        bgcolor: "rgba(0, 0, 0, 0.3)",
        boxShadow: "0 0 8px 2px rgba(0, 0, 0, 0.5)",
        py: 1,
        borderRadius:"0 0 1rem 1rem"
      }}
      className="ps"
    >
      <Typography
        variant="subtitle2"
        color="#fff"
        align="center"
        sx={{ ":hover": { textDecoration: "underline" },fontSize:{xs:"15px" ,sm:"13px",md:"14px"} }}
      >
        All Associates
      </Typography>
      <Typography variant="subtitle2" color="#fff" align="center" sx={{fontSize:{xs:"15px" ,sm:"13px",md:"14px"}}}>
        2 members
      </Typography>
    </Box>
  );
};

export default ImageContent;
