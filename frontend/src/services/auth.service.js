import axios from 'axios';

const API_URL = 'https://expovision.tech/api/';

const login = (email, password) =>{
  return axios
    .post(API_URL + 'login', {
      email,
      password
    })
    .then((response) => {
     if(response.data.token){
       localStorage.setItem('user', JSON.stringify(response.data))
     }
     return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user');
  return axios
    .get(API_URL + 'logout');

}

export default {
  login,
  logout
}
