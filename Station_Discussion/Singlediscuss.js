import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  ImageList,
  ImageListItem,
  Typography,
  Grid,
  Paper,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import JoditEditor from "jodit-react";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import AttachmentSharpIcon from "@mui/icons-material/AttachmentSharp";
import { addcomment, discusscomment } from "../Api/Discussion/Discussion";
import { Link, useParams } from "react-router-dom";
import { Discussapi } from "../components/Context/Discussionapi";
import Sidebar from "./Sidebar";
import Discussrecent from "./Discussrecent";

const Bgimg = createGlobalStyle`
.title:hover{
    border:2px solid black;
}
.title{
    border:2px solid #fff;
    border-radius:0.25rem;
    padding:2px
    
}
.date{
  position:relative
}
.date::before{
  content: "";
    display: block;
    border-top: 1px solid #D4D4D4;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    Z-index:0;
}
.show{
  visibility:hidden;
}
.box_hover:hover .show{
  visibility:visible;
}
`;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Singlediscuss = () => {
  const [sucess, setsucces] = useState("");
  const [circle, setcircle] = useState(false);
  const [content, setContent] = useState("");
  console.log(content);
  const [data, setdata] = useState(null);
  const [name, setname] = useState("");
  const [sidebardata, setsidebardata] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    discusscomment(+id).then((data) => {
      setdata(data);
    });
  }, [id, sucess]);

  const [thirdcomment, setthirdcomment] = useState(false);
  const [Rec, setRec] = useState(false);
  let { discussdata, setdiscussdata } = useContext(Discussapi);
  const handlediscuss = (e) => {
    setsucces("");
    e.preventDefault();
    addcomment(discussdata, id, content).then((data) => {
      console.log(data.messege, "this is che kinggg");
      setsucces(data.messege);
    });
  };
  if (!data) {
    return (
      <div>
        <h2>loading ......</h2>
      </div>
    );
  }

  console.log(discussdata, "this is new discuss");
  let name1 = data.results.session_associate[0];
  console.log(name1);
  return (
    <>
      <Box className="bgimg"></Box>
      <Bgimg />


      <Container maxWidth="lg" sx={{ marginTop: "15px" }}>

        <Grid container sx={{justifyContent:"end"}}>
        <Grid item xs={12} md={9} sx={{position:"relative"}}>
          {Rec && (
              <Box
                sx={{
                  position: "absolute",
                  top: "210px",
                  left: "14px",     
                  right:"10px",            
                  zIndex: "999",
                  bgcolor: "white",
                  boxShadow:"2px 2px 15px rgba(0 ,0 ,0 ,.2),-2px -2px 15px rgba(0 ,0 ,0 ,.2)"
                }}
              >
                <Discussrecent />
              </Box>
            )}
          </Grid>
        </Grid>

        <Grid container spacing={0} sx={{ padding: "10px"}}>
         
          <Grid
            item
            xs={12}
            sx={{ backgroundColor: "#fff"}}
          >
           
            <Box
              sx={{
                backgroundColor: "#1688ca",
                color: "#fff",
                display: "flex",
                justifyContent: {xs:"center",md:"left"},
                flexDirection:{xs:"column"},
                gap:{xs:0,md:"10px"},
                alignItems: "center",
                borderRadius: "unset",
                flexWrap: "wrap",
                py:"2px"
              }}
            >
              <Box>
                <Typography className="title my-1" sx={{ fontWeight: "bold", fontSize:{xs:"14px",md:"20px"} }}>
                  {data.results.station}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "17px",fontSize:{xs:"12px",md:"20px"} }}>
                  Added by {name1.name}
                  on {name1.updated_at}
                </Typography>
              </Box>
            </Box>
            <Container sx={{p:0}}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <Box
                    sx={{
                      textAlign: "center",
                      marginTop: "5px",
                    }}
                  >
                    <AddCircleOutlineIcon sx={{ color: "grey" }} />
                    <Box>
                     
                      <Typography variant="caption">
                        Sent To: {name1.name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={3} className="py-0">
                  <Box sx={{ padding: "5px", textAlign: "center" }}>
                    <Typography>Dashboard</Typography>

                    <ImageList cols={1}>
                      <ImageListItem>
                        <img src="../img/john.jpg" alt="assocaite" />
                      </ImageListItem>
                    </ImageList>
                    <Typography>Responses</Typography>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "space-around" }}
                      spacing={2}
                    >
                      <Box>
                        <Avatar
                          sx={{
                            width: "25px",
                            height: "25px",
                            fontSize: "12px",
                            backgroundColor: "#00b050",
                          }}
                        >
                          {data && data.comment.length}
                        </Avatar>
                        <Typography sx={{ fontSize: "14px" }}>Total</Typography>
                      </Box>
                      <Box>
                        <Avatar
                          sx={{
                            width: "25px",
                            height: "25px",
                            fontSize: "12px",
                            backgroundColor: "#ffcc00",
                            color: "red",
                          }}
                        >
                          0
                        </Avatar>
                        <Typography sx={{ fontSize: "14px" }}>New</Typography>
                      </Box>
                    </Stack>

                    <Box>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "center",
                          paddingTop: "5px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          flexWrap: "wrap",
                        }}
                        spacing={2}
                      >
                        <Avatar
                          sx={{
                            width: "25px",
                            height: "25px",
                            backgroundColor: "transparent",
                            border: "2px solid #fff",
                          }}
                        >
                          <EmailIcon sx={{ fontSize: "15px" }} />
                        </Avatar>
                        <Avatar
                          sx={{
                            width: "25px",
                            height: "25px",
                            backgroundColor: "transparent",
                            border: "2px solid #fff",
                          }}
                        >
                          <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                        </Avatar>

                        <Avatar
                          sx={{
                            width: "25px",
                            height: "25px",
                            backgroundColor: "transparent",
                            border: "2px solid #fff",
                          }}
                        >
                          <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                        </Avatar>
                        <Avatar
                          sx={{
                            width: "25px",
                            height: "25px",
                            backgroundColor: "transparent",
                            border: "2px solid #fff",
                          }}
                        >
                          <SettingsVoiceOutlinedIcon
                            sx={{ fontSize: "15px" }}
                          />
                        </Avatar>
                        <Avatar
                          sx={{
                            width: "25px",
                            height: "25px",
                            backgroundColor: "transparent",
                            border: "2px solid #fff",
                          }}
                        >
                          <AlternateEmailOutlinedIcon
                            sx={{ fontSize: "15px" }}
                          />
                        </Avatar>
                      </Stack>
                      <Box>
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          Actions
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "10px",
                            fontSize: "15px",
                          }}
                        >
                          Direct Files
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            border: "2px solid lightgrey",
                            padding: "10px",
                            minHeight: "250px",
                          }}
                        >
                          <Box>
                            <Stack direction="row" spacing={1}>
                              <Avatar
                                variant="rounded"
                                alt="Remy Sharp"
                                src="./img/pdf.png"
                                sx={{ width: "30px", height: "30px" }}
                              />
                              <Stack
                                direction="column"
                                sx={{ textAlign: "left" }}
                              >
                                <Typography variant="subtitle2">
                                  Added by Pat Link
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{ fontSize: "14px" }}
                                >
                                  on 28 Apr 2020: 225.84 KB
                                </Typography>
                              </Stack>
                            </Stack>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} className="py-0">
                  <Grid container spacing={1} sx={{ my: 2 }}>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <AddCircleOutlineIcon
                            sx={{
                              color: "grey",
                              width: "22px",
                              height: "22px",
                            }}
                          />
                          <AddCircleOutlineIcon
                            sx={{
                              color: "grey",
                              width: "22px",
                              height: "22px",
                            }}
                          />
                          <AddCircleOutlineIcon
                            sx={{
                              color: "grey",
                              width: "22px",
                              height: "22px",
                            }}
                            onClick={() => {
                              setRec(!Rec);
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: "15px" }}>
                            Direct Sessions
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "5px" }}>
                          <Link
                            to={`http://localhost:3000/discussion/${+id - 1}`}
                          >
                            <ChevronLeftIcon
                              sx={{
                                backgroundColor: "#5a585d",
                                width: "21px",
                                height: "21px",
                                borderRadius: "50%",
                                color: "#fff",
                              }}
                            />
                          </Link>
                          <Link to={`/discussion/${+id + 1}`}>
                            <ChevronRightIcon
                              sx={{
                                backgroundColor: "#5a585d",
                                borderRadius: "50%",
                                width: "21px",
                                height: "21px",
                                color: "#fff",
                              }}
                            />
                          </Link>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box
                        sx={{
                          border: "1px solid lightgray",
                          marginTop: "5px",
                        }}
                      >
                        <Box
                          className="box_hover"
                          sx={{
                            padding: "15px 5px 1px 5px",
                            marginBottom: "10px",
                            ":hover": {
                              backgroundColor: "#1688ca17",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Avatar alt="Remy Sharp" src="../img/john.jpg" />
                              <Box>
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                                >
                                  {name1.name}
                                </Typography>
                                <Typography
                                  sx={{ fontSize: "12px", color: "#655f5f" }}
                                >
                                  {name1.updated_at}
                                </Typography>
                              </Box>
                            </Stack>
                            <Box>
                              <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexWrap:"wrap"
                                }}
                              >
                                <Stack
                                  className="show"
                                  direction="row"
                                  spacing={1}
                                  sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display:{xs:"none",lg:"flex"}
                                  }}
                                >
                                  <Avatar
                                    sx={{
                                      width: "18px",
                                      height: "18px",
                                      fontSize: "12px",
                                      backgroundColor: "transparent",
                                      color: "#000",
                                      border: "1px solid #000",
                                      ":hover": {
                                        textDecoration: "underline",
                                      },
                                    }}
                                  >
                                    3
                                  </Avatar>
                                  <Box>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        backgroundColor: "lightgrey",
                                        padding: "3px",
                                        borderRadius: "0.25rem",
                                        fontWeight: "bold",
                                        verticalAlign: "middle",
                                        lineHeight: "2.66",
                                        ":hover": {
                                          backgroundColor: "#1688ca",
                                          color: "#fff",
                                        },
                                      }}
                                    >
                                      Reply
                                    </Typography>
                                  </Box>

                                  <ChevronRightIcon
                                    sx={{
                                      backgroundColor: "#5a585d",
                                      width: "18px",
                                      height: "18px",
                                      borderRadius: "50%",
                                      color: "#fff",
                                    }}
                                  />
                                </Stack>
                                <Typography variant="caption">Plans</Typography>
                                <Avatar
                                  variant="rounded"
                                  alt="Remy Sharp"
                                  src="./img/pdf.png"
                                  sx={{ width: "30px", height: "30px" }}
                                />
                              </Stack>
                            </Box>
                          </Box>

                          <Typography
                            sx={{
                              fontSize: "14px",
                              marginBottom: "15px",
                              marginTop: "5px",
                            }}
                          >
                            {data.results.textbox}
                          </Typography>
                        </Box>

                        <Box sx={{ padding: "0px 5px" }}>
                          <ImageList
                            cols={1}
                            sx={{ borderRadius: "15px", margin: "5px 0" }}
                          >
                            <ImageListItem>
                              <img
                                src={`https://assoc.studiomyraa.com/public/uploads/images/${data.results.file}`}
                              />
                            </ImageListItem>
                          </ImageList>
                        </Box>

                        {data.comment.map((sdata) => {
                          console.log(sdata, "ejfiheif");
                          return (
                            <>
                              <Box
                                className="box_hover"
                                sx={{
                                  padding: "15px 5px 1px 5px",
                                  marginBottom: "10px",
                                  ":hover": {
                                    backgroundColor: "#1688ca17",
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Avatar
                                      alt="Remy Sharp"
                                      src={`https://assoc.studiomyraa.com/public/uploads/images/${sdata.users[0].image}`}
                                    />
                                    <Box>
                                      <Typography
                                        sx={{
                                          fontSize: "15px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {sdata.users[0].name}
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: "12px",
                                          color: "#655f5f",
                                        }}
                                      >
                                        {moment(
                                          sdata.users[0].created_at
                                        ).format("LLL")}
                                      </Typography>
                                    </Box>
                                  </Stack>
                                  <Box>
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      sx={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Stack
                                        className="show"
                                        direction="row"
                                        spacing={1}
                                        sx={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        <Avatar
                                          sx={{
                                            width: "18px",
                                            height: "18px",
                                            fontSize: "12px",
                                            backgroundColor: "transparent",
                                            color: "#000",
                                            border: "1px solid #000",
                                            ":hover": {
                                              textDecoration: "underline",
                                            },
                                          }}
                                        >
                                          3
                                        </Avatar>
                                        <Box>
                                          <Typography
                                            variant="caption"
                                            onClick={() => {
                                              setsidebardata(sdata);
                                              setthirdcomment(true);
                                            }}
                                            sx={{
                                              backgroundColor: "lightgrey",
                                              padding: "3px",
                                              borderRadius: "0.25rem",
                                              fontWeight: "bold",
                                              verticalAlign: "middle",
                                              lineHeight: "2.66",
                                              ":hover": {
                                                backgroundColor: "#1688ca",
                                                color: "#fff",
                                              },
                                            }}
                                          >
                                            Reply
                                          </Typography>
                                        </Box>
                                        <ChevronRightIcon
                                          sx={{
                                            backgroundColor: "#5a585d",
                                            width: "18px",
                                            height: "18px",
                                            borderRadius: "50%",
                                            color: "#fff",
                                          }}
                                        />
                                      </Stack>
                                      <Typography variant="caption">
                                        Plans
                                      </Typography>
                                      <Avatar
                                        variant="rounded"
                                        alt="Remy Sharp"
                                        src="./img/pdf.png"
                                        sx={{ width: "30px", height: "30px" }}
                                      />
                                    </Stack>
                                  </Box>
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    marginBottom: "15px",
                                    marginTop: "5px",
                                  }}
                                >
                                  {sdata.content
                                    .replaceAll("<p>", "")
                                    .replaceAll("</p>", "")}
                                </Typography>
                              </Box>
                            </>
                          );
                        })}
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={10}>
                      <Box>
                        <JoditEditor
                          value={content}
                          onChange={(newContent) => {
                            setContent(newContent);
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Box
                        sx={{
                          display: { xs: "flex",md:"block" },
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <Box sx={{ marginBottom: { xs: "0px", lg: "30px" } }}>
                          <Typography
                            variant="caption"
                            sx={{
                              backgroundColor: "lightgrey",
                              padding: "5px",
                              borderRadius: "0.25rem",
                              fontWeight: "bold",
                            }}
                            onClick={handlediscuss}
                          >
                            Reply
                          </Typography>
                        </Box>

                        <Box sx={{ color: "#1688ca" }}>
                          <div className="text-center text-lg-start lh-0">
                            <div class="upload-btn-wrapper ">
                              <button className="btn">
                                <AttachmentSharpIcon />
                              </button>
                              <input
                              className="w-100 h-100"
                                type="file"
                                name="myfile"
                                onClick={(e) => {
                                  setdiscussdata({
                                    ...discussdata,
                                    dfiledata: e.target.files[0],
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="text-center text-lg-start px-lg-3 lh-0">
                            <Typography variant="caption">Add</Typography>
                          </div>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                {thirdcomment && (
                  <Grid item xs={12} md={3}>
                    <Sidebar
                      thirdcomment={thirdcomment}
                      setthirdcomment={setthirdcomment}
                      sidebardata={sidebardata}
                    />
                  </Grid>
                )}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Singlediscuss;
