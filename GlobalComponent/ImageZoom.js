import React,{useState} from 'react';
import {Modal,Grid,ImageList,ImageListItem,Box,Typography,Collapse} from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DangerousIcon from "@mui/icons-material/Dangerous";
import Commentlist from '../components/Main-Dashboard/Station/RecentSessions/Commentlist';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

 

export default function ImageZoom({setZoomImage,zoomimage}) {

  const [searchopen , setSearchOpen]=useState(false);
  const [viewcomment, setviewcomment] = useState(false);
 

  return (



    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={()=>{setZoomImage(true)}}
        onClose={()=>{setZoomImage(false)}}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Grid container sx={{justifyContent:"center",height:"100%"}}>
        <Grid item xs={8} sx={{height:"100%",display:"flex" , justifyContent:"center",alignItems:"center"}}>
          <Box>
            <ImageList cols={1} sx={{ borderRadius: "15px", margin: "5px 0",position:"relative" }}>
              <ImageListItem>
                <img src="./img/station_867.png" />
              </ImageListItem>
              <Box sx={{position:"absolute" , left:"5px",top:"5px",color:"#fff"}}>
              <AddCircleOutlineIcon onClick={()=>{setSearchOpen(!searchopen)}}/>

              {
                <Collapse
                  in={searchopen}
                  orientation="vertical"
                  style={{ transitionTimingFunction: "linear"}}
                >
                  <Box sx={{ backgroundColor: "#000000a3", height: "100%"}}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px",
                        
                      }}
                    >
                      <Box></Box>

                      <Typography variant="span" sx={{ color: "#fff" }}>
                        comment
                      </Typography>
                      <DangerousIcon
                        // onClick={() => setviewcomment(false)}
                        sx={{
                          color: "#fff",
                          borderRadius: "50%",
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        borderBottom: "1px solid #fff",
                        marginBottom: "5px",
                      }}
                    ></Box>
                    <form
                      // onSubmit={handleCommentSubmit}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px"
                      }}
                    >
                      <label>
                        <input
                          style={{ padding: "5px  10px", borderRadius: "10px" }}
                          type="text"
                          // value={currentComment}
                          // onChange={handleCommentChange}
                        />
                      </label>
                      <button
                        // onClick={commentsubmit}
                        style={{ padding: "5px  10px", borderRadius: "10px" }}
                      >
                        Add
                      </button>
                    </form>
                    <Box
                      sx={{
                        borderBottom: "1px solid #fff",
                        margin: "14px 30px",
                        maxHeight:"50px"
                      }}
                    ></Box>
                   
                  </Box>
                </Collapse>
              }
              </Box>
              <Box sx={{position:"absolute" , right:"5px",top:"5px",color:"#fff",zIndex:99999}}>
              <DangerousIcon onClick={()=>{setZoomImage(false)}} />
              </Box>
            </ImageList>
          </Box>
        </Grid>
        </Grid>
      </Modal>
    </div>
  );
}