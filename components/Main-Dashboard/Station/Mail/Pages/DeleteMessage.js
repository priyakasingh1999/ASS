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
  Button
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
import { createGlobalStyle } from "styled-components";
import SearchDate from "../../../../../GlobalComponent/SearchDate";

const CusStyle = createGlobalStyle`
.css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: rgb(22 136 202);
    color: #fff;
}
.css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover {
    background-color: rgb(22 136 202) !important;
    color: #fff;
}
.css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root{
    color: rgb(22 136 202);
}
`

const DeleteMessage = () => {
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
        <CusStyle/>
        <Box sx={{ padding: "15px" }}>
          <Grid container>
            <Grid item xs={12} sx={{ position: "relative", mb: "7px" }}>
              <InfoSubHead
                name="Deleted Messages"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname1={<MenuIcon onClick={() => setSearch(!search)} />}
              />
              
              {search && (
               <Box>
                  <DropDown
                    top={"44px"}
                    name1={
                      <Link style={clr} to="/my-messages">
                       <Typography
                              onClick={() => {
                                setAddFileFolder(!addfilefolder);
                              }}
                              sx={{ fontSize: "14px", cursor: "pointer" }}
                            >
                              My Messages
                            </Typography>
                      </Link>
                    }
                    name2={
                      <Link to="/myinbox" style={clr}>
                        Inbox
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
                    maxWidth={133}
                    bgcolor={"#1688ca"}
                    color={"#fff"}
                    display4="none"
                    display5="none"
                  />

                  {
                    <Collapse  easing={0} timeout={"auto"} in={searchopen} {...(!searchopen ? {timeout:1000}:{timeout:1000})}
                    
                    >
                    
                     <SearchDate setSearchOpen={setSearchOpen}/>
                    
                    </Collapse>
                    
                  }

                  
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

            <Grid item xs={12} sx={{  bgcolor: "#fff" }}>
              <TableHead
                name1={"TITLE"}
                name2={"FROM"}
                name3={"DATE"}
                name4={"MESSAGE"}
                name5={"ACTION"}
                name6={<CancelIcon sx={{color:"#1688ca"}} />}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{ py: 1, bgcolor: "#fff"}}>
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
                          <Avatar src={imgUrl} />
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
              <Grid item xs={12} sx={{ p: 1,mt:2}}>
              <Box>
                <Pagination
                siblingCount={15}
                  count={32}
                  variant="outlined"
                  shape="rounded"
                  sx={{ display: "flex", justifyContent: "left" }}
                />
              </Box>
            </Grid>
            </Grid>
            
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DeleteMessage;
