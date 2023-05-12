import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "react-bootstrap/Table";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { RecentSes } from "../Api/Session";
import data from "../components/Admin/Admin-data";
import moment from "moment";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import FiveIconList from "../GlobalComponent/FiveIconList"
import DropDown from "../GlobalComponent/DropDown";
import MyStationForm from '../components/Main-Dashboard/Station/MyStation/MyStationForm'


const Clr = {color:"#fff"}

const Discussion = () => {

  const [form, setForm] = useState(false);
  const [showDropdown, setDropdown] = useState(false);
  
  const [discuss, setdiscuss] = useState([]);
  useEffect(() => {
    RecentSes().then((data) => {
      setdiscuss(data);
    });
  }, [showDropdown]);
  if (!discuss) {
    return (
      <Stack
        sx={{
          color: "grey.500",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    );
  }
  let data = discuss.splice(0, discuss.length - 1);
  return (
    <div>
       {form && <MyStationForm setForm={setForm} form={form} />}
      <Container maxWidth="lg" sx={{marginTop: "50px" }}>
      <Box sx={{maxWidth:"200px"}}>
            <FiveIconList bgclr="rgba(0, 0, 0, 0.25)"/>
          </Box>
        <Box sx={{ bgcolor: "#ffffff"}}>
          
          <Box
            sx={{
              backgroundColor: "#ddd7ff",
              justifyContent: "space-between",
              padding: "10px",
              display: "flex",
              position:"relative"
            }}
          >
            <Box>
              <MenuIcon sx={{ justifySelf: "start" }} onClick={() => setDropdown(!showDropdown)} />
            </Box>
            <Typography
              variant="span"
              color="initial"
              sx={{ fontSize: "19px" }}
            >
              Station Sessions
            </Typography>
            <Box width="10px"></Box>
            {showDropdown && <DropDown
             bgcolor={"#1280c2"} 
             top={"39.5px"} 
             
              name1={<Link style={Clr} to="/AddSessionAssociate">Add Station</Link>}
              name2={<Link style={Clr} to="/MyStationSession">My Station Sessions</Link>} 
              name3={<Link style={Clr} to="/DirectSessions">Direct Sessions</Link>} 
              name4={<Link style={Clr} to="/StationSession">All Station Sessions</Link>} 
              name5={<Typography sx={{fontSize:"13px"}}  onClick={() => {
                setForm(!form);
              }}>Create Station</Typography>} 
              color="#fff"
              maxWidth={170}
              />}
          </Box>

          <Box sx={{ padding: "7px" }}>
            <ArrowDropDownCircleIcon /> <ArrowDropDownCircleIcon />{" "}
            <ArrowDropDownCircleIcon />
          </Box>
          <Box sx={{overflowX:"auto"}}>
          <Table striped bordered hover>
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
                  style={{ color: "#000", fontSize: "13px", fontWeight: "400" }}
                >
                  TOPIC
                </th>
                <th
                  style={{
                    color: "#000",
                    fontSize: "13px",
                    fontWeight: "lighter",
                  }}
                >
                  From
                </th>
                <th
                  style={{
                    color: "#000",
                    fontSize: "13px",
                    fontWeight: "lighter",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    color: "#000",
                    fontSize: "13px",
                    fontWeight: "lighter",
                  }}
                >
                  RESPONSES{" "}
                </th>
                <th
                  style={{
                    color: "#000",
                    fontSize: "13px",
                    fontWeight: "lighter",
                  }}
                >
                  NEW{" "}
                </th>
                <th
                  style={{
                    color: "#000",
                    fontSize: "13px",
                    fontWeight: "lighter",
                  }}
                >
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {discuss.length > 0 &&
                data.map((data) => {
                  const {
                    id,
                    textbox,
                    file,
                    station,
                    created_at,
                    session_associate,
                  } = data;
                  const { name } = session_associate[0];
                  let formattype = file.split(".");
                  let arrayfile = [formattype[1]];

                  return (
                    <tr>
                      <td sx={{ display: "flex", justifyContent: "start"}}>
                        <Box sx={{ display: "flex", justifyContent: "start" }}>
                          <Typography sx={{fontSize:'14px',textAlign:"left"}}>{textbox}</Typography>
                        </Box>
                      </td>
                      <td>
                        <Box sx={{display:{xs:"flex"},justifyContent:"center",alignItems:"center"}}>
                          <Avatar
                            alt="Remy Sharp"
                            src={
                              name === "Puja"
                                ? `./img/puja1.png`
                                : `./img/john.jpg`
                            }
                            className="global_icon_size cursor-pointer rs_user_profile"
                          />
                        </Box>
                      </td>
                      <td style={{ padding: "15px" }}>
                        <p>{moment(created_at).format("LLL")}</p>
                        <Typography sx={{fontSize:{xs:"13px",sm:"15px"},fontWeight:"bold"}} color="initial">
                          {station}
                        </Typography>
                      </td>
                      <td>
                        <Badge badgeContent={4} color="success" />
                      </td>
                      <td>
                        <Badge badgeContent={1} color="success" />
                      </td>
                      <td>
                        <Box sx={{display:{xs:"flex"},justifyContent:{xs:"center"},gap:{xs:"10px"}}}>
                        <Box sx={{mb:"5px"}}>
                        <Link to={`/discussion/${id}`}>
                          <ArrowCircleRightIcon />
                        </Link>
                        </Box>
                        <Box>
                          {arrayfile.map((da) => {
                            console.log(da);
                            if (da == "jpg") {
                              return (
                                <>
                                  <a
                                    href={`https://assoc.studiomyraa.com/public/uploads/images/${file}`}
                                  >
                                    <img
                                      style={{ widows: "40px", height: "30px" }}
                                      src={`https://app.associatenetwork.com/images/docicons/jpeg.png`}
                                    ></img>
                                  </a>
                                </>
                              );
                            } else if (da === "png") {
                              return (
                                <>
                                  <a
                                    href={`https://assoc.studiomyraa.com/public/uploads/images/${file}`}
                                  >
                                    
                                    <img
                                      style={{ widows: "40px", height: "30px" }}
                                      src={`https://app.associatenetwork.com/images/docicons/pdf.png`}
                                    ></img>
                                  </a>
                                </>
                              );
                            } else {
                              return (
                                <>
                                  <a
                                    href={`https://assoc.studiomyraa.com/public/uploads/images/${file}`}
                                  >
                                    
                                    <img
                                      style={{ widows: "40px", height: "30px" }}
                                      src={`https://app.associatenetwork.com/images/docicons/word.png`}
                                    ></img>
                                  </a>
                                </>
                              );
                            }
                          })}
                        </Box>
                        </Box>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Discussion;
