import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function WelcomeScreen(props) {
  return (
    <Rect>
      <Rect2>
        <Welcome>
          Welcome to the training portal! Please select the game you would like
          to play:
        </Welcome>
        <Group>
          <Image src={require("../assets/images/Menu.jpg")}></Image>
          <Image2 src={require("../assets/images/Greeting.jpg")}></Image2>
          <Image3 src={require("../assets/images/Allergens.jpg")}></Image3>
        </Group>
        <Button3Row>
          <Link to="/MenuLearningMessage">
            <Button3>
              <ButtonOverlay>
                <Menu2>Menu</Menu2>
              </ButtonOverlay>
            </Button3>
          </Link>
          <Link to="/TestButtons">
            <Button2>
              <ButtonOverlay>
                <Greetings>Greetings</Greetings>
              </ButtonOverlay>
            </Button2>
          </Link>
          <Link to="/TestButtons">
            <Button1>
              <ButtonOverlay>
                <Allergens>Allergens</Allergens>
              </ButtonOverlay>
            </Button1>
          </Link>
        </Button3Row>
      </Rect2>
    </Rect>
  );
}

const Rect = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(227,13,13,1);
  flex-direction: column;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect2 = styled.div`
  width: 1082px;
  height: 474px;
  background-color: rgba(255,251,251,1);
  flex-direction: column;
  display: flex;
  margin-top: 147px;
  margin-left: 142px;
`;

const Welcome = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  margin-top: 57px;
  align-self: center;
`;

const Group = styled.div`
  width: 912px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  align-self: center;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Image2 = styled.img`
  width: 100%;
  height: 175px;
  object-fit: contain;
`;

const Image3 = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

const Button3 = styled.div`
  width: 138px;
  height: 38px;
  background-color: rgba(220,13,13,1);
  border-radius: 100px;
  shadow-opacity: 1px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Menu2 = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 17px;
  font-weight: 700;
  font-style: normal;
  align-self: center;
`;

const Button2 = styled.div`
  width: 138px;
  height: 38px;
  background-color: rgba(220,13,13,1);
  border-radius: 100px;
  shadow-opacity: 1px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 193px;
  border: none;
`;

const Greetings = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 17px;
  font-weight: 700;
  font-style: normal;
  align-self: center;
`;

const Button1 = styled.div`
  width: 138px;
  height: 38px;
  background-color: rgba(220,13,13,1);
  border-radius: 100px;
  shadow-opacity: 1px;
  flex-direction: column;
  display: flex;
  margin-left: 213px;
  border: none;
`;

const Allergens = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 17px;
  font-weight: 700;
  font-style: normal;
  margin-top: 11px;
  margin-left: 33px;
`;

const Button3Row = styled.div`
  height: 38px;
  flex-direction: row;
  display: flex;
  margin-top: 42px;
  margin-left: 117px;
  margin-right: 145px;
`;

export default WelcomeScreen;
