import React, { Component } from "react";
import styled, { css } from "styled-components";

function MenuLearning(props) {
  return (
    <Container>
      <MenuLearningInstruction>
        Try to get a better understanding of our menu :)
      </MenuLearningInstruction>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(126,211,33,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const MenuLearningInstruction = styled.span`
  font-family: Roboto;
  width: 360px;
  height: 59px;
  color: rgba(20,25,218,1);
  font-size: 17px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 13px;
  align-self: center;
`;

export default MenuLearning;
