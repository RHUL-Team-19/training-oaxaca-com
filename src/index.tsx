import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import history from './history';
import welcomescreen from './screens/WelcomeScreen';

ReactDOM.render(
    <Router history={history}>
        <Redirect to="/welcomescreen" />
        {/*TODO
            <Switch>
                <Route exact path="/welcomescreen" component={WelcomeScreen} />
                <Route exact path="/menugame" component={MenuLearningGame} />
                <Route path="/greetingsgame" component={GreetingsGame} />
            </Switch>
        **/}
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
