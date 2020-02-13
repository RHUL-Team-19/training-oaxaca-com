import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import '../style/style.css';
import Navbar from '../components/Navbar';
import MainBox from '../components/MainBox';
import { redirect } from '../util/Util';

const WelcomeScreenContainer = styled.div`
  width: 35vw;
  height: 16.5vw;
`;

export default class WelcomeScreen extends React.Component{

    handleButton (e: string) {
        /*handleButton fuction:
        Checks to see which button is pressed to redirct to corresponding page -->
         - menu --> MenuLearningGame
         - greeting --> GreetingLearningGame
         - allergy --> AllergyLearningGame
        **/
       if(e === 'menu'){
        redirect('MenuLearningGame');
       } else if(e === 'greeting'){
        redirect('GreetingLearningGame');
       } else {
        redirect('AllergyLearningGame');
       }
    };

    render(){
        /*
        Renduring the Welcome Screen page. That has buttons that lead to one of the 3 games: menuLearning, greetingsLearning and allergyLearning.
        **/
        return (
            <Router history={history}>
                <Navbar />
                <MainBox>
                    <div className="welcome-screen is-desktop">
                        <h2>Welcome to the training portal! Please select the game you would like to play:</h2>

                        <div className="buttons" style={{ justifyContent: 'center'}}>
                            <table className="table is-fullwidth" style={{ justifyContent: 'center', width:'140vh', alignItems: 'center' }}>
                                {/*Images and buttons placed in table form for layout purposes.
                                **/}
                                <tbody>
                                    <tr>
                                        {/* Images for the three comonents: menu, allergens, and greetings
                                        */}
                                        <td>
                                            <figure className="image is-128x128">
                                                <img src="http://objects.wsantos.net/oaxaca-com/training/Menu.jpg" alt="menuGameImage" />
                                            </figure>
                                        </td>
                                        <td>
                                            <figure className="image is-128x128">
                                                <img src="http://objects.wsantos.net/oaxaca-com/training/Allergens.jpg" alt="AllergyGameImage" />
                                            </figure>
                                        </td>
                                        <td>
                                            <figure className="image is-128x128">
                                                <img src="http://objects.wsantos.net/oaxaca-com/training/Greeting.jpg" alt="GreetingGameImage" />
                                            </figure>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/**
                                        * 3 buttons on page for each game.
                                        * Move into seperate tables
                                        */}
                                        <td>
                                            <button className="button is-centered" onClick={() => this.handleButton('menu')}> Menu Learning</button>
                                        </td>
                                        <td>
                                            <button className="button is-centered" onClick={() => this.handleButton('allergy')}>Allergy Learning</button>
                                        </td>
                                        <td>
                                            <button className="button is-centered" onClick={() => this.handleButton('greeting')}>Greetings Learning</button>
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