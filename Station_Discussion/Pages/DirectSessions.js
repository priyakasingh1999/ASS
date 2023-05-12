import React from "react";
import { Container, Grid, Box, Typography, Badge, Avatar,Collapse } from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import MenuIcon from "@mui/icons-material/Menu";
import DropDown from "../../GlobalComponent/DropDown";
import FiveIconList from "../../GlobalComponent/FiveIconList";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";


const Style=createGlobalStyle`
table, tr, td, th {
  border: none;
  border-collapse: collapse;
}
`

const DirectSessions = () => {
  const [search, setSearch] = React.useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Style/>
      <Grid container>
        <Grid item xs={3} sx={{ mb: 1 }}>
          <Box>
            <FiveIconList bgclr="rgba(0, 0, 0, 0.25)" />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ position: "relative" }}>
          <InfoSubHead
            name={<Typography sx={{fontSize:"20px"}}>Direct Sessions</Typography>}
            backgroundColor={"#1688ca"}
            color={"#fff"}
            urlname1={<MenuIcon onClick={() => setSearch(!search)} />}
            urlname={""}
          />
          {search && (
            <Collapse orientation="horizontal" collapsedSize={40}>
            <DropDown
              top={"46.5px"}
              name1="Manage Folders"
              name2={"Add Session"}
              name3={"My Station Sessions"}
              name4={"All Station Sessions"}
              name5={"Create Station"}
              name6={"Station Messages"}
              maxWidth={135}
            />
            </Collapse>
          )}
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ overflowX: "auto" }}>
            <Table striped bordered hover className="m-0">
              <thead
                style={{
                  backgroundColor: "#cfdce7",
                  fontSize: "10px",
                  fontWeight: "lighter",
                }}
              >
                <tr
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    textAlign: "start",
                  }}
                >
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      minWidth:"300px"
                    }}
                  >
                   <Typography sx={{fontSize:"12px",textAlign:"left"}}> TOPIC</Typography>
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "lighter",
                      minWidth:"80px"
                    }}
                  >
                    
                    <Typography sx={{fontSize:"12px"}}>From</Typography>
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "lighter",
                      minWidth:"80px"
                    }}
                  >
                    
                    <Typography sx={{fontSize:"12px"}}>Date</Typography>
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "lighter",
                    }}
                  >
                    
                    <Typography sx={{fontSize:"12px"}}>RESPONSES</Typography>
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "lighter",
                    }}
                  >
                    
                    <Typography sx={{fontSize:"12px"}}>NEW</Typography>
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "lighter",
                    }}
                  >
                    
                    <Typography sx={{fontSize:"12px"}}>ACTION</Typography>
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td sx={{ display: "flex", justifyContent: "start" }}>
                    <Box sx={{ display: "flex", justifyContent: "start" }}>
                      <Typography sx={{ fontSize: "14px", textAlign: "left" }}>
                        tt
                      </Typography>
                    </Box>
                  </td>
                  <td>
                    <Box
                      sx={{
                        display: { xs: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={"./img/john.jpg"}
                        className="global_icon_size cursor-pointer rs_user_profile"
                      />
                    </Box>
                  </td>
                  <td style={{ padding: "15px" }}>
                    <p>pp</p>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "15px" },
                        fontWeight: "bold",
                      }}
                      color="initial"
                    >
                      ap
                    </Typography>
                  </td>
                  <td>
                    <Badge badgeContent={4} color="success" />
                  </td>
                  <td>
                    <Badge badgeContent={1} color="success" />
                  </td>
                  <td>
                    <Box
                      sx={{
                        display: { xs: "flex" },
                        justifyContent: { xs: "center" },
                        gap: { xs: "10px" },
                      }}
                    >
                      <Box sx={{ mb: "5px" }}>
                        <Link to={"#"}>
                          <ArrowCircleRightIcon />
                        </Link>
                      </Box>
                    </Box>
                  </td>
                </tr>
              </tbody> */}
            </Table>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{bgcolor:"#fff",py:1}}>
            <Typography sx={{fontSize:"12px",textAlign:"center"}}>No Data Present</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DirectSessions;
