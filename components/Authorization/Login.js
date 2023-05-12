import { height, Stack, width } from "@mui/system";
import React, { useContext, useState } from "react";
import ImageList from "@mui/material/ImageList";
import zIndex from "@mui/material/styles/zIndex";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { redirect } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";
import { login } from "../../Api/Authorization/Login";
import { getcookie, setcookie } from "../../Helper/cookie";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setlocalstore } from "../../Helper/localsStroage";
import { Authuser } from "../Context/Auth";
import { InputBase,Container,Grid,Box } from "@mui/material";

const Imgsize = createGlobalStyle`

.bgimg{
    background-image: url(./img/loginbg-img.jpg);
    width:100%;
    background-size:cover;
    background-attachment: fixed;
}
`;
const Login = ({ setuser }) => {
  let navigate = useNavigate();
  const { auser, setauser } = useContext(Authuser);

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState(null);
  const handlelogin = (e) => {
    e.preventDefault();

    let data = login(Username, Password);
    data.then((d) => {
      const { token, role, user, message } = d.data;
      console.log(user);
      setuser(user);
      setauser(user);
      if ((token, user)) {
        setcookie("login", token);
        setlocalstore("login", user);
      }

      navigate("/MyStationDashboard", { replace: true });
    });
  };

  console.log(Username, Password);
  return (
    <div sx={{ height: "100vh" }} className="bgimg">
      <Imgsize />
      <Container maxWidth="lg" >
        <Grid  container sx={{justifyContent: "center",alignItems:"center",padding:"50px 0"}}>
          <Grid item xs={12} sm={7} md={5} >
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px:{xs:0,md:2}
          }}
        >
          <Box sx={{ width:"100%"}}>
            <Box
              sx={{ height: "100px", p:5,display:"flex",justifyContent:"center",alignItems:"center", backgroundColor: "#fff" }}
            >
              <img

                className="img-fluid w-100"
                src="./img/logo.png"
                alt="new image"
                loading="lazy"
              />
            </Box>

            <Stack
              spacing={1}
              direction="column"
              mt={3}
              sx={{
                backgroundColor: "#fff",
                padding: "26px 24px 10px",
              }}
            >
              <FormGroup sx={{ marginBottom: "10px",justifyContent:"center",display:"flex",alignItems:"center" }}>
                <InputLabel sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Username
                </InputLabel>
                <InputBase
                  placeholder="username"
                  value={Username}
                  components="input"
                  fullWidth="true"
                  type="text"
                  sx={{
                    border: "1px solid #b2b8c3",
                    padding: "5px 14px",mt:1,
                    width: "100%",
                    borderRadius: "0.25rem"
                  }}
                  onChange={(e) =>
                    setUsername((s) => {
                      console.log(s);
                      return e.target.value;
                    })
                  }
                />
                {/* <TextField
                  value={Username}
                  id="outlined-basic"
                  label="Username"
                  onChange={(e) =>
                    setUsername((s) => {
                      console.log(s);
                      return e.target.value;
                    })
                  }
                  variant="outlined"
                /> */}
              </FormGroup>
              <FormGroup sx={{justifyContent:"center",display:"flex",alignItems:"center" }}>
                <InputLabel sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Password
                </InputLabel>
                <InputBase
                  placeholder="password"
                  value={Password}
                  components="input"
                  fullWidth="true"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  sx={{
                    border: "1px solid #b2b8c3",
                    padding: "5px 14px",mt:1,
                    width: "100%",
                    borderRadius: "0.25rem",
                  }}
                  
                />
                {/* <TextField
                  id="outlined-password-input"
                  label="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                /> */}
              </FormGroup>
              <FormGroup
                sx={{
                  fontSize: "10px",
                  marginRight: "5px",
                  fontWeight: "700",
                  color: "#777",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember Me"
                />
              </FormGroup>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  sx={{
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    color: "#999",
                  }}
                >
                  Lost your password?
                </Typography>
                <Button
                  onClick={handlelogin}
                  variant="contained"
                  sx={{ fontSize: "8px" }}
                  startIcon={<KeyIcon />}
                >
                  Login
                </Button>
              </Stack>
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#C39BE1",
                    mt: 1,
                  }}
                >
                  Building your Bridge to Better Collaboration
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>

            <Box
              component="span"
              sx={{
                display: "block",
                backgroundColor: "#fff",
                marginTop: "5px",
                padding: "10px 24px 10px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "13px", color: "#000", fontWeight: "bold" }}
              >
                Don't have an account?{" "}
                <Typography
                  variant="span"
                  sx={{ color: "#337ab7", fontSize: "13px", cursor: "pointer" }}
                >
                  Sign Up
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "block",
                backgroundColor: "#bfbfbf",
                marginTop: "5px",
                padding: "10px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              <Typography sx={{ fontSize: "14px", textAlign: "left" }}>
                You are our guest, feel free to explore the site and experience
                a new professional and unique business networking platform.
              </Typography>
            </Box>
          </Box>
        </Box>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
};

export default Login;
