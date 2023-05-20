import React from "react";
import Container from "@mui/material/Container";
import Table from "react-bootstrap/Table";
import { Grid, Box, Typography, Stack, Button, Avatar } from "@mui/material";
import CreateDiscussion from "../StationDiscussion/CreateDiscussion";
import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import AttachentFile from "../../../GlobalComponent/AttachentFIle";
import JoditEditor from "jodit-react";
import imguser from "../../../img/john.jpg";
import AddAssociateForm from "../../../GlobalComponent/AddAssociateForm";
import TransferList from "../../../GlobalComponent/TransferList";

const CreateTextMesg = () => {
     

  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Box>
          <Grid item xs={12}>
          <Grid container>
     
      <Grid item xs={12}>
        <Box>
          <InfoSubHead
            name={"Create Text Message"}
            urlname={<Typography >X</Typography>}
            backgroundColor={"#1688ca"}
            color={"#fff"}
          />
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ p: 1, bgcolor: "#fff" }}>

        <Box
          sx={{ bgcolor: "#e0daf8", padding: "10px", borderRadius: "0.25rem" }}
        >
          <Grid container spacing={1}>
            
           
            <Grid item xs={7} md={8}>
              <Box>
                <JoditEditor />
              </Box>
            </Grid>

            <Grid item xs={4} md={3} sx={{ mb: 3 }} className="text-center">
              <Box>
                <Button size="small" variant="contained" color="primary">
                  Post
                </Button>
              </Box>
              <Box sx={{ my: 2 }}>
                <Stack
                  direction="column"
                  sx={{ justifyContent: "center", alignItems: "center" }}
                >
                  <AttachentFile />
                  <Typography variant="body" color="initial">
                    add
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={6} sx={{ bgcolor: "#fff", px: 2,py:1}}>
        <Grid container>
        <Grid item xs={12}>
        <Box className="text-center" sx={{backgroundColor:" rgb(244, 244, 244)",py:1}}>
          <Typography>Add Associates</Typography>
        </Box>
      </Grid>
          <Grid item xs={12} sx={{mb:1}}>
            <Box>
              <AddAssociateForm  minWidth={"270px"}
            maxWidth={"270px"} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
            <TransferList/>
            </Box>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
          </Grid>
        </Box>
        <Box sx={{ bgcolor: "#ffffff" }}>
          <Box className="position-relative">
            <InfoSubHead
              name="Text Messages"
              backgroundColor={"#1688ca"}
              color={"#fff"}
            />
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
              {/* <tbody>
                <tr className="bg-white text-center">
                  <td colSpan={7}>No Data Present</td>
                </tr>
              </tbody> */}
            </Table>
          </Box>
        </Box>
      </Container>
    </div>
  )
};

export default CreateTextMesg;
