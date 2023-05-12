import React,{useState} from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Checkbox,
  TextareaAutosize,
  InputBase,
  Avatar,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import AddAssociateForm from "../../components/Main-Dashboard/Station/MyStation/FormPages/AddAssociates";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const textstyle = { fontWeight: "bold", fontSize: "14px" };
const textstyle2 = { fontSize: "14px", color: "#333333" };
const iconstyle = {
  width: "20px",
  height: "20px",
  fontSize: "12px",
  bgcolor: "red",
};

const EditStation = ({setEditStation}) => {
  const [invite , setInvite]=useState(false)
  const [invitestatus , setInviteStatus]=useState(false)
  return (
    <>
      
        <Grid container sx={{ justifyContent: "center",minWidth:"400px"}}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sx={{position:"relative"}}>
                <InfoSubHead
                  borderRadius=" 0.75rem 0.75rem 0 0"
                  urlname1={"Edit Station"}
                  urlname={<Typography onClick={()=>{setEditStation(false)}}>X</Typography>}
                  backgroundColor={"#1688ca"}
                  color={"#fff"}
                />
                {
          invite &&
          <Box sx={{position:"absolute",top:"100%",bgcolor:"#fff",left:"10px",right:"10px",boxShadow:
          "2px 2px 5px rgba(0,0,0,.4),-2px -2px 5px rgba(0,0,0,.4)",p:1,mt:6,zIndex:999,borderRadius:"0.25rem"}}>
            <Box sx={{border:"1px solid black",p:2}}></Box>
            <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>
 (Use commas to separate multiple email addresses to invite Associates)</Typography>
          </Box>
        }
              </Grid>
              
              <Grid item xs={12}>
                <Grid container sx={{ bgcolor: "#fff", py:2 ,px:3 ,borderRadius:"0 0 0.75rem 0.75rem"}}>
                  <Grid item xs={12}>
                    <Box sx={{mb:"2px"}}>
                      <Typography sx={textstyle2}>
                        <AddCircleOutlineIcon sx={{ color: "gray" }} />
                        Station Status
                      </Typography>
                    </Box>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "space-between" }}
                    >
                      <Box sx={{ display: "flex", gap: "20px", mb: 1 }}>
                        <Typography sx={textstyle}>Station Creator</Typography>
                        <Typography sx={textstyle2}>John S Smith</Typography>
                      </Box>

                      <Box sx={{ display: "flex", gap: "20px", mb: 1 }}>
                        <Typography sx={textstyle}>Delete Station:</Typography>
                        <Avatar sx={iconstyle}>D</Avatar>
                      </Box>
                    </Stack>
                    <Box sx={{ display: "flex", gap: "20px", mb: 1 }}>
                      <Typography sx={textstyle}>
                        Created On Oct 30, 2017
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box>
                      <Typography sx={textstyle}>Station Name:</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={9}>
                    <InputBase
                      value="Information Technology"
                      className="form-control py-0"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ my: "3px" }}>
                      <AddAssociateForm
                        fontWeight="bold"
                        fontsize="14px"
                        minWidth="138px"
                        onClick={()=>{setInvite(!invite)}}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={3}>
                    <Box className="h-100" sx={{ mb: 2 }}>
                      <Typography sx={textstyle}>
                        Make Private <Checkbox size="small" className="p-0" />
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={9} sx={{ mb: 2 }}>
                    <Stack
                      direction={"row"}
                      sx={{ alignItems: "center", gap: "5px" }}
                    >
                      <Typography sx={{ fontSize: "12px" }}>
                        Add station logo image
                      </Typography>
                      <input type="file" style={{ fontSize: "14px" }} />
                    </Stack>
                  </Grid>

                  <Grid item xs={5}>
                    <Box sx={{ mb:"5px" }}>
                      <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{ alignItems: "center" }}
                      >
                        <AddCircleOutlineIcon sx={{ color: "gray" }} />
                        <Typography sx={textstyle2}>
                          Add what your station does
                        </Typography>
                      </Stack>
                    </Box>
                  </Grid>

                  <Grid item xs={7}>
                    <Box sx={{ mb:"5px" }}>
                      <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{ alignItems: "center" ,position:"relative"}}
                      >
                        <Button
                          size="small"
                          sx={{
                            bgcolor: "#efefef",
                            px: 0,
                            pt: "2px",
                            pb: 0,
                            border: "1px solid black",
                            fontSize: "12px",
                            minWidth: "50px",
                            color: "#000",
                          }}
                        >
                          Save
                        </Button>
                        <AddCircleOutlineIcon sx={{ color: "gray" }} onClick={()=>{setInviteStatus(!invitestatus)}} />
                        <Typography sx={textstyle2}>Invite Status</Typography>
                        {
                          invitestatus &&
                          <Box sx={{position:"absolute",zIndex:"999",top:"100%",left:"16%",bgcolor:"#fff",minWidth:"200px"}}>
                            <Stack direction="row" sx={{justifyContent:"space-between",border:"1px solid black",px:1,py:"3px",mt:"5px"}}>
                              <Box><Typography sx={{fontSize:"13px"}}>No Pending Requests</Typography></Box>
                              <Box><Typography sx={{fontSize:"13px",cursor:"pointer"}} onClick={()=>{setInviteStatus(false)}}>X</Typography></Box>
                            </Stack>
                          </Box>
                        }
                        
                      </Stack>
                      
                    </Box>
                  </Grid>

                  <Grid item xs={5}>
                    <Box sx={{ mb:"5px" }}>
                      <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{ alignItems: "center" }}
                      >
                        <AddCircleOutlineIcon sx={{ color: "gray" }} />
                        <Typography sx={textstyle2}>
                          Optional: Add Station name overlaid on photo
                        </Typography>
                      </Stack>
                    </Box>
                  </Grid>

                  <Grid item xs={4}>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                      <Avatar sx={{border:"2px solid #3AF6F9",bgcolor:"transparent",color:"#000",width:"20px",height:"20px",fontSize:"12px"}}>2</Avatar>
                    </Box>
                  </Grid>

                  <Grid item xs={5}>
                    <Box sx={{ mb:"5px" }}>
                      <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{ alignItems: "center" }}
                      >
                        
                        <AddCircleOutlineIcon sx={{ color: "gray" }} />
                        <Typography sx={textstyle2}>Choose color for the badge if no photo is used</Typography>
                      </Stack>
                    </Box>
                  </Grid>

                  <Grid item xs={7}>
                    
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
     
    </>
  );
};

export default EditStation;
