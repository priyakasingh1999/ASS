import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Card, Grid, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import HStationData from "./HStationData";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12} sx={{ position: "relative" }}>
        <InfoSubHead
          name={"My Stations"}
          backgroundColor={"#1688ca"}
          color={"#fff"}
          urlname1={
            <a href="/all-stations" style={{ color: "#fff" }}>
              <Stack direction="row">
                <ArrowDropDownIcon />
                <Typography>Add Stations</Typography>
              </Stack>
            </a>
          }
        />
      </Grid>

      <Grid container sx={{ maxHeight: "100vh", overflowY: "auto", pb:15 ,px:2,pt:1}}>
        {HStationData.map((data) => {
          const { id, name, imgUrl, memberno } = data;

          return (
            <Grid xs={6} key={id}>
              <Box sx={{ p: 1 }}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={imgUrl}
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      p: 2,
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                        sx={{ textAlign: "center" }}
                      >
                        {memberno} Member
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
