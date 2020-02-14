import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  margin-top: 2vw;
  max-width: 95%;
  height: calc(100vh - 8vw);
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  border-radius: 12px;
`;

// This is just done to workaround a typing bug
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MainBox = (props: { children: JSX.Element }) => (
  <StyledBox className="box">{props.children}</StyledBox>
);

export default MainBox;
