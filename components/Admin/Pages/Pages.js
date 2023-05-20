import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Menul from "./LongMenu.js";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { addpage, deletepage, getpage } from "../../../Api/Pages/Page.js";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Pages = () => {
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
              <Typography sx={{ color: "#337ab7", fontSize: "25px",fontWeight:"bold" }}>
                Pages
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="text-end">
              <Link to="/admin/pages/add">
                <Button variant="contained" color="error" sx={{textTransform:"capitalize",minWidth:"150px"}}><Box sx={{fontSize:"25px",fontWeight:"bold",lineHeight:"0px",marginRight:"5px"}} component={"span"}> + </Box> Add New Page </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ border: "1px solid #337ab7", px: 0 }} className="rounded mb-3">
          <Grid
            container
            sx={{
              bgcolor: "#337ab7",
              color: "#fff",
              p: 1,
              borderRadius: "1px 1px 0 0",
            }}
          >
            <Grid item sm={6} className="my-auto">
              <Box>
                <Typography sx={{ fontSize: "18px" }}>List of pages</Typography>
              </Box>
            </Grid>

            <Grid item sm={6}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "end", alignItems: "center" }}
              >
                <Box>
                  <Typography>Filter:</Typography>
                </Box>
                <Box>
                  <input
                    style={{ minWidth: "300px" }}
                    className="form-control p-1"
                    placeholder="Filter Page List..."
                    value={pagetext}
                    onChange={(e) => {
                      setpagetext(e.target.value);
                    }}
                  />
                </Box>
                <Box>
                  <IconButton sx={{ p: 0 }}>
                    <SearchIcon sx={{ p: 0, color: "#fff" }} />
                  </IconButton>
                </Box>
              </Stack>
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
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", py: 1 }}>
                        Id
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", py: 1 }}
                        align="right"
                      >
                        Page Name
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", py: 1 }}
                        align="right"
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  {row ? (
                    <>
                      {row.length > 0 &&
                        newrow.map((r) => {
                          return (
                            <TableBody className="border-top" key={r.id}>
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                    backgroundColor: "#eeeeee",
                                  },
                                }}
                              >
                                <TableCell sx={{ py: 1 }}>{r.id}</TableCell>
                                <TableCell sx={{ py: 1 }} align="right">
                                  {r.title}
                                </TableCell>
                                <TableCell sx={{ py: 1 }} align="right">
                                  <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                  >
                                    <Link to={`/admin/pages/edit/${r.id}`}>
                                      <EditIcon />
                                    </Link>
                                    <DeleteIcon
                                      onClick={() => handledelete(r.id)}
                                    />
                                  </Stack>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          );
                        })}
                    </>
                  ) : (
                    <div>shdeuih</div>
                  )}
                </Table>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Pages;
