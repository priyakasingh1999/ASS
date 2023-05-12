import React, { createContext, useState } from 'react'
export const Alertdata=createContext()
const Alertcontext = ({children}) => {
  let[aalert,setaalert]=useState({
        type:'success',
        message:'nice bobyyy'
    })
  return (
   <Alertdata.Provider value={{aalert,setaalert}}>
    {children}
   </Alertdata.Provider>
  )
  }
export default Alertcontext
