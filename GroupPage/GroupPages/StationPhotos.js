import { Avatar, Box, Grid, Slider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StationFiles from "./StationPhotoPages/StationFiles";
import TaskBoard from "./StationPhotoPages/TaskBoard";
import Photo from "./StationPhotoPages/Photo";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import ForumIcon from "@mui/icons-material/Forum";
import AddPhoto from "../Pages/AddPhoto";
import AllStationPhoto from "../Pages/AllStationPhoto";
import BrowserProjectBoard from "../Pages/BrowserProjectBoard";
import Comments from "../Pages/Comments";
import AddFile from "../Pages/AddFile";
import AddProjectTask from "../Pages/AddProjectTask";
import ProjectTaskComment from "../Pages/ProjectTaskComment";
import { Link } from "react-router-dom";


const Style = createGlobalStyle`

.boxes{
    border:4px solid #ffad00;    
}
.prges1 .css-eg0mwd-MuiSlider-thumb:before{
  content:"56";
  color:#fff;
  font-size: 12px;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;

}
.prges2 .css-eg0mwd-MuiSlider-thumb:before{
  content:"69";
  color:#fff;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;

}

`;

const StationPhotos = () => {
  const [addphoto , setAddPhoto] = useState(false)
  const [APTask , setAPTask] = useState(false)
  const [addfile , setAddFile] = useState(false)
  const [allstationphoto , setallStationPhoto] = useState(false)
  const [bpboard , setBPBoard] = useState(false)
  const [comment , setComment] = useState(false)
  const [tbc , setTBC] = useState(false)
  return (
    <>
      <Style />

      <Box>
        {allstationphoto  &&
          <AllStationPhoto setallStationPhoto={setallStationPhoto} allstationphoto={allstationphoto}/>
        }
        {
          addphoto && 
          <AddPhoto addphoto={addphoto} setAddPhoto={setAddPhoto}/>
        }
        {
          addfile && 
          <AddFile addfile={addfile} setAddFile={setAddFile}/>
        }
        {
          APTask && 
          <AddProjectTask APTask={APTask} setAPTask={setAPTask}/>
        }
        
        <Box sx={{ backgroundColor: "#fff" }}>
          <Box>
            <InfoSubHead
              name={<Typography sx={{cursor:"pointer",border:"2px solid transparent",":hover":{border:"2px solid #fff"}}} onClick={()=>{setallStationPhoto(true)}}>Station Photos</Typography>}
              backgroundColor={"#1688ca"}
              color={"#fff"}
              urlname={<ArrowDropDownIcon onClick={()=>{setAddPhoto(true)}} />}
            />
          </Box>

          <Box>
            <Photo />
          </Box>

          <Box sx={{position:"relative"}}>
          {
              bpboard &&
              <Box sx={{position:"absolute",right:0,top:"20%",zIndex:999}}>
                <BrowserProjectBoard setBPBoard={setBPBoard} bpboard={bpboard}/>
                </Box>
            }
            {
              comment &&
              <Box sx={{position:"absolute",top:"46px",left:0,right:0,bgcolor:"#fff",minHeight:150,zIndex:999}}>
                
                <Comments setComment={setComment}/>
              </Box>
            }
            
            <InfoSubHead
              name={<Typography sx={{cursor:"pointer",border:"2px solid transparent",":hover":{border:"2px solid #1688ca"}}} onClick={()=>{setBPBoard(true)}}>Station Boards Progress Report</Typography>}
              backgroundColor={"#d2dee8"}
              color={"#000"}
              urlname={<ArrowDropDownIcon />}
              urlname1={
               <Link to="/DashboardBoard"> <Avatar
               sx={{
                 width: "20px",
                 height: "20px",
                 fontSize: "10px",
                 bgcolor: "#000",
                 color: "#fff",
                 fontWeight: "bold",
               }}
             >
               AB
             </Avatar></Link>
              }
            />
            <Stack
              className="prges1"
              direction="row"
              sx={{
                justifyContent: "space-between",
                padding: "13px 5px 5px 5px",
                borderBottom: "1.5px solid #d2dee8",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pb: 1,
                  color: "#1688ca",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <ArrowDropDownIcon  onClick={()=>{setComment(true)}}/>
                <Typography variant="subtitle2"> Cerner Upgrade</Typography>
              </Stack>
              <Box width={300}>
                <Slider
                  size="large"
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="off"
                />
              </Box>
            </Stack>

            <Stack
              className="prges2"
              direction="row"
              sx={{
                justifyContent: "space-between",
                padding: "13px 10px 5px 10px",
                borderBottom: "1.5px solid #d2dee8",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pb: 1,
                  color: "#1688ca",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <ArrowDropDownIcon
                  sx={{
                    border: "1px solid #1688ca",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                  }}
                  onClick={()=>{setComment(true)}}
                />
                <Typography variant="subtitle2"> Help Desk</Typography>
              </Stack>
              <Box width={300}>
                <Slider
                  size="large"
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="off"
                />
              </Box>
            </Stack>

            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", padding: "20px 0" }}
            ></Stack>
          </Box>

          <Box>
            <StationFiles onClick={()=>{setAddFile(true)}} />
          </Box>

          <Box sx={{position:"relative"}}>
            <TaskBoard onClick={()=>{setAPTask(true)}} onClick1={()=>{setTBC(true)}}  />
            {
         tbc && 
          <Box sx={{position:"absolute",top:"100%",zIndex:"9999"}}><ProjectTaskComment  setTBC={setTBC}/></Box>
        }
          </Box>

          <Box>
            <Box>
              <InfoSubHead
                name={"Add/View Station Messages"}
                backgroundColor={"#d2dee8"}
                color={"#000"}
              />
            </Box>
            <Box sx={{ backgroundColor: "#fff", p: 1 }}>
              <Grid container>
                <Grid item xs={5}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,.2)",
                      height: "100%",
                      padding: "0px",
                    }}
                  >
                    <Box>
                      <EmailIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                    <Box>
                      <MailOutlineIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #1688ca",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{ maxHeight: "65px", maxWidth: "65px", padding: "5px" }}
                  >
                    <Avatar
                      variant="rounded"
                      src="./img/pdf.png"
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,.2)",
                      height: "100%",
                      padding: "0px",
                    }}
                  >
                    <Box>
                      <KeyboardVoiceIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                    <Box>
                      <ForumIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StationPhotos;
