import React, {useState} from "react";
import { Container, Grid, Box, Stack, Button, Typography } from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import CancelIcon from "@mui/icons-material/Cancel";
import JoditEditor from "jodit-react";
import AttachentFile from "../../GlobalComponent/AttachentFIle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormSearch from "../../GlobalComponent/AddAssociateForm";
import DropDown from "../../GlobalComponent/DropDown";

const AddTextMsg = () => {
  const [stationopen, setStationOpen] = useState(false);
  return (
    <Container maxWidth="lg" sx={{ mt: 3, p: { xs: 0 } }}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <Box>
            <InfoSubHead
              name="Add Text Message"
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
          sx={{ bgcolor: "#fff", py: 1, px: 2, minHeight: "650px" }}
        >
          <Box
            sx={{ bgcolor: "#e0daf8", padding: "5px", borderRadius: "0.25rem" }}
          >
            <Grid container spacing={1}>
              <Grid item xs={8} md={9}>
                <Box>
                  <JoditEditor />
                </Box>
              </Grid>

              <Grid item xs={4} md={3} sx={{ mb: 3 }} className="text-center">
                <Box>
                  <Button size="small" variant="contained">
                    Post
                  </Button>
                </Box>
                <Box sx={{ my: 2 }}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <AttachentFile />
                    <Typography variant="body" color="initial">
                      add
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <input
                    type="text"
                    placeholder="Characters: 0"
                    className="form-control bg-white text-center"
                    disabled
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Grid container>
          <Grid item xs={12} sx={{ mb: { xs: 1 }, px: 2 ,position: "relative",mt:1}}>
              <AddCircleIcon onClick={()=>setStationOpen(!stationopen)}/>
              {stationopen &&
              <Box sx={{ maxWidth: "200px", position:"absolute",top:"100%",width:"100%" }}>
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
              }
            </Grid>

            <Grid item xs={12} sx={{ mb: { xs: 1, md: 2 } }}>
              <FormSearch />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddTextMsg;
