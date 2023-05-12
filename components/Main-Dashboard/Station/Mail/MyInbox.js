import React, { useState } from "react";
import TableHead from "../../../../GlobalComponent/TableHeadSeven";
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
import DropDown from "../../../../GlobalComponent/DropDown6";
import MenuIcon from "@mui/icons-material/Menu";
import TableBody from "../../../../GlobalComponent/TableBodySeven";
import CancelIcon from "@mui/icons-material/Cancel";
import MsgData from "./MessageData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FolderSlider from "../../../../GlobalComponent/FolderSlider";
import SearchDate from "../../../../GlobalComponent/SearchDate";

const MyInbox = () => {
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
      <Container maxWidth="lg">
        <Box sx={{ padding: "15px" }}>
          <Grid container>
            <Grid item xs={12} sx={{pr:"25px"}}>
            {
               <Collapse easing={0} timeout={"auto"} in={dssfolder}  {...(!dssfolder ? { timeout: 1000 } : {timeout: 1000})}>
                <FolderSlider
                name1={"Biomedical"}
                name2={"Budget"}
                name3={"Capital"}
                name4={"Engineering"}
                name5={"Finance"}
                name6={"misc messages"}
                name7={"Ops Files"}
                name8={"Security Ops"}

                display={"none"}
                />
               </Collapse>
            }
            </Grid>
            {
            <Collapse easing={0} timeout={"auto"} in={addfilefolder} {...(!addfilefolder ? { timeout: 1000 } : {timeout: 1000})}>
              <Grid item xs={12}>
              <Grid container sx={{ mb: 1 }}>

                <Grid item xs={12} sx={{ mb: "7px" }}>
                  <InfoSubHead
                    urlname1="Messaging Category"
                    urlname={
                      <Stack direction="row">
                        <ArrowDropDownIcon /> <CancelIcon onClick={() => {
                          setAddFileFolder(!addfilefolder);
                        }} />
                      </Stack>
                    }
                    backgroundColor={"#1688ca"}
                    color={"#fff"}
                  />
                </Grid>
                <Grid container sx={{ maxHeight: "350px", overflowY: "auto" }}>
                  <Grid
                    item
                    xs={12}
                    sx={{ bgcolor: "#fff", p: 1, textAlign: "right" }}
                  >
                    <InputBase
                      sx={{ border: "1px solid gray", borderRadius: "0.25rem" }}
                    />
                  </Grid>
                  <Box sx={{ p: 1, width: "100%", bgcolor: "#fff" }}>
                    <Grid
                      container
                      sx={{ bgcolor: "#1688ca", p: 1, color: "#fff" }}
                    >
                      <Grid item xs={9}>
                        <Typography>CATEGORY NAME</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography>ACTION</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ px: 1, width: "100%", bgcolor: "#fff" }}>
                    {categorydata.map((data) => {
                      const { id, name } = data;
                      return (
                        <Grid
                          key={id}
                          container
                          sx={{
                            p: 1,
                            color: "#000",
                            borderBottom: "1px solid lightgrey",
                            ":hover": { bgcolor: "#dee7f5" },
                          }}
                        >
                          <Grid item xs={9}>
                            <Typography sx={{ fontSize: "13px" }}>
                              {name}
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Stack direction="row" spacing={1}>
                              <ModeEditIcon />
                              <CancelIcon />
                            </Stack>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </Box>
                  <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
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
              </Grid>
              </Grid>
            </Collapse>
            }
            <Grid item xs={12} sx={{ position: "relative", mb: "7px" }}>
              <InfoSubHead
                name="Unread Messages"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname1={
                  <Stack direction="row">
                    <MenuIcon onClick={() => setSearch(!search)} />{" "}
                    <ArrowDropDownIcon onClick={() =>setDSSFolder(!dssfolder)} />
                  </Stack>
                }
              />
              {search && 
                <Box sx={{position:"relative"}}>
                  <DropDown
                    top={"1px"}
                    name1={
                      <Typography
                        onClick={() => {
                          setAddFileFolder(!addfilefolder);
                        }}
                        sx={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Add File Folder
                      </Typography>
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
                      <Link to="/station-emails" style={clr}>
                        Station Emails
                      </Link>
                    }
                    name6={
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
              sx={{ bgcolor: "#fff", pt: 1,px:1, textAlign: "right" }}
            >
              <InputBase
                sx={{ border: "1px solid gray", borderRadius: "0.25rem" }}
              />
            </Grid>

            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
              <TableHead
                name1={"TITLE"}
                name2={"FROM"}
                name3={"DATE"}
                name4={"MESSAGE"}
                name5={"ACTION"}
                name6={<CancelIcon  sx={{color:"#1688ca"}} />}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{ px: 1, bgcolor: "#fff" }}>
              {MsgData.map((data) => {
                const { id, date, title, message, imgUrl } = data;
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
                            <CancelIcon   sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                          <Box>
                            <AddCircleIcon  sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
                          </Box>
                          <Box>
                            <ArrowCircleRightIcon  sx={{color:"#1688ca",width:"20px",height:"20px"}}/>
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
            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
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

          <Grid container>
            <Grid item xs={12} sx={{ mb: "7px" }}>
              <InfoSubHead
                name="Read Messages"
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

            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
              <TableHead
                name1={"TITLE"}
                name2={"FROM"}
                name3={"DATE"}
                name4={"MESSAGE"}
                name5={"ACTION"}
                name6={<CancelIcon />}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{ bgcolor: "#fff", p: 1 }}>
              {MsgData.map((data) => {
                const { id, date, title, message, imgUrl } = data;
                return (
                  <Box key={id} sx={{ ":hover": { bgcolor: "#e6eff8" } }}>
                    <TableBody
                      name1={
                        <Link to="">
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
                            <CancelIcon />
                          </Box>
                          <Box>
                            <AddCircleIcon />
                          </Box>
                          <Box>
                            <ArrowCircleRightIcon />
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

            <Grid item xs={12} sx={{ p: 1, bgcolor: "#fff" }}>
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

export default MyInbox;
