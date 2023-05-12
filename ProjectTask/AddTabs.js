import React from 'react'
import { Container, Grid, Box, Stack, Typography } from '@mui/material'

const AddTabs = () => {
    const data = ['Add Boards', 'Training & Development', 'Bar Codings', 'Boiler Upgrade', 'Camera Upgrade', 'Cardiac Unit Remodel', 'Catscan', 'Cerner Upgrade', 'Chiller Upgrade', 'CMMS']

    return (
        <div>
            <Box sx={{ backgroundColor: '#217FC8' }}>
                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#217FC8', color: 'white' }}>
                    <Box>


                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 14 }}>
                            Add Tabs
                        </Typography>
                    </Box>
                    <Box>

                    </Box>

                </Stack>
                {
                    data.map((single, index) => {
                        return (
                            <Box key={index}>

                                <Stack direction='row' p={1} sx={{ justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#AAAAAA' }} className='border-bottom border-dark'>
                                    <Box>


                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                                            {single}
                                        </Typography>
                                    </Box>
                                    <Box>

                                    </Box>

                                </Stack>
                            </Box>
                        )
                    })
                }

            </Box>
        </div>
    )
}

export default AddTabs