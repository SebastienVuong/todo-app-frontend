import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      filter: 'all',
      userId: 0
    };
  }
  
  switchUser = (userId) => {
    this.setState({
      userId: userId
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="banner">
          To-Do List App
        </div>
        <div>
            {React.cloneElement(this.props.children)}
        </div>
      </div>
    );
  }
}

export default App;
