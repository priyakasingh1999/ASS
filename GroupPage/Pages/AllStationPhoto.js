import * as React from "react";
import {
  Box,
  Typography,
  Modal,
  Grid,
  TextareaAutosize,
  Button,
  ImageList,
  ImageListItem
} from "@mui/material";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import CancelIcon from "@mui/icons-material/Cancel";
import ImagesData from "../../components/AssociatesProfile/ImagesData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
};

export default function AllStationPhoto({
  setallStationPhoto,
  allstationphoto,
}) {
  return (
    <div>
      <Modal
        open={() => {
          setallStationPhoto(true);
        }}
        onClose={() => {
          setallStationPhoto(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container sx={{ justifyContent: "center", p: 4 }}>
            <Grid
              item
              xs={10}
              sx={{
                boxShadow: 24,
                bgcolor: "#e8eaed",
                borderRadius: "0.25rem",
                position: "relative",
                minHeight: "450px",
                mt: 5,
              }}
            >
              <Box sx={{ position: "absolute", right: 0 }}>
                <CancelIcon
                  onClick={() => {
                    setallStationPhoto(false);
                  }}
                />
              </Box>
              <Grid container sx={{p:2}}>
                {ImagesData.map((data) => {
                  const { id, name, imgUrl } = data;

                  return <Grid key={id} item xs={3}>
                    <ImageList cols={1}  sx={{ width: "100%", height: "100% !important",p:1 }}>
                        <ImageListItem  sx={{ width: "100%", height: "100% !important",border:"4px solid #fff",bgcolor:"#fff"}}>
                            <img src={imgUrl}/>
                            <Typography sx={{fontSize:"13px"}}>{name}</Typography>
                        </ImageListItem>
                    </ImageList>
                  </Grid>;
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
