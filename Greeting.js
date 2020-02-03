import React, { Component } from "react";
import styled, { css } from "styled-components";

function Greeting(props) {
  return (
    <Container>
      <GreetingInstruction>This is the Greeting Game.</GreetingInstruction>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(208,2,27,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const GreetingInstruction = styled.span`
  font-family: Roboto;
  width: 360px;
  height: 69px;
  color: rgba(20,25,218,1);
  font-size: 17px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 11px;
`;

export default Greeting;
