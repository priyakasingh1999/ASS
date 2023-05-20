import React, { useEffect, useState } from "react";
import {Checkbox,Box}from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Menul from "../Pages/LongMenu";
import Grid from "@mui/material/Grid";
import { addpage, deletepage, getpage } from "../../../Api/Pages/Page";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Data from "../UserProfile/ProfileData";

const  Enable = () => {
  const navigate = useNavigate();
  const [row, setrow] = useState(null);
  const [pagetext, setpagetext] = useState("");

  console.log(pagetext);
  useEffect(() => {
    getpage().then((data) => {
      setrow(data);
    });
  }, []);
  if (!row) {
    return (
      <Stack
        sx={{
          color: "grey.500",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  const handledelete = (id) => {
    deletepage(+id).then((data) => {
      if (data) {
        navigate("/admin/pages");
      }
    });
  };

  const newrow =
    row.length > 0 &&
    row.filter((r) => {
      const { title } = r;
      let k = title.toLowerCase();
      return k.includes(pagetext.toLowerCase());
    });

  console.log(newrow);
  return (
    <Container maxWidth="lg" id="pagek" sx={{ mt: 5 }}>
      <Grid container>
        <Grid item xs={12}>
          <Stack direction="row" spacing={1} sx={{alignItems:"center"}}>
          <Box>
            <Menul/>
          </Box>
          <Box>
          <Typography sx={{fontSize:"30px",color:"black"}}>
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
        <Grid container className="mb-3">
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ color: "#337ab7", fontSize: "22px",fontWeight:"bold" }}>
              ENABLE PROGRAMS
              </Typography>
             
            </Box>
          </Grid>

         

          
        </Grid>

        <Box sx={{ border: "1px solid #337ab7", px: 0  }} className="rounded mb-3">
          <Grid
            container
            sx={{
              bgcolor: "#337ab7",
              color: "#fff",
              p: 1,
              borderRadius: "1px 1px 0 0",
            }}
          >
            
          </Grid>

          <Grid container sx={{ px: 1,
              py:2, }}>
            <Grid item xs={12}>
              <Box sx={{ bgcolor: "#fff", p: 1, width: "100%" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                 

                  {
                        Data.map((data) => {
                          const {id,username,enablename}=data
                          return (
                          <>
                              <TableBody className="border-top" key={id}>
                              <TableRow
                                sx={{
                                  backgroundColor: "#fff",
                                }}
                              >
                               
                                <TableCell sx={{ py: 1 }} align="left">
                                  {enablename}
                                </TableCell>
                                
                                <TableCell sx={{ py: 1 }} align="left">
                                  <Checkbox size="small" defaultChecked sx={{p:0}}/>
                                </TableCell>

                                <TableCell sx={{ py: 1 ,minWidth:"300px"}} align="left">
                                 
                                </TableCell>
                                

                              
                                
                              </TableRow>
                              <TableRow
                                sx={{
                                  
                                    backgroundColor: "#f9f9f9",
                                  }
                                }
                              >
                               
                                <TableCell sx={{ py: 1 }} align="left">
                                  {username}
                                </TableCell>
                                
                                
                                <TableCell sx={{ py: 1 }} align="left">
                                  <Checkbox size="small" defaultChecked sx={{p:0}}/>
                                </TableCell>

                                <TableCell sx={{ py: 1 ,minWidth:"300px"}} align="left">
                                </TableCell>
                                
                                
                              </TableRow>
                            </TableBody>

                                </>
                           
                          );
                        })
                        }
                    
                 
                </Table>
              </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className="text-center mt-5">
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Enable;
