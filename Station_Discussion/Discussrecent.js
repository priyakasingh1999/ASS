import React, { useContext, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Count, { Session } from "../components/Context/Count";
import { RecentSes } from "../Api/Session";
import { Searchd } from "./Searchd";
import { Link } from "react-router-dom";

const Discussrecent = () => {
  const [searchon, setsearchon] = useState(false);
  let { sessionapi, setsessionapi } = useContext(Session);
  useEffect(() => {
    let alldata = RecentSes();
    alldata.then((data) => {
      setsessionapi(data);
    });
  }, []);

  return (
    <Box sx={{ width: "100%", backgroundColor: "#efebfc", zIndex: "999",position:"relative"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ddd",
          paddingRight: "30px",
        }}
      >
        <Box></Box>
        <Box>
          <Typography variant="span" color="initial">
            Recent Sessions
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            alt="search"
            src="/img/Search.svg"
            onClick={() => {
              setsearchon(!searchon);
            }}
          />
          <HighlightOffIcon />
        </Box>
        
      </Box>
     
     <Box>
     {searchon &&
          <Collapse in={searchon} orientation="vertical">
            <Searchd />
          </Collapse>
        }
     </Box>
        

        <Box sx={{ maxHeight: "500px", overflowY: "scroll" }}>
          {sessionapi.map((rdata) => {
            const {
              id,
              textbox,
              file,
              station,
              created_at,
              session_associate,
            } = rdata;
            return (
              <Grid container key={id} sx={{ bgcolor: "#fff", mb: 1 }}>
                <Grid item xs={12} sm={4} md={3}>
                  <Box>
                    <Stack direction="row" spacing={2} sx={{ padding: "5px" }}>
                      <Avatar alt="Remy Sharp" src="../img/john.jpg" />
                      <Box sx={{ minWidth: "100px" }}>
                        <Box>
                          <Typography
                            variant="body1"
                            color="initial"
                            sx={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            Chris Hepple
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: { xs: "flex", md: "block" },
                            gap: { xs: "20px" },
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="initial"
                            sx={{ fontSize: "13px" }}
                          >
                            03/02/2000
                          </Typography>
                          <Stack direction="row" spacing={2} sx={{mt:{xs:2,md:1}}}>
                            <Avatar
                              sx={{
                                color: "black",
                                width: "20px",
                                height: "20px",
                                fontSize: "12px",
                                backgroundColor: "#cccccc",
                              }}
                            >
                              2
                            </Avatar>

                            <AddCircleOutlineIcon
                              sx={{
                                color: "grey",
                                width: "22px",
                                height: "22px",
                              }}
                            />
                          </Stack>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="body1"
                      color="initial"
                      align="left"
                      sx={{ fontSize: "14px",p:1 }}
                    >
                      {textbox}
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: "13px", md: "15px" },mt:{sm:2,md:1} }}
                      color="initial"
                    >
                      {station}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Box>
     
    </Box>
  );
};

export default Discussrecent;
