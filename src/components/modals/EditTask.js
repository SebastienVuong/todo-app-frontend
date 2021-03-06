import React, {Component} from 'react';
import api from '../../api.js';
import './EditTask.css';

export default class EditTask extends Component {
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

  _handleEdit = () => {
    let taskData = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      status: this.refs.status.value,
      dueDate: this.refs.dueDate.value,
      starred: this.refs.starred.value
    }
    api.editTask(this.state.taskId, taskData)
    .then(res => {
      this.props.whenSubmitted();  
      this.props.eventCancelled();
    })
    
  }

  _handleCancel = () => {
    this.props.eventCancelled();
  }

  render() {
    return (
      <div className="formBackground">
        <div className="edit-form">
          <h1 className="edit-form_title">Edit task</h1>
          Title <br/>
          <input type="text" ref="title" placeholder="Title"
            defaultValue={this.state.title}
          /> <br/> <br/>
          Description <br/>
          <input type="text" ref="description" placeholder="Description"
            defaultValue={this.state.description}
          /> <br/> <br/>
          Status <br/>
          <select ref="status">
            <option key="Pending" value="Pending">Pending</option>
            <option key="Done" value="Done">Done</option>
          </select> <br/> <br/>
          Due date (YYYY/MM/DD) <br/>
          <input type="text" ref="dueDate" placeholder="Due date"
            defaultValue={this.state.dueDate}
          /> <br/> <br/>
          Star
          <input type="checkbox" ref="starred" value={1}/> <br/> <br/> <br/>
          <div className="button">
            <button onClick={this._handleEdit}>Edit</button>
            <button onClick={this._handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}