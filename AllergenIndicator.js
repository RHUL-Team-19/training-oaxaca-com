import React, { Component } from "react";
import styled, { css } from "styled-components";

function AllergenIndicator(props) {
  return (
    <Container>
      <AllergyInstruction>
        Sometimes you got to serve customers with very special needs.
      </AllergyInstruction>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(248,231,28,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const AllergyInstruction = styled.span`
  font-family: Roboto;
  width: 360px;
  height: 69px;
  color: rgba(20,25,218,1);
  font-size: 17px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 14px;
  align-self: center;
`;

export default AllergenIndicator;
