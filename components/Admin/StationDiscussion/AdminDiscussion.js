import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "react-bootstrap/Table";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { RecentSes } from "../../../Api/Session";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import {Collapse,Grid,Typography,Pagination,InputBase,} from "@mui/material";
import DropDown from "../../../GlobalComponent/DropDown";
import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import FolderSlider from "../../../GlobalComponent/FolderSlider";
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from "@mui/icons-material/Cancel";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateDiscussion from "./CreateDiscussion";


const Clr = { color: "#fff" };

const AdminDiscussion = () => {
  const [showDropdown, setDropdown] = useState(false);
  const [dssfolder , setDSSFolder] = useState(false)
  const [dssfolder2 , setDSSFolder2] = useState(false)
  const [addfilefolder, setAddFileFolder] = useState(false);
  const [createfilefolder, setCreateFileFolder] = useState(false);

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


  const categorydata = [
    { id: 1, name: "	Budgets Ops" },
    { id: 2, name: "Facilities" },
    { id: 3, name: "	Financial planning" },
    { id: 4, name: "Ops Group" },
    { id: 5, name: "Pats folder" },
    { id: 6, name: "Projects" },
    { id: 7, name: "Security" },
    { id: 8, name: "Staffing" },
    { id: 9, name: "Weather Alerts" },
  ];







  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
      <Box  sx={{ padding: "0 25px 0 0"}}>
        <Grid container>
        <Grid item xs={12}>
        {
              <Collapse
                easing={0}
                timeout={"auto"}
                in={dssfolder2}
                {...(!dssfolder2 ? { timeout: 1000 } : { timeout: 1000 })}
              >
                <FolderSlider
                  name1={"Budgets Ops"}
                  name2={"Facilities"}
                  name3={"Financial Planning"}
                  name4={"Ops Group"}
                  name5={"Pats Folder"}
                  name6={"Projects"}
                  name7={"Leadership"}
                  name8={"Process"}
                  name9={"Productivity"}
                  display={"block"}
                />
              </Collapse>
            }
            {
              <Collapse
                easing={0}
                timeout={"auto"}
                in={dssfolder}
                {...(!dssfolder ? { timeout: 1000 } : { timeout: 1000 })}
              >
                <FolderSlider
                  name1={"All Associates"}
                  name2={"Biomedical"}
                  name3={"Finance"}
                  name4={"Hospital Security"}
                  name5={"Human Resources"}
                  name6={"Information Technology"}
                  name7={"Leadership"}
                  name8={"Process"}
                  name9={"Productivity"}
                  display={"block"}
                />
              </Collapse>
            }


         </Grid>
        </Grid>
        </Box>
        <Box>
          {
            <Collapse easing={0} timeout={"auto"} in={addfilefolder} {...(!addfilefolder ? { timeout: 1000 } : {timeout: 1000})}>
              <Grid item xs={12}>
              <Grid container sx={{ mb: 1 }}>

                <Grid item xs={12} sx={{ mb: "7px" }}>
                  <InfoSubHead
                    urlname1="Discussion Category"
                    urlname={
                      <Stack direction="row" sx={{justifyContent:"center" ,alignItems:"center" }}>
                        <AddCircleIcon sx={{padding:"5px",bgcolor:"#000",borderRadius:"50%",width:24,height:24}} /> <CancelIcon onClick={() => {
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
                      sx={{ bgcolor: "#1688ca", py: 1,px:2, color: "#fff" }}
                    >
                      <Grid item xs={1}>
                        <Typography sx={{fontSize:"14px"}}>ID</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography sx={{fontSize:"14px"}}>CATEGORY NAME</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{fontSize:"14px"}}>ACTION</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ px: 1, width: "100%", bgcolor: "#fff"}}>
                    {categorydata.map((data) => {
                      const { id, name } = data;
                      return (
                        <Grid
                          key={id}
                          container
                          sx={{
                            py: 1,px:2,
                            color: "#000",
                            borderBottom: "1px solid lightgrey",
                            ":hover": { bgcolor: "#dee7f5" },
                          }}
                        >
                           <Grid item xs={1} >
                        <Typography sx={{fontSize:"14px"}}>{id}</Typography>
                      </Grid>
                          <Grid item xs={8}>
                            <Typography sx={{ fontSize: "13px" }}>
                              {name}
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Stack direction="row" spacing={1}>
                              <ModeEditIcon sx={{bgcolor:"#000",color:"#fff",borderRadius:"50%",padding:"3px",width:18,height:18}} />
                              <CloseIcon sx={{width:18,height:18}} />
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
            {
               <Collapse easing={0} timeout={"auto"} in={createfilefolder} {...(!createfilefolder ? { timeout: 1000 } : {timeout: 1000})}>
               <Grid item xs={12}>
               <CreateDiscussion setCreateFileFolder={setCreateFileFolder}/>
               </Grid>
             </Collapse>
             
            }
        </Box>
        <Box sx={{ bgcolor: "#ffffff" }}>
         
          <Box className="position-relative">
            <InfoSubHead
              urlname={
                <Avatar
                  sx={{
                    width: 22,
                    height: 22,
                    fontSize: 10,
                    border: "1px solid black",
                    backgroundColor: "transparent",
                    fontWeight: "bold",
                    bgcolor: "#fff",
                    color: "#000",
                  }}
                >
                  SM
                </Avatar>
              }
              urlname1={
                <Box className="d-flex align-items-center justify-content-center gap-2">
                  <MenuIcon
                    sx={{ justifySelf: "start" }}
                    onClick={() => setDropdown(!showDropdown)}
                  />
                  <Box sx={{ padding: "0px" }}>
                    <ExpandCircleDownIcon  onClick={() => setDSSFolder2(!dssfolder2)} />
                    <ExpandCircleDownIcon onClick={() => setDSSFolder(!dssfolder)}/>
                    <ExpandCircleDownIcon />
                  </Box>
                </Box>
              }
              name="Direct Sessions"
              backgroundColor={"#1688ca"}
              color={"#fff"}
            />

            {showDropdown && (
              <DropDown
                bgcolor={"#1688ca"}
                top={"43px"}
                name1={
                  <Box onClick={() => {
                    setAddFileFolder(!addfilefolder);
                  }}
                  >
                    
                    Manage Folders
                  </Box>
                }
                name2={
                  <Box onClick={() => {
                    setCreateFileFolder(!createfilefolder);
                  }}
                  >
                    
                    Create Discussion
                  </Box>
                }
                display3={"none"}
                display4={"none"}
                display5={"none"}
                color="#fff"
                maxWidth={170}
              />
            )}
          </Box>

          <Box sx={{ overflowX: "auto" }}>
            <Table striped bordered hover className="mb-0">
              <thead
                style={{
                  backgroundColor: "#cfdce7",
                  fontSize: "10px",
                  textTransform: "uppercase",
                }}
              >
                <tr
                  style={{
                    fontSize: "13px",
                    textAlign: "start",
                  }}
                >
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    S.No
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      minWidth: 250,
                      fontWeight: "400",
                    }}
                  >
                    TOPIC
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    From
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    Date
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    RESPONSES
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    NEW
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-center">
                  <td colSpan={7}>No Data Present</td>
                </tr>
              </tbody>
            </Table>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AdminDiscussion;
