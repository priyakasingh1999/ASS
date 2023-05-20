import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  ImageList,
  ImageListItem, Typography,Stack
} from "@mui/material";

import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import ImagesData from "../../../ProjectBoards/ProjectBoardData";

import { createGlobalStyle } from "styled-components";







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

const HProjectBoard = () => {
  

  


  return (
    <>
    
      <Style />
     
        <Grid container sx={{justifyContent:"center"}}>
          <Grid item xs={12} sx={{ position: "relative",mb:"5px" }}>
            <InfoSubHead
              name="Project Boards"
              backgroundColor={"#1688ca"}
              color={"#fff"}
              
            />
           
          </Grid>

          <Box sx={{maxHeight:"100vh",overflowY:"auto",pb:15,bgcolor:"#fff"}}>
          <Grid container sx={{justifyContent:"center",mt:1}}>
            <Grid item xs={12} sx={{px:4,py:3,bgcolor: "#fff"}}>
              <Box>
                <ImageList sx={{ gridTemplateColumns:"repeat(auto-fill,minmax(200px, 1fr))!important" }} gap={30}>
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
                          <Box className="content borderRadius" sx={{position:"absolute",top:0,bottom:0, width:"100%"}}>
                          
                            <Stack direction="column" spacing={1} sx={{justifyContent:"center",alignItems:"center",height:"100%",color:"#fff",pt:10}}>
                                <Box>{userimg}</Box>
                            </Stack>
                          
                          </Box>


                            <Box sx={{position:"absolute",top:0,bottom:0, width:"100%"}}>
                          
                          <Stack direction="column" spacing={1} sx={{justifyContent:"center",alignItems:"center",height:"100%",color:"#fff"}}>
                          <Typography sx={{":hover":{textDecoration:"underline"}}}>{name}</Typography>
                          </Stack>
                        
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

export default HProjectBoard;
