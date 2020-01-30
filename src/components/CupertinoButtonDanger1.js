import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonDanger1(props) {
  return (
    <Container {...props}>
      <Caption>{props.text1 || "Button"}</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FF3B30;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 5px;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonDanger1;
