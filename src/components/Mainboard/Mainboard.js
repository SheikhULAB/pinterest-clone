import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pin from "../Pin/Pin";

const Mainboard = ({ pins }) => {
  const [boardPins, setboardPins] = useState([]);

  useEffect(() => {
    setboardPins(pins);
  }, []);

  return (
    <Wrapper>
      <Container>
        {pins.map((pin, index) => {
          return <Pin url={pin.urls.regular} index={index} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Mainboard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  margin-top: 15px;
`;
const Container = styled.div`
  column-gap: 10px;
  margin: 0 auto;
  height: 100%;
  background-color: white;
`;
