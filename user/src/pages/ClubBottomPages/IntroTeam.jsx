import styled from "styled-components";
import { Teammate } from "../../components/Club/IntroTeammate";

export const IntroTeam = () => {
  return (
    <Container>
    <IntroProjectAll>
      <IntroTitle>팀원 소개</IntroTitle>
      <IntroGrade>3학년</IntroGrade>
      <Teammate />
      <IntroGrade>2학년</IntroGrade>
      <Teammate />
      <IntroGrade>1학년</IntroGrade>
      <Teammate />
    </IntroProjectAll>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const IntroProjectAll = styled.div`
  width: 1300px;
  margin-top: 70px;
  height: 100%;
`;

const IntroTitle = styled.h1`
  margin-left: 100px;
  font-size: 34px;
  font-weight: 400;
`;

const IntroGrade = styled.p`
  font-size: 25px;
  margin: 10px 0px 0px 100px;
  color: #464646;
`

