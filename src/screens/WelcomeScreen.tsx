import React from 'react';
import { render } from 'react-dom';
import history from '../history';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
//import { redirect } from '../util/Util';
import '../style/style.css';

export default class WelcomeScreen extends React.Component{

    handleButton () {
        /*handlemenuGameButton fuction:
        When menuGame button is pressed then change page to the MenuLearningGame page.
        if class name = menuGame go there etc.
        <button onClick={handleMenuGameButton}></button>
        **/
       history.push('/menuLearningGame')
    };

    render(){
        /*
        Renduring the Welcome Screen page.
        **/
        return (
            <div className="welcome-screen">
                <h2>Welcome to the training portal! Please select the game you would like to play:</h2>
                <button className="menuGame" onClick={this.handleButton}>Menu Learning</button>
            </div>
        );
    }
}