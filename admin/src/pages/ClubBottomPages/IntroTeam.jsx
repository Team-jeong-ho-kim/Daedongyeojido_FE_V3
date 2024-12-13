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
  width: 1000px;
  margin-top: 70px;
  border: 1px solid black;
`;

const IntroTitle = styled.h1`
  font-size: 34px;
  font-weight: 400;
`;

