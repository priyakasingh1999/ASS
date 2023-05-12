

import Cookies from "js-cookie";
export const commentstore=(ses_id,currentComment)=>{

  let cookie= Cookies.get('login')
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${cookie}`);
var formdata = new FormData();
formdata.append("session_id", ses_id);
formdata.append("comments",currentComment);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://assoc.studiomyraa.com/api/session_comment", requestOptions)
  
  .then((result)=>{
    return result.json()
  })
  .catch(error => console.log('error', error));
    
}
export const getcommentdata=(ses_id)=>{
  let cookie= Cookies.get('login')
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${cookie}`);


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  
  redirect: 'follow'
};

 return fetch(`https://assoc.studiomyraa.com/api/get_session_comment/${ses_id}`, requestOptions)
  
  .then((result)=>{
  return result.json()
  })
  .catch(error => console.log('error', error));
}