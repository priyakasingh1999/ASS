import React, { useState } from "react";
import TableHead from "../GlobalComponent/TableHead";
import { Grid, Box, Container, Stack, Avatar, Typography } from "@mui/material";
import InfoSubHead from "../GlobalComponent/InfoSubHead";
import Search from "../GlobalComponent/Search";
import { Link } from "react-router-dom";
import DropDown from "../GlobalComponent/DropDown";
import MenuIcon from "@mui/icons-material/Menu";
import TableBody from "../GlobalComponent/TableBody";
import Data from '../Station_Discussion/Pages/SystemFileData'

const Directory = () => {
  const [search, setSearch] = React.useState(false);

  const [searchopen, setSearchOpen] = useState(false);
  const clr = { color: "#fff" };
  const iconcss = {
    width: "22px",
    height: "22px",
    fontSize: "10px",
    bgcolor: "black",
  };
  const textstyle={fontSize:"14px",color:"#1688ca",":hover":{textDecoration:"underline"}}

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ padding: "15px" }}>
          <Grid container>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <InfoSubHead
                name="Directory"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname1={<MenuIcon onClick={() => setSearch(!search)} />}
                urlname={
                  <Stack direction="row" spacing={1}>
                    <Link to="/associates"><Avatar sx={iconcss}>MA</Avatar></Link>
                   <Link to="/allassociate"> <Avatar sx={iconcss}>AA</Avatar></Link>
                  </Stack>
                }
              />
              {search && (
                <Box>
                  <DropDown
                    top={"44px"}
                    name1={
                      <Link to="/inviteassociates" style={clr}>
                        Add Associates
                      </Link>
                    }
                    name2={
                      <Link to="/associates" style={clr}>
                        My Associates
                      </Link>
                    }
                    name3={
                      <Link to="/associatemember" style={clr}>
                        Associates Bio's
                      </Link>
                    }
                    name4={
                      <Typography
                        onClick={() => {
                          setSearchOpen(true);
                        }}
                        sx={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Search
                      </Typography>
                    }
                    name5={
                      <Link to="/directory" style={clr}>
                        Directory
                      </Link>
                    }
                    maxWidth={135}
                    bgcolor={"#1688ca"}
                    color={"#fff"}
                  />

                  {searchopen && (
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 6,
                        top: "100%",
                        left: "12%",
                        zIndex: 999,
                        border: "1px solid #C3C3C3",
                        bgcolor: "#fff",
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
            <Grid item xs={12}>
              <TableHead
                name1={"ASSOCIATES NAME"}
                name2={"EMAIL ID"}
                name3={"TITLE"}
                name4={"COMPANY"}
                name5={"PHONE"}
                name6={"CLICK TO VIEW"}
                textclr="black"
              />
            </Grid>

            <Grid item xs={12} sx={{bgcolor:"#fff"}}>
            {
                Data.map((data)=>{
                    const{id,documentName,date,dueDate,num,size}=data
                    return(
                        <Box key={id} sx={{":hover":{bgcolor:"#e6eff8"}}}>
                            <TableBody
                            name1={<Stack direction="row" sx={{alignItems:"center",justifyContent:"space-between"}}><Typography  sx={{fontSize:"13px"}}>Chris Hepple</Typography></Stack>}
                            name2={<Typography sx={{fontSize:"13px"}} >{documentName}</Typography>}
                            name3={<Typography  sx={{fontSize:"13px"}} >{date}</Typography>}
                            name4={<Typography  sx={{fontSize:"13px"}}>{dueDate}</Typography>}
                            name5={<Link to=""><Typography  sx={textstyle}>{num}</Typography></Link>}
                            name6={<Link to=""><Typography  sx={textstyle}>View Profile</Typography></Link>}
                            name7={<Avatar src="./img/john.jpg"/>}
                            />
                        </Box>
                    )
                })
            }
            
        </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Directory;
