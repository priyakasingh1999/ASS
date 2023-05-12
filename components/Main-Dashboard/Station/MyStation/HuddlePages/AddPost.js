import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Huddlecamera from "../HuddlePages/Huddlecamera";
import { Huddlepost } from "../../../../../Api/Huddle/Addpost";
import {Box} from '@mui/material'

const AddPost = ({ setCurrentStation }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [video, setVideo] = useState(false);
  const [text, settext] = useState("");
  const [Huddledata, setHuddledata] = useState({
    POST: "",
    filehuddle: null,
    VIDEO: null,
  });
  const huddlesubmit = (e) => {
    alert("dbhv");
    e.preventDefault();
    if (Huddledata) {
      console.log(Huddledata, "sachin");
      Huddlepost(Huddledata).then((sa) => {
        console.log(sa);
      });
    }
  };
  console.log(Huddledata);
  return (
    <div className="mb-3 bg-white position-relative">
      <div className="huddle_add_head">
        <div></div>
        <div>Add Post</div>
        <div
          className="cr"
          onClick={() => {
            setCurrentStation(false);
          }}
        >
          X
        </div>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) =>
          setHuddledata({ ...Huddledata, POST: newContent })
        }
      />
      <div className="d-flex justify-content-between my-3 px-2">
        <div className="upload_btn">
          <div className="upload-btn-wrapper">
            <button className="btn btn-primary ">Upload File</button>
            <input
              type="file"
              name="myfile"
              onClick={(e) =>
                setHuddledata({ ...Huddledata, filehuddle: e.target.files[0] })
              }
            />
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            className="btn btn-primary"
            onClick={() => {
              setVideo(true);
            }}
          >
            Record
          </Button>
          <Box className="camera-sc" sx={{position:"absolute",left:{md:"-100%",xs:"50%"},top:"0px",zIndex:"9999",border:"none",pt:0}}>
          {video && (
            <Huddlecamera
              setVideo={setVideo}
              setHuddledata={setHuddledata}
              Huddledata={Huddledata}
            />
          )}
          </Box>
        </div>
        <div>
          <Button
            variant="contained"
            className="btn btn-primary"
            onClick={huddlesubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
