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
import Menul from "./LongMenu";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { addpage, deletepage, getpage } from "../../../Api/Pages/Page";

import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import JoditEditor from "jodit-react";
import { useRef } from "react";

export const Addpage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, settitle] = useState("");
  console.log(title, content, "rijwfiw");
  const handlesubmit = (e) => {
    e.preventDefault();
    addpage(title, content).then(() => {
      alert("jsfu");
    });
  };
  return (
    <div>
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
                  sx={{
                    color: "#337ab7",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Pages
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className="text-end">
                <Link to="/admin/pages/">
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ textTransform: "capitalize", minWidth: "70px" }}
                  >
                    {" "}
                    Back{" "}
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              bgcolor: "#fff",
              color: "#000",
              p: 1,
              borderRadius: "1px 1px 0 0",
              mb:2
            }}
          >
            <Grid item sm={6}>
              <Stack direction="column" spacing={1} className="mb-3">
                <label className="fw-bold">Page Title</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </Stack>
            </Grid>

            <Grid item sm={12}>
              <Stack direction="column" spacing={1} className="mb-3">
                <Box>
                  <label className="fw-bold">Page Content</label>
                </Box>
                <Box>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={2} // tabIndex of textarea
                    onBlur={(newContent) => {}} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {
                      setContent(newContent);
                    }}
                  />
                </Box>
              </Stack>
            </Grid>

            <Grid  item sm={12}>
              <Box className="text-end mt-3">
                <Button type="button" variant="contained" onClick={handlesubmit}>Save</Button>
              </Box>
            </Grid>


          </Grid>
        </Box>
      </Container>

      {/* end  */}
    </div>
  );
};
