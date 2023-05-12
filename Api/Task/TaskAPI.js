
export const TaskAPI = ()=>{

    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer 267|zM8vCfNQUHDNOsMFQpPsszJmB9l6Q7hzoFHsQfZP");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://assoc.studiomyraa.com/api/get_task_project", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
