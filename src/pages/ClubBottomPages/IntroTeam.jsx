import styled from "styled-components";
import { Teammate } from "../../components/Club/IntroTeammate";

export const IntroTeam = () => {
  return (
    <Container>
    <IntroProjectAll>
      <IntroTitle>팀원 소개</IntroTitle>
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

