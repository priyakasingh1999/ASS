import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  InputBase,
  Typography,
  Collapse,
} from "@mui/material";
import React, { useState } from "react";
import InfoHead from "./InfoPages/InfoHead";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import GroupContent from "./InfoPages/GroupContent";
import SSContent from "./InfoPages/SSContent";
import AddComment from "../../components/AssociatesProfile/AddComment";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Icon from "../../GlobalComponent/Icon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SmallBox from "../../GlobalComponent/SmallBox";
import RecognizeText from "./InfoPages/RecognizeText";
import RadioGroup from "../../GlobalComponent/RadioGroup";
import StationStatus from "../Pages/StationStatus";
import BrowserStation from "../Pages/BrowserStation";
import SFStatement from "../Pages/SFStatement";
import AssignRoles from "../Pages/AssignRoles";
import EditStaion from "../Pages/EditStaion";
import NewSession from "../Pages/NewSession";
import RecentSession from '../RecentSession';
import AddStationUpdate from '../Pages/AddStationUpdate';
import ImageZoom from '../../GlobalComponent/ImageZoom'
import PendingRequest from "../Pages/PendingRequest";
import ChangeStationStatus from "../Pages/ChangeStationStatus";
import CancelIcon from '@mui/icons-material/Cancel';

const InfoTech = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [showrecognize, setShowRecognize] = useState(true);
  const [showRate, setShowRate] = useState(true);
  const [stationstatus, setStationStatus] = useState(false);
  const [browserstation, setBrowserStation] = useState(false);
  const [SFSopen, setSFSopen] = useState(false);
  const [assignrols, setAssignRols] = useState(false);
  const [editstation, setEditStation] = useState(false);
  const [newsession, setNewSession] = useState(false);
  const [recentsession, setRecentSession] = useState(false);
  const [addatationupdate, setAddStationUpdate] = useState(false);
  const [zoomimage, setZoomImage] = useState(false);
  const [pendingreq, setPendingReq] = useState(false);
  const [changestationstatus, setChangeStationStatus] = useState(false);
  const [file, setFile] = useState(false);

  return (
    <>
      <Box>
        <Grid container>
          {file &&
           <Box >
             <Grid container sx={{position: "absolute",
           top:"50%",
           zIndex: 999,
           left:"50%",
           transform:{xs:"translate(-50% , -41%)"},
           mt:"5px",
           justifyContent:"center",zIndex:"9999"
           }} >
              <Grid item xs={9} sx={{boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",bgcolor:"#fff",p:1,borderRadius:"0.25rem" , minHeight:"500px"}}>
             <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
             <Box className="border w-75 rounded p-1"><input type="file"/></Box>
             <Box><CancelIcon onClick={()=>{setFile(false)}}/></Box>
             </Stack>
              </Grid>
             </Grid>
           </Box>
          }
        {changestationstatus &&
            <Box sx={{position: "absolute",
            top:"80%",
            zIndex: 999,
            left:"50%",
            transform:{xs:"translate(-50% , -50%)"},
            mt:"5px",
            boxShadow:
              "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
              <ChangeStationStatus setChangeStationStatus={setChangeStationStatus}/>
            </Box>
          }
          
          {
            editstation &&
           <Box sx={{position: "absolute",
           top: "50%",
           transform: "translate(-50% , -50%)",
           zIndex: 999,
           left: "50%",
           mt:4,
           boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
             <EditStaion setEditStation={setEditStation}/>
           </Box>
          }
          {
            newsession &&
           <Box sx={{position: "absolute",
           top: "50%",
           transform: "translate(-50% , -50%)",
           zIndex: 999,
           left: "50%",
           mt:4,
           boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
             <NewSession setNewSession={setNewSession}/>
           </Box>
          }
          {
           recentsession &&
           <Box sx={{position: "absolute",
           top: "50%",
           transform: "translate(-50% , -50%)",
           zIndex: 999,
           left: "50%",
           mt:4,
           boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
             <RecentSession setRecentSession={setRecentSession}/>
           </Box>
          }
          {
           addatationupdate &&
           <Box sx={{position: "fixed",
           top: "25%",
           transform: "translate(-50% , -50%)",
           zIndex: 999,
           left: "50%",
           mt:4,
           boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
             <AddStationUpdate setAddStationUpdate={setAddStationUpdate}/>
           </Box>
          }

          {
            zoomimage &&
            <Box sx={{position: "fixed",
           top: "25%",
           transform: "translate(-50% , -50%)",
           zIndex: 999,
           left: "50%",
           mt:4,
           boxShadow:
             "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
             <ImageZoom setZoomImage={setZoomImage} zoomimage={zoomimage}/>
           </Box>

          }

          <Grid item xs={10} className="position-relative"></Grid>
          <Grid item xs={12} sx={{ position: "relative" }}>
            <Box>
              <InfoHead
                onClick={() => {
                  setStationStatus(true);
                }}
                onClick2={() => {
                  setBrowserStation(true);
                }}
              />

              { 
                <Collapse
                in={stationstatus}
                orientation="vertical"
                style={{ transitionTimingFunction: "linear"}}
                sx={{position: "absolute",
                top: "100%",
                zIndex: 999,
                right: 0,
                mt: "5px",
                boxShadow:
                  "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)"}}
              >
                <StationStatus
                  setStationStatus={setStationStatus}
                  stationstatus={stationstatus}
                  onclick={()=>{setPendingReq(true)}}
                  onclick1={()=>{setChangeStationStatus(true)}}
                  onclick3={()=>{setAssignRols(true)}}
                  onclick2={()=>{setFile(true)}}
                />
              </Collapse>
              }
              {pendingreq &&
            <Box sx={{position: "absolute",
            top: {xs:"100%",md:"100%"},
            zIndex: 999,
            right: {xs:"50%",sm:"-100%",md:"-66%"},
            transform:{xs:"translate(50% , 70%)",sm:"unset"},
            mt:"5px",
            boxShadow:
              "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",}}>
              <PendingRequest setPendingReq={setPendingReq}/>
            </Box>
          }
              
              { 
                <Collapse
                in={browserstation}
                orientation="vertical"
                style={{ transitionTimingFunction: "linear"}}
                sx={{position: "absolute",
                top: "100%",
                zIndex: 999,
                right: 0,
                mt: "5px",
                boxShadow:
                  "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)"}}
              >
                 <BrowserStation
                    setBrowserStation={setBrowserStation}
                    browserstation={browserstation}
                  />
              </Collapse>
              }
              
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box onClick={() => setOpen(true)}>
              <InfoSubHead
                name={
                  <Typography
                    sx={{ cursor: "pointer",border:"2px solid transparent",":hover":{border:"2px solid #1688ca"} }}
                    onClick={() => {
                      setSFSopen(true);
                    }}
                  >
                    Station Statement
                  </Typography>
                }
                backgroundColor={"#d2dee8"}
                color={"#000"}
              />
            </Box>
          </Grid>

          {SFSopen && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translate(-50% , -50%)",
                zIndex: 999,
                left: "50%",
                boxShadow:
                  "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",
              }}
            >
              <SFStatement SFSopen={SFSopen} setSFSopen={setSFSopen} />
            </Box>
          )}

          <Grid item xs={12}>
            <Box sx={{ py: 1, backgroundColor: "#fff" }}>
              <GroupContent
                content={
                  "Our team works with all hospital departments on IT needs. We plan for the future with integration"
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ position: "relative" }}>
            <Box>
              <InfoSubHead
                name={
                  <Typography
                    sx={{ cursor: "pointer",border:"2px solid transparent",":hover":{border:"2px solid #1688ca"} }}
                    onClick={() => {
                      setAssignRols(true);
                    }}
                  >
                    Station Associates
                  </Typography>
                }
                backgroundColor={"#d2dee8"}
                color={"#000"}
                urlname={<CameraAltIcon/>}
                urlname1={<Icon onClick={()=>{setEditStation(true)}} url="./img/substationicon1.png" />}
              />
              {assignrols && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    zIndex: 999,
                    right: 0,
                    mt: "5px",
                    boxShadow:
                      "2px 2px 2px rgba(0,0,0,.4),-2px -2px 2px rgba(0,0,0,.4)",
                  }}
                >
                  <AssignRoles
                    setAssignRols={setAssignRols}
                    assignrols={assignrols}
                  />
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ bgcolor: "#fff" }}>
              <GroupContent
                content={
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: "center", pt: 1 }}
                  >
                    <Avatar src="./img/john.jpg" />
                    <Avatar src="/img/Picture1.png" />
                    <Avatar src="./img/puja1.png" />
                    <Avatar src="./img/john.jpg" />
                  </Stack>
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <InfoSubHead
                name={
                  <Typography
                    sx={{ cursor: "pointer",border:"2px solid transparent",":hover":{border:"2px solid #1688ca"} }}
                    onClick={()=>{setNewSession(true)}}
                  >
                    Station Sessions
                  </Typography>
                }
                backgroundColor={"#d2dee8"}
                color={"#000"}
                urlname1={<Icon url="./img/playicon.png" />}
                urlname={<Icon url="./img/watch.png" onClick={()=>{setRecentSession(true)}} />}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <SSContent onclick={()=>{setZoomImage(true)}}/>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <InfoSubHead
                name={
                  <Typography
                    sx={{ cursor: "pointer" ,border:"2px solid transparent",":hover":{border:"2px solid #1688ca"} }}
                    onClick={() => {
                      setAddStationUpdate(true);
                    }}
                  >
                    Station Updates
                  </Typography>
                }
                backgroundColor={"#d2dee8"}
                color={"#000"}
                urlname={<AddCircleIcon onClick={() => setShow(!show)} />}
                urlname1={<SmallBox border={"2px solid black"} value={2} />}
              />
            </Box>
            {show ? (
              <Box sx={{ backgroundColor: "#fff", padding: "5px" }}></Box>
            ) : (
              <Box sx={{ py: 1, backgroundColor: "#fff" }}>
                <GroupContent
                  content={"By: John S Smith Posted On: Apr 03, 2023"}
                />
                <GroupContent
                  content={
                    "Reviewing software patch upgrade for nurse call system. By: John S Smith Posted On: Oct 15, 2016"
                  }
                />
              </Box>
            )}
          </Grid>

          <Grid item xs={12}>
            <Box>
              <InfoSubHead
                name={"Recognize Your Associate"}
                backgroundColor={"#d2dee8"}
                color={"#000"}
                urlname={
                  <AddCircleIcon
                    onClick={() => setShowRecognize(!showrecognize)}
                  />
                }
              />
            </Box>
            {showrecognize ? (
              <Box sx={{ backgroundColor: "#fff", padding: "5px" }}></Box>
            ) : (
              <Box sx={{ backgroundColor: "#fff" }}>
                <RecognizeText />
              </Box>
            )}
          </Grid>

          <Grid item xs={12} sx={{ mb: 1 }}>
            <Box>
              <InfoSubHead
                name={"Rate This Station"}
                backgroundColor={"#d2dee8"}
                color={"#000"}
                urlname={
                  <AddCircleIcon onClick={() => setShowRate(!showRate)} />
                }
                urlname1={
                  <Stack direction="row" spacing={1}>
                    
                    <SmallBox value={"80%"} />{" "}
                    <ArrowUpwardIcon color="success" />
                  </Stack>
                }
              />
            </Box>
            {showRate ? (
              <Box sx={{ backgroundColor: "#fff", padding: "5px" }}></Box>
            ) : (
              <Container sx={{ bgcolor: "#fff", py: 1 }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" color="initial">
                          Vote: 7 out of 10 ( 70%)
                        </Typography>
                      </Box>
                      <Box>
                        <RadioGroup />
                        <Stack
                          direction="row"
                          sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "3px 0",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{ fontSize: "10px", fontWeight: "bold" }}
                            >
                              Least Effective
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              sx={{ fontSize: "10px", fontWeight: "bold" }}
                            >
                              Most Effective
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Container>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InfoTech;
