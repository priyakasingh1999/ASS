import React, { createContext, useState } from 'react'

export const Clickcontaxt = createContext()

const DropdownData = ({children}) => {
  const [notifiopen , setNotifficationOpen]=useState(false)
  const [coloropen , setColorOpen]=useState(false)
  const [associateopen , setAssociate]=useState(false)
  return (
    <Clickcontaxt.Provider value={{
        notifiopen , setNotifficationOpen , coloropen , setColorOpen , associateopen , setAssociate
        }}>
        {children}
    </Clickcontaxt.Provider>
  )
}

export default DropdownData