import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import history from './history';
import WelcomeScreen from './screens/WelcomeScreen';

ReactDOM.render(
    <Router history={history}>
        <Redirect to="/WelcomeScreen" />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
