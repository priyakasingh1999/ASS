import React, { useState } from 'react'
import {Avatar, Box,ImageList,ImageListItem,Stack, Typography} from "@mui/material";
import PhotoData from './PhotoData';
import { createGlobalStyle } from 'styled-components';

const Photo = () => {

  const Cus_Style = createGlobalStyle`
  .show{
    display:none;
  }
  .photo_box:hover .show{
    display:block;
  }
  `


  const [show, setShow]=useState(false)
  return (
    <Stack
      direction="row"
      sx={{
        display: "grid",
        columnGap: 1,
        rowGap: 1,
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "10px",
      }}
    >
      {PhotoData.map((p) => {
        const { id, img } = p;
        return (
          <Box sx={{ border: "none" }} key={id} className="photo_box">
            <Cus_Style/>
            <ImageList
              sx={{ width:"100%", height: "100%", borderRadius: "25px" }}
              cols={1}
             
            >
              <ImageListItem sx={{position:"relative"}}>
                <img src={img} />
               
                  <Box sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                  <Avatar className='show' sx={{width:"20px",height:"20px",fontSize:"16px",bgcolor:"#1688ca",textAlign:"center",verticalAlign:"middle",lineHeight:"20px"}}>1</Avatar>
                  </Box>
                
              </ImageListItem>
            </ImageList>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Photo;
