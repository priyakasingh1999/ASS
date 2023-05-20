import React from "react";
import { Grid, Box, Typography, Stack, Button, Avatar } from "@mui/material";
import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import AttachentFile from "../../../GlobalComponent/AttachentFIle";
import JoditEditor from "jodit-react";
import imguser from "../../../img/john.jpg";
import AddAssociateForm from "../../../GlobalComponent/AddAssociateForm";
import TransferList from "../../../GlobalComponent/TransferList";

const CreateDiscussion = ({setCreateFileFolder}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <InfoSubHead
            name={"Create Discussion"}
            urlname={<Typography onClick={()=>setCreateFileFolder(false)}>X</Typography>}
            backgroundColor={"#1688ca"}
            color={"#fff"}
          />
        </Box>
      </Grid>
      <Grid item xs={5} sx={{ p: 1, bgcolor: "#fff" }}>
        <Box
          sx={{ bgcolor: "#e0daf8", padding: "10px", borderRadius: "0.25rem" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={3} md={2}>
              <Box className="d-flex justify-content-center ">
                <Avatar
                  sx={{ border: "2px solid #fff", width: 70, height: 70 }}
                  variant="rounded"
                  src={imguser}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={7}>
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

      <Grid item xs={7} sx={{ bgcolor: "#fff", px: 2 }}>
        <Grid container>
          <Grid item xs={12} sx={{mb:1}}>
            <Box>
              <AddAssociateForm />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
            <TransferList 
            minWidth="270"
            maxWidth={"270px"}/>
            </Box>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateDiscussion;
