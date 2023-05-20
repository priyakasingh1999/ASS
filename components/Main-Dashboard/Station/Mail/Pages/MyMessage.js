import React, { useState } from "react";
import TableHead from "../../../../../GlobalComponent/TableHeadSeven";
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
  Collapse,
  Badge,
} from "@mui/material";
import InfoSubHead from "../../../../../GlobalComponent/InfoSubHead";
import Search from "../../../../../GlobalComponent/Search";
import { Link } from "react-router-dom";
import DropDown from "../../../../../GlobalComponent/DropDown";
import MenuIcon from "@mui/icons-material/Menu";
import TableBody from "../../../../../GlobalComponent/TableBodySeven";
import CancelIcon from "@mui/icons-material/Cancel";
import MsgData from "./MyMessageData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const MyMessage = () => {
  const [search, setSearch] = React.useState(false);

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
    fontSize: "12px",
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
      <Container maxWidth="lg">
        <Box sx={{ padding: "15px" }}>
          <Grid container>
           
            <Grid item xs={12} sx={{ position: "relative", mb: "7px" }}>
              <InfoSubHead
                name="My Messages"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname1={<MenuIcon onClick={() => setSearch(!search)} />}
              />
              
              {search && (
               <Box>
                  <DropDown
                    top={"44px"}
                    name1={
                      <Link style={clr} to="/myinbox">
                        <Stack direction="row" spacing={5}>
                          <Box>
                            <Typography
                              onClick={() => {
                                setAddFileFolder(!addfilefolder);
                              }}
                              sx={{ fontSize: "14px", cursor: "pointer" }}
                            >
                              Messages
                            </Typography>
                          </Box>
                          <Box>
                           
                            <Badge
                              color="error"
                              badgeContent={1000}
                              max={623}
                            ></Badge>
                          </Box>
                        </Stack>
                      </Link>
                    }
                    name2={
                      <Link to="/deleted-message" style={clr}>
                        Deleted Emails
                      </Link>
                    }
                    name3={
                        <Typography
                        onClick={() => {
                          setSearchOpen(true);
                        }}
                        sx={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Search
                      </Typography>
                    }
                    maxWidth={138}
                    bgcolor={"#1688ca"}
                    color={"#fff"}
                    display4="none"
                    display5="none"
                  />

                  {searchopen && (
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 6,
                        top: "100%",
                        left: "20%",
                        zIndex: 999,
                        border: "1px solid #C3C3C3",
                        bgcolor: "#fff",
                        zIndex:9999999
                      }}
                    >
                      <Search
                        searchopen={searchopen}
                        setSearchOpen={setSearchOpen}
                      />
                    </Box>
                  )}

                  
</Box>
              )}
              
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

            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
              <TableHead
                name1={"TITLE"}
                name2={"TO"}
                name3={"DATE"}
                name4={"MESSAGE"}
                name5={"ACTION"}
                name6={<CancelIcon sx={{color:"#1688ca"}} />}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff",maxHeight:350,overflowY:"auto" }}>
              {MsgData.map((data) => {
                const { id, date, title, message, imgUrl } = data;
                return (
                  <Box key={id} sx={{ ":hover": { bgcolor: "#e6eff8" },py:2 }}>
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
                         +
                        </Box>
                      }
                      name3={
                        <Typography sx={{ fontSize: "12px" }}>
                          {date}
                        </Typography>
                      }
                      name4={
                        <Typography sx={{ fontSize: "12px" }}>
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
                            <ArrowCircleRightIcon   sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                          <Box>
                            <CancelIcon   sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                         
                          
                        </Stack>
                      }
                      name6={
                        <Typography sx={textstyle}>
                          <Checkbox size="small" />
                        </Typography>
                      }
                    />
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={12} sx={{ p: 1,mt:2}}>
              <Box>
                <Pagination
                  count={5}
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

export default MyMessage;
