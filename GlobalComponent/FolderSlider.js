import React from "react";
import { Container, Grid, Box, List } from "@mui/material";
import SingleList from "./SingleList";
import { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CusStyle = createGlobalStyle`
.listwidth{
    width:calc(100% - 0px) !important;
}
.slick-prev:before {
  left: -25px;
  display:none;
}
.slick-next:before{
  color:#fff;
 
}
.slick-arrow.slick-next.slick-disabled{
  background: rgb(255 163 0)!important;
  height:100%;
  width:50px;
  opacity:.7;
  border-radius: 0.75rem 0.75rem 0 0;
}
.slick-next{
  background: rgb(255 163 0)!important;
  height:100%;
  width:50px;
  opacity:.7;
  border-radius: 0.75rem 0.75rem 0 0;
}
.slick-next:hover{
  background: rgb(255 163 0)!important;
  height:100%;
  width:50px;
  opacity:1;
}
.slick-list{
  width: 97.6%;
}
.slick-dots {
  display: none !important;
}



`;

const FolderSlider = ({name1,name2,name3,name4,name5,name6,name7,name8,name9,display}) => {
  var silkdata = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Data = [{id:1,name:name1},{id:2,name:name2},{id:3,name:name3},{id:4,name:name4},{id:5,name:name5},{id:6,name:name6},{id:7,name:name7},{id:8,name:name8}]
  return (
  
      
      <Grid container>
        <CusStyle />
        <Grid item xs={12} sx={{p:0}}>
          <Box>
            <Slider {...silkdata}>
             {
                Data.map((data)=>{
                    const {id,name} = data
                    return(
                        <List sx={{ p: 0 }} key={id}>
                        <SingleList
                          bgcolor={"#CBCBCB"}
                          color={"#1280c2"}
                          name={name}
                          listwidth={"listwidth"}
                          hcolor="red"
                        />
                      </List>
                    )
                })
             }

              {/* <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name2}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name3}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name4}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name5}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name6}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name7}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name8}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0,display:{display} }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={name9}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List> */}

            </Slider>
          </Box>
        </Grid>
      </Grid>
    
  );
};
export default FolderSlider;
