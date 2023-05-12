import { Avatar, Typography, Divider, Grid } from "@mui/material";
import Collapse from "react-bootstrap/Collapse";
import React, { useState, useEffect } from "react";
import { Container, Box, Stack, Link, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { RecentSes } from "../Api/Session";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import Slider from "@mui/material/Slider";

import Table from "react-bootstrap/Table";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";

import CircularProgress from "@mui/material/CircularProgress";

import moment from "moment";
import { createGlobalStyle } from "styled-components";
import AddTabs from "./AddTabs";
import Comment from "./Components/Comment";
import Search from "./Components/Search";
import Camera from "./Components/Camera";
import Elapsed from "./Components/Elapsed";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const Index = () => {
  const [open, setOpen] = useState(false);

  // comments

  const [comment, setcomment] = useState(false);

  // Search
  const [search, setSearch] = useState(false);

  // camera

  const [camera, setcamera] = useState(false);
  // Progress bar
  const [progress, setProgress] = React.useState(0);

  const [elapsed, setElapsed] = useState(false);
  const [completion, setCompletion] = useState(false);

  const handleElapsed = () => {
    setElapsed(true);
  };
  const Handlecompletion = () => {
    setCompletion(true);
  };

  //
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const CusStyle = createGlobalStyle`
    .css-1m9pwf3{
        opacity: 1;
        width:90%;
        height:90%;    }

        .showesed{
            visibility:hidden;
        }
        .boxes:hover .showesed{
            visibility:visible;
        }
    `;

  return (
    <div>
      <Container maxWidth="lg">
        <CusStyle />
        <Box m={5}>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Box gap={3} spacing={3}>
              <Grid container gap={2}>
                <Grid items>
                  <Typography
                    p={0.3}
                    sx={{
                      backgroundColor: "#A7D9FF",
                      border: "0px solid red",
                      borderRadius: 2,
                    }}
                  >
                    <Link
                      px={0.9}
                      sx={{ color: "black", fontSize: "14px" }}
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      Add Project
                    </Link>
                  </Typography>
                </Grid>
                <Grid items>
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#A7D9FF",
                    }}
                    className="rounded px-1"
                  >
                    <Box>
                      <Checkbox size="small" sx={{ p: 0 }} />
                    </Box>
                    <Typography p={0.3}>
                      <Link sx={{ color: "black", fontSize: "14px" }}>
                        Enable Sorting
                      </Link>
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            <Box></Box>
            <Box>
              <Typography
                p={0.3}
                sx={{
                  backgroundColor: "#A7D9FF",
                  border: "0px solid red",
                  borderRadius: 2,
                }}
              >
                <Link
                  to="/Sharetask"
                  px={0.9}
                  sx={{ color: "black", fontSize: "14px" }}
                >
                  Share Tasks
                </Link>
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ bgcolor: "#fff" }}>
            <Box mt={2} sx={{ backgroundColor: "#ffff" }}>
              <Stack
                direction="row"
                p={1}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f3f3f3",
                }}
              >
                <Box>
                  <ArrowDropDownCircleIcon />
                  <MapsUgcIcon onClick={() => setcomment(!comment)} />
                  {comment && (
                    <Comment comment={comment} setcomment={setcomment} />
                  )}
                </Box>
                <Box>
                  <Typography>Project Tasks - All Projects</Typography>
                </Box>
                <Box>
                  <Stack direction="row" gap={2} sx={{ alignItems: "center" }}>
                    <Avatar
                      sx={{
                        width: 20,
                        height: 20,
                        bgcolor: "black",
                        fontSize: 14,
                      }}
                      onClick={() => setSearch(!search)}
                    >
                      S
                    </Avatar>
                    {search && <Search search={search} setSearch={setSearch} />}
                    <CameraAltIcon onClick={() => setcamera(!camera)} />
                    {camera && <Camera camera={camera} setcamera={setcamera} />}
                  </Stack>
                </Box>
              </Stack>
            </Box>
            {
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <AddTabs />
                </div>
              </Collapse>
            }

            <Table striped bordered hover className="mb-0 position-relative  ">
              {elapsed && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "5%",
                    left: "50%",
                    transform: "translate(-50%, 0%)",
                    zIndex: 999,
                  }}
                >
                  <Elapsed setElapsed={setElapsed} />
                </Box>
              )}
              <thead
                style={{
                  backgroundColor: "#cfdce7",
                  fontSize: "10px",
                  fontWeight: "lighter",
                }}
              >
                <tr
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    S.no
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textAlign: "center",
                      textTransform: "none",
                    }}
                  >
                    Comments
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    Tasks
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    Tags
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    Assigned
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    Attachments
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    Timeline
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    % Elapsed
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    % Done
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    Critical %
                  </th>
                  <th
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                  >
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td className="position-relative">
                    <Box onClick={handleElapsed}>
                      <CircularProgressWithLabel
                        strokewidth="100"
                        value={progress}
                        sx={{ color: "red" }}
                      />
                    </Box>
                    {completion && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "100%",
                          bgcolor: "#fff",
                          boxShadow: 22,
                          minWidth: 180,
                          zIndex: 999,
                          p: 1,
                        }}
                      >
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "space-between" }}
                        >
                          <Box></Box>
                          <Box>
                            <Typography
                              sx={{ fontSize: "13px", fontWeight: "bold" }}
                            >
                              Set Completion
                            </Typography>
                          </Box>
                          <Box
                          sx={{cursor:"pointer"}}
                            onClick={() => {
                              setCompletion(false);
                            }}
                          >
                            X
                          </Box>
                        </Stack>
                        <Box width={"100%"}>
                          <Slider
                          sx={{p:0}}
                            defaultValue={75}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                          />
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: "13px" }}>
                            Or select pre-settings %
                          </Typography>
                        </Box>
                        <Box>
                          <Stack
                            direction="row"
                            sx={{ justifyContent: "space-around" }}
                          >
                            <Box>
                              <input type="radio" name="per" />
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: "13px" }}>
                                25
                              </Typography>
                            </Box>
                            <Box>
                              <input type="radio" name="per" />
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: "13px" }}>
                                50
                              </Typography>
                            </Box>
                            <Box>
                              <input type="radio" name="per" />
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: "13px" }}>
                                75
                              </Typography>
                            </Box>
                            <Box>
                              <input type="radio" name="per" />
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: "13px" }}>
                                100
                              </Typography>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    )}
                  </td>
                  <td>
                    <Box onClick={Handlecompletion}>
                      <CircularProgressWithLabel value={progress} />
                    </Box>
                  </td>
                  <td>
                  <Box onClick={Handlecompletion}>
                  <CircularProgressWithLabel value={progress} />
                    </Box>
                    
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      2
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      p={0.8}
                      py={1}
                      gap={1}
                      sx={{
                        justifyContent: "center",
                        border: "1px solid black",
                        alignItems: "",
                      }}
                      className="boxes"
                    >
                      <Box>
                        <Avatar
                          variant="rounded"
                          sx={{ width: 25, height: 25, alignItems: "center" }}
                          src="./img/pdf.png"
                        />
                      </Box>
                      <Box>
                        <Avatar
                          variant="rounded"
                          sx={{ width: 23, height: 25, alignItems: "center" }}
                          src="./img/2.png"
                        />
                      </Box>
                      <Box>
                        <Avatar
                          variant="rounded"
                          sx={{ width: 25, height: 25, alignItems: "center" }}
                          src="./img/pdf.png"
                        />
                      </Box>
                      <Box>
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Box>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
                <tr
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                  className="border-bottom border-dark "
                >
                  <td>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        "&:hover": {
                          border: "2px solid #337AB7",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      1
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        alignItems: "center",
                      }}
                    >
                      Overall % completion of Cerner upgrade
                    </Typography>
                  </td>
                  <td>
                    <Stack
                      className="boxes"
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        px={4}
                        py={0.2}
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          border: "2px solid red",
                          borderRadius: 2,
                        }}
                      >
                        New Task
                      </Typography>
                      <Box className="showesed">
                        <ArrowDropDownSharpIcon />
                      </Box>
                    </Stack>
                  </td>
                  <td></td>
                  <td>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "center" }}
                      className="boxes"
                    >
                      <Typography
                        p={1}
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid black",
                          justifyContent: "start",
                        }}
                      >
                        Currently no files
                        <ArrowDropDownSharpIcon className="showesed" />
                      </Typography>
                    </Stack>
                  </td>
                  <td>
                    <Typography
                      p={1}
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Sep 09 - Jan 08
                    </Typography>
                  </td>
                  <td>
                    <CircularProgressWithLabel
                      strokewidth="100"
                      value={progress}
                      sx={{ color: "red" }}
                    />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td>
                    <CircularProgressWithLabel value={progress} />
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Box>
              <Stack
                direction="row"
                p={1}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f3f3f3",
                }}
              >
                <Box></Box>
                <Box>
                  <Button variant="contained" sx={{ fontSize: 12 }}>
                    Load More
                  </Button>
                </Box>
                <Box></Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Index;
