import React from "react";
import styled from "styled-components";

export const CollectBtn = () => {
  return (
    <Container>
      <Badge>
        모집중
      </Badge>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end; /* 수평 정렬: 오른쪽 */
  align-items: flex-end;
  width: 100%; /* 부모 요소 크기에 따라 조정 */
  height: 100%; 
`;

const Badge = styled.span`
  padding: 5px 10px;
  background-color: red;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: center; /* 내부 텍스트 중앙 정렬 */
  align-items: center; /* 내부 텍스트 중앙 정렬 */
  width: 52px;
`;

