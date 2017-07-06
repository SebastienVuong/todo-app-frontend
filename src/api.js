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
  
  createTask = (taskData) => {
    return superagent
    .post(`${API_HOST}/tasks`)
    .send({
      username: localStorage.username,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
      starred: taskData.starred
    })
  }
  
  editTask = (taskId,taskData) => {
    return superagent
    .patch(`${API_HOST}/tasks`)
    .send({
      taskId: taskId,
      title: taskData.title,
      description: taskData.description,
      status: taskData.status,
      dueDate: taskData.dueDate,
      starred: taskData.starred
    })
  }
  
  deleteTask = (taskId) => {
    return superagent
    .delete(`${API_HOST}/tasks`)
    .send({
      taskId: taskId
    })
  }
}

export default new Api();