import React, {Component} from 'react';
import api from '../../api.js';
import TaskCard from '../elements/TaskCard';
import CreateTask from '../modals/CreateTask.js';

import './Tasks.css';

export default class Tasks extends Component {
  
  constructor() {
    super();
    this.state = {
      tasks: [],
      creating: false
    }
  }
  
  componentDidMount() {
    this.fetchTasks();
  }
  
  fetchTasks = () => {
    api.getTasks(localStorage.username)
    .then(res => {
      this.setState({
        tasks: res.body.tasks,
        creating: false
      });
    });
  }
  
  _handleLogout = () => {
    this.props.router.push('/');
  }
  
  _handleCreate = () => {
    this.setState({
      creating: true
    })
  }
  
  _buttonEventCancelled = () => {
    this.setState({
      creating: false
    })
  }
  
  render() {
    let tasks = this.state.tasks;
    let that = this;
    return (
      <div className='task-list-container'>
      {this.state.creating ?
        <div className="popUpForm">
          <CreateTask 
            eventCancelled={this._buttonEventCancelled}
            whenSubmitted={this.fetchTasks}/>
        </div>
        : null
      }
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
              refreshPage={that.fetchTasks}
            />
          )}
        </div>
        <div className="buttons">
          <button className="new-task-button" type="button" onClick={this._handleCreate}>Add new task</button>
          <button className="logout-button" type="button" onClick={this._handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

}