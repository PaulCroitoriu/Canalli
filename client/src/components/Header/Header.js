import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #fbfaf2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  font-family: "Goldman", cursive;
  color: #2b2d2a;
`;

const Title = styled.h1`
  pointer-events: none;
`;

const Header = ({ title = "Canalli" }) => (
  <HeaderWrapper>
    <Title>{title}</Title>
  </HeaderWrapper>
);

export default Header;
