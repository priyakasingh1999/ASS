

import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import { getreplydata, replytoreply } from '../Api/Discussion/Discussion'

const Formbox = ({comment_id,id , setreplypage}) => {
    const[replyc,setreplyc]=useState([])
    const[formdata,setformdata]=useState('')
  let[text,settext]=useState(false)
    let  handlereplysubmit=(e)=>{
   e.preventDefault()
   
   replytoreply(comment_id,id,formdata).then((data)=>{
   
   if(data){
    console.log("saved",data);
    setformdata('')
    alert('your data will be saved')
    settext(data)
   }
   
   })
    }
    useEffect(()=>{
     getreplydata(id).then((data)=>{
        console.log("replkadata",data)
        setreplyc(data.reply)
     })
    },[text])
  return (
    <div>
       <Stack direction='row' className='hstack gap-1'>
       <div className=''>

       <input type='text' className='p-2 w-100' value={formdata} onChange={(e)=>{
          setformdata(e.target.value)
       }}/>  
       </div>
     
     

       <div className='d-flex '>
       <button className='bg-light border  px-2 py-1 mt-1 me-2' onClick={(e)=>{
          handlereplysubmit(e)
       }}>add</button>
       <button className='bg-light border  px-2 py-1 mt-1' onClick={()=>setreplypage(0)}>Close</button>
       </div>
    

       </Stack>
       {
        replyc.length>0 && replyc.map((mdata)=>{
            return(
               <Box>
                    
                    <Box direction="column">
                    
                       {mdata.reply.map((data)=>{
                        return(
                            <>
                             {mdata.users &&    <Avatar alt="Remy Sharp"  src={`https://assoc.studiomyraa.com/public/uploads/images/${mdata.users[0].image}`} />
               }
                    
                            <p>{data.content}</p>
                            </>
                        )
                       })
}
                     
                      </Box>
               </Box>
            )
        })
       }
    </div>
  )
}

export default Formbox