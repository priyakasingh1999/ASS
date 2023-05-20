import React from "react";
import { Box,InputBase,Stack} from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menul from "../Pages/LongMenu";
import Grid from "@mui/material/Grid";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { withFormik } from "formik";
import * as yup from 'yup'


const Schema = yup.object().shape({
    firstName:yup.string().required("Please enter a first name"),
    lastName:yup.string().required("Please enter a last name"),
    email:yup.string().email().required("Please enter a valid email address."),
    email2:yup.string().email().required("Please enter a valid email address."),
    password:yup.string().min(8,"Password should be atleast 8 character").required("Please enter a password"),
    password2:yup.string().min(8,"Password should be atleast 8 character").required("Please enter a password"),
    emailcode:yup.string().required("Please enter a code")
})

const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    email2:"",
    password:"",
    password2:"",
    emailcode:""
}
const HandleClick = (values)=>{

    console.log(values , "priyanka");

}

const NewUserReg = ({handleChange,handleSubmit,values,errors,handleBlur,touched}) => {

  return (
    <Container maxWidth="lg" id="pagek" sx={{ my:5 }}>
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
        <Grid container  sx={{ justifyContent: "center" }}>
        <Box sx={{ backgroundColor: '#fff', borderRadius: 1 }}>
          <Stack p={3} >
            <h5 className='text-center pb-1' style={{ fontWeight: 500, color: '#1C69A6' }} >NEW USER REGISTERATION</h5>

            <Form className='p-3' style={{ border: '4px solid #1C69A6' }} onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-4" controlId="firstname">
                <Form.Label column sm="3">
                  First Name*
                </Form.Label>
                <Col sm="4">
                  <Form.Control id="firstname" type="text" placeholder="John" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} touched={touched.firstName} errors={errors.firstName}/>

                  {
                    errors.firstName && touched.firstName && <div className="text-danger fs-12">{errors.firstName}</div>
                  }
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-4" controlId="lastname">
                <Form.Label column sm="3">
                  Last Name*
                </Form.Label>
                <Col sm="4">
                  <Form.Control id="lastname" type="text" placeholder="Last Name" name="lastName" onChange={handleChange} onBlur={handleBlur} errors={errors.lastName} value={values.lastName} touched={touched.lastName}/>
                  {
                    errors.lastName && touched.lastName && <div className="text-danger fs-12">{errors.lastName}</div>
                  }
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="emails">
                <Form.Label column sm="3">
                  Primary Email Id*
                </Form.Label>
                <Col sm="4">
                  <Form.Control id="emails" type="email" placeholder="Email@gmail.com" name="email" onChange={handleChange} onBlur={handleBlur} errors={errors.email} value={values.email} touched={touched.email} />
                  {
                    errors.email && touched.email && <div className="text-danger fs-12">{errors.email}</div>
                  }
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="email2">
                <Form.Label column sm="3">
                  Re-enter Email*
                </Form.Label>
                <Col sm="4">
                  <Form.Control id="email2" type="email" placeholder="Email@gmail.com"  name="email2" onChange={handleChange} onBlur={handleBlur} errors={errors.email2} value={values.email2} touched={touched.email2} />
                  {
                    errors.email2 && touched.email2 && <div className="text-danger fs-12">{errors.email2}</div>
                  }
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4" >
                <Form.Label column sm="3" controlId="passwords">
                  Password*
                </Form.Label>
                <Col sm="4">
                  <Form.Label>Password must be 8 characters long</Form.Label>
                  <Form.Control id="passwords" className='mb-2' type="password" placeholder="Password" name="password" onChange={handleChange} onBlur={handleBlur} errors={errors.password} value={values.password} touched={touched.password} />
                  {
                    errors.password && touched.password && <div className="text-danger fs-12 mb-3">{errors.password}</div>
                  }

                  <Form.Control type="password" placeholder="Confirm Password" name="password2" onChange={handleChange} onBlur={handleBlur} errors={errors.password2} value={values.password2} touched={touched.password2} />
                  <p style={{ fontSize: 14, fontWeight: 500 }}>(Confirm Password)</p>

                  {
                    errors.password2 && touched.password2 && <div className="text-danger fs-12">{errors.password2}</div>
                  }

                </Col>

              </Form.Group>
              <Form.Group as={Row} className="mb-4">
                <Col sm="3"></Col>
                <Col sm="9">
                  <p style={{ fontSize: 14, fontWeight: 500 }}>Strong passwords contain 8-16 characters, do not include common words or names, and combine uppercase letters, lowercase letters, numbers, and symbols.
                  </p>

                </Col>

              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="emailCode">
                <Col sm="3"></Col>
                <Col sm="9">
               <Typography sx={{fontWeight:"bold",fontSize: 14}}> Verify your Email</Typography>
                <Typography sx={{fontWeight:400,fontSize: 14}}>Code sent to your email</Typography>
                <Stack direction={"row"} spacing={1} sx={{justifyContent:"start",alignItems:"center"}}>
                    <Box>
                        <input id="emailCode" className="py-1 border rounded" name="emailcode" onChange={handleChange} onBlur={handleBlur} errors={errors.emailcode} value={values.emailcode} touched={touched.emailcode}/>
                    </Box>
                    <Box> <Button style={{borderRadius:4}} variant="contained" size="small"  >Get Code</Button> </Box>
                </Stack>
                {
                     errors.emailcode && touched.emailcode && <div className="text-danger fs-12">{errors.emailcode}</div>
                }

                </Col>

              </Form.Group>
              <Form.Group as={Row} style={{ margin: 0 }} className="mb-4">
                <Col sm="4"></Col>
                <Col sm="2">
                  <ButtonGroup className="gap-3" aria-label="First group">
                    <Button style={{borderRadius:4}} variant="contained" size="small" type="submit" >Save</Button>
                     <Button style={{borderRadius:4}} variant="contained" size="small"  >Reset</Button> 
                  </ButtonGroup>

                </Col>
                <Col sm="5">
                  <h6 style={{ fontSize: 14, fontWeight:"bold", margin: 0 }}>Make Profile Private</h6>
                  <p style={{ fontSize: 14, fontWeight:400 }}>Do not allow profile of this Associate to be viewed by any other Associates except the Admin under All Associates only. No other Associates can view this persons Profile.
                  </p>

                </Col>
                <Col sm="1">
                  <input type="checkbox" />
                </Col>

              </Form.Group>


            </Form>
          </Stack>
        </Box>
        </Grid>
      </Box>
    </Container>
  )
}

const FormData = withFormik({handleSubmit:HandleClick,validationSchema:Schema,initialValues:initialValues})

export default FormData(NewUserReg)