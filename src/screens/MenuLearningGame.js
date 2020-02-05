import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function MenuLearningGame(props){
    return(
        <React>
            <React2>
                <MenuLearningMessage>
                    This is where the Menu learning game training happens! Answer as many questions correctly as you can.
                </MenuLearningMessage>
            </React2>
        </React>
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

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
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
