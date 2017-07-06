import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Tasks from './components/pages/Tasks';
import Login from './components/pages/Login';

import './index.css';

const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/tasks" component={Tasks}/>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));