import * as React from "react";
import {Box,Typography,Modal,Grid,TextareaAutosize,Button} from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import { createGlobalStyle } from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  width:500
};

const Cus_Style = createGlobalStyle`
.MuiGrid-root.MuiGrid-container.css-1nai4r0-MuiGrid-root, .MuiBox-root.css-m7fv1v:focus-visible{
    outline: unset !important;
    border:unset !important;
    box-shadow:unset !important;
}

`


export default function AddFile({ setAddFile }) {
  return (
    <div cclassName="remove-outline">
        <Cus_Style/>
      <Modal
        open={() => {
          setAddFile(true);
        }}
        onClose={() => {
          setAddFile(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Grid container sx={{justifyContent:"center"}}>
            <Grid  item xs={12} sx={{boxShadow: 24,bgcolor:"#fff",borderRadius:"0.25rem"}}>
            <Grid container>
            <Grid item xs={12}>
              <Box>
                <InfoSubHead
                borderRadius="0.25rem 0.25rem 0 0"
                  urlname1={"Add File"}
                  urlname={
                    <Typography
                      onClick={() => {
                        setAddFile(false);
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
           <Grid container sx={{px:3 ,py:2}}>
           <Grid item xs={2} sx={{mb:1}}>
              <Box>
              Title:
              </Box>
            </Grid>
            <Grid item xs={10} sx={{mb:1}}>
              <Box>
              <input type="text" className="form-control" placeholder="Title"/>
              </Box>
            </Grid>
           <Grid item xs={2}>
              <Box>
              Add File:
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <input type="file" className=""/>
              </Box>
            </Grid>
           
            <Grid item xs={12} sx={{mt:1}}>
              <Box sx={{textAlign:"center",mt:2}}>
               <Button className="btn btn-primary">Submit</Button>
              </Box>
            </Grid>
           </Grid>
          </Grid>
            </Grid>
         </Grid>
        </Box>
      </Modal>
    </div>
  );
}
