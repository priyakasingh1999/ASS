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

const WebsiteH = () => {
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
                WEBSITE HITS
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
           <Stack>
            <Box>

            </Box>
            <Box>
                
                </Box>
                <Box>
                <Button></Button>
                </Box>
           </Stack>
          </Grid>


          <Grid item xs={7}>
            <Table className="border-none" aria-label="simple table">
             
              <TableBody>
                <TableRow>
                  <TableCell className="border text-center p-0">Total Number Of Visitors</TableCell>
                  <TableCell className="border text-center p-0">9345</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="border text-center p-0">Total Number Of Unique Visitors</TableCell>
                  <TableCell className="border text-center p-0">3611</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">Total No Of Today Visitors</TableCell>
                  <TableCell className="border text-center p-0">2</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">Total No Of Today Unique Visitors</TableCell>
                  <TableCell className="border text-center p-0">2</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="border text-center p-0">Todays Page Views</TableCell>
                  <TableCell className="border text-center p-0">1</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WebsiteH;
