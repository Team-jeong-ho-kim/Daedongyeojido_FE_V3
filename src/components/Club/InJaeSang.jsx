import { useState } from "react";
import styled from "styled-components";

export const InJaeSang = () => {
  const [injaeContent, setInjaeContent] = useState("보노보노를 좋아하는 사람");

  return (
    <InJaeSangAll>
      <Content>{injaeContent}</Content>
    </InJaeSangAll>
  );
};

const InJaeSangAll = styled.div`
  margin: 1% 0 0 7%;
  font-size: 22px;
`;

const Content = styled.div``;
