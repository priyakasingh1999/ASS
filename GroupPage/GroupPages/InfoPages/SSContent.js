import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Stack,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React,{useState} from "react";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { createGlobalStyle } from "styled-components";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const SSContent = ({onclick}) => {
  const[imagerotate , setImageRotate] = useState({rotate:"0",right:"0",pos:'relative'});
  const [clickbutton , setClickButton] = useState({click1:1,click2:2,click3:3})

  const Cus_Style = createGlobalStyle`
  .show_icon{
   visibility:hidden;
   transition: all .4s;
  }
  .box_s:hover .show_icon{
    visibility:visible;
    transition: all .4s;
  }
  .showi{
    display:none;
  }
  .img_box:hover .showi{
    display:block;
  }
  `



  return (
    <Container className="box_s" maxWidth="lg" sx={{ backgroundColor: "#fff", py: 1,maxHeight:"448px",overflowY:"scroll" }}>
      <Grid container>
        <Cus_Style/>
        <Grid item xs={12}>
          <Box
            className="box_hover"
            sx={{
              padding: "15px 5px 1px 5px",
              marginBottom: "10px",
              ":hover": {
                backgroundColor: "",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="./img/Picture1.png"
                  sx={{
                    border: "1px solid black",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Sue Karng
                  </Typography>
                  <Stack direction="row">
                  <Typography sx={{ fontSize: "12px", color: "#655f5f" }}>
                    06/22 7:58 PM
                  </Typography>
                 
                  <ArrowDropDownIcon sx={{}}/>
                  <ArrowDropDownIcon sx={{transform:`rotate(${imagerotate.rotate}deg)`}}
                    onClick={()=>{
                      setImageRotate({...imagerotate,rotate:-90,right:"18%",pos:'absolute'})
                    }}
                  />
                  </Stack>
                </Box>
              </Stack>
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack  className="show_icon" direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <Box><Avatar sx={{width:"22px",height:"22px",fontSize:"14px"}}>1</Avatar></Box>
                    <Box><ArrowCircleLeftIcon/></Box>
                    
                    <Box><AddCircleIcon/></Box>
                    <Box><ArrowCircleRightIcon/></Box>
                  </Stack>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="caption" color="inherit">
                            Added by Pat Link
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            2 years ago
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            225.84 KB size.
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            plans
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  >
                    <Avatar
                      variant="rounded"
                      alt="Remy Sharp"
                      src="./img/pdf.png"
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </HtmlTooltip>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle2">
              Hello everyone, we are rolling out our new state of the art
              Electronic Medical Records system.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <ImageList cols={1} sx={{ borderRadius: "15px", margin: "5px 0",position: `${imagerotate.pos}`,right:`${imagerotate.right}`,top:"50%",maxWidth:400,zIndex:99}} className="img_box">
              <ImageListItem>
                <img src="./img/station_867.png" onClick={onclick} />
                <Box className="showi" sx={{position:"absolute",top:"15px",left:"15px",color:"#fff"}}>0</Box>
              </ImageListItem>
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="box_hover"
            sx={{
              padding: "15px 5px 1px 5px",
              marginBottom: "10px",
              ":hover": {
                backgroundColor: "",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="./img/Puja1.png"
                  sx={{
                    border: "1px solid black",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Jim Smith
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#655f5f" }}>
                    06:14 pm
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="caption" color="inherit">
                            Added by Pat Link
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            2 years ago
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            225.84 KB size.
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            plans
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  >
                    <Avatar
                      variant="rounded"
                      alt="Remy Sharp"
                      src="./img/pdf.png"
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </HtmlTooltip>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle2">
              Hi team, here is the training manual for this new program. I will
              send out the schedule.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SSContent;
