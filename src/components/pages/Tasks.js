import React, {Component} from 'react';
import api from '../../api.js';

import './Tasks.css';

export default class Tasks extends Component {
  
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }
  
  componentDidMount() {
    this.fetchTasks();
  }
  
  fetchTasks = () => {
    api.getTasks(localStorage.username)
    .then(res => {
      this.setState({
        tasks: res.body.tasks
      });
    });
  }
  
  _handleLogout = () => {
    this.props.router.push('/');
  }

  render() {
    let tasks = this.state.tasks;
    return (
      <div className='login-container'>
        <h1>Tasks page</h1>
        <div className='login-form'>
          <select onChange={this._handleChange}>
            { tasks && tasks.length > 0 ?
            tasks.map(task => 
              (<option key={task.id} value={task.title}>{task.title}</option>)
            ) 
            : null }
          </select>
          <button onClick={this._handleLogin}>Login</button>
        </div>
        <button type="button" onClick={this._handleLogout}>Logout</button>
      </div>
    );
  }

}