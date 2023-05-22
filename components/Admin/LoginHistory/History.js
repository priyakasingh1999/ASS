import React, { useEffect, useState } from "react";
import { Checkbox, Box, Pagination } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menul from "../Pages/LongMenu";
import Grid from "@mui/material/Grid";
import { deletepage, getpage } from "../../../Api/Pages/Page";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Data from "../UserProfile/ProfileData";
import Data2 from "../UserProfile/ProfileData2";
import VisibilityIcon from "@mui/icons-material/Visibility";

const History = () => {
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
        <Grid container className="mb-3">
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{ color: "#337ab7", fontSize: "22px", fontWeight: "bold" }}
              >
                LOGIN HISTORY
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{ border: "1px solid #337ab7", px: 0 }}
          className="rounded mb-3"
        >
          <Grid
            container
            sx={{
              bgcolor: "#337ab7",
              color: "#fff",
              p: 1,
              borderRadius: "1px 1px 0 0",
            }}
          >
            <Grid item sm={12} className="my-auto">
              <Box>
                <Typography sx={{ fontSize: "13px" }}>
                  List of Login History
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ p: 1 }}>
            <Grid item xs={12}>
              <Box sx={{ bgcolor: "#fff", p: 1, width: "100%" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead
                    sx={{ fontWeight: "bold", fontSize: "18px" }}
                    className="border-top"
                  >
                    <TableRow sx={{ bgcolor: "#f9f9f9" }}>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "14px", py: 1 }}
                      >
                        S.No
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "14px", py: 1 }}
                      >
                        User Name
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "14px", py: 1 }}
                        align="left"
                      >
                        User Email
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "14px", py: 1 }}
                        align="left"
                      >
                        Status
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "14px", py: 1 }}
                        align="center"
                      >
                        Login No
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "14px", py: 1 }}
                        align="center"
                      >
                        Last Login
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  {Data.map((data) => {
                    const { id, username, emailid } = data;
                    return (
                      <>
                        <TableBody className="border-top" key={id}>
                          <TableRow
                            sx={{
                              backgroundColor: "#fff",
                            }}
                          >
                            <TableCell sx={{ py: 1 }} align="left">
                              {id}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="left">
                              {username}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="left">
                              {emailid}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="left">
                              Active
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="center">
                              {id}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="center">
                              2023-05-19 08:48 PM
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              backgroundColor: "#f9f9f9",
                            }}
                          >
                            <TableCell sx={{ py: 1 }} align="left">
                              {id}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="left">
                              {username}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="left">
                              {emailid}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="left">
                              Active
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="center">
                              {id}
                            </TableCell>
                            <TableCell sx={{ py: 1 }} align="center">
                              2023-05-19 08:48 PM
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </>
                    );
                  })}
                </Table>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{display:"flex" , justifyContent:"right"}}>
              <Pagination count={2} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default History;
