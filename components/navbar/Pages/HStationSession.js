import React, { useState } from "react";
import {
  Stack,
  Grid,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import ImagesData from "../../AssociatesProfile/ImagesData";
import ImageContent from "../../../MyStations/ImageContent";
import StationStatement from "../../../MyStations/StationStatement";
import { createGlobalStyle } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Style = createGlobalStyle`
.img_box{
    cursor: pointer;
}
.img_box:hover .content_box{
    display:block; 
    transition: "all 4s";
}
.img_box:hover .ps{
    padding:50px
}
.content_box{
    display:none; 
    transition: "all .4s";
}
.borderRadius{
  border-radius: 1rem;
}
`;

const HStationSession = () => {
  const [showDropdown, setDropdown] = useState(false);
  return (
    <>
      <Style />

      <Grid container sx={{ backgroundColor: "#fff", position: "relative" }}>
        <Grid item xs={12} sx={{ position: "relative" }}>
          <InfoSubHead
            name={"Station Sessions"}
            backgroundColor={"#1688ca"}
            color={"#fff"}
            urlname1={
              <a href="/all-stations" style={{ color: "#fff" }}>
                <Stack direction="row">
                  <ArrowDropDownIcon />
                  <Typography>All Stations</Typography>
                </Stack>
              </a>
            }
            urlname={
              <a href="/MyStationSession" style={{ color: "#fff" }}>
                <Stack direction="row">
                  <ArrowDropDownIcon />
                  <Typography> My Stations</Typography>
                </Stack>
              </a>
            }
          />
        </Grid>

        <Box sx={{maxHeight:"100vh",overflowY:"auto",pb:15}}>
        <Grid container sx={{ justifyContent: "center", mt: 1 }}>
          <Grid item xs={12} sx={{ p: 2, bgcolor: "#fff" }}>
            <Box>
              <ImageList
                sx={{
                  gridTemplateColumns:
                    "repeat(auto-fill,minmax(200px, 1fr))!important",
                }}
                gap={30}
              >
                {ImagesData.map((data) => {
                  const { id, imgUrl } = data;
                  return (
                    <Box
                      className="img_box"
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                      key={id}
                    >
                      <ImageListItem
                        sx={{ width: "100%", height: "100% !important" }}
                      >
                        <img src={imgUrl} className="borderRadius" />
                        <Box>
                          <ImageContent />
                        </Box>

                        <Box>
                          <StationStatement />
                        </Box>
                      </ImageListItem>
                    </Box>
                  );
                })}
              </ImageList>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default HStationSession;
