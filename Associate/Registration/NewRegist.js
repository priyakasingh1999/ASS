import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

const NewRegist = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: "rgb(239, 235, 252)", pt:{lg:3,xs:1} }}>
        <Container maxWidth="lg" sx={{px:{xs:0,sm:2}}}>
          <Box sx={{ px:{xs:1,lg:2} }}>
            <Grid container>
              <Grid item xs={12} lg={12} sx={{ textAlign: "center" }}>
                <Box>
                  <Typography sx={{ fontSize: "20px", py:{lg:2 , xs:1} ,fontWeight:"bold"}}>
                    Associate Creator Article Page
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Grid container>
                  <Grid item xs={12} lg={3} sx={{ my: "auto", mb: 1 }}>
                    <Box>
                     
                      <Typography sx={{fontSize:"17px"}}>1. Add Name of Article Theme</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} lg={6} sx={{ mb: 1 }}>
                    <Box>
                     
                      <input
                        type="text"
                        placeholder="Project Management"
                        className="form-control fs-14"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} lg={3} sx={{ mb: 1 }}>
                    <Box>
                      <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px",px:0,py:"2px"}}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={3} sx={{ my: "auto" }}>
                    <Box>
                      
                      <Typography sx={{fontSize:"17px"}}>2. Add To Subtitle</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} lg={6} sx={{ mb: 1 }}>
                    <Box>
                      
                      <input
                        type="text"
                        placeholder="Project Management"
                        className="form-control fs-14"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} lg={3} sx={{ mb: 1 }}>
                    <Box>
                    <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px",px:0,py:"2px"}}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={3} sx={{ my: "auto" }}>
                    <Box>
                     
                      <Typography sx={{fontSize:"17px"}}>3. Add backdrop photo</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} lg={4} sx={{ mb: 1 }}>
                    <Box>
                      
                      <input
                        type="file"
                        placeholder="Project Management"
                        className="form-control fs-14"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} lg={5} sx={{ mb: 1 }}>
                    <Box>
                    <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px",px:0,py:"2px"}}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={3} sx={{ my: "auto" }}>
                    <Box>
                     
                      <Typography sx={{fontSize:"17px"}}>4. Add front page photo</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={8} lg={4} sx={{ mb: 1 }}>
                    <Box>
                     
                      <input
                        type="file"
                        placeholder="Project Management"
                        className="form-control fs-14"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} lg={5} sx={{ mb: 1 }}>
                    <Box>
                    <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px",px:0,py:"2px"}}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={3} sx={{ my: "auto" }}>
                    <Box>
                     
                      <Typography sx={{fontSize:"17px"}}>5. Add logo</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} lg={4} sx={{ mb: 1 }}>
                    <Box>
                      
                      <input
                        type="file"
                        placeholder="Project Management"
                        className="form-control fs-14"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} lg={5} sx={{ mb: 1 }}>
                    <Box>
                    <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px",px:0,py:"2px"}}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={3} sx={{ my: "auto" }}>
                    <Box>
                      
                      <Typography sx={{fontSize:"17px"}}>6. Caption</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} lg={6} sx={{ mb: 1 }}>
                    <Box>
                     
                      <input
                        type="text"
                        placeholder="This Article will present various topics on project management in a healthcare environment in order to be more efficient thereby savings costs and completing projects on time"
                        className="form-control fs-14"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} lg={3} sx={{ mb: 1 }}>
                    <Box>
                    <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px",px:0,py:"2px"}}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={3} sx={{ my: "auto" }}>
                    <Box>
                      
                      <Typography sx={{fontSize:"17px"}}>7. Name of Article</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} lg={6} sx={{ mb: 1 }}>
                    <Box>
                      
                      <input
                        type="text"
                        placeholder=""
                        className="form-control fs-14"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} lg={3} sx={{ mb: 2 }}>
                    <Box>
                      <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px",px:0,py:"2px"}}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={12} sx={{ textAlign: "center", mb:{lg:1,xs:2} }}>
                    <Stack spacing={1} sx={{justifyContent:"center",alignItems:"center",direction:{xs:"column",lg:"row"}}}>
                      <Button
                        variant="contained"
                        size="snall"
                        sx={{ ml:{lg:2,xs:1}, fontSize: "12px" }}
                      >
                        Submit
                      </Button>
                     <Typography sx={{fontSize:{lg:"14px",xs:"12px"}}}> Publish Article Home Landing Page</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundImage: "url(./img/59_backdrop.jpg)",
          backgroundSize: "100% 100%",
          pb: 7,
        }}
      >
        <Container maxWidth="lg" sx={{px:{xs:0,sm:2}}}>
          <Box sx={{ px:{xs:0,lg:2} }}>
            <Grid container sx={{ border: "1px solid #000" }}>
              <Grid item xs={12} lg={12}>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    bgcolor: "#f1f1f1",
                    p: 2,
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{ width:{lg:"80px",xs:"40px"}, height:{lg:"80px",xs:"40px"}}}
                      src="./img/john.jpg"
                    />
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize:{lg:"25px",xs:"14px"} }}>
                      Project Management
                    </Typography>
                    <Typography sx={{ fontSize:{lg:"18px",xs:"12px"} }}>
                      Unique perspectives managing projects in complicated
                      healthcare environments
                    </Typography>
                  </Box>
                  <Box>
                    <Avatar
                      variant="rounded"
                      sx={{ width:{lg:"100px",xs:"50px"}, height:{lg:"100px",xs:"50px"} }}
                      src="./img/59_addlogo.png"
                    />
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12} lg={12}>
                <Box sx={{ bgcolor: "#fff" }}>
                  <Stack direction="row" spacing={5}>
                    <Box sx={{ p: 2 }}>
                      <Link to="#">
                        <Typography sx={{ color: "#000" }}>
                          Project Ideas
                        </Typography>
                      </Link>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Link to="#">
                        <Typography sx={{ color: "#000" }}>
                          Hospital Projects
                        </Typography>
                      </Link>
                    </Box>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} lg={12}>
                <Box
                  sx={{
                    backgroundImage: "url(./img/59_frontpagephoto.jpg)",
                    backgroundSize: "100% 100%",
                    minHeight:{lg:"450px",xs:"248px"},
                  }}
                ></Box>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Box sx={{ bgcolor: "#1688ca" }}>
                  <Typography sx={{ fontSize: "13px", p: 1, color: "#fff" }}>
                    This Article will present various topics on project
                    management in a healthcare environment in order to be more
                    efficient thereby savings costs and completing projects on
                    time
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NewRegist;
