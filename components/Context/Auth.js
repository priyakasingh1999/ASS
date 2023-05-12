import{useState, createContext, useMemo, useEffect} from 'react'
export const Authuser=createContext()
const Auth = ({children}) => {
   const [auser,setauser]=useState(null)
  
   

  return (
   <Authuser.Provider  value={{auser,setauser}}>

           {children}
    </Authuser.Provider>
  )
}

export default Auth