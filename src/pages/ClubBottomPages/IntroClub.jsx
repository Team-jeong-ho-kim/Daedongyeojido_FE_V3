import styled from "styled-components";
import { ExClub } from "../../components/Club/ExClub";

export const IntroClub = () => {
  return (
    <Container>
    <IntroProjectAll>
      <IntroTitle>동아리 소개</IntroTitle>
      <ExClub />
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
`;

const IntroTitle = styled.h1`
  font-size: 34px;
  font-weight: 400;
`;
