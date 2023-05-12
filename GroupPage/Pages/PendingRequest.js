import React from "react";
import { Box, Typography } from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";

const PendingRequest = ({ setPendingReq }) => {
  return (
    <Box sx={{ minWidth: 350 }}>
      <InfoSubHead
        name="Pending Requests"
        urlname={
          <Typography
            onClick={() => {
              setPendingReq(false);
            }}
          >
            X
          </Typography>
        }
        backgroundColor={"#1688ca"}
        color={"#fff"}
      />
      <Box sx={{ bgcolor: "#fff", py: 1 }}>
        <Typography sx={{ textAlign: "center" }}>
          No Pending Requests
        </Typography>
      </Box>
    </Box>
  );
};

export default PendingRequest;
