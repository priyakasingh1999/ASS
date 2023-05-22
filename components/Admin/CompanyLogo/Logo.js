import React from "react";
import { Box ,InputBase } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Menul from "../Pages/LongMenu";
import Grid from "@mui/material/Grid";
import { createGlobalStyle } from "styled-components";

const Logo = () => {
  const Cus_style = createGlobalStyle`
  
    input.css-yz9k0d-MuiInputBase-input::placeholder{
        color:black !important;
        opacity: 1;
    }
    `;

  return (
    <Container maxWidth="lg" id="pagek" sx={{ my:5 }}>
      <Cus_style />
      <Grid container>
        <Grid item xs={12}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box>
              <Menul />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "30px", color: "black" }}>
                Menu
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          height: "100%",
          padding: "20px",
          width: "100%",
          minHeight:"300px"
        }}
      >
        <Grid container className="mb-3" sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={5}>
            <Grid container >
              <Grid item xs={12}>
                <Box>
                  <Typography
                    sx={{
                      color: "#337ab7",
                      fontSize:{xs:"14px",sm:"20px"},
                      fontWeight: 400,
                      textAlign: "center",
                      mb:1
                    }}
                  >
                    MANAGE COMPANY LOGO
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                 Company Logo
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                 <input type="file"/>
                </Typography>
              </Grid>

              <Grid item xs={12} className="text-center mt-3">
               <Button size="small" variant="contained">Save</Button>
              </Grid>

             

            </Grid>
          
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Logo;
