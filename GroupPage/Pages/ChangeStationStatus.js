import React from "react";
import { Box, Typography,Radio } from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";

const ChangeStationStatus = ({ setChangeStationStatus }) => {
  return (
    <Box sx={{ minWidth: 350 }}>
      <InfoSubHead
        urlname1="Change Station Status"
        urlname={
          <Typography
            onClick={() => {
              setChangeStationStatus(false);
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
          make private <Radio size="small"/>
        </Typography>
      </Box>
    </Box>
  );
};

export default ChangeStationStatus;
