import { Grid, IconButton } from '@mui/material'
import { Box,  Stack, Typography,Modal} from '@mui/material'
import React,{useContext, useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Clickcontaxt } from '../components/Context/DropdownData';

const ColorSelection = () => {

    const [color,setColor] = useState(false);
     
    const colorPicker=()=>{
        console.log("colorPicker", color.target);
        alert("Please click on update button to save");
        
    }

    const{coloropen , setColorOpen} = useContext(Clickcontaxt)

    return (
        <div>
             <Modal open={()=>{setColorOpen(true)}} onClose={()=>{setColorOpen(false)}}>

            
            <Container style={{width:800}}>
                <Box m={5} sx={{ backgroundColor: '#fff', borderRadius: 2 }}>
                    <Stack p={2} direction='row' sx={{ justifyContent: 'space-between' }}>
                        <Typography>Color Selection</Typography>
                        <Typography sx={{cursor:"pointer"}} onClick={()=>{setColorOpen(false)}}>x</Typography>
                    </Stack>
                    <hr style={{margin:0}} />
                    <Grid container p={1} >
                        <Grid items  xs={8}>
                            <Typography>
                                Allow all Associates to choose their own custom colors
                            </Typography>

                        </Grid>
                        <Grid items>
                            <input type="checkbox" />
                        </Grid>
                    </Grid>
                    <Grid container mx={1}>
                        <Grid items xs={3}>
                        </Grid>
                        <Grid items pl={5} xs={6}>
                            <Typography variant='body'>
                                Choose your own color
                            </Typography>
                        </Grid>
                        <Grid items xs={3}>
                            <Typography variant='body'>Default Option 1,2 or 3</Typography>
                        </Grid>
                    </Grid>
                    <Grid py={0} container gap={2}  mx={3} sx={{ alignItems: 'center' }}>
                        <Grid items lg={3} md={3}>
                            Top Header Color
                        </Grid>
                        <Grid items lg={2} md={3}>
                            <Form.Control type="text" className='py-1' placeholder="#fff" />
                        </Grid>
                        <Grid items lg={1} md={3}>
                            <Button className='py-2' style={{ borderRadius: 3 }}>Update</Button>
                        </Grid>
                        <Grid items lg={1} md={2}>
                            X
                        </Grid>

                        <Grid items lg={1}  sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color" value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>
                        <Grid items lg={1}  sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color" value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>
                        <Grid items lg={1}  sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color" value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>



                    </Grid>
                    <Grid py={1} container gap={2}  mx={3} sx={{ alignItems: 'center' }}>
                        <Grid items lg={3}>
                            Sub-Header Color
                        </Grid>
                        <Grid items lg={2}>
                            <Form.Control type="text" className='py-1' placeholder="#fff"  />
                        </Grid>
                        <Grid items lg={1}>
                            <Button className='py-2' style={{ borderRadius: 3 }}>Update</Button>
                        </Grid>
                        <Grid items lg={1}>
                            X
                        </Grid>

                        <Grid items lg={1} sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color" value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>
                        <Grid items lg={1} sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color"  value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>
                        <Grid items lg={1} sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color" value={color} onChange={setColor}  onClick={()=>colorPicker()}/>
                        </Grid>



                    </Grid>
                    <Grid py={1} container gap={2}  mx={3} sx={{ alignItems: 'center' }}>
                        <Grid items lg={3}>
                           Background Color 
                        </Grid>
                        <Grid items lg={2}>
                            <Form.Control type="text" className='py-1' placeholder="#fff" />
                        </Grid>
                        <Grid items lg={1}>
                            <Button className='py-2' style={{ borderRadius: 3 }}>Update</Button>
                        </Grid>
                        <Grid items lg={1}>
                            X
                        </Grid>

                        <Grid items lg={1} sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color" value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>
                        <Grid items lg={1} sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color" value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>
                        <Grid items lg={1} sx={{ alignItems: 'center', display: 'flex' }}>
                            <Typography>+</Typography><input style={{ width: 38, height: 38,border:'0px solid black' }} type="color"  value={color} onChange={setColor} onClick={()=>colorPicker()}/>
                        </Grid>



                    </Grid>
                </Box>
            </Container>

            </Modal>
        </div>
    )
}

export default ColorSelection