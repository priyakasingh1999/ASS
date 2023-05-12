import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  ImageList,
  ImageListItem, Typography,Stack
} from "@mui/material";

import InfoSubHead from "../GlobalComponent/InfoSubHead";
import ImagesData from "./ProjectBoardData";
// import ImageContent from "./ImageContent";
// import StationStatement from "./StationStatement";
import { createGlobalStyle } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "../GlobalComponent/DropDown";
import { Link } from "react-router-dom";
import Search from "../GlobalComponent/Search";





const Style = createGlobalStyle`
.img_box{
    cursor: pointer;
}
.img_box:hover .content{
    display:block; 
    transition: "all 4s";
}
.img_box:hover .ps{
    padding:30px
}
.content{
    display:none; 
    transition: "all .4s";
}
.borderRadius{
  border-radius: 1rem;
}
`;

const ProjectBoard = () => {
  const [showDropdown, setDropdown] = useState(false);
  const [searchopen, setSearchOpen] = useState(false);

  


  return (
    <>
    
      <Style />
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Grid container sx={{justifyContent:"center",px:2}}>
          <Grid item xs={12} sx={{ position: "relative" }}>
            <InfoSubHead
              name="Project Boards"
              backgroundColor={"#1688ca"}
              color={"#fff"}
              urlname1={<MenuIcon onClick={() => setDropdown(!showDropdown)} />}
              
            />
            {showDropdown && 
            <Box>
            <DropDown
             bgcolor={"#1280c2"} 
             top={"43px"} 
             
              
              name1={<Link to="/archived-project-board" style={{color:"#fff"}}><Typography sx={{fontSize:"14px"}} > Archived Boards</Typography></Link>} 
              name2={<Typography  sx={{fontSize:"14px"}} onClick={() => {
                setSearchOpen(true);
              }} >Search</Typography>}
             display3={"none"}
             display4={"none"}
             display5={"none"}
              color="#fff"
              maxWidth={135}
              />
              
              {searchopen && (
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 3,
                        top: "100%",
                        left: "12%",
                        zIndex: 999,
                        border: "1px solid #C3C3C3",
                        bgcolor: "#fff",
                      }}
                    >
                      <Search
                        searchopen={searchopen}
                        setSearchOpen={setSearchOpen}
                      />
                    </Box>
                  )}
              </Box>
              }
          </Grid>

          <Grid container sx={{justifyContent:"center",mt:1}}>
            <Grid item xs={12} sx={{ px:7,py:4,bgcolor: "#fff"}}>
              <Box>
                <ImageList sx={{ gridTemplateColumns:"repeat(auto-fill,minmax(250px, 1fr))!important" }} gap={60}>
                  {ImagesData.map((data) => {
                    const { id, imgUrl,name,userimg} = data;
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
                          <Box className="content borderRadius" sx={{position:"absolute",top:0,bottom:0,bgcolor:"rgba(0,0,0,.7)", width:"100%"}}>
                          
                            <Stack direction="column" spacing={1} sx={{justifyContent:"center",alignItems:"center",height:"100%",color:"#fff"}}>
                                <Box>
                                    <Link to="/DashboardBoard" style={{color:"#fff"}}>
                                        <Typography sx={{":hover":{textDecoration:"underline"}}}>{name}</Typography>
                                    </Link>
                                </Box>
                                <Box>{userimg}</Box>
                            </Stack>
                          
                          </Box>

                          <Box className="content" sx={{position:"absolute",top:0,right:"15px"}}>
                          <Typography sx={{color:"#fff",fontSize:"35px",lineHeight:"20px"}}>...</Typography>                         
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

export default ProjectBoard;
