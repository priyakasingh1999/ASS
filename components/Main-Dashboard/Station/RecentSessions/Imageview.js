import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ImageList, ImageListItem } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, TextareaAutosize } from "@mui/material";
import Commentlist from "./Commentlist";
import AddIcon from "@mui/icons-material/Add";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Collapse from "@mui/material/Collapse";
import { commentstore } from "../../../../Api/Sessioncomment/Commentstore";
import { createGlobalStyle } from "styled-components";



export default function Imageview({ setOpen, open, Imageviewfile, ses_id }) {
  const [viewcomment, setviewcomment] = useState(false);
  let filename = Imageviewfile.split(".");
  let newfile = filename[1];
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      position: {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
      text: currentComment,
    };
    setComments([...comments, newComment]);
    setCurrentComment("");
  };

  const handleCommentChange = (e) => {
    setCurrentComment(e.target.value);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };
  const commentsubmit = (e) => {
    e.preventDefault();
    commentstore(ses_id, currentComment).then((data) => {
      if (data) {
        alert(data.message);
        setCurrentComment("");
      }
    });
  };
  return (
    <div>
      
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000a3",
         
        }}
      >
        <Box className="cus_size">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              
            }}
          >
            {newfile === "pdf" ? (
              <iframe
                src={`https://assoc.studiomyraa.com/public/uploads/images/${Imageviewfile}`}
                width="100% "
                height="100%"
              />
            ) : (
              <ImageList cols={1} sx={{width:"100%",height:"100%" }}>
                <ImageListItem className="img_size">
                  <img
                    src={`https://assoc.studiomyraa.com/public/uploads/images/${Imageviewfile}`}
                    alt="image"
                    onClick={(e) => handleCommentSubmit(e)}
                    className="w-100 h-100"
                  />
                </ImageListItem>
              </ImageList>
            )}
            <Box
              sx={{
                position: "absolute",
                top: "2px",
                left:"5px",
                bottom:0
              }}
            >
              <AddIcon
                onClick={() => setviewcomment(true)}
                sx={{
                  display: "inline",
                  color: "#fff",
                  backgroundColor: "#1688ca",
                  borderRadius: "50%",
                }}
              />

              {
                <Collapse
                  in={viewcomment}
                  orientation="vertical"
                  style={{ transitionTimingFunction: "linear"}}
                >
                  <Box sx={{ backgroundColor: "#000000a3", height: "100%"}}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px",
                        
                      }}
                    >
                      <Box></Box>

                      <Typography variant="span" sx={{ color: "#fff" }}>
                        comment
                      </Typography>
                      <DangerousIcon
                        onClick={() => setviewcomment(false)}
                        sx={{
                          color: "#fff",
                          borderRadius: "50%",
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        borderBottom: "1px solid #fff",
                        marginBottom: "5px",
                      }}
                    ></Box>
                    <form
                      onSubmit={handleCommentSubmit}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px"
                      }}
                    >
                      <label>
                        <input
                          style={{ padding: "5px  10px", borderRadius: "10px" }}
                          type="text"
                          value={currentComment}
                          onChange={handleCommentChange}
                        />
                      </label>
                      <button
                        onClick={commentsubmit}
                        style={{ padding: "5px  10px", borderRadius: "10px" }}
                      >
                        Add
                      </button>
                    </form>
                    <Box
                      sx={{
                        borderBottom: "1px solid #fff",
                        margin: "14px 30px",
                        maxHeight:"50px"
                      }}
                    ></Box>
                    <Commentlist ses_id={ses_id} />
                  </Box>
                </Collapse>
              }
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
