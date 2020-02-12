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

    handleButton (e: string) {
        /*handleButton fuction:
        Checks to see which button is pressed to redirct to corresponding page -->
            - If menuGame button is pressed then change page to the MenuLearningGame page.
            onClick={() => redirect(`menu/find/${meal_id}`)}
        **/
       if(e = 'menu'){
        alert('menu');
       } else if(e = 'greeting'){
        alert('greetings');
       } else {
        alert('allergy');
       }
    };

    render(){
        /*
        Renduring the Welcome Screen page. That has buttons that lead to one of the 3 games: menuLearning, greetingsLearning and allergyLearning.
        **/
        return (
            <Router history={history}>
                <div className="welcome-screen is-desktop">
                    <h2>Welcome to the training portal! Please select the game you would like to play:</h2>
                    
                    {/* <div className="images">
                        <figure className="image is-80x120">
                            <img src={require("https://objects.wsantos.net/oaxaca-com/menu/images/tacos.jpg")} alt="menuGameImage"/>
                        </figure>
                    </div> */}

                    <div className="buttons">
                    <table className="table is-fullwidth" style={{ marginLeft: '280px' }}>
                        {/*TODO place the top into table form
                        **/}
                        <thead>
                            <tr>
                                <th>Menu Learning Game</th>
                                <th>Alergy Learning Game</th>
                                <th>Greetings Learning Game</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/**
                             * 3 buttons on page for each game.
                             * Move into seperate tables
                             */}
                            <th>
                                <button className="menuGame" onClick={() => this.handleButton('menu')}>
                                    <span className="icon is-small">
                                    <i className="fas fa-edit"></i>
                                    </span>
                                    <span>Menu Learning</span>
                                </button>
                            </th>
                            <th>
                                <button className="allergyGame" onClick={() => this.handleButton('allergy')}>Allergy Learning</button>
                            </th>
                            <th>
                                <button className="greetingGame" onClick={() => this.handleButton('greeting')}>Greetings Learning</button>
                            </th>
                        </tbody>
                    </table>
                    </div>
                </div>
            </Router>
        );
    }
}