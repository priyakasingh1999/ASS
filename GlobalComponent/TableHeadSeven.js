import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Table } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";

const TableHeadSeven = ({name1,name2,name3,name4,name5,name6,textclr,fontsize}) => {
  const Cusstyle = createGlobalStyle`
@media only screen and (min-width: 800px){
  .width_50{
    max-width: 50px !important;
    min-width:50px !important;
    border: none !important;
  }
  .width_25{
    max-width: 25px !important;
    min-width:25px !important;
    border: none !important;
  }
  .width_30{
    max-width: 30px !important;
    min-width:30px !important;
    border: none !important;
  }
  .width_100{
    max-width: 100px !important;
    min-width: 100px !important;
    border: none !important;
  }
  .width_15{
    max-width: 15px !important;
    min-width:15px !important;
    border: none !important;
  }
}

`
  return (
    <Grid container>
      < Cusstyle/>
      <Grid item xs={12}>
        <Box sx={{ overflowX: "auto" }}>
          <Table striped bordered hover style={{border:"none",margin:0}}>
            <thead
              style={{
                backgroundColor: "#cfdce7",
                fontWeight: "lighter",
              }}
            >
              <tr style={{border:"none"}}>
                

                <th
                className="width_100"
                  style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name1}                                  
                </th>

                <th
                className="width_25"
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                  {name2}
                </th>

                <th
                className="width_25"
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name3}
                </th>
                
                <th
                className="width_100"
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name4}
                </th>

                <th
                className="width_25"
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name5}
                </th>

                <th
                className="width_15"
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name6}
                </th>

              </tr>
            </thead>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TableHeadSeven;
