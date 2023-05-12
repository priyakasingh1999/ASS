import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/system';
import Col from 'react-bootstrap/Col';
import {Typography} from '@mui/material'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



const ChooseColor = () => {
  return (
    <Container>
      <Row className='justify-content-start'>
        <Col md={8}>
          <Box className="optionalPhoto mb-2">
            <Box>
              <AddCircleOutlineIcon/>
            </Box>
            <Box>
            <Typography sx={{fontSize:{xs:"13px"}}}>Choose color for the badge if no photo is used</Typography>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  )
}

export default ChooseColor