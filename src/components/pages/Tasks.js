import React, {Component} from 'react';
import api from '../../api.js';
import TaskCard from '../elements/TaskCard';

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
        <div className='task-list'>
          { tasks.map(task => 
            <TaskCard 
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              starred={task.starred}
              status={task.status}
            />
          )}
        </div>
        <button className="logout-button" type="button" onClick={this._handleLogout}>Logout</button>
      </div>
    );
  }

}