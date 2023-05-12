import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  ImageList,
  ImageListItem,
  Typography
} from "@mui/material";

import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import ImagesData from "./SessionData";
import ImageContent from "../../MyStations/ImageContent";
import StationStatement from "../../MyStations/StationStatement";
import { createGlobalStyle } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown6 from "../../GlobalComponent/DropDown6";
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
    padding:30px
}
.content_box{
    display:none; 
    transition: "all .4s";
}
.borderRadius{
  border-radius: 1rem;
}
`;

const MyStationSession = () => {
  const [showDropdown, setDropdown] = useState(false);
  return (
    <>
      <Style />
      <Container maxWidth="md" sx={{ my: 2 }}>
        <Grid container sx={{justifyContent:"center"}}>
          <Grid item xs={9} sx={{ position: "relative" }}>
            <InfoSubHead
              name="My Station Sessions"
              backgroundColor={"#1688ca"}
              color={"#fff"}
              urlname1={<MenuIcon onClick={() => setDropdown(!showDropdown)} />}
              urlname={<ArrowDropDownIcon />}
            />
            {showDropdown && <DropDown6
             bgcolor={"#1280c2"} 
             top={"39.5px"} 
             
             name1={<Link to="/all-stations" style={{color:"#fff",fontSize:"12px"}}><Typography >My Station Sessions</Typography></Link>}
              name2={"Add Station"} 
              name3={"Recent Station Sessions"} 
              name4={"Search"} 
              name5={"Direct Sessions"} 
              name6={"All Recent Session"} 
              color="#fff"
              maxWidth={170}
              />}
          </Grid>

          <Grid container sx={{justifyContent:"center",mt:1}}>
            <Grid item xs={9} sx={{ p: 2,bgcolor: "#fff"}}>
              <Box>
                <ImageList sx={{ gridTemplateColumns:"repeat(auto-fill,minmax(170px, 1fr))!important" }} gap={30}>
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
        </Grid>
      </Container>
    </>
  );
};

export default MyStationSession;
