import React from 'react'
import Withalert from '../HOC/Withalert'

const Test = ({aalert,setaalert}) => {
 
  return (
    <div>
<h1>ehdu</h1>
<button onClick={()=>{
    setaalert({...alert,type:'error',message:'dhhuhiugefbiye'})
}}>nbbbbbbbbb</button>


    </div>
  )
}

export default Withalert(Test)