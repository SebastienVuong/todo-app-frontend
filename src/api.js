import superagent from 'superagent';
import { API_HOST } from './config';

class Api {
  
  getUsers = () => {
    return superagent
    .get(`${API_HOST}/users`)
  }
  
  getTasks = (username) => {
    return superagent
    .get(`${API_HOST}/tasks?username=${username}&page=1&count=10`)
  }
  
}

export default new Api();