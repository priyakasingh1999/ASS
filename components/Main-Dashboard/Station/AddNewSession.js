import React from 'react'
import {Grid,Box,Modal, Typography} from '@mui/material'
import AddSessionReuse from '../../../GlobalComponent/AddSessionReuse'
import InfoSubHead from '../../../GlobalComponent/InfoSubHead'
import AddAssociateForm from '../../../GlobalComponent/AddAssociateForm'

const style = {
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

const AddNewSession = ({setAddSession,addsession}) => {
  return (
   <>
 
  <Modal
  open={()=>{setAddSession(true)}}
  onClose={()=>{setAddSession(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
  <Grid container sx={style}>
  <Grid item ={12} sx={{width:"100%"}}>
  <InfoSubHead 
            name="Add New Session"
            urlname={<Typography onClick={()=>{setAddSession(false)}}>X</Typography>}
            backgroundColor={"#d2dee8"}
            color={"#000"}
            />
    </Grid>
    <Grid item ={12} sx={{width:"100%"}}>
        <Box>
            <AddSessionReuse/>
        </Box>
    </Grid>
    <Grid item ={12} sx={{width:"100%"}}>
        <Box>
        <InfoSubHead 
            name={<Typography variant="h6" color={"#603190"}>Direct Session</Typography>}
            backgroundColor={"#f4f4f4"}
            color={"#603190"}
            />
        </Box>
    </Grid>
    <Grid item ={12} sx={{width:"100%",p:1}}>
        <Box>
        <AddAssociateForm/>
        </Box>
    </Grid>
   </Grid>
  </Modal>
 
   </>
  )
}

export default AddNewSession