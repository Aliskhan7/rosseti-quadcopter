import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://expovision.tech/api/';

class userService{
    getQuadcopter = () =>{
    return axios.get(API_URL + 'get_index_random', {headers: authHeader()})
    }
    getQuadcopterAll = () =>{
      return axios.get(API_URL + 'quadcopter', {headers: authHeader()})
    }
    getCourse = () =>{
        return axios.get(API_URL + 'course', {headers: authHeader()})
    }
    getComparis = () =>{
        return axios.get(API_URL + 'list', {headers: authHeader()})
    }

    getQuadcopterById = (id) =>{
        return axios.get(API_URL + `quadcopter/${id}`, {headers: authHeader()})
    }
}





export default new userService()