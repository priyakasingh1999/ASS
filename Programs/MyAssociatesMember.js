import { Avatar, Box, Container, Grid, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import React,{useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import CancelIcon from "@mui/icons-material/Cancel";
import { createGlobalStyle } from "styled-components";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from 'prop-types';
import Menucollased from "./Menucollased";
import { Image } from "@mui/icons-material";
import DropDown from "../GlobalComponent/DropDown";
import { Link } from "react-router-dom";
import Search from "../GlobalComponent/Search";


const Style = createGlobalStyle`
.iconlist,.close{
    visibility:hidden;
    
}
.boxes:hover{
    border:4px solid #ffad00;
    background-image: url(./img/firstreply.jpg);
    padding:10px 0px;
}
.boxes:hover .iconlist{
    visibility:visible;
    
}
.boxes:hover .close{
    visibility:visible;
}
.boxes:hover .name{
    display:none;
}
li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root{
  display:none;
}
.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
  padding:0px;
}
`;


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}


Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};


const MyAssociatesMember = () => {

  const [searchopen, setSearchOpen] = useState(false);
  const [search, setSearch] = React.useState(false);

  const clr = { color: "#fff" };

  const [age, setAge] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const handleChangemenu = () => {
    setChecked((prev) => !prev);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Style />
      <Box sx={{backgroundImage:"url(./img/bgassociate.jpg)",backgroundSize:"cover", backgroundPosition:"top left",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"}}>
        
      <Container maxWidth="lg" >
        <Box sx={{ padding: "15px" }}>
          <Box sx={{ backgroundColor: "tranparent",position:"relative"}}>
            <Box
              sx={{
                backgroundColor: "transparent",
                color: "#000",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "unset",
                flexWrap: "wrap",
                padding: "10px 5px"
              }}
            >
              <Box>
               <MenuIcon  sx={{backgroundColor:"#fff", width:"40px",height:"30px", borderRadius:"0.25rem"}} onClick={() => setSearch(!search)}/>
             
              </Box>

              {!checked ?
                <Box sx={{ fontSize: "18px" , color:"#fff" }}>My Associate Members</Box> :
                <Box sx={{ fontSize: "18px" , color:"#fff" }}>Associate Members</Box>
              }
               <Box></Box>

              
             

              
            </Box>
            {search && (
                <Box>
                  <DropDown
                 
                    top={"44px"}
                    name1={<>
                    { checked ?
                      <Box sx={{cursor:"pointer"}} onClick={()=>{setChecked(!checked)}}>My Associates Profile</Box>:
                      <Box sx={{cursor:"pointer"}} onClick={()=>{setChecked(!checked)}}>All Associates Profile</Box>
                    }
                    </>
                     
                    }
                    name2={
                      <Link to="/inviteassociates" style={clr}>
                       Add Associates
                      </Link>
                    }
                    display={"none"}
                    name3={
                      <Link to="/associatemember" style={clr}>
                      Associates Bio's
                    </Link>
                    }
                    name4={
                      <Typography
                        onClick={() => {
                          setSearchOpen(true);
                        }}
                        sx={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Search
                      </Typography>
                    }
                    name5={
                      <Link to="/directory" style={clr}>
                        Directory
                      </Link>
                    }
                    maxWidth={135}
                    bgcolor={"#1688ca"}
                    color={"#fff"}
                  />

                  {searchopen && (
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 6,
                        top: "1%",
                        left: "12%",
                        zIndex: 999,
                        border: "1px solid #C3C3C3",
                        bgcolor: "#fff",
                      }}
                    >
                      <Search
                        searchopen={searchopen}
                        setSearchOpen={setSearchOpen}
                      />
                    </Box>
                  )}
                </Box>
              )}


            
            

            <Box sx={{position:"relative", padding:"5px"}}>

            

           <Container sx={{backgroundColor:"rgba(0,0,0,.4)", color:"#fff" , marginBottom:"10px" , border:"2px solid transparent ",padding:"10px 0px", borderRadius:"0.25rem"}} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}  >
                   
                        <Box>
                        <ImageList sx={{width:"100%",height:"100%",padding:"15px"}} cols={1}>
                            <ImageListItem sx={{borderRadius:"0.25rem", border:"2px solid"}}>
                                <img src="./img/john.jpg"  />
                            </ImageListItem>
                        </ImageList>
                        </Box>
                        <Box>
                        <Stack
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        // paddingTop: "2px",
                        // paddingBottom: "2px",
                        // marginTop: "10px",
                        flexWrap:'wrap',
                      }}
                      spacing={2}
                    >
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                    </Stack>
                        </Box>
                    
                </Grid>
                <Grid item xs={9} >
                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Chris Hepple</Typography>
                    <Typography variant="body2">Physicist who is trained in Imaging equipment and certification. Background in Imaging Services for the last 25 years working with sophisticated imaging systems from various vendors to include Toshiba, Siemans, Phillips and many others. Oversee and manage various imaging projects such as Catscans, MRI, Cath Labs, Linear Accelerators and bone density equipment.</Typography>
                    </Box>

                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Skills</Typography>
                    <Typography variant="body2">Oversee projects involving imaging equipment</Typography>
                    </Box>

                    <Box>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Projects</Typography>
                    <Typography variant="body2">Certification of Catscan, MRI, Fluorosopy projects</Typography>
                    </Box>

                    
                </Grid>
            </Grid>
           </Container>

           <Container sx={{backgroundColor:"rgba(0,0,0,.4)", color:"#fff" , marginBottom:"10px" , border:"2px solid transparent ",padding:"10px", borderRadius:"0.25rem"}} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}  >
                   
                        <Box>
                        <ImageList sx={{width:"100%",height:"100%",padding:"15px"}} cols={1}>
                            <ImageListItem sx={{borderRadius:"0.25rem", border:"2px solid"}}>
                                <img src="./img/3.png"  />
                            </ImageListItem>
                        </ImageList>
                        </Box>
                        <Box>
                        <Stack
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        // paddingTop: "2px",
                        // paddingBottom: "2px",
                        // marginTop: "10px",
                        flexWrap:'wrap',
                      }}
                      spacing={2}
                    >
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                    </Stack>
                        </Box>
                    
                </Grid>
                <Grid item xs={9} >
                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Eric Link</Typography>
                    <Typography variant="body2">Background in Management of IT systems and services in a healthcare environment for the last 10 years, Involved in healthcare facilities. Experienced with various IT software programs and EMRs from large vendors. Implement complex IT systems in hospitals and work with teams initiating strategies and goals.</Typography>
                    </Box>

                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Skills</Typography>
                    <Typography variant="body2">Review and implement IT initiatives in a healthcare facility meeting to data and other needs of the</Typography>
                    </Box>

                    <Box>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Projects</Typography>
                    <Typography variant="body2">Nurse call upgrades, Smart Room Technology, EHR, IT support projects</Typography>
                    </Box>

                    
                </Grid>
            </Grid>
           </Container>

           <Container sx={{backgroundColor:"rgba(0,0,0,.4)", color:"#fff" , marginBottom:"10px" , border:"2px solid transparent ",padding:"10px", borderRadius:"0.25rem"}} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}  >
                   
                        <Box>
                        <ImageList sx={{width:"100%",height:"100%",padding:"15px"}} cols={1}>
                            <ImageListItem sx={{borderRadius:"0.25rem", border:"2px solid"}}>
                                <img src="./img/2.png"  />
                            </ImageListItem>
                        </ImageList>
                        </Box>
                        <Box>
                        <Stack
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        // paddingTop: "2px",
                        // paddingBottom: "2px",
                        // marginTop: "10px",
                        flexWrap:'wrap',
                      }}
                      spacing={2}
                    >
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                    </Stack>
                        </Box>
                    
                </Grid>
                <Grid item xs={9} >
                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Chris Hepple</Typography>
                    <Typography variant="body2">Physicist who is trained in Imaging equipment and certification. Background in Imaging Services for the last 25 years working with sophisticated imaging systems from various vendors to include Toshiba, Siemans, Phillips and many others. Oversee and manage various imaging projects such as Catscans, MRI, Cath Labs, Linear Accelerators and bone density equipment.</Typography>
                    </Box>

                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Skills</Typography>
                    <Typography variant="body2">Oversee projects involving imaging equipment</Typography>
                    </Box>

                    <Box>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Projects</Typography>
                    <Typography variant="body2">Certification of Catscan, MRI, Fluorosopy projects</Typography>
                    </Box>

                    
                </Grid>
            </Grid>
           </Container>

           <Container sx={{backgroundColor:"rgba(0,0,0,.4)", color:"#fff" , marginBottom:"10px" , border:"2px solid transparent ",padding:"10px", borderRadius:"0.25rem"}} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}  >
                   
                        <Box>
                        <ImageList sx={{width:"100%",height:"100%",padding:"15px"}} cols={1}>
                            <ImageListItem sx={{borderRadius:"0.25rem", border:"2px solid"}}>
                                <img src="./img/5.jpg"  />
                            </ImageListItem>
                        </ImageList>
                        </Box>
                        <Box>
                        <Stack
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        // paddingTop: "2px",
                        // paddingBottom: "2px",
                        // marginTop: "10px",
                        flexWrap:'wrap',
                      }}
                      spacing={2}
                    >
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                    </Stack>
                        </Box>
                    
                </Grid>
                <Grid item xs={9} >
                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Chris Hepple</Typography>
                    <Typography variant="body2">Physicist who is trained in Imaging equipment and certification. Background in Imaging Services for the last 25 years working with sophisticated imaging systems from various vendors to include Toshiba, Siemans, Phillips and many others. Oversee and manage various imaging projects such as Catscans, MRI, Cath Labs, Linear Accelerators and bone density equipment.</Typography>
                    </Box>

                    <Box sx={{marginBottom:"25px"}}>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Skills</Typography>
                    <Typography variant="body2">Oversee projects involving imaging equipment</Typography>
                    </Box>

                    <Box>
                    <Typography variant="h6" sx={{fontSize:"18px"}}>Projects</Typography>
                    <Typography variant="body2">Certification of Catscan, MRI, Fluorosopy projects</Typography>
                    </Box>

                    
                </Grid>
            </Grid>
           </Container>

           </Box>
          
            <Box>
                  <Stack direction="row" spacing={2} sx={{justifyContent:"end", padding:"10px"}}>
                    <Pagination count={3} color="primary" />
                  </Stack>
                </Box>
          </Box>
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default MyAssociatesMember;
