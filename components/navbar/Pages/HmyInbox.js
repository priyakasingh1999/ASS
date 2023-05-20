import React, { useState } from "react";
import TableHead from "../../../GlobalComponent/TableHeadSeven";
import {
  Grid,
  Box,
  Container,
  Stack,
  Avatar,
  Typography,
  Checkbox,
  InputBase,
  Pagination,
  Collapse
} from "@mui/material";
import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import { Link } from "react-router-dom";
import TableBody from "../../../GlobalComponent/TableBodySeven";
import CancelIcon from "@mui/icons-material/Cancel";
import MsgData from "../../Main-Dashboard/Station/Mail/MessageData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const HmyInbox = () => {
  const [search, setSearch] = React.useState(false);
  const [dssfolder , setDSSFolder] = useState(false)
  const [searchopen, setSearchOpen] = useState(false);
  const [addfilefolder, setAddFileFolder] = useState(false);
  const clr = { color: "#fff" };
  const iconcss = {
    width: "22px",
    height: "22px",
    fontSize: "10px",
    bgcolor: "black",
  };
  const textstyle = {
    fontSize: "13px",
    color: "#1688ca",
    ":hover": { textDecoration: "underline" },
  };

  const categorydata = [
    { id: 1, name: "Biomedical" },
    { id: 2, name: "Budget" },
    { id: 3, name: "Capital" },
    { id: 4, name: "Engineering" },
    { id: 5, name: "Finance" },
    { id: 6, name: "misc messages" },
    { id: 7, name: "Ops Files" },
    { id: 8, name: "Security Ops" },
  ];

  return (
    <>
     
          <Grid container sx={{bgcolor:"#fff",minHeight:"100vh",pb:10}}>
            
            
            <Grid item xs={12} sx={{ position: "relative", mb: "2px" }}>
              <InfoSubHead
                name="Message Unread And Read"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname={""}
                urlname1={
                  <a href="/add-message" style={{color:"#fff"}}><Stack direction="row">
                    
                  <ArrowDropDownIcon/>
                  <Typography>Add Message</Typography>
                </Stack></a>
                }
              />
             
            </Grid>

           
           
            <Grid item xs={12} sx={{ bgcolor: "#fff",height:"100%"}}>
              <TableHead
                name1={"TITLE"}
                name2={"FROM"}
                name3={"DATE"}
                name4={<Typography sx={{color:"#1688ca",lineHeight:"15px",fontSize:"15px"}}>UNREAD MESSAGES</Typography>}
                name5={""}
                name6={""}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{bgcolor: "#fff",maxHeight:"230px",overflowY:"auto"}}>
              {MsgData.map((data) => {
                const { id, date, title, message, imgUrl } = data;
                return (
                  <Box key={id} >
                    <Box  sx={{ ":hover": { bgcolor: "#e6eff8" } ,bgcolor: "#f9f9f9"}}>
                    <TableBody
                      name1={
                        // <Link to="/viewemail">
                          <Typography sx={textstyle}>{title}</Typography>
                        // </Link>
                      }
                      name2={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Avatar src={imgUrl} />
                        </Box>
                      }
                      name3={
                        <Typography sx={{ fontSize: "13px" }}>
                          {date}
                        </Typography>
                      }
                      name4={
                        <Typography sx={{ fontSize: "13px" }}>
                          {/* {message} */}
                        </Typography>
                      }
                      name5={
                       ""
                      }
                      name6={
                       ""
                      }
                    />
                    </Box>

                    <Box  sx={{ ":hover": { bgcolor: "#e6eff8" }}}>
                    <TableBody
                      name1={
                        // <Link to="/viewemail">
                          <Typography sx={textstyle}>{title}</Typography>
                        // </Link>
                      }
                      name2={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Avatar src={imgUrl} />
                        </Box>
                      }
                      name3={
                        <Typography sx={{ fontSize: "13px" }}>
                          {date}
                        </Typography>
                      }
                      name4={
                        <Typography sx={{ fontSize: "13px" }}>
                          {/* {message} */}
                        </Typography>
                      }
                      name5={
                       ""
                      }
                      name6={
                       ""
                      }
                    />
                    </Box>
                   
                  </Box>
                  
                );
              })}
            </Grid>
           

         

          <Grid container>
            <Grid item xs={12} sx={{bgcolor: "#fff" }}>
              <TableHead
                name1={"TITLE"}
                name2={"FROM"}
                name3={"DATE"}
                name4={<Typography sx={{color:"#1688ca",lineHeight:"15px",fontSize:"15px"}}>READ MESSAGES</Typography>}
                name5={""}
                name6={""}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{ bgcolor: "#fff",maxHeight:"230px",overflowY:"auto"}}>
              {MsgData.map((data) => {
                const { id, date, title, message, imgUrl } = data;
                return (
                  <Box key={id}>
                   <Box  sx={{ ":hover": { bgcolor: "#e6eff8" } ,bgcolor: "#f9f9f9"}}>
                   <TableBody 
                    
                      name1={
                        // <Link to="">
                          <Typography sx={textstyle}>{title}</Typography>
                        // </Link>
                      }
                      name2={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Avatar src={imgUrl} />
                        </Box>
                      }
                      name3={
                        <Typography sx={{ fontSize: "13px" }}>
                          {date}
                        </Typography>
                      }
                      name4={
                        <Typography sx={{ fontSize: "13px" }}>
                          {message}
                        </Typography>
                      }
                      name5={
                       ""
                      }
                      name6={
                       ""
                      }
                    />
                   </Box>
                   <Box  sx={{ ":hover": { bgcolor: "#e6eff8" }}}>
                   <TableBody 
                    
                      name1={
                        // <Link to="">
                          <Typography sx={textstyle}>{title}</Typography>
                        // </Link>
                      }
                      name2={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Avatar src={imgUrl} />
                        </Box>
                      }
                      name3={
                        <Typography sx={{ fontSize: "13px" }}>
                          {date}
                        </Typography>
                      }
                      name4={
                        <Typography sx={{ fontSize: "13px" }}>
                          {message}
                        </Typography>
                      }
                      name5={
                       ""
                      }
                      name6={
                       ""
                      }
                    />
                   </Box>
                  </Box>
                );
              })}
            </Grid>

           
          </Grid>
         

          </Grid>
      
    </>
  );
};

export default HmyInbox;
