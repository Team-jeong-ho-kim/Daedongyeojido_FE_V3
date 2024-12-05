import styled from "styled-components";
import { Project } from "../../components/Club/Project";

export const IntroProject = () => {
  return (
    <IntroProjectAll>
      <IntroTitle>프로젝트 소개</IntroTitle>
      <Project />
    </IntroProjectAll>
  );
};

const IntroProjectAll = styled.div`
  width: 100%;
  padding: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroTitle = styled.h1`
  font-size: 34px;
  font-weight: 400;
  margin-left: -62%;
`;
