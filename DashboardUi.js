import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function DashboardUi(props) {
  return (
    <Container>
      <WelcomeDisplay>
        Welcome to the training portal :){"\n"}
        {"\n"}What do you want to learn today?{"\n"}
        {"\n"}Select a game for the day!
      </WelcomeDisplay>
      <GreetingLearnBtnStack>
        <Link to="/Greeting">
          <GreetingLearnBtn>
            <ButtonOverlay></ButtonOverlay>
          </GreetingLearnBtn>
        </Link>
        <Greeting>Greeting</Greeting>
      </GreetingLearnBtnStack>
      <AllergyBtnStack>
        <Link to="/AllergenIndicator">
          <AllergyBtn>
            <ButtonOverlay></ButtonOverlay>
          </AllergyBtn>
        </Link>
        <BewareOfAllergy>Beware of Allergy</BewareOfAllergy>
      </AllergyBtnStack>
      <Link to="/MenuLearning">
        <MenuLearnBtn>
          <ButtonOverlay>
            <Menu>Familiarise with the {"\n"}Menu</Menu>
          </ButtonOverlay>
        </MenuLearnBtn>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(139,87,42,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const WelcomeDisplay = styled.span`
  font-family: Roboto;
  width: 338px;
  height: 99px;
  color: rgba(15,198,201,1);
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 23px;
  margin-left: 11px;
`;

const GreetingLearnBtn = styled.div`
  top: 0px;
  left: 2px;
  width: 106px;
  height: 98px;
  background-color: rgba(242,17,17,1);
  position: absolute;
  border-radius: 100px;
  border-color: #000000;
  border-width: 0px;
  border-style: solid;
`;

const Greeting = styled.span`
  font-family: Roboto;
  top: 35px;
  left: 0px;
  width: 111px;
  height: 29px;
  color: rgba(184,233,134,1);
  position: absolute;
  font-size: 17px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
`;

const GreetingLearnBtnStack = styled.div`
  width: 111px;
  height: 98px;
  margin-top: 11px;
  margin-left: 125px;
  position: relative;
`;

const AllergyBtn = styled.div`
  top: 0px;
  left: 2px;
  width: 106px;
  height: 98px;
  background-color: rgba(220,242,17,1);
  position: absolute;
  border-radius: 100px;
  border: none;
`;

const BewareOfAllergy = styled.span`
  font-family: Roboto;
  top: 27px;
  left: 0px;
  width: 111px;
  height: 43px;
  color: rgba(20,25,218,1);
  position: absolute;
  font-size: 17px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
`;

const AllergyBtnStack = styled.div`
  width: 111px;
  height: 98px;
  margin-top: 69px;
  margin-left: 125px;
  position: relative;
`;

const MenuLearnBtn = styled.div`
  width: 106px;
  height: 98px;
  background-color: rgba(126,211,33,1);
  border-radius: 100px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  margin-top: 77px;
  margin-left: 127px;
  border-style: solid;
`;

const Menu = styled.span`
  font-family: Roboto;
  width: 106px;
  height: 58px;
  color: rgba(20,25,218,1);
  font-size: 17px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 20px;
`;

export default DashboardUi;
