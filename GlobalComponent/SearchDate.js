import React from 'react'
import {Box,Stack,Button} from '@mui/material'

const SearchDate = ({setSearchOpen,left}) => {
  return (
    <Box  sx={{
        position: "absolute",
        mt: 6,
        top: "100%",
        left: {left},
        zIndex: 999,
        border: "1px solid #C3C3C3",
        bgcolor: "#fff",
        zIndex:999999
      }}>
        <Stack direction="row" sx={{justifyContent:"space-between",bgcolor:"#1688ca",p:1,color:"#fff"}}>
                        <Box></Box>
                        <Box>Search</Box>
                        <Box onClick={()=>{setSearchOpen(false)}} sx={{cursor:"pointer"}}>X</Box>
                     </Stack>
                     <Box sx={{p:1}}>
                     <Box sx={{mb:1}}>
                        <input type="date" className="form-control" placeholder="From Date"/>
                     </Box>
                     <Box sx={{mb:1}}>
                        <input type="date" className="form-control" placeholder="From Date"/>
                     </Box>
                     <Box sx={{mb:1}}>
                        <input type="text" className="form-control" placeholder="Search"/>
                     </Box>
                     <Box sx={{textAlign:"center"}}>
                        <Button variant="contained" size="small">Search</Button>
                     </Box>
                     </Box>
    </Box>
  )
}

export default SearchDate