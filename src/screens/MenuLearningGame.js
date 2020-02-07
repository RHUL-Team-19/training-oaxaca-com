import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function MenuLearningGame(props, image, ans1, ans2, ans3){
  return(
    <Rect>
      <Rect2>
        <MenuLearningMessage>
          <div>
            This is where the Menu learning game training happens! Answer as many questions correctly as you can.
          </div>
        </MenuLearningMessage>
        
        <Group>
          <div>
            <Image src={require("../assets/images/Menu.jpg")}></Image>
          </div>
        </Group>

        <ButtonsRow>
          <div>
            <Button>
              <ButtonOverlay>
              {testStringVar}
              </ButtonOverlay>
            </Button>
            <Button>
              <ButtonOverlay>
                temps
              </ButtonOverlay>
            </Button>
            <Button>
              <ButtonOverlay>
                temps
              </ButtonOverlay>
            </Button>
            </div>
        </ButtonsRow>
      </Rect2>
    </Rect>
  )
}

const Rect = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(227,13,13,1);
  flex-direction: column;
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
const ButtonsRow = styled.div`
  height: 38px;
  flex-direction: row;
  display: flex;
  margin-top: 42px;
  margin-left: 117px;
  margin-right: 145px;
`;
const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;

const Button = styled.div`
  width: 138px;
  height: 38px;
  padding:15px;
  background-color: rgba(220,13,13,1);
  border-radius: 100px;
  shadow-opacity: 1px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
  `;

const MenuLearningMessage = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  margin-top: 57px;
  align-self: center;
`;

const buttonText = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 17px;
  font-weight: 700;
  font-style: normal;
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
  height: 300px;
  object-fit: contain;
`;

var testStringVar = "helloooo";


export default MenuLearningGame;