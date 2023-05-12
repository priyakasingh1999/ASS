import React, { useState } from "react";
import TableHead from "../../../../GlobalComponent/TableHeadMsg";
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
import InfoSubHead from "../../../../GlobalComponent/InfoSubHead";
import Search from "../../../../GlobalComponent/Search";
import { Link } from "react-router-dom";
import DropDown from "../../../../GlobalComponent/DropDown";
import MenuIcon from "@mui/icons-material/Menu";
import TableBody from "../../../../GlobalComponent/TableBodyMsg";
import CancelIcon from "@mui/icons-material/Cancel";
import MsgData from "./MessageData";
import AssociateMsgData from "./AssociateMsgData";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SearchDate from "../../../../GlobalComponent/SearchDate";

const AssociateInbox = () => {
  const [search, setSearch] = React.useState(false);
  const [searchopen, setSearchOpen] = useState(false);
  const clr = { color: "#fff" };
  
  const textstyle = {
    fontSize: "12px",
    color: "#1688ca",
    fontWeight:"bold",
    ":hover": { textDecoration: "underline" },
  };

  

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ padding: "15px" }}>
          <Grid container>
                      
            <Grid item xs={12} sx={{ position: "relative", mb: "7px" }}>
              <InfoSubHead
                name="Associates Unread Messages"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname1={
                    <MenuIcon onClick={() => setSearch(!search)} />
                }
              />
              {search && 
                <Box sx={{position:"relative"}}>
                  <DropDown
                    top={"1px"}
                    name1={
                        <Link to="/myinbox" style={clr}>
                        Inbox
                      </Link>
                    }
                    name2={
                      <Link to="/add-message" style={clr}>
                        Add Message
                      </Link>
                    }
                    name3={
                      <Link to="/my-messages" style={clr}>
                        My Message
                      </Link>
                    }
                    name4={
                      <Link to="/deleted-message" style={clr}>
                        Deleted Email
                      </Link>
                    }
                   
                    name5={
                      <Typography
                        onClick={() => {
                          setSearchOpen(true);
                        }}
                        sx={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Search
                      </Typography>
                    }
                    maxWidth={135}
                    bgcolor={"#1688ca"}
                    color={"#fff"}
                  />

                  {searchopen && 
                    <SearchDate setSearchOpen={setSearchOpen}/>
                  }
                </Box>
              }
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ bgcolor: "#fff", py: 1,px:1, textAlign: "right" }}
            >
              <InputBase
                sx={{ border: "1px solid gray", borderRadius: "0.25rem" }}
              />
            </Grid>

            <Grid item xs={12} sx={{bgcolor: "#fff" }}>
              <TableHead
                name1={"TITLE"}
                name2={"FROM"}
                name3={"DATE"}
                name4={"MESSAGE"}
                name5={"ACTION"}
                name7={"ID"}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{bgcolor: "#fff" }}>
              {AssociateMsgData.map((data) => {
                const { id, date, title, message, imgUrl,idNo } = data;
                return (
                  <Box key={id} sx={{ ":hover": { bgcolor: "#e6eff8" } ,py:2 }}>
                    <TableBody
                      name1={
                        <Link to="/viewemail">
                          <Typography sx={textstyle}>{title}</Typography>
                        </Link>
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
                        <Stack
                          direction={"row"}
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                            <Box>
                            <ArrowCircleRightIcon  sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                          <Box>
                            <CancelIcon   sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                          
                          
                        </Stack>
                      }
                     
                      name7={
                        <Typography sx={{fontSize:"13px"}}>
                          {idNo}
                        </Typography>
                      }
                    />
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
              <Box>
                <Pagination
                  count={2}
                  variant="outlined"
                  shape="rounded"
                  sx={{ display: "flex", justifyContent: "end" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sx={{ mb: "7px" }}>
              <InfoSubHead
                name="Associates Read Messages"
                backgroundColor={"#1688ca"}
                color={"#fff"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ bgcolor: "#fff", p: 1, textAlign: "right" }}
            >
              <InputBase
                sx={{ border: "1px solid gray", borderRadius: "0.25rem" }}
              />
            </Grid>

            <Grid item xs={12} sx={{bgcolor: "#fff" }}>
              <TableHead
                name1={"TITLE"}
                name2={"FROM"}
                name3={"DATE"}
                name4={"MESSAGE"}
                name5={"ACTION"}
                name7={"ID"}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{bgcolor: "#fff" }}>
              {MsgData.map((data) => {
                const { id, date, title, message, imgUrl,idNo } = data;
                return (
                  <Box key={id} sx={{ ":hover": { bgcolor: "#e6eff8" } ,py:2 }}>
                    <TableBody
                      name1={
                        <Link to="/viewemail">
                          <Typography sx={textstyle}>{title}</Typography>
                        </Link>
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
                        <Stack
                          direction={"row"}
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                           <Box>
                            <ArrowCircleRightIcon  sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                          <Box>
                            <CancelIcon   sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                        </Stack>
                      }
                     
                      name7={
                        <Typography sx={{fontSize:"13px"}}>
                          {idNo}
                        </Typography>
                      }
                    />
                  </Box>
                );
              })}
            </Grid>

            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
              <Box>
                <Pagination
                  count={1}
                  variant="outlined"
                  shape="rounded"
                  sx={{ display: "flex", justifyContent: "end" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AssociateInbox;
