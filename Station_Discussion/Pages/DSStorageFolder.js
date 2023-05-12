import React from "react";
import { Container, Grid, Box, List } from "@mui/material";
import SingleList from "../../GlobalComponent/SingleList";
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



`;

const DSStorageFolder = () => {
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

  return (
  
      
      <Grid container>
        <CusStyle />
        <Grid item xs={12} sx={{p:0}}>
          <Box>
            <Slider {...silkdata}>
              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Budgets Ops"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Facilities"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Financial planning"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Ops Group"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Pats folder"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Projects"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Security"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Staffing"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>

              <List sx={{ p: 0 }}>
                <SingleList
                  bgcolor={"#CBCBCB"}
                  color={"#1280c2"}
                  name={"Weather Alerts"}
                  listwidth={"listwidth"}
                  hcolor="red"
                />
              </List>
            </Slider>
          </Box>
        </Grid>
      </Grid>
    
  );
};
export default DSStorageFolder;
