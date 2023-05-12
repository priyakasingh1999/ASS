import {
    Avatar,
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    ListItem,
    List,
  } from "@mui/material";
  import React,{useState} from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
  import EmailIcon from "@mui/icons-material/Email";
  import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
  import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
  import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
  import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
  import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
  import CancelIcon from "@mui/icons-material/Cancel";
  import { createGlobalStyle } from "styled-components";
  import Pagination from "@mui/material/Pagination";
  import IconTransparet from "../../../GlobalComponent/IconTransparet";
  import DropDown from "../../../GlobalComponent/DropDown";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
  import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import { Link } from "react-router-dom";
import Search from "../../../GlobalComponent/Search";

  
  const Style = createGlobalStyle`
  .iconlist,.close{
      visibility:hidden;
      
  }
  .boxes{
      border:4px solid transparent;
      
  }
  .boxes:hover{
      border:4px solid #ffad00;
      background-image: url(./img/firstreply.jpg);
     
  }
  .boxes:hover .iconlist{
      visibility:visible;
      
  }
  .boxes:hover .close{
      visibility:visible;
  }
  .boxes:hover .name{
      display:none;
  }
  
  .associate_user_size{
    width: calc(20% - 20px);
    border: 4px solid transparent;
    margin: 10px;
    transition: all .3s;
  }
  `;
  const Cusdata = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];
  
  const HAssociates = ({name}) => {
    const [search, setSearch] = React.useState(false);
  
    const [searchopen, setSearchOpen] = useState(false);
  const clr = {color:"#fff"}
    
    return (
      <>
        <Style />
       
          
         
            <Grid container sx={{ backgroundColor: "#fff" ,position:"relative"}}>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <InfoSubHead
                name={"My Associates"}
                backgroundColor={"#1688ca"} 
                color={"#fff"}
                urlname1={<a href="/inviteassociates" style={{color:"#fff"}}><Stack direction="row"><ArrowDropDownIcon /><Typography>Add Associate</Typography></Stack></a>}
                urlname={<a  href="/associatemember" style={{color:"#fff"}}><Stack direction="row"><ArrowDropDownIcon /><Typography>Associate Bio's</Typography></Stack></a>}
              />
             
            </Grid>
              
              <Box sx={{maxHeight:"100vh",overflowY:"auto",pb:6}}>
              <Grid container >
                <Grid item xs={12}>
                  <List className="d-flex flex-wrap">
                    {Cusdata.map((data) => {
                      const { id } = data;
                      return (
                        <ListItem className="boxes p-0" sx={{width:"calc(25% - 0px)",mb:1}} key={id}>
                          <Box className="w-100" >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <Avatar
                                sx={{ width: "80px", height: "80px" }}
                                alt="Remy Sharp"
                                src="./img/john.jpg"
                              />
                            </Box>
                            <Typography
                              className="name"
                              sx={{ fontSize: "14px", fontWeight: "bold",textAlign:"center" }}
                            >
                              Chris Hepple
                            </Typography>
                            <Typography
                              className="name"
                              sx={{ fontSize: "14px", color: "#333" ,textAlign:"center"}}
                            >
                              Biomed Manager
                            </Typography>
                            <Box
                              className="close"
                              sx={{
                                position: "absolute",
                                right: ".5rem",
                                top: ".3rem",
                              }}
                            >
                              <CancelIcon sx={{ color: "#fff" }} />
                            </Box>
                            <Box>
                              <Stack
                                className="iconlist"
                                direction="row"
                                sx={{
                                  justifyContent: "center",
                                  paddingTop: "2px",
                                  paddingBottom: "5px",
                                  marginTop: "10px",
                                  flexWrap: "wrap",
                                }}
                                spacing={1}
                              >
                                <IconTransparet iconname={<EmailIcon sx={{width:"17px",height:"17px"}}/>}/>
  
                                <IconTransparet iconname={<EmailOutlinedIcon sx={{width:"17px",height:"17px"}}/>}/>
  
                                <IconTransparet iconname={<AddIcCallOutlinedIcon sx={{width:"17px",height:"17px"}}/>}/>
  
                                <IconTransparet iconname={<ForumOutlinedIcon sx={{width:"17px",height:"17px"}}/>}/>
  
                                <IconTransparet iconname={<SettingsVoiceOutlinedIcon sx={{width:"17px",height:"17px"}}/>}/>
  
                                <IconTransparet iconname={<AlternateEmailOutlinedIcon sx={{width:"17px",height:"17px"}}/>}/>
                                
                                
                              </Stack>
                            </Box>
                          </Box>
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
                
              </Grid>
              </Box>
            </Grid>
          
       
      </>
    );
  };
  
  export default HAssociates;
  