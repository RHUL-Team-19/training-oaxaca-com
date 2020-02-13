import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
//import { redirect } from '../util/Util';
import '../style/style.css';
import Navbar from '../components/Navbar';
import MainBox from '../components/MainBox';

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
       if(e === 'menu'){
        alert('menu');
       } else if(e === 'greeting'){
        alert('greetings');
       } else {
        alert('allergy');
       }
    };

    render(){
        /*
        Renduring the Welcome Screen page. That has buttons that lead to one of the 3 games: menuLearning, greetingsLearning and allergyLearning.
        **/

        // 

        return (
            <Router history={history}>
                <Navbar />
                <MainBox>
                    <div className="welcome-screen is-desktop">
                        <h2>Welcome to the training portal! Please select the game you would like to play:</h2>

                        <div className="buttons">
                            <table className="table is-fullwidth" style={{ marginLeft: '128px' }}>
                            {/*TODO place the top into table form
                            **/}

                                <tbody>
                                {/**
                                * 3 buttons on page for each game.
                                * Move into seperate tables
                                */}
                                    <tr>
                                        <td>
                                            <figure className="image is-128x128">
                                                <img src="https://objects.wsantos.net/oaxaca-com/menu/images/tacos.jpg" alt="menuGameImage" />
                                            </figure>
                                        </td>
                                        <td>
                                            <figure className="image is-128x128">
                                                <img src="https://objects.wsantos.net/oaxaca-com/menu/images/tacos.jpg" alt="AllergyGameImage" />
                                            </figure>
                                        </td>
                                        <td>
                                            <figure className="image is-128x128">
                                                <img src="https://objects.wsantos.net/oaxaca-com/menu/images/tacos.jpg" alt="GreetingGameImage" />
                                            </figure>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="menuGame" onClick={() => this.handleButton('menu')}> Menu Learning</button>
                                        </td>
                                        <td>
                                            <button className="allergyGame" onClick={() => this.handleButton('allergy')}>Allergy Learning</button>
                                        </td>
                                        <td>
                                            <button className="greetingGame" onClick={() => this.handleButton('greeting')}>Greetings Learning</button>
                                        </td>
                                    </tr>
                            
                                </tbody>
                            </table>
                        </div>
                    </div>
                </MainBox>
                                       
            </Router>
        );
    }
}