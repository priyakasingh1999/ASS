import React from 'react'
import Alertdata from '@mui/material/Alert';
const Alert = ({aalert,setaalert}) => {
   
     if(!aalert){
        return alert('nahihu alert')
     }
  console.log(aalert,"dekahah");

  return (
    <Alertdata severity={`${aalert.type}`}>{aalert.message}   <span style={{background:'red'}}>close</span></Alertdata>

  )
}

export default Alert