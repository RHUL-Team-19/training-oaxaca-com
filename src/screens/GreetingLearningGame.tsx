import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
//import { redirect } from '../util/Util';
import '../style/style.css';

const GreetingsGameContainer = styled.div`
  width: 35vw;
  height: 16.5vw;
`;

class GreetingsLearningGame extends React.Component{

    handleButton () {
       alert('CLICKED');
    };

    render(){
        /*
        Renduring the Welcome Screen page.
        **/
        return (
            <Router history={history}>
                <div className="Allergy-screen is-desktop">
                    <h2>You will have a set of questions to answer about how to greet guests. This will help you know how to handle customers.</h2> 
                </div>
            </Router>
        );
    }
}