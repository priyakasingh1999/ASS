import React, { useState,useContext } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import AddStation from "./FormPages/AddStation";
import AddAssociates from "./FormPages/AddAssociates";
import SelectPP from "./FormPages/SelectPP";
import OptionalLogo from "./FormPages/OptionalLogo";
import AddWYSD from "./FormPages/AddWYSD";
import OptionalPhoto from "./FormPages/OptionalPhoto";
import ChooseColor from "./FormPages/ChooseColor";
import {Stationform } from '../../../Context/Stationform'
import axios from 'axios';
import { stationform } from "../../../../Api/Mystationform";
import {Typography,Modal} from '@mui/material'


function StationForm({setForm , form}) {
  const {formvalue , setformvalue} = useContext(Stationform);
 
  const [showA, setShowA] = useState(true);
 
  const toggleShowA = () => setShowA(!showA);
  const [slider, setSlider] = useState([
    <AddStation />,
    <AddAssociates />,
    <SelectPP />,
    <OptionalLogo />,
    <AddWYSD />,
    <OptionalPhoto />,
    <ChooseColor />,
  ]);
  
  const handlesubmit=(e)=>{
    e.preventDefault()
    alert("eu")
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let dataofform=stationform (formvalue)
  dataofform.then((s)=>{
   
    if(s){
      alert(`${s.messege} was saved`)
    }

  })

  }
  const [value, setValue] = useState(0);

  const [openfile , setOpenFile]=useState(false)

  const [htext, sethtext] = useState([
    "Admin Dashboard",
    "Add Associates",
    "Select Private or Public For Your Station",
    "Optional: Add a Logo or Badge Image for your Station",
    "Add What your Station Does",
    "Optional: Add Station Name overlaid on your Station Badge/Photo",
    "Choose color for the badge if no photo is used",
  ]);
  
  return (
    <Modal
        open={()=>{setForm(true)}}
        onClose={()=>{setForm(false)}}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
    <div className="stationform" style={{minWidth:"600px",zIndex:"9999999"}}>
      
          <Toast
            show={showA}
            onClose={toggleShowA}
            className="w-100 bg-white text-white addStationForm text-center"
          >
            <Toast.Header className="stationName bg-blue text-white justify-content-between">
              <Typography sx={{fontSize:{xs:"14px",lg:"16px"},textAlign:"left !important"}} color="#fff">{htext[value]}</Typography>
              {/* <strong className="me-auto fs-17"></strong> */}
            </Toast.Header>
            <Toast.Body>
              <Form>
                <div className="mb-3">{slider[value]}</div>
                {value > 0 && value <= 6 && (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(() => value - 1);
                    }}
                  >
                    Previous
                  </Button>
                )}
                {value <= 6 && (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(() => value + 1);
                    }}
                    variant="primary"
                    type="submit"
                    className="mx-2"
                  >
                    Next
                  </Button>
                )}
                {value > 2 && value <= 6 && value != 4 && (
                  <Button variant="primary" type="submit" className="me-2">
                    skip
                  </Button>
                )}
                {value > 6 && (
                  <Button variant="primary" type="submit" className="me-2" onClick={handlesubmit}>
                    Save
                  </Button>
                )}
              </Form>
            </Toast.Body>
          </Toast>
        
    </div>
    </Modal>
  );
}

export default StationForm;
