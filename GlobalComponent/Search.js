import { Box, Typography, OutlinedInput, FormControl, Divider, Stack } from '@mui/material'


const Search = ({setSearchOpen,searchopen}) => {

    

    return (
      


            <Box sx={{maxWidth:160}}>
                <Stack px={"5px"} direction='row' sx={{ justifyContent: 'space-between',backgroundColor:'#C3C3C3' }}>
                    <Box></Box>
                    <Box><Typography sx={{color:"white"}} >
                        Search
                    </Typography></Box>

                    <Box onClick={()=>{setSearchOpen(false)}} sx={{cursor:"pointer"}}>
                        <span >X</span>
                    </Box>
                </Stack>
                <Stack m={"5px"}>
                    <FormControl  >
                        <OutlinedInput placeholder="Search" color="primary" size="small" />
                    </FormControl>
                </Stack>

            </Box>

       

    )
}
export default Search