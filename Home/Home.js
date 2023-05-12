import React from 'react'
import { Navigate } from 'react-router-dom'
import { getcookie } from '../Helper/cookie'

const Home = () => {
    let cok=getcookie('login')
  if(!cok){
    return(
      <Navigate to={'/login'}/>
    )

  }else{
  return(
    <Navigate to={'/login'}/>
  )
  }
  return (
    <div>Home</div>
  )
}

export default Home