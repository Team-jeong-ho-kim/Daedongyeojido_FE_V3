import React from "react";
import styled from "styled-components";

export const CollectBtn = () => {
  return (
    <Container>
      <Badge>
        모집 중
      </Badge>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%; 
`;

const Badge = styled.span`
  padding: 5px 10px;
  background-color: #B9B9B9;
  color: #000000;
  border-radius: 12px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  margin: 0px 5px 5px 0px;

`;

