import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Title goes here</TitleStyle>
          <SubtitleStyle>Subtitle here</SubtitleStyle>
        </BodyContent>
        <CardItemImagePlace
          src={require("../assets/images/cardImage.png")}
        ></CardItemImagePlace>
      </CardBody>
      <ActionBody>
        <ActionButton1>
          <ButtonOverlay>
            <ActionText1>ACTION 1</ActionText1>
          </ButtonOverlay>
        </ActionButton1>
        <ActionButton2>
          <ButtonOverlay>
            <ActionText2>ACTION 2</ActionText2>
          </ButtonOverlay>
        </ActionButton2>
      </ActionBody>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-wrap: nowrap;
  border-radius: 2px;
  border-color: #CCC;
  border-width: 1px;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const CardBody = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const BodyContent = styled.div`
  flex: 1 1 0%;
  padding: 16px;
  padding-top: 24px;
  flex-direction: column;
  display: flex;
`;

const TitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  padding-bottom: 12px;
  font-size: 24px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

const CardItemImagePlace = styled.img`
  width: 100%;
  height: 80px;
  background-color: #ccc;
  margin: 16px;
`;

const ActionBody = styled.div`
  flex-direction: row;
  padding: 8px;
  display: flex;
`;

const ActionButton1 = styled.div`
  height: 36px;
  padding: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const ActionText1 = styled.span`
  font-family: Arial;
  color: #000;
  opacity: 0.9;
  font-size: 14px;
`;

const ActionButton2 = styled.div`
  height: 36px;
  padding: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const ActionText2 = styled.span`
  font-family: Arial;
  color: #000;
  opacity: 0.9;
  font-size: 14px;
`;

export default MaterialCardWithImageAndTitle;
