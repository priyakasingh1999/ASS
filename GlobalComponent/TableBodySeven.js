import React from "react";
import Link from "react-dom";
import { Grid, Box, Typography, Avatar, Badge } from "@mui/material";
import { Table } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";

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
  .width_15{
    max-width: 15px !important;
    min-width:15px !important;
    border: none !important;
  }
  .width_100{
    max-width: 100px !important;
    min-width: 100px !important;
    border: none !important;
  }
}

`

const TableBodySeven = ({ name1, name2, name3, name4, name5, name6,fontsize }) => {
  return (
    <Grid container>
      <Cusstyle/>
      <Grid item xs={12}>
        <Table style={{margin:0,border:"none"}}>
          <tbody>
            <tr style={{borderTop:"none"}}>
             

              <td className="width_100" style={{textAlign:"center",fontSize: `${fontsize}`,verticalAlign:"middle"}}>{name1}</td>

              <td className="width_25" style={{textAlign:"center",fontSize: `${fontsize}`,verticalAlign:"middle" }}>{name2}</td>
              
              <td className="width_25" style={{textAlign:"center",fontSize: `${fontsize}`,verticalAlign:"middle" }}>{name3}</td>

              <td className="width_100" style={{textAlign:"center",fontSize: `${fontsize}`,verticalAlign:"middle" }}>{name4}</td>

              <td className="width_25" style={{textAlign:"center",fontSize: `${fontsize}`,verticalAlign:"middle" }}>{name5}</td>

              <td className="width_15" style={{textAlign:"center",fontSize: `${fontsize}`,verticalAlign:"middle" }}> {name6}</td>
            </tr>
          </tbody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default TableBodySeven;
