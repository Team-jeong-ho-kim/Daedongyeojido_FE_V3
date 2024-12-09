import { useState } from "react";
import styled from "styled-components";

export const Subject = () => {
  const [subject, setSubject] = useState(
    "백준 알고리즘 20개 푼 후 코드 해석해오기"
  );

  return (
    <SubjectAll>
      <Content>{subject}</Content>
    </SubjectAll>
  );
};

const SubjectAll = styled.div`
  margin: 1% 0 0 7%;
  font-size: 22px;
`;

const Content = styled.div``;
