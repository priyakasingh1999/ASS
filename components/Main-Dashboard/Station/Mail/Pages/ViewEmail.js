import React from "react";
import { Grid, Box, Container, Typography, Avatar, Stack,styled } from "@mui/material";
import InfoSubHead from "../../../../../GlobalComponent/InfoSubHead";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import DropDown from "../../../../../GlobalComponent/DropDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReplyMsg from "./ReplyMsg";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useState } from "react";

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth:"100%",
      p: 0,
      border: "1px solid #000",
    },
  }));

const clr = { color: "#fff" };
const style = {
  width: "25px",
  height: "25px",
  fontSize: "12px",
  bgcolor: "lightgray",
  color: "#1688ca",
  fontWeight: "bold",
};

const ViewEmail = () => {
  const [search, setSearch] = React.useState(false);
  const [receipt , setRecepit] = useState(false)
  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: "15px" }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: "relative", mb: "7px" }}>
            <InfoSubHead
              name="Message"
              backgroundColor={"#1688ca"}
              color={"#fff"}
              urlname1={<MenuIcon onClick={() => setSearch(!search)} />}
            />

            {search && (
              <DropDown
                top={"44px"}
                name1={
                  <Link style={clr} to="/myinbox">
                    My Messages
                  </Link>
                }
                name2={
                  <Link to="/add-message" style={clr}>
                    New
                  </Link>
                }
                name3={
                    <Link to="/myinbox" style={clr}>
                    Inbox
                  </Link>
                }
                maxWidth={138}
                bgcolor={"#1688ca"}
                color={"#fff"}
                name4={
                    <Link to="/deleted-message" style={clr}>
                    Deleted Messages
                  </Link>
                  
                }
                display5="none"
              />
            )}
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ bgcolor: "#fff", p: 1, borderRight: "1px solid grey" }}
          >
            <Stack
              spacing={1}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Avatar sx={style}>T</Avatar>
              <Avatar sx={style}>F</Avatar>
              <HtmlTooltip placement="right"
                      title={
                        <React.Fragment sx={{ p: 0 }}>
                            <Grid container sx={{p:0}}>
                                <Grid item xs={4}>
                                    <Avatar src="./img/john.jpg" variant="rounded"/>
                                </Grid>
                                <Grid item xs={8}>
                                <Typography variant="body2" color="inherit">
                                John S Smith

                            </Typography>

                            <Typography variant="body2" color="inherit">
                            555-555-5555
                            </Typography>
                            <Typography variant="body2" color="inherit">
                            Facility Manager
                            </Typography>
                            
                                </Grid>
                            </Grid>
                          
                        </React.Fragment>
                      }
                    >
                     <Avatar src="./img/john.jpg" />
                    </HtmlTooltip>
              
              <Avatar sx={style}>M</Avatar>
              <Avatar sx={style}>R</Avatar>
              <Avatar sx={style}>Cc:</Avatar>
            </Stack>
          </Grid>
          <Grid item xs={10} sx={{ bgcolor: "#fff", px: 5, py: 1 }}>
            <Grid container>
              <Grid item xs={12} sx={{ mb: 1 }}>
                <Box>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    className="border rounded p-1"
                  >
                    <Box>
                      <Link to="" style={{ color: "#1688ca" }}>
                        <Typography
                          sx={{
                            ":hover": { textDecoration: "underline" },
                            fontSize: "13px",
                          }}
                        >
                          Added post in Information Technology Project Board -
                          Add Your Project Name
                        </Typography>
                      </Link>
                    </Box>
                    <Box>
                      <HighlightOffIcon onClick={()=>{alert("Are you sure you want to delete ?")}}/>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
              <Grid item sm={8} sx={{ mb: 1 }}>
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    01 May 2023 09:55 pm
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={4} sx={{ mb: 1,position:"relative" }}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Box>
                    <AddCircleIcon onClick={()=>{setRecepit(!receipt)}} />
                   
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "14px" }}>
                      Recipients
                    </Typography>
                  </Box>
                </Stack>
                {receipt &&
                        <Box sx={{position:"absolute",top:"100%",border:"1px solid #1688ca",p:"5px",bgcolor:"#fff",width:"100%"}}>
                            <Box>
                            <Typography sx={{pb:2,fontSize:"14px"}}><Box component="span" sx={{fontWeight:"bold"}}>Sent To:</Box> John S Smith</Typography>
                            </Box>
                           
                                <Avatar sx={{bgcolor:"#1688ca",position:"absolute",top:"-10px",right:"5px" ,width:"20px",height:"20px",fontSize:"14px"}} onClick={()=>{setRecepit(false)}}>X</Avatar>
                            
                        </Box>
                        
                    }
              </Grid>
              <Grid item sm={12} className="border-top">
                <Box sx={{ py: 1 }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    John S Smith added a post in Information Technology Project
                    Board - Add Your Project Name. Click
                    <Link to="/DashboardBoard" style={{ color: "#1688ca" }}>
                      Link
                    </Link>
                    to see comment.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
                <ReplyMsg/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ViewEmail;
