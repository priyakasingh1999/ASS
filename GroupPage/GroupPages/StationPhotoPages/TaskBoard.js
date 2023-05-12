import React from "react";
import TaskBoardData from "./TaskBoardData";
import { Box, Grid, Typography } from "@mui/material";
import InfoSubHead from "../../../GlobalComponent/InfoSubHead";
import Icon from "../../../GlobalComponent/Icon";
import Badge from '@mui/material/Badge';
import TextsmsIcon from '@mui/icons-material/Textsms';

const TaskBoard = ({onClick,onClick1}) => {
  return (
    <Box>
      <Box>
        <InfoSubHead
          name={<Typography sx={{cursor:"pointer",border:"2px solid transparent",":hover":{border:"2px solid #1688ca"}}} onClick={onClick}>Task Boards</Typography>}
          backgroundColor={"#d2dee8"}
          color={"#000"}
          urlname={<Icon url={"./img/taskicon2.png"}/>}
          urlname1={<Badge onClick={onClick1} sx={{mt:1}}  color="success" badgeContent={0} showZero>
          <TextsmsIcon/>
       </Badge>}
        
        />
      </Box>
      <Box sx={{ backgroundColor: "#fff", padding: "5px" }}>
        <Grid container>
          {TaskBoardData.map((p) => {
            const { id, text1, num, backgroundColor } = p;
            return (
              <Grid item xs={3} key={id}>
                <Box
                  sx={{
                    backgroundColor: { backgroundColor },
                    borderRadius: "0 0 .25rem .2rem ",
                    padding: "0 4px",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: "center",
                        ":hover": { textDecoration: "underline" },
                        fontSize: { sm: "10px", xs: "9px" },
                      }}
                    >
                      {text1}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "end" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: "center",
                        ":hover": { textDecoration: "underline" },
                      }}
                    >
                      {num}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default TaskBoard;
