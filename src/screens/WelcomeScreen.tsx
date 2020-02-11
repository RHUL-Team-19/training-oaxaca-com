import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
//import { redirect } from '../util/Util';
import '../style/style.css';

const WelcomeScreenContainer = styled.div`
  width: 35vw;
  height: 16.5vw;
`;

export default class WelcomeScreen extends React.Component{

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
                <div className="welcome-screen">
                    <h2>Welcome to the training portal! Please select the game you would like to play:</h2>
                    
                    {/* <div className="images">
                        <figure className="image is-80x120">
                            <img src={require("https://objects.wsantos.net/oaxaca-com/menu/images/tacos.jpg")} alt="menuGameImage"/>
                        </figure>
                    </div> */}

                    <div className="buttons">
                        {/**
                         * 3 buttons on page for each game.
                         * Move into seperate tables
                         */}
                        <button className="menuGame" onClick={this.handleButton}>
                            <span className="icon is-small">
                            <i className="fas fa-edit"></i>
                            </span>
                            <span>Menu Learning</span>
                        </button>
                        <button className="alergyGame" onClick={this.handleButton}>Allergy Learning</button>
                        <button className="greetingGame" onClick={this.handleButton}>Greetings Learning</button>
                    </div>
                </div>
            </Router>
        );
    }
}