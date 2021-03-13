import React from "react";
import styled from "styled-components";

const Pin = ({ url, term, index }) => {
  return (
    <Wrapper>
      <Container>
        <img src={url} alt={`pin${index}`} />
      </Container>
    </Wrapper>
  );
};

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    width: 100%;
    display: flex;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`;
