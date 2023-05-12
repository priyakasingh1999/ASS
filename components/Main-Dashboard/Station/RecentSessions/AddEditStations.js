import React from "react";
import { Row ,Col, Container, Form, OverlayTrigger, Tooltip, Popover, Button} from 'react-bootstrap';
import MyStationForm from "../MyStation/MyStationForm";
import { useState } from "react";



const AddEditStation = ()=>{

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Station Statement</Popover.Header>
          <Popover.Body>
           <p className="mb-0 fs-14">This Station discusses issues with Biomedical equipment and the customers we serve. We work on capital equipment for clinical programs.
</p>
          </Popover.Body>
        </Popover>
      );

      const cusdata = [{id:1,id:2,id:3,id:4}]
      
   
      const [form, setForm] = useState(false);
    
    return(
        <>
            <div className="add_edit_station_section">
                <Container>
                {form && <MyStationForm setForm={setForm} form={form} />}
                    <Row className="mb-2 dark_gray_bg">
                        <Col md={12}>
                            <div className="global_title_with_right_close_btn">
                                <p className="mb-0 text-center">My Stations</p>
                                <div className="right_close_btn">
                                    <img src="img/close.png" alt="" className="global_icon_size" />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-2 ">
                    <Col md={4} xs={12}>
                    <Form.Control type="text" placeholder="Search" />
                    </Col> 
                    <Col md={4} xs={12}>
                        <p className="mb-0 text-center my-2 my-lg-0">CURRENT STATIONS</p>
                    </Col> 
                    <Col md={4} xs={12}>
                        <div className="d-flex align-items-center justify-content-center">
                            <p className="mb-0 fs-14 me-2">Create New Stations</p>
                            <img src="img/plus.png" className="global_icon_size" alt=""  onClick={() => {
                            setForm(!form);
                          }} />
                        </div>
                    </Col> 
                    </Row>
                
                    <Row className="gray_bg pt-1 pb-1 " >
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                        
                        <div className="d-flex align-items-center">
                            <p className="mb-0 fs-14 me-2">Favorites</p>
                            <img src="img/plus_w.png" className="Edit_global_icon_size img-fluid" alt="" onClick={()=>{
                                alert("Please check off Priority Box on Station")
                            }} />
                        </div>

                        <div>
                            <p className="mb-0 fs-14">Alerts</p>
                        </div>
                        <div>
                        <p className="mb-0 fs-14">Actions</p>
                        </div>
                        <div>
                        <p className="mb-0 fs-14">Edit</p>
                        </div>
                        <div>
                        <p className="mb-0 fs-14">Status</p>
                        </div>
                        <div>
                        <p className="mb-0 fs-14">Station</p></div>
                        <div>
                        <p className="mb-0 fs-14">Logo</p></div>
                        </div>
                    </Row>

                    <Row className="pt-1 pb-1 align-items-center">
                        <Col md={3} xs={10}>
                         

                        <p className="mb-0 center_small">Direct Session</p>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center mt-2 mt-lg-0">
                                <span className="red_badge">0</span>
                            </div>
                        </Col>
                        <Col md={3} xs={12}>
                            <ul className="mb-0 ps-0 my-2 my-lg-0 d-flex align-items-center justify-content-lg-center station_action justify-content-around">
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">External Email</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                         <a href=""><i className="fa fa-envelope"></i></a>
                                            
                            </OverlayTrigger>
                               
                                
                                </li>
                                <li>
                                    <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                                <p className="mb-0">Internal Email</p>
                                            </Tooltip>
                                            )}
                                            placement="bottom"
                                            >
                                        <a href=""><i className="fa fa-envelope-o"></i></a>
                                                
                                    </OverlayTrigger>
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Voice Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                       <a href=""><i className="fa fa-microphone"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Text Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-comments"></i></a>
                                            
                                </OverlayTrigger>
                                 
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Add new session</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-at"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                </li>
                            </ul>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                                <div className="text-center">
                                <img src="img/plus_w.png" alt="" className="global_icon_size" />
                                </div>
                        </Col>
                        <Col md={2} xs={6} className="mt-2 mt-lg-0">
                        <p className="mb-0 fs-14">
                        <div className="recent_session_logo">
                        <OverlayTrigger  trigger={["hover", "hover"]} placement="left" overlay={popover}>
                            <img src="img/direct-talk.png" className="img-fluid" alt="" /> 
                        </OverlayTrigger>
                        </div>
                            
                        </p>
                        
                        </Col>
                    </Row> 

                    <Row className="pt-1 pb-1 align-items-center">
                        <Col md={3} xs={10} className="mt-1 mt-lg-0">
                         

                        <div className="d-flex align-items-center">
                        <Form.Check type='checkbox' id='' label=''/>
                        <label htmlFor=""><a href="" className="text-decoration-none"> BioMedical</a></label>
                        </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                                <span className="red_badge">0</span>
                            </div>
                        </Col>
                        <Col md={3}>
                            <ul className="mb-0 ps-0 d-flex align-items-center justify-content-lg-center station_action justify-content-around mt-2 mt-lg-0">
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">External Email</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                         <a href=""><i className="fa fa-envelope"></i></a>
                                            
                            </OverlayTrigger>
                               
                                
                                </li>
                                <li>
                                    <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                                <p className="mb-0">Internal Email</p>
                                            </Tooltip>
                                            )}
                                            placement="bottom"
                                            >
                                        <a href=""><i className="fa fa-envelope-o"></i></a>
                                                
                                    </OverlayTrigger>
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Voice Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                       <a href=""><i className="fa fa-microphone"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Text Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-comments"></i></a>
                                            
                                </OverlayTrigger>
                                 
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Add new session</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-at"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                </li>
                            </ul>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                                <div className="text-center">
                                <img src="img/plus_w.png" alt="" className="global_icon_size" />
                                </div>
                        </Col>
                        <Col md={2} xs={6} className="mt-2 mt-lg-0">
                        <p className="mb-0 fs-14">
                        <div className="recent_session_logo">
                        <OverlayTrigger  trigger={["hover", "hover"]} placement="left" overlay={popover}>
                            <img src="img/direct-talk.png" className="img-fluid" alt="" /> 
                        </OverlayTrigger>
                        </div>
                            
                        </p>
                        
                        </Col>
                    </Row>
                    
                    <Row className="pt-1 pb-1 align-items-center">
                        <Col md={3} xs={10} className="mt-1 mt-lg-0">
                         

                        <div className="d-flex align-items-center">
                        <Form.Check type='checkbox' id='' label=''/>
                        <label htmlFor=""><a href="" className="text-decoration-none"> BioMedical</a></label>
                        </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                                <span className="red_badge">0</span>
                            </div>
                        </Col>
                        <Col md={3}>
                            <ul className="mb-0 ps-0 d-flex align-items-center justify-content-lg-center station_action justify-content-around mt-2 mt-lg-0">
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">External Email</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                         <a href=""><i className="fa fa-envelope"></i></a>
                                            
                            </OverlayTrigger>
                               
                                
                                </li>
                                <li>
                                    <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                                <p className="mb-0">Internal Email</p>
                                            </Tooltip>
                                            )}
                                            placement="bottom"
                                            >
                                        <a href=""><i className="fa fa-envelope-o"></i></a>
                                                
                                    </OverlayTrigger>
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Voice Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                       <a href=""><i className="fa fa-microphone"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Text Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-comments"></i></a>
                                            
                                </OverlayTrigger>
                                 
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Add new session</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-at"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                </li>
                            </ul>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                                <div className="text-center">
                                <img src="img/plus_w.png" alt="" className="global_icon_size" />
                                </div>
                        </Col>
                        <Col md={2} xs={6} className="mt-2 mt-lg-0">
                        <p className="mb-0 fs-14">
                        <div className="recent_session_logo">
                        <OverlayTrigger  trigger={["hover", "hover"]} placement="left" overlay={popover}>
                            <img src="img/direct-talk.png" className="img-fluid" alt="" /> 
                        </OverlayTrigger>
                        </div>
                            
                        </p>
                        
                        </Col>
                    </Row>

                    <Row className="pt-1 pb-1 align-items-center">
                        <Col md={3} xs={10} className="mt-1 mt-lg-0">
                         

                        <div className="d-flex align-items-center">
                        <Form.Check type='checkbox' id='' label=''/>
                        <label htmlFor=""><a href="" className="text-decoration-none"> BioMedical</a></label>
                        </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                                <span className="red_badge">0</span>
                            </div>
                        </Col>
                        <Col md={3}>
                            <ul className="mb-0 ps-0 d-flex align-items-center justify-content-lg-center station_action justify-content-around mt-2 mt-lg-0">
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">External Email</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                         <a href=""><i className="fa fa-envelope"></i></a>
                                            
                            </OverlayTrigger>
                               
                                
                                </li>
                                <li>
                                    <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                                <p className="mb-0">Internal Email</p>
                                            </Tooltip>
                                            )}
                                            placement="bottom"
                                            >
                                        <a href=""><i className="fa fa-envelope-o"></i></a>
                                                
                                    </OverlayTrigger>
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Voice Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                       <a href=""><i className="fa fa-microphone"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Text Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-comments"></i></a>
                                            
                                </OverlayTrigger>
                                 
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Add new session</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-at"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                </li>
                            </ul>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                                <div className="text-center">
                                <img src="img/plus_w.png" alt="" className="global_icon_size" />
                                </div>
                        </Col>
                        <Col md={2} xs={6} className="mt-2 mt-lg-0">
                        <p className="mb-0 fs-14">
                        <div className="recent_session_logo">
                        <OverlayTrigger  trigger={["hover", "hover"]} placement="left" overlay={popover}>
                            <img src="img/direct-talk.png" className="img-fluid" alt="" /> 
                        </OverlayTrigger>
                        </div>
                            
                        </p>
                        
                        </Col>
                    </Row>

                    <Row className="pt-1 pb-1 align-items-center">
                        <Col md={3} xs={10} className="mt-1 mt-lg-0">
                         

                        <div className="d-flex align-items-center">
                        <Form.Check type='checkbox' id='' label=''/>
                        <label htmlFor=""><a href="" className="text-decoration-none"> BioMedical</a></label>
                        </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                                <span className="red_badge">0</span>
                            </div>
                        </Col>
                        <Col md={3}>
                            <ul className="mb-0 ps-0 d-flex align-items-center justify-content-lg-center station_action justify-content-around mt-2 mt-lg-0">
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">External Email</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                         <a href=""><i className="fa fa-envelope"></i></a>
                                            
                            </OverlayTrigger>
                               
                                
                                </li>
                                <li>
                                    <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                                <p className="mb-0">Internal Email</p>
                                            </Tooltip>
                                            )}
                                            placement="bottom"
                                            >
                                        <a href=""><i className="fa fa-envelope-o"></i></a>
                                                
                                    </OverlayTrigger>
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Voice Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                       <a href=""><i className="fa fa-microphone"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Text Message</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-comments"></i></a>
                                            
                                </OverlayTrigger>
                                 
                                </li>
                                <li>
                                <OverlayTrigger
                                        delay={{ show: 250, hide:300 }}
                                        overlay={(props) => (
                                        <Tooltip arrow={false} {...props} className="custom_tool_tips">
                                            <p className="mb-0">Add new session</p>
                                        </Tooltip>
                                        )}
                                        placement="bottom"
                                        >
                                      <a href=""><i className="fa fa-at"></i></a>
                                            
                                </OverlayTrigger>
                                    
                                </li>
                            </ul>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                            <div className="text-center">
                            <img src="img/plus_w.png" alt="" className="global_icon_size" />
                            </div>
                        </Col>
                        <Col md={1} xs={2}>
                                <div className="text-center">
                                <img src="img/plus_w.png" alt="" className="global_icon_size" />
                                </div>
                        </Col>
                        <Col md={2} xs={6} className="mt-2 mt-lg-0">
                        <p className="mb-0 fs-14">
                        <div className="recent_session_logo">
                        <OverlayTrigger  trigger={["hover", "hover"]} placement="left" overlay={popover}>
                            <img src="img/direct-talk.png" className="img-fluid" alt="" /> 
                        </OverlayTrigger>
                        </div>
                            
                        </p>
                        
                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    );

}

export default AddEditStation;