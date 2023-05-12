import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, green } from "@mui/material/colors";
import { Box } from "@mui/system";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import { Stationform } from "../../../../Context/Stationform";
const SelectPP = () => {
  const { formvalue, setformvalue } = useContext(Stationform);
  const { Privacy } = formvalue;
  console.log(formvalue);
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Container>
        <Row className="selectpp py-1">
          <Col xs={4} md={2}>
            <Stack sx={{ border: "5px solid white" }}>
              <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                <LockSharpIcon />
              </Avatar>
            </Stack>
          </Col>
          <Col xs={8} md={10} className="my-auto">
            <Box
              className="selectpp_box"
              onClick={(e) => {
                let valu = e.target.value;
                setformvalue({ ...formvalue, Privacy: "Private" });
              }}
            >
              <Form.Text value="Private">Private</Form.Text>
              <Typography sx={{ fontSize: { xs: "11px", lg: "14px" } }}>
                Stations will only be visible to members
              </Typography>
            </Box>
          </Col>
        </Row>
        <Row className="selectpp py-1 mt-2">
          <Col xs={4} md={2}>
            <Stack sx={{ border: "5px solid white" }}>
              <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                <img src="./img/publicweb.png" className="img-fluid" />
              </Avatar>
            </Stack>
          </Col>
          <Col xs={8} md={10} className="my-auto" value="Prvufate">
            <Box
              className="selectpp_box"
              onClick={(e) => {
                let valu = e.target.value;
                setformvalue({ ...formvalue, Privacy: "Public" });
              }}
            >
              <Form.Text>Public</Form.Text>
              <Typography sx={{ fontSize: { xs: "11px", lg: "14px" } }}>
              Associates can request to join if they are not members
              </Typography>
              
            </Box>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  );
};

export default SelectPP;
