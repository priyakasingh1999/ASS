import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  Avatar,
  Stack,
  Button,
  Radio,
} from "@mui/material";
import InfoSubHead from "../../../../../GlobalComponent/InfoSubHead";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import DropDown from "../../../../../GlobalComponent/DropDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import JoditEditor from "jodit-react";
import SystemFils from "../../../../../GlobalComponent/StationFiles";




const clr = { color: "#fff" };
const pointer = { cursor: "pointer" };
const style = {
  width: "25px",
  height: "25px",
  fontSize: "12px",
  bgcolor: "lightgray",
  color: "#1688ca",
  fontWeight: "bold",
};

const ReplyMsg = () => {
  
  const [selectedValue, setSelectedValue] = useState("a");
  const [systemfile, setSystemFile] = useState(false);
  const [sent , setSent] = useState(false)
  

  const valueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Grid container sx={{ position: "relative" }}>
      <Grid item xs={12} sx={{ position: "relative", mb: "7px" }}>
        <InfoSubHead
          name="Reply To This Message"
          backgroundColor={"#1688ca"}
          color={"#fff"}
        />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ bgcolor: "#fff", p: 1, borderRight: "1px solid grey" }}
      >
        <Stack
          spacing={1}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Avatar sx={style}>T</Avatar>
          <Avatar sx={style}>M</Avatar>
        </Stack>
      </Grid>
      <Grid item xs={10} sx={{ bgcolor: "#fff", px: 5, py: 1 }}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <Box>
              <input
                placeholder="Added post in Information Technology Project Board - Add Your Project Name"
                className="form-control p-1 fs-13"
              />
            </Box>
          </Grid>
          <Grid item sm={12} sx={{ mb: 1 }}>
            <Box>
              <JoditEditor />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ bgcolor: "#fff", p: 1, borderRight: "1px solid grey" }}
      >
        <Stack
          spacing={1}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Avatar sx={style}>S</Avatar>
          <Avatar sx={style}>A</Avatar>
        </Stack>
      </Grid>
      <Grid item xs={10} sx={{ bgcolor: "#fff", px: 5 , pb:2}}>
        <Grid container sx={{justifyContent:"space-between"}}>
          <Grid item sm={12} sx={{ mb: 2, textAlign: "center" }}>
            <Box>
              <AddCircleIcon onClick={()=>{setSent(!sent)}}/>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              mb: { xs: 1, md: 0 },
              my: { md: "auto" },
              p: { xs: 1, md: 0 },position:"relative"
            }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Box>
                <Radio
                  size="small"
                  checked={selectedValue === "a"}
                  onChange={valueChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{ p: 0 }}
                />
              </Box>

              <Box>
                <input type="file" className="fs-14" />
              </Box>
            </Stack>
            {sent &&
                        <Box sx={{position:"absolute",bottom:"0",border:"1px solid #1688ca",p:"5px",bgcolor:"#fff",width:"100%"}}>
                            <Box>
                            <Typography sx={{pb:2,fontSize:"14px"}}><Box component="span" sx={{fontWeight:"bold"}}>Sent To:</Box> John S Smith</Typography>
                            </Box>
                           
                                <Avatar sx={{bgcolor:"#1688ca",position:"absolute",top:"-10px",right:"5px" ,width:"20px",height:"20px",fontSize:"14px"}} onClick={()=>{setSent(false)}}>X</Avatar>
                            
                        </Box>
                        
                    }
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              mb: { xs: 1, md: 0 },
              my: { md: "auto" },
              p: { xs: 1, md: 0 }
            }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "center"}}>
              <Radio
                size="small"
                checked={selectedValue === "b"}
                onChange={valueChange}
                onClick={() => setSystemFile(true)}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{ p: 0 }}
              />
              <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                Select System File
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              mb: { xs: 1, md: 0 },
              my: { md: "auto" },
              p: { xs: 1, md: 0 },
            }}
          >
            <Stack direction="row" sx={{justifyContent:"space-between"}}>
                <Box><Button variant="contained" size="small">Reply</Button></Box>
                <Box><Button variant="contained" size="small">Reply All</Button></Box>
            </Stack>
          </Grid>
          {systemfile && (
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                zIndex: 99,
                mt: 11,
              }}
            >
              <Grid item xs={12}>
                <Box>
                  <InfoSubHead
                    urlname1={"Station Files"}
                    urlname={
                      <Typography
                        sx={pointer}
                        onClick={() => setSystemFile(!systemfile)}
                      >
                        X
                      </Typography>
                    }
                    backgroundColor={"#1688ca"}
                    color={"#fff"}
                  />
                </Box>
              </Grid>
              <SystemFils
                setSystemFile={setSystemFile}
                systemfile={systemfile}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReplyMsg;
