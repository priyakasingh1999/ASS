import { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Radio,
  Button,
  InputBase
} from "@mui/material";
import InfoSubHead from "../../../../../GlobalComponent/InfoSubHead";
import CancelIcon from "@mui/icons-material/Cancel";
import FormSearch from "../../../../../GlobalComponent/AddAssociateForm";
import JoditEditor from "jodit-react";
import SystemFils from "../../../../../GlobalComponent/StationFiles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Copy from "../../../../../Station_Discussion/Pages/Copy";
import DropDown11 from "../../../../../GlobalComponent/DropDown11";
import DropDown from "../../../../../GlobalComponent/DropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const clr = { color: "#fff" };

const pointer = {cursor:"pointer"}

const AssociateMessaging = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [systemfile, setSystemFile] = useState(false);
  const [stationopen, setStationOpen] = useState(false);
  const [choosefile, setChooseFile] = useState(true);
  const [search, setSearch] = useState(false);

  const valueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 3, p: { xs: 0 } }}>
        
      <Grid container sx={{justifyContent:"center"}}>
      <Grid item xs={11} sx={{ position: "relative", mb: "7px" }}>
              <InfoSubHead
                name="Associate Messaging"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname1={
                  <Stack direction="row">
                    <MenuIcon onClick={() => setSearch(!search)} />{" "}
                  </Stack>
                }
              />
              {search && (
                <Box>
                  <DropDown
                    top={"41px"}
                    name1={
                        <Link to="/my-messages" style={clr}>
                        My Messages
                      </Link>
                    }
                    name2={
                      <Link to="/myinbox" style={clr}>
                        Inbox
                      </Link>
                    }
                   display3={"none"}
                   display4={"none"}
                   display5={"none"}
                   
                    maxWidth={135}
                    bgcolor={"#1688ca"}
                    color={"#fff"}
                  />

                  
                </Box>
              )}
            </Grid>

        <Grid
          itm
          md={11}
          xs={12}
          sx={{ bgcolor: "#fff", minHeight: "650px",position:"relative" }}
        >
            {systemfile && (
                <Box
                  sx={{
                    position: "fixed",
                    left:"12%",
                    top: "14%",
                    right: "12%",
                    zIndex: 99,
                    boxShadow:24,
                    border:"1px solid #1688ca"
                    
                  }}
                >
                  <Grid item xs={12}>
                    <Box>
                      <InfoSubHead
                        name={"Station Files"}
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
          <Grid container sx={{ p: 2,}}>
            <Grid
              item
              xs={3}
              md={2}
              sx={{ mb: { xs: 1, md: 0 }, px: { xs: 1, md: 1 } }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "14px" }, mb: 1 }}
                >
                  Topic:
                </Typography>
                <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                  Message:
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={9}
              md={8}
              sx={{ mb: { xs: 1, md: 0 }, px: { xs: 1, md: 0 } }}
            >
                <Box>
                    <InputBase className="form-control py-0 mb-1" />
                </Box>
              <Box>
                <JoditEditor />
              </Box>
            </Grid>
            </Grid>

            <Grid container sx={{ p: 0}}>            <Grid
              item
              xs={12}
              sx={{ mb: { xs: 1 },  position: "relative" }}
            >
                <InfoSubHead
                name="Select Station"
                backgroundColor={"#1688ca"}
                color={"#fff"}
                urlname1={<AddCircleIcon onClick={() => setStationOpen(!stationopen)} />
                }
              />
              
              {stationopen && (
                <Box
                  sx={{
                    maxWidth: "200px",
                    position: "absolute",
                    top: "100%",
                    width: "100%",
                    mt:"1px"
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        bgcolor: "#1688ca",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      Stations
                    </Typography>
                  </Box>
                  <DropDown11
                    border="1px solid black"
                    bgcolor="#fff"
                    color="#000"
                    name1={"All Associate"}
                    name2={"Biomedical"}
                    name3={"Finance"}
                    name4={"Hospital Security"}
                    name5={"Human Resources"}
                    name6={"Informatio Technology"}
                    name7={"Leadership"}
                    name8={"Process Improvement"}
                    name9={"Productivity"}
                    name10={"Project Management"}
                    name11={"Volunteers"}
                  />
                </Box>
              )}
            </Grid>

            
            <Grid container sx={{ px: 2,}}>
            <Grid item xs={12}>
              <FormSearch />
            </Grid>
            <Grid item xs={12} sx={{mt:1}}>
              <Typography  sx={{fontSize:{xs:"12px",md:"14px"}}}>Add Associates: </Typography>
            </Grid>
            </Grid>

            <Grid container sx={{ mt: { xs: 2 ,md:5}, position: "relative", px: 2 }}>
              <Grid
                item
                xs={12}
                md={2}
                sx={{ my: { md: "auto" }, p: { xs: 1, md: 0 } }}
              >
                <Box>
                  <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                    Add File:
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  mb: { xs: 1, md: 0 },
                  my: { md: "auto" },
                  p: { xs: 1, md: 0 },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Box>
                    <Radio
                      size="small"
                      checked={selectedValue === "a"}
                      onClick={() => setSystemFile(false)}
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
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
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
                    Select Station File
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
                <Box>
                  <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                    +
                    <Box component="span" sx={{ color: "#1688ca" }}>
                      Copy
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              
            </Grid>

            <Grid item xs={12} sx={{ mt: 3, mb: 1 }}>
              <Box className="text-center">
                <Button size="small" variant="contained">
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Copy />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AssociateMessaging;
