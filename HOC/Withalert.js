import React, { useContext } from 'react'
import { Alertdata } from '../Context/Alertcontext'

const Withalert = (Incomingcomp) => {
  
    const Outgoingcomp=(props)=>{
    const{aalert,setaalert}=    useContext(Alertdata)
          return <Incomingcomp
          {...props}
          aalert={aalert}   setaalert={setaalert}
          />
    }

    return Outgoingcomp
}

export default Withalert