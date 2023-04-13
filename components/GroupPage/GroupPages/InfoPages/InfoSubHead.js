import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Icon from "./Icon";

const InfoSubHead = ({name, backgroundColor, color,Icon,urlname , urlname1}) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: {backgroundColor}, color:{color} }}
      >
        <Grid container>
          <Grid item xs={2} sx={{ my: "auto" }}>
          {/* <Box><Avatar src={urlname1} sx={{backgroundColor:"transparent"}}/></Box> */}
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1">{name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "end",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box sx={{backgroundColor:"transparents"}}>{urlname}</Box>
             { Icon &&
                <Icon url="./img/ss2.png"/>
             }
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InfoSubHead;
