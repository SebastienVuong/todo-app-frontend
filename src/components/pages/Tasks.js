import React, {Component} from 'react';
import './Tasks.css';

export default class Tasks extends Component {

  _handleLogin = () => {
    // // deep destructuring equivalent to (let email = this.refs.email.value;)
    // let { email: {value: email}, password: {value: password} } = this.refs;
    // if (email && password) {
    //   auth.login(email, password)
    //   .then(res => {
    //     this.props.router.push('/');
    //   })
    //   .catch(console.error);
    // }
    // else {
    //   this.setState({ error: "Please enter an email and password"});
    // }
  }

//   _handleTyping = (e) => {
//     if (this.state && this.state.error) {
//       this.setState({ error: null });
//     }
//     if (e.keyCode===ENTER) {
//       this._handleLogin();
//     }
//   }

  render() {
    return (
      <p>Tasks page {localStorage.username}</p>
    //   <div className="formBackground">
    //     <div className="authForm">
    //       <h1 className="title">Login</h1>
    //       <input type="text" ref="email" placeholder="email"
    //         onKeyUp={this._handleTyping}
    //       />
    //       <input type="password" ref="password" placeholder="password"
    //         onKeyUp={this._handleTyping}
    //       />
    //       <div className="button">
    //         <button onClick={this._handleLogin}>login</button>
    //       </div>
    //     </div>
    //   </div>
    );
  }

}