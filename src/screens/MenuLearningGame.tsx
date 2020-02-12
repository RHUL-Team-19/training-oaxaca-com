import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
//import { redirect } from '../util/Util';
import '../style/style.css';

const MenuGameContainer = styled.div`
  width: 35vw;
  height: 16.5vw;
`;

class MenuLearningGame extends React.Component{

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
                <div className="Allergy-screen is-desktop">
                    <h2>You will have a set of 10 questions to answer about items on the menu. This will help you memorise the menu.</h2> 
                </div>
            </Router>
        );
    }
}