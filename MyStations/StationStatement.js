import React from "react";
import { Box, Typography } from "@mui/material";

const StationStatement = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        transition: "all .4s",
      }}
      className="content_box"
    >
      <Typography
        align="center"
        color="#fff"
        sx={{ bgcolor: "#1280c2", borderRadius: "1rem 1rem 0 0",fontSize:{xs:"19px" ,sm:"15px",md:"16px"}}}
      >
        Station Statement
      </Typography>
      <Typography
        sx={{ fontSize:{xs:"15px" ,sm:"12px",md:"13px"}, bgcolor: "#fff", py:{xs:1,sm:"2px"} }}
        align="center"
        color="#000"
      >
        Project Station engages and associates.
      </Typography>
    </Box>
  );
};

export default StationStatement;
