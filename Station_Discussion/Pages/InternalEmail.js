import { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Radio,
  Button,
} from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import CancelIcon from "@mui/icons-material/Cancel";
import FormSearch from "../../GlobalComponent/AddAssociateForm";
import JoditEditor from "jodit-react";
import SystemFils from "../../GlobalComponent/StationFiles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Copy from "./Copy";
import DropDown from "../../GlobalComponent/DropDown";

const pointer = {cursor:"pointer"}

const InternalEmail = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [systemfile, setSystemFile] = useState(false);
  const [stationopen, setStationOpen] = useState(false);
  const [choosefile, setChooseFile] = useState(true);

  const valueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 3, p: { xs: 0 } }}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <Box>
            <InfoSubHead
              name="Add Internal Email Message"
              urlname={<CancelIcon />}
              backgroundColor={"#1688ca"}
              color={"#fff"}
            />
          </Box>
        </Grid>

        <Grid
          itm
          md={8}
          xs={12}
          sx={{ bgcolor: "#fff", py: 2, minHeight: "650px" }}
        >
          <Grid container>
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
              md={10}
              sx={{ mb: { xs: 1, md: 0 }, px: { xs: 1, md: 0 } }}
            >
              <Box>
                <JoditEditor />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mb: { xs: 1 }, px: 2, position: "relative" }}
            >
              <AddCircleIcon onClick={() => setStationOpen(!stationopen)} />
              {stationopen && (
                <Box
                  sx={{
                    maxWidth: "200px",
                    position: "absolute",
                    top: "100%",
                    width: "100%",
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
                  <DropDown
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

            <Grid item xs={12} sx={{ mb: { xs: 1, md: 2 } }}>
              <FormSearch />
            </Grid>

            <Grid container sx={{ mt: { xs: 2 }, position: "relative", px: 1 }}>
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
                      onClick={() => {
                        setChooseFile(!choosefile);
                      }}
                      onChange={valueChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{ p: 0 }}
                    />
                  </Box>
                  {choosefile && (
                    <Box>
                      <input type="file" className="fs-14" />
                    </Box>
                  )}
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
                <Box>
                  <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                    +
                    <Box component="span" sx={{ color: "#1688ca" }}>
                      Copy
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              {systemfile && (
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    zIndex: 99,
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

export default InternalEmail;
