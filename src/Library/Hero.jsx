import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Div>
      <Home>hello</Home>
    </Div>
  );
};

export default Hero;
const Div = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: #edeff0;
`;
const Home = styled.div`
  height: 380px;
  width: 97%;
  background-color: red;
`;
