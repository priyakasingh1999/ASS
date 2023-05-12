import React , {useState} from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Badge,
  Avatar,
  Collapse,
  Button,
} from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DropDown from "../../GlobalComponent/DropDown";
import FormSearch from "../../GlobalComponent/AddAssociateForm";

const ExternalEmail = () => {
  const [stationopen, setStationOpen] = useState(false);
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={8}>
          <Box>
            <InfoSubHead
              name="Add External Email Message"
              urlname={<CancelIcon />}
              backgroundColor={"#1688ca"}
              color={"#fff"}
            />
          </Box>
        </Grid>
        <Grid item xs={8} sx={{minHeight: "650px",bgcolor:"#fff" }}>
          <Grid container sx={{ bgcolor: "#fff", p: 2 }}>
          <Grid item xs={12} sx={{ mb: { xs: 1 }, px: 2 ,position: "relative"}}>
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

           
            <Grid item xs={7} sx={{ mt: 3 }}>
              <Box className="text-end">
                <Button size="small" variant="contained">
                  Next
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExternalEmail;
