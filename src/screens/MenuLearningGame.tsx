import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import '../style/style.css';
import Navbar from '../components/Navbar';
import MainBox from '../components/MainBox';
import { redirect } from '../util/Util';

const MenuGameContainer = styled.div`
  width: 35vw;
  height: 16.5vw;
`;

export default class MenuLearningGame extends React.Component{

    handleButton () {
        /*handleButton fuction:
        Checks to see which button is pressed to redirct to corresponding page -->
            - If menuGame button is pressed then change page to the MenuLearningGame page.
            onClick={() => redirect(`menu/find/${meal_id}`)}
        **/
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
                    <h2>Welcome to the Menu training Game! There will be a series of 10 questions, answer them correctly.</h2>
                </div>
            </MainBox>
                                   
        </Router>
        );
    }
}