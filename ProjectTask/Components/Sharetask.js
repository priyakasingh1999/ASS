import { Box, Container, Stack, Typography, Button, TextField,Link } from '@mui/material'
import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const style= {
    zIndex:999
}

const Sharetask = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Box m={3} sx={style}>
                    <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                        <Typography variant='h5'>Send Board</Typography>
                       
                        <Link to="/Project-task" variant='contained'>Back</Link>
                    </Stack>
                    <Box mt={3} sx={{ backgroundColor: '#fff' }}>

                        <Stack direction='row' p={3} sx={{ justifyContent: 'center' }}>
                            <Container maxWidth="sm" sx={{ border: '1px solid blue', borderRadius: 2 }}>
                                <Form >
                                    <Form.Group as={Row} className="m-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="4">
                                            Associate Email:
                                        </Form.Label>
                                        <Col sm="7">
                                            <Form.Control type="email" required />
                                        </Col>
                                        <Col sm="1">
                                            <Typography>+</Typography>

                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="m-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Comment:
                                        </Form.Label>
                                        <Col sm="7">
                                            <Form.Control type="text" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group   className="m-3" controlId="formPlaintextPassword">
                                        <Button sx={{marginLeft:30}} type="submit" variant="contained" size="small">
                                            Email
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Container>

                        </Stack>

                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Sharetask