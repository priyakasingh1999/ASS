import React,{useState} from "react";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import { Container,Grid, Box,Typography } from "@mui/material";
import AddSessionReuse from "../../GlobalComponent/AddSessionReuse";
import AddAssociateForm from "../../GlobalComponent/AddAssociateForm";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DropDown from "../../GlobalComponent/DropDown";

const AddSessionAssociate = () => {
  const [stationopen, setStationOpen] = useState(false);

  return (
    <>
    <Container maxWidth="lg" sx={{mt:3}}>
      <Grid container>
        <Grid item xs={12}>
          <Box>
          <InfoSubHead
              name="Add Session"
              urlname={<CancelIcon />}
              backgroundColor={"#1688ca"}
              color={"#fff"}
            />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box >
            <AddSessionReuse  minHeight={"263px"}/>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{bgcolor:"#fff",minHeight:"263px",p:1,pl:0,position:"relative"}}>
          <InfoSubHead
              name="Add Associates"
              urlname1={<Box>
                <AddCircleIcon onClick={()=>setStationOpen(!stationopen)}/>
              
              </Box>}
              backgroundColor={"#eee"}
              color={"#000"}
            />
            <AddAssociateForm/>
            {stationopen &&
              <Box sx={{ maxWidth: "200px", position:"absolute",top:"19%",width:"100%" }}>
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
            </Box>
        </Grid>
      </Grid>
      </Container>
    </>
  );
};

export default AddSessionAssociate;
