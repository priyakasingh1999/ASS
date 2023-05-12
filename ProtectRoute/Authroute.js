import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authuser } from '../components/Context/Auth'
import { getcookie } from '../Helper/cookie'


const Authroute = ({children}) => {
   const{auser}= useContext(Authuser)
  let login  =getcookie('login')
  
    if(!login){
      return <Navigate to='/login'/>
    }
  return (
    <div>{children}</div>
  )
}

export default Authroute