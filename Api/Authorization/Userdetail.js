import axios from "axios";
import Cookies from "js-cookie";


export const  userdetail=()=>{
    let cookie= Cookies.get('login')
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${cookie}`);
    


var requestOptions = {
  method: 'GET',
  headers: myHeaders,

  redirect: 'follow'
};

 return fetch("https://assoc.studiomyraa.com/api/me", requestOptions)
  
  .then((result)=>{
    return result.json()
  })
  .catch(error => console.log('error', error));
}