import React, {Component} from 'react';
import api from '../../api.js';
import './CreateTask.css';

export default class CreateTask extends Component {
  constructor() {
    super();
    this.state = {};
  }

  _handleCreate = () => {
    let taskData = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      status: this.refs.status.value,
      dueDate: this.refs.dueDate.value,
    }
    api.createTask(taskData)
    .then(res => {
      this.props.whenSubmitted();  
    })
    
  }

  _handleCancel = () => {
    this.props.eventCancelled();
  }

  render() {
    return (
      <div className="formBackground">
        <div className="create-form">
          <h1 className="create-form_title">Create task</h1>
          Title <br/>
          <input type="text" ref="title" placeholder="Title"/> <br/> <br/>
          Description <br/>
          <input type="text" ref="description" placeholder="Description"/> <br/> <br/>
          Status <br/>
          <select ref="status">
            <option key="Pending" value="Pending">Pending</option>
            <option key="Done" value="Done">Done</option>
          </select> <br/> <br/>
          Due date (YYYY/MM/DD) <br/>
          <input type="text" ref="dueDate" placeholder="Due date"/> <br/> <br/>
          Star
          <input type="checkbox" ref="starred" value={1}/> <br/> <br/> <br/>
          <div className="button">
            <button onClick={this._handleCreate}>Confirm</button>
            <button onClick={this._handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}