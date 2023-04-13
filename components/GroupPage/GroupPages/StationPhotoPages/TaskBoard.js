import React from 'react'
import TaskBoardData from './TaskBoardData'
import {Box,Grid,Typography} from "@mui/material";
import InfoSubHead from '../InfoPages/InfoSubHead';
const TaskBoard = () => {
  return (
    <Box>
      <Box>
        <InfoSubHead
          name={"Task Boards"}
          backgroundColor={"#d2dee8"}
          color={"#000"}
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
