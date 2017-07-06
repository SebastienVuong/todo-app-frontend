import React, {Component} from 'react';
import EditTask from '../modals/EditTask.js';
import DeleteTask from '../modals/DeleteTask.js';
import './TaskCard.css';

export default class TaskCard extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      deleting: false
    };
  }
  
  _handleEditButton = () => {
    this.setState({
      editing: true
    });
  }
  
  _handleDeleteButton = () => {
    this.setState({
      deleting: true
    });
  }
  
  _buttonEventCancelled = () => {
    this.setState({
      editing: false,
      deleting: false
    })
  }

  render() {
    let {title, description, status, dueDate, starred} = this.props;

    return (
      <div className="task-card_content">
        {this.state.editing ?
          <div className="popUpForm">
            <EditTask 
              id={this.props.id}
              title={title}
              description={description}
              status={status}
              dueDate={dueDate}
              starred={starred}
              eventCancelled={this._buttonEventCancelled}
              whenSubmitted={this.props.refreshPage}/>
          </div>:null}
        <div className="task-card_text-content">
          <h2 className={`task-card_title ${status}`}>{title} ({status})</h2>
          <p>{description}</p>
          <p>Due: {dueDate}</p>
          <div className="starred">
            { starred ? 
            (<i className="fa fa-star" aria-hidden="true"></i>) 
            : (<i className="fa fa-star-o" aria-hidden="true"></i>) }
          </div>
        </div>
        <div className="task-card_buttons">
          <button className="edit-button" onClick={this._handleEditButton}>Edit</button>
          <button className="delete-button" onClick={this._handleDeleteButton}>Delete</button>
        </div>
      </div>
    );
  }

}