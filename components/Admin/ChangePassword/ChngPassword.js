import React from "react";
import { Box ,InputBase } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Menul from "../Pages/LongMenu";
import Grid from "@mui/material/Grid";
import { createGlobalStyle } from "styled-components";

const ChangePassword = () => {
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
                    }}
                  >
                    CHANGE PASSWORD FOR ADMIN
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  Admin Username
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="text"
                    placeholder="username"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  Admin Email
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="email"
                    placeholder="admin@associatenetwork.com"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  Old Password
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="password"
                    placeholder="Old Password"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  New Password
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="password"
                    placeholder="New Password"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  Reenter New Password
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="password"
                    placeholder="Reenter New Password"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="text-center mt-3">
                  <Button variant="contained" size="small">Submit</Button>
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={{mt:4}}>
              <Grid item xs={12}>
                <Box>
                  <Typography
                    sx={{
                      color: "#337ab7",
                      fontSize:{xs:"14px",sm:"20px"},
                      fontWeight: 400,
                      textAlign: "center",
                    }}
                  >
                    CHANGE PASSWORD FOR ASSOCIATE
                  </Typography>
                </Box>
              </Grid>

              

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                 Email
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="email"
                    placeholder="admin@associatenetwork.com"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  Old Password
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="password"
                    placeholder="Old Password"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  New Password
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="password"
                    placeholder="New Password"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} className="my-auto">
                <Typography className="text-md-end pe-md-4" sx={{ fontSize: "14px" }}>
                  Reenter New Password
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="ps-md-3 mb-3 mb-md-0">
                  <InputBase
                    type="password"
                    placeholder="Reenter New Password"
                    className="w-100 border rounded rounded-1 border-dark px-1"
                    sx={{ fontSize: 14, lineHeight: "0px", p: "0px 0px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="text-center mt-3">
                  <Button variant="contained" size="small">Submit</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ChangePassword;
