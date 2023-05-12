import { Box, Typography, OutlinedInput, FormControl, Divider, Stack } from '@mui/material'
import react from '@mui/material'

const Search = (props) => {

    const {setSearch} =(props)

    return (
        <Box sx={{
            position: 'absolute',
            top: '30%',
            left: '65%',
            zIndex: 999,
            bgcolor: 'white',
            border:'1px solid #C3C3C3',
        }}>


            <Box>
                <Stack p={1} direction='row' sx={{ justifyContent: 'space-between',backgroundColor:'#C3C3C3' }}>
                    <Box></Box>
                    <Box><Typography sx={{color:"white"}} >
                        Search
                    </Typography></Box>

                    <Box>
                        <span onClick={() => { setSearch(false); }}>X</span>
                    </Box>
                </Stack>
                <Stack m={2}>
                    <FormControl  >
                        <OutlinedInput placeholder="Search" color="primary" size="small" />
                    </FormControl>
                </Stack>

            </Box>

        </Box>

    )
}
export default Search