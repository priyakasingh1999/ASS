import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { getcommentdata } from "../../../../Api/Sessioncomment/Commentstore";
import moment from "moment";

export default function Commentlist({ ses_id }) {
  const [comments, setcomments] = React.useState([]);
  var currentdate = new Date();
  var datetime =
    currentdate.getDay() +
    "/" +
    currentdate.getMonth() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  React.useEffect(() => {
    getcommentdata(ses_id).then((data) => {
      if (data) {
        console.log(data.reply);
        setcomments(data.reply);
      }
    });
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        maxHeight:{xs:"90px",sm:"170px", lg: "320px"},
        overflowY: "scroll",
      }}
    >
      {comments.length > 0 &&
        comments.map((comment, index) => {
          let date = { ...comment, datetime };
          return (
            <ListItem
              alignItems="flex-start"
              key={index}
              sx={{ borderBottom: "1px solid #fff", margin: "" }}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="./img/puja1.png" />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "#fff" }}
                primary={comment.comments}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline", color: "#fff" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {moment(comment.created_at).format("LLL")}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
    </List>
  );
}
