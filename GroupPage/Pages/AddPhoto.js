import * as React from "react";
import {Box,Typography,Modal,Grid,TextareaAutosize,Button} from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function AddPhoto({ setAddPhoto, addphoto }) {
  return (
    <div>
      <Modal
        open={() => {
          setAddPhoto(true);
        }}
        onClose={() => {
          setAddPhoto(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="width_modal">
         <Grid container sx={{justifyContent:"center",p:4}}>
            <Grid  item sm={12} sx={{boxShadow: 24,bgcolor:"#fff",borderRadius:"0.25rem"}}>
            <Grid container>
            <Grid item xs={12}>
              <Box>
                <InfoSubHead
                borderRadius="0.25rem 0.25rem 0 0"
                  urlname1={"Add Photo"}
                  urlname={
                    <Typography
                      onClick={() => {
                        setAddPhoto(false);
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
           <Grid item sm={2} xs={12}>
              <Box>
              Add File:
              </Box>
            </Grid>
            <Grid item sm={10} xs={12}>
              <Box>
                <input type="file" className=""/>
              </Box>
            </Grid>
           <Grid item sm={2} xs={12} sx={{mt:1}}>
              <Box>
              Comment:
              </Box>
            </Grid>
            <Grid item sm={10} xs={12} sx={{mt:{xs:0,sm:1}}}>
              <Box>
                <TextareaAutosize minRows={1} className="form-control" placeholder="comment"/>
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
