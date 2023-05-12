import React from 'react'
import {Container,Box,Grid,Avatar, Typography,Modal} from '@mui/material'
import InfoSubHead from '../GlobalComponent/InfoSubHead'
import RecentData from './RecentLoginData'



const AssociateRecentLogin = ({setRecentLogin,recentlogin}) => {
  return (
 
       <Modal open={()=>setRecentLogin(true)} onClose={()=>setRecentLogin(false)} sx={{maxWidth:"350px",top:"20%",left:"15%",bgcolor:"#fff",height:"100% !important",position:"fixed"}}>
         <Grid contaier sx={{bgcolor:"#fff"}} >
            <Grid xs={12}>
                <Box>
                    <InfoSubHead name={"Assiciates Recent Login"} urlname={<Typography onClick={()=>setRecentLogin(false)}>X</Typography>} backgroundColor={"#1688ca"}
                color={"#fff"}/>
                </Box>
            </Grid>

            <Grid xs={12} sx={{textAlign:"right",padding:"3px"}}>
                <Box><input type="search" /></Box>
            </Grid>

           <Grid container sx={{bgcolor:"#cfdce7" , color:"#7f7f7f",textAlign:"center",py:1}}>
           <Grid sm={6} >
                <Box>
                    <Typography sx={{fontSize:"12px"}}>LAST LOGIN</Typography>
                </Box>
            </Grid>

            <Grid sm={6}>
                <Box>
                 <Typography sx={{fontSize:"12px"}}>ASSOCIATE</Typography>
                </Box>
            </Grid>
           </Grid>

            {
                RecentData.map((data)=>{
                    const {id,name,imgUrl,time} = data

                    return(
                        <Grid container key={id} sx={{textAlign:"center",py:1,borderBottom:"1px solid #d5eef7",":hover":{bgcolor:"#e6eff8"}}}>
            <Grid sm={4} sx={{my:"auto"}}>
                <Box>
                <Typography sx={{fontSize:"10px"}}>{time}</Typography>
                    </Box>
            </Grid>
            <Grid sm={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Box><Avatar src={imgUrl}/></Box>
            </Grid>
            <Grid sm={4}  sx={{my:"auto"}}>
                <Box>
                <Typography sx={{fontSize:"10px"}}>{name}</Typography>
                </Box>
            </Grid>
            </Grid>
                    )
                })
            }

        </Grid>
       </Modal>

  )
}

export default AssociateRecentLogin