import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Pagination
} from "@mui/material";

import InfoSubHead from "../../../../../GlobalComponent/InfoSubHead";
import ImagesData from "../../../../AssociatesProfile/ImagesData";
import ImageContent from "../../../../../MyStations/ImageContent";
import { createGlobalStyle } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "../../../../../GlobalComponent/DropDown";
import EmailContent from "./EmailContent";
import SearchDate from "../../../../../GlobalComponent/SearchDate";

const Style = createGlobalStyle`
.img_box{
    cursor: pointer;
}
.imgs{
    border:4px solid #1688ca;
}
.img_box:hover .imgs{
    filter: brightness(.8);
    border:4px solid #1688ca;
}
.img_box:hover .content_box{
    display:block; 
    transition: "all 4s";
    filter: brightness(5);
}
.img_box:hover .ps{
    padding-bottom:35px;
    padding-top:20px;
    filter: brightness(.7);
}
.content_box{
    display:none; 
    transition: "all .4s";
}
.borderRadius{
  border-radius: 1rem;
}
`;

const clr = { color: "#fff" };

const StationEmail = () => {
  const [showDropdown, setDropdown] = useState(false);
  const [searchopen, setSearchOpen] = useState(false);
  return (
    <>
      <Style />
      <Container maxWidth="md" sx={{ my: 2 }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: "relative" }}>
            <InfoSubHead
              name="Station Emails"
              backgroundColor={"#1688ca"}
              color={"#fff"}
              urlname1={<MenuIcon onClick={() => setDropdown(!showDropdown)} />}
              
            />
            {showDropdown && (
              <Box>
                <DropDown
                  bgcolor={"#1280c2"}
                  top={"39.5px"}
                  name1={
                    <Link to="/myinbox" style={clr}>
                      All Emails
                    </Link>
                  }
                  name2={
                    <Link to="/add-message" style={clr}>
                      Add Message
                    </Link>
                  }
                  name3={
                    <Link to="/my-messages" style={clr}>
                      My Messages
                    </Link>
                  }
                  name4={
                    <Link to="/deleted-message" style={clr}>
                      Deleted Emails
                    </Link>
                  }
                  name5={
                    <Typography
                      onClick={() => {
                        setSearchOpen(true);
                      }}
                      sx={{ fontSize: "14px", cursor: "pointer" }}
                    >
                      Search
                    </Typography>
                  }
                  color="#fff"
                  maxWidth={170}
                />
                {searchopen && <SearchDate setSearchOpen={setSearchOpen} left="20%" />}
              </Box>
            )}
          </Grid>

          <Grid container sx={{ bgcolor: "#fff", mt: 1, p: 2 }}>
            <Grid item xs={12} sx={{ p: 2 }}>
              <Box>
                <ImageList
                  sx={{
                    gridTemplateColumns:
                      "repeat(auto-fill,minmax(200px, 1fr))!important",
                  }}
                  gap={30}
                >
                  {ImagesData.map((data) => {
                    const { id, imgUrl } = data;
                    return (
                      <Box
                        className="img_box"
                        sx={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                        key={id}
                      >
                        <ImageListItem
                          sx={{
                            width: "100%",
                            height: "100% !important",
                            position: "relative",borderRadius:"1rem"
                          }}
                        >
                          <img src={imgUrl} className="borderRadius imgs" />
                          <EmailContent />
                          <Box>
                            <ImageContent />
                          </Box>
                        </ImageListItem>
                      </Box>
                    );
                  })}
                </ImageList>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ p: 1,mt:2}}>
              <Box>
                <Pagination
                  count={5}
                  variant="outlined"
                  shape="rounded"
                  sx={{ display: "flex", justifyContent: "end" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StationEmail;
