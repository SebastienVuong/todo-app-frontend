import React, {Component} from 'react';
import moment from 'moment';
import api from '../../api.js';
import TaskCard from '../elements/TaskCard';
import CreateTask from '../modals/CreateTask.js';

import './Tasks.css';

export default class Tasks extends Component {
  
  constructor() {
    super();
    this.state = {
      tasks: [],
      creating: false,
      onlyStarred: false,
      today: moment().format("YYYY/MM/DD"),
      hidePast: false
    }
  }
  
  componentDidMount() {
    this.fetchTasks();
  }
  
  fetchTasks = () => {
    api.getTasks(localStorage.username)
    .then(res => {
      let tasks = res.body.tasks;
      if (this.state.hidePast) {
        let refinedTasks = [];
        tasks.forEach(task => {
          if (this.state.today <= task.dueDate) {
            refinedTasks.push(task);
          }
        })
        tasks = refinedTasks;
      }
      if (this.state.onlyStarred) {
        let refinedTasks = [];
        console.log(refinedTasks)
        tasks.forEach(task => {
          if (task.starred) {
            refinedTasks.push(task);
          }
        })
        tasks = refinedTasks;
      }
      this.setState({
        tasks: tasks,
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
  
  _handleFilter = () => {
    this.fetchTasks();
    this.setState({
      onlyStarred: !this.state.onlyStarred
    })
  }
  
  _handlePast = () => {
    this.fetchTasks();
    this.setState({
      hidePast: !this.state.hidePast
    });
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
        <p className="filter-option" onClick={this._handleFilter}> {this.state.onlyStarred ? "Show All" : "Show Starred Only"} </p>
        <p className="filter-option" onClick={this._handlePast}> {this.state.hidePast ? "Show Past Tasks" : "Hide Past Tasks"} </p>
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