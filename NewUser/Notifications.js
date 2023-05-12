import React, { useState, useEffect, useContext } from 'react'
import { Button, Grid, IconButton, Switch } from '@mui/material'
import { Box, Stack, Typography, Container,Modal } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import data from './Notification-data';
import { Clickcontaxt } from '../components/Context/DropdownData';


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 58,
    height: 23,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(33px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#22B14C' : '#22B14C',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 20,
        height: 19,
        borderRadius:9,
        transition: theme.transitions.create(['width'], {
            duration: 1,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 24 / 2,
        opacity: 9,
        backgroundColor:
            theme.palette.mode === 'dark' ? '#22B14C' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));



const Notifications = () => {

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (event) => {
        const checkboxValue = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            // Add the checkbox value to the selectedCheckboxes array
            setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
        } else {
            // Remove the checkbox value from the selectedCheckboxes array
            setSelectedCheckboxes(selectedCheckboxes.filter(value => value !== checkboxValue));
        }
    };

    const{notifiopen , setNotifficationOpen} = useContext(Clickcontaxt)

    // const data = ['Receive external emails for New Discussions', 'Select time to receive notification', 'Receive external emails for Project Tasks files or photos', 'Receive external emails for Project Tasks assignments', 'Receive external emails for project Tasks comments', 'Receive external emails for project Tasks tags', 'Receive external emails for project Tasks milestones or criticalities', 'Receive external emails for Project Tasks', 'Receive external emails for Project Links']
    return (
        <div>
           <Modal open={()=>{setNotifficationOpen(true)}} onClose={()=>{setNotifficationOpen(false)}}>
           <Container maxWidth="md" >
                <Box m={5} sx={{ backgroundColor: '#fff', borderRadius: 2 }}>
                    <Stack p={2} direction='row' sx={{ justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: 18 }}>Notifications</Typography>
                        <Typography sx={{cursor:"pointer"}} onClick={()=>{setNotifficationOpen(false)}}>x</Typography>
                    </Stack>
                    <hr style={{ margin: 0 }} />
                    <Box sx={{ border: '1px solid #c3c3c3' }}>
                        <Stack p={1} direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Box>
                                <Stack direction='row' sx={{ alignItems: 'center' }}>
                                    <Checkbox name="selectAll"
                                        value="option1"
                                        onChange={handleCheckboxChange}
                                        checked={selectedCheckboxes.includes('option1')}
                                        sx={{ padding: 0 }} />
                                    <Typography>Select All</Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 'bold' }}>Select Preferences</Typography>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography>Off</Typography>
                                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                    <Typography>On</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                        <hr style={{ margin: 0 }} />
                        <Stack >
                            {
                                data.map((data, c) => {
                                    const { id, name, date } = data
                                    console.log(id);
                                    return (
                                        <Box key={id}>

                                            <Stack direction='row' p={1} sx={{ justifyContent: 'start', alignItems: 'center' }} className='border-bottom '>
                                                <Box>


                                                </Box>
                                                <Box >
                                                    <Stack direction='row' gap={1}>
                                                        <Checkbox key={id}
                                                            sx={{ padding: 0 }} />
                                                        <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                                                            {name}
                                                        </Typography>
                                                        <Box >


                                                        </Box>

                                                    </Stack>

                                                </Box>
                                                <Box pl={15}>
                                                    <Stack direction='row' sx={{ justifyContent: 'space-between' }}  >
                                                        <Box>

                                                        </Box>
                                                        <Box>

                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                                                                {date}
                                                            </Typography>
                                                        </Box>

                                                    </Stack>
                                                </Box>



                                            </Stack>
                                            <hr style={{ margin: 0 }} />

                                        </Box>
                                    )
                                })
                            }
                        </Stack>
                        <Stack p={0.2} direction='row' sx={{ justifyContent: 'center' }}>
                            <Button variant='contained'>
                                Save
                            </Button>
                        </Stack>
                    </Box>





                </Box>
            </Container>
           </Modal>
        </div>
    )
}

export default Notifications