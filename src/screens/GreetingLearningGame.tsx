import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
//import { redirect } from '../util/Util';
import '../style/style.css';
import Navbar from '../components/Navbar';
import MainBox from '../components/MainBox';

const GreetingsGameContainer = styled.div`
  width: 35vw;
  height: 16.5vw;
`;

export default class GreetingsLearningGame extends React.Component{

    handleButton () {
       alert('CLICKED');
    };

    render(){
        /*
        Renduring the Welcome Screen page.
        **/
        return (
            <Router history={history}>
                <Navbar />
                <MainBox>
                    <div className="welcome-screen is-desktop">
                        <h2>Welcome to the Greetings training Game! There will be a series of 10 questions, answer them correctly.</h2>
                    </div>
                </MainBox>                                  
            </Router>
        );
    }
}