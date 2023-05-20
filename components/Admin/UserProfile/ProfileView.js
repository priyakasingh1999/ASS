import React, { useEffect, useState } from "react";
import { Box,Avatar } from "@mui/material";
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
import img1 from '../../../../src/img/5.jpg'

const UserprofileView = () => {
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
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{ color: "#337ab7", fontSize: "22px", fontWeight: "bold" }}
              >
                USER PROFILE
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="text-end">
              <Link to="/admin/user-profile">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    minWidth: "70px",
                    color: "#fff",
                    bgcolor: "red",
                  }}
                >
                  Back
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={7}>
            <Table className="border-none" aria-label="simple table">
             
              <TableBody>
                <TableRow>
                  <TableCell className="border text-center p-0">FIRST NAME</TableCell>
                  <TableCell className="border text-center p-0">Chris</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="border text-center p-0">LAST NAME</TableCell>
                  <TableCell className="border text-center p-0">Hepple</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">ADDRESS</TableCell>
                  <TableCell className="border text-center p-0">45645645 yates</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">TITLE</TableCell>
                  <TableCell className="border text-center p-0">Biomed Manager</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">CITY</TableCell>
                  <TableCell className="border text-center p-0">Nowhere</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">STATE</TableCell>
                  <TableCell className="border text-center p-0">CA</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">POSTAL CODE</TableCell>
                  <TableCell className="border text-center p-0">563334</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">PHONE NUMBER</TableCell>
                  <TableCell className="border text-center p-0">456456546</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">COMPANY</TableCell>
                  <TableCell className="border text-center p-0">Core compliance Imaging</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">DEPARTMENT</TableCell>
                  <TableCell className="border text-center p-0">Imaging</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0" sx={{minWidth:"300px"}}>PROFILE IMAGE</TableCell>
                  <TableCell className="border text-center p-0 d-flex justify-content-center">
                    <Avatar variant="rounded" sx={{width:100 , height:100}} src={img1} />
                  </TableCell>
                </TableRow>
                <TableRow className="" >
                  <TableCell className="text-center   pt-4 px-0" colSpan={2}>

                    <Stack direction="row" sx={{justifyContent:"space-around"}}>
                      <Button sx={{minWidth:"100px",textTransform:"capitalize"}} variant="contained" color="success">Edit</Button>
                      <Button  sx={{textTransform:"capitalize"}} variant="contained"  color="error">Disable</Button>
                      <Button  sx={{textTransform:"capitalize"}}  variant="contained"  color="warning">Delete Photo</Button>
                      <Button  sx={{textTransform:"capitalize"}}  variant="contained"  color="error">Delete Profile</Button>
                    </Stack>

                  </TableCell>
                 

                  
                 
                  
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default UserprofileView;
