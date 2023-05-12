import React, { useState } from "react";
import { Container, Grid, Box, Avatar, Typography, Stack } from "@mui/material";
import { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import FiveIconList from "../../../../GlobalComponent/FiveIconList";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import NewSession from "../../../GroupPage/Pages/NewSession";
import RecentSession from "../../../../GroupPage/RecentSession";
import DirectSessionData from "./DirectSessionData";
// import AddSessionReuse from "../../../GlobalComponent/AddSessionReuse";
import AddNewSession from "../AddNewSession";
import { Link } from "react-router-dom";


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    p: 0,
    border: "1px solid #000",
  },
}));

const CusStyle = createGlobalStyle`
.listwidth{
    width:calc(100% - 0px) !important;
}
.slick-dots{
    display:none !important;
}
.slick-prev:before{
    display:none !important;
}
.slick-next:before {
    content: '→';
    color: black;
}
.slick-prev:before, .slick-next:before {
    font-size: 37px;
    color: black;
}


`;

const DirectSession = () => {

  const [recentsession , setRecentSession] = useState(false)
  const [addsession , setAddSession] = useState(false)
  const [stationmsg , setStationMsg] = useState(false)
  const [email , setEmail] = useState(false)
  const [recentname , setRecentName] = useState(false)

  var silkdata = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
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

  const styleicon = { width: "20px", height: "20px" };

  return (
    <Container maxWidth="lg">
      {recentsession &&
           <Box sx={{position: "fixed",
           top: "50%",
           transform: "translate(-50% , -50%)",
           zIndex: 999,
           left: "50%",
           mt:4,
           boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
             <RecentSession setRecentSession={setRecentSession}/>
           </Box>
      }
      {addsession &&
           <Box sx={{position: "fixed",
           top: "50%",
           transform: "translate(-50% , -50%)",
           zIndex: 999,
           left: "50%",
           mt:4,
           boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
             <AddNewSession setAddSession={setAddSession} addsession={addsession}/>
           </Box>
      }
      <CusStyle />
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={2} sx={{ bgcolor: "rgb(244, 244, 244)" }}>
          <Grid container>
            <Grid
              item
              xs={8}
              sx={{
                borderRight: "6px solid rgb(222, 231, 245)",
                textAlign: "center",
                p: 1,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {
                  !stationmsg && !recentname && <Typography onClick={()=>{setRecentSession(!recentsession)}}> Session Messages</Typography> 
                }
               
                {
                  stationmsg && !recentname && <Link to="/myinbox" style={{color:"#000"}}><Typography>New Email </Typography></Link> 
                }{
                  recentname &&
                  <Typography onClick={()=>{setRecentSession(!recentsession)}}>Direct Sessions</Typography>
                }
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                borderRight: "6px solid rgb(222, 231, 245)",
                textAlign: "center",
              }}
            >
              <Box sx={{ bgcolor: "#bfbfbf", p: 0 }}>
                <Stack
                  direction="column"
                  sx={{ justifyContent: "center", p: 0 }}
                >
                  <Box sx={{ p: 0 }}>
                    <ArrowDropUpIcon sx={styleicon} onClick={()=>{
                     setEmail(false)
                     setStationMsg(true)
                     setRecentSession(false)
                   }} />
                  </Box>

                  <Box
                    sx={{
                      p: 0,
                      borderTop: "2px solid #fff",
                      borderBottom: "2px solid #fff",
                    }}
                  >
                    <KeyboardArrowRightIcon
                    onClick={()=>{
                      setStationMsg(false)
                      setEmail(false)
                      setRecentName(!recentname)
                    }}
                      sx={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </Box>

                  <Box sx={{ p: 0 }}>
                    <ArrowDropDownIcon sx={styleicon}  onClick={()=>{
                      setStationMsg(!stationmsg)
                      setEmail(false)
                      setRecentName(false)
                    }}
                      
                       />
                  </Box>
                </Stack>

                {/* <Typography sx={{borderBottom:"2px solid #fff"}}><ArrowDropUpIcon/></Typography>
            <Typography sx={{borderBottom:"2px solid #fff"}}><KeyboardArrowRightIcon/></Typography>
            <Typography><ArrowDropDownIcon/></Typography> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ bgcolor: "rgb(244, 244, 244)" }}>
          <Box sx={{ height: "100%" }}>
            <Slider
              {...silkdata}
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              {
                DirectSessionData.map((data)=>{
                  const {id, imgUrl,name,profileName} = data

                  return(
                    stationmsg && !recentname &&
                   <Box key={id}>
                    <HtmlTooltip
                      title={
                        <React.Fragment sx={{ p: 0 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              p: 0,
                            }}
                          >
                            <Typography variant="body2" color="inherit">
                              {name}
                            </Typography>

                            <Typography variant="body2" color="inherit">
                              {profileName}
                            </Typography>
    
                            <Box sx={{ bgcolor: "gray",mt:"5px"}}>
                              <FiveIconList />
                            </Box>
                          </Box>
                        </React.Fragment>
                      }
                    >
                     <Link to="/allformyinbox"> <Avatar src={imgUrl}/></Link>
                    </HtmlTooltip>
                  </Box>
                   
                  
                  )
                })
              }
              {
                DirectSessionData.map((data)=>{
                  const {id, imgUrl,name,profileName} = data

                  return(
                    
                       
                    <Box key={id}>
                    <HtmlTooltip
                      title={
                        <React.Fragment sx={{ p: 0 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              p: 0,
                            }}
                          >
                            <Typography variant="body2" color="inherit">
                              {name}
                            </Typography>

                            <Typography variant="body2" color="inherit">
                              {profileName}
                            </Typography>
    
                            <Box sx={{ bgcolor: "gray",mt:"5px"}}>
                              <FiveIconList />
                            </Box>
                          </Box>
                        </React.Fragment>
                      }
                    >
                      <Avatar src={imgUrl} onClick={()=>{setAddSession(true)}}/>
                    </HtmlTooltip>
                  </Box>
                    
                 
                   
                  
                  )
                })
              }
              {
                DirectSessionData.map((data)=>{
                  const {id, imgUrl,name,profileName} = data

                  return(
                    !stationmsg && !recentname &&
                   <Box key={id}>
                    <Box></Box>
                  </Box>
                   
                  
                  )
                })
              }
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default DirectSession;
