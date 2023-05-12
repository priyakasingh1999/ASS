import { Box, Stack } from '@mui/material';
import React from 'react'
import { Container } from '@mui/material';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const NewIndex = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box m={4} sx={{ backgroundColor: '#fff', borderRadius: 1 }}>
          <Stack p={3} >
            <h5 className='text-center pb-1' style={{ fontWeight: 500, color: '#1C69A6' }} >NEW USER REGISTERATION</h5>

            <Form className='p-3' style={{ border: '4px solid #1C69A6' }}>
              <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  First Name*
                </Form.Label>
                <Col sm="4">
                  <Form.Control type="text" placeholder="John" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Last Name*
                </Form.Label>
                <Col sm="4">
                  <Form.Control type="text" placeholder="Password" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Primary Email Id*
                </Form.Label>
                <Col sm="4">
                  <Form.Control type="email" placeholder="Email@gmail.com" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Re-enter Email*
                </Form.Label>
                <Col sm="4">
                  <Form.Control type="email" placeholder="Email@gmail.com" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Password*
                </Form.Label>
                <Col sm="4">
                  <Form.Label>Password must be 8 characters long</Form.Label>
                  <Form.Control className='mb-2' type="password" placeholder="Password" />
                  <Form.Control type="password" placeholder="Confirm Password" />
                  <p style={{ fontSize: 14, fontWeight: 500 }}>(Confirm Password)</p>

                </Col>

              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                <Col sm="3"></Col>
                <Col sm="9">
                  <p style={{ fontSize: 14, fontWeight: 500 }}>Strong passwords contain 8-16 characters, do not include common words or names, and combine uppercase letters, lowercase letters, numbers, and symbols.
                  </p>

                </Col>

              </Form.Group>
              <Form.Group as={Row} style={{ margin: 0 }} className="mb-4" controlId="formPlaintextPassword">
                <Col sm="4"></Col>
                <Col sm="2">
                  <ButtonGroup className="gap-3" aria-label="First group">
                    <Button style={{borderRadius:4}} >Save</Button> <Button style={{borderRadius:4}} >Reset</Button> 
                  </ButtonGroup>

                </Col>
                <Col sm="5">
                  <h6 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Make Profile Private</h6>
                  <p style={{ fontSize: 14, fontWeight: 500 }}>Do not allow profile of this Associate to be viewed by any other Associates except the Admin under All Associates only. No other Associates can view this persons Profile.
                  </p>

                </Col>
                <Col sm="1">
                  <input type="checkbox" />
                </Col>

              </Form.Group>


            </Form>
          </Stack>
        </Box>
      </Container>
    </div>
  )
}

export default NewIndex