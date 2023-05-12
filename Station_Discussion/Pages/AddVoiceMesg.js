import { Container, Grid, Box, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import CancelIcon from "@mui/icons-material/Cancel";
import FormSearch from "../../GlobalComponent/AddAssociateForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DropDown from "../../GlobalComponent/DropDown";
import { useReactMediaRecorder } from "react-media-recorder";

const AddVoiceMsg = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false },{
      type: "audio/wav"
    });


  const [stationopen, setStationOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 3, p: { xs: 0 } }}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <Box>
            <InfoSubHead
              name="Add Voice Message"
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
            <Grid item xs={12} sx={{ mb: 3, px: 2 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Button size="small" variant="contained" onClick={startRecording}>
                  Record
                </Button>
                <Button size="small" variant="contained" onClick={stopRecording}>
                  Reset
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sx={{ mb: 3, px: 2 }}>
            <div>
      <p>{status}</p>
      
      <audio src={mediaBlobUrl}  autoPlay loop />
    </div>
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

            <Grid item xs={12} sx={{ mb: { xs: 1, md: 2 }, px: 2 }}>
              <FormSearch />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddVoiceMsg;
