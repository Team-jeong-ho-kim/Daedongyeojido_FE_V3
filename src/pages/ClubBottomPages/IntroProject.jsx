import styled from "styled-components";
import { Project } from "../../components/Club/Project";

export const IntroProject = () => {
  return (
    <IntroProjectAll>
      <All>
        <TitleFiled>
          <IntroTitle>프로젝트 소개</IntroTitle>
        </TitleFiled>
        <Project />
      </All>
    </IntroProjectAll>
  );
};

const IntroProjectAll = styled.div`
  width: 100%;
  padding: 7%;
`;
const All = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleFiled = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
`;

const IntroTitle = styled.h1`
  margin: 0;
  font-size: 34px;
  font-weight: 400;
`;
