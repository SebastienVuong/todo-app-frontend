import React, {Component} from 'react';
import api from '../../api.js';

import './Login.css';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  
  componentDidMount() {
    this.fetchAllUsers();
  }
  
  fetchAllUsers = () => {
    // Promise.resolve([api.getUsers()])
    api.getUsers()
    .then(res => {
      this.setState({
        users: res.body.users,
        username: res.body.users[0].username
      });
    })
  }

  _handleLogin = () => {
    let username = this.state.username;
    console.log(username)
    localStorage.username = username;
    this.props.router.push('/tasks');
  }

  _handleChange = (e) => {
    this.setState({
      username: e.target.value  
    })
  }

  render() {
    let users = this.state.users;
    console.log(users, 'yo')
    return (
      <div className='login-container'>
        <h1>Login page</h1>
        <div className='login-form'>
          <select onChange={this._handleChange}>
            { users && users.length > 0 ?
            users.map(user => 
              (<option key={user.id} value={user.username}>{user.username}</option>)
            ) 
            : null }
          </select>
          <button onClick={this._handleLogin}>Login</button>
        </div>
      </div>
    );
  }

}