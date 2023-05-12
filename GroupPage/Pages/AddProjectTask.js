import * as React from "react";
import {
  Box,
  Typography,
  Modal,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import { createGlobalStyle } from "styled-components";
import AddProjectTaskData from "./AddProjectTaskData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  border:"none !important"
};

const CusStyle = createGlobalStyle`
input::placeholder{
    color:black !important;
    padding:0 5px;
    font-size:14px;
}
.MuiGrid-root.MuiGrid-container.css-1nai4r0-MuiGrid-root , .MuiBox-root.css-m7fv1v:focus-visible {
    outline: unset !important;
    border:unset !important;
    box-shadow:unset !important;
}
`

export default function AddProjectTask({ setAPTask }) {
  return (
    <div className="remove-outline">
      <Modal
       closeAfterTransition
        open={() => {
          setAPTask(true);
        }}
        onClose={() => {
          setAPTask(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container sx={{ justifyContent: "center", p: 4}}>
            <CusStyle/>
            <Grid
              item
              xs={6}
              sx={{ boxShadow: 0, bgcolor: "#fff", borderRadius: "0.25rem" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Box>
                    <InfoSubHead
                      borderRadius="0.25rem 0.25rem 0 0"
                      urlname1={"Add Project Task"}
                      urlname={
                        <Typography
                          onClick={() => {
                            setAPTask(false);
                          }}
                        >
                          X
                        </Typography>
                      }
                      backgroundColor={"#1688ca"}
                      color={"#fff"}
                    />
                  </Box>
                </Grid>
                <Box sx={{px: 2, py: 2}}>
                {AddProjectTaskData.map((data)=>{
                    const{id,placeholder1,placeholder2, closebtn,btn}=data

                    return(
                        <Grid container key={id}>

                  <Grid item xs={2} sx={{ mb: 1,textAlign:"center" }}>
                    <Box><Typography>Task Name</Typography></Box>
                  </Grid>

                  <Grid item xs={3} sx={{ mb: 1,textAlign:"center" }}>
                    <Box>
                        
                        <input type="text"  placeholder={placeholder1} className="form-control p-0"/></Box>
                  </Grid>

                  <Grid item xs={2} sx={{ mb: 1,textAlign:"center" }}>
                  <Box><Typography>Color</Typography></Box>
                  </Grid>

                  <Grid item xs={3} sx={{ mb: 1,textAlign:"center" }}>
                  <Box><input type="text"  placeholder={placeholder2} className="form-control p-0"/></Box>
                  </Grid>

                  <Grid item xs={2} sx={{ mb: 1,textAlign:"center" }}>
                   <Stack direction="row" spacing={1} sx={{justifyContent:"center",alignItems:"center"}}>
                   <Box>{btn}</Box>
                   <Box><Typography>{closebtn}</Typography></Box>
                   </Stack>
                  </Grid>

                 

                </Grid>
                    )
                })
                }
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
