import React, {Component} from 'react';
import './TaskCard.css';

export default class TaskCard extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    let {title, description, status, dueDate, starred} = this.props;

    return (
      <div className="task-card_content">
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
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    );
  }

}