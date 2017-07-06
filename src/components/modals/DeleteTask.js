import React, {Component} from 'react';
import api from '../../api.js';
import './DeleteTask.css';

export default class DeleteTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
        taskId: this.props.id,
        title: this.props.title,
        description: this.props.description,
        status: this.props.status,
        dueDate: this.props.dueDate,
        starred: this.props.starred
    };
  }

  _handleDelete = () => {
    api.deleteTask(this.state.taskId)
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
        <div className="delete-form">
          <h1 className="delete-form_title">Delete task</h1>
          Title <br/>
          <input type="text" readOnly="true" ref="title" placeholder="Title"
            defaultValue={this.state.title}
          /> <br/> <br/>
          Description <br/>
          <input type="text" readOnly="true" ref="description" placeholder="Description"
            defaultValue={this.state.description}
          /> <br/> <br/>
          Status <br/>
          <input type="text" readOnly="true" ref="status" placeholder="Status"
            defaultValue={this.state.status}
          /> <br/> <br/>
          Due date (YYYY/MM/DD) <br/>
          <input type="text" readOnly="true" ref="dueDate" placeholder="Due date"
            defaultValue={this.state.dueDate}
          /> <br/> <br/> <br/>
          <div className="button">
            <button onClick={this._handleDelete}>Confirm</button>
            <button onClick={this._handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}