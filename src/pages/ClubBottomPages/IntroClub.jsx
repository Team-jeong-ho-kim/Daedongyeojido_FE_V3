import styled from "styled-components";
import { ExClub } from "../../components/Club/ExClub";

export const IntroClub = () => {
  return (
    <IntroProjectAll>
      <IntroTitle>동아리 소개</IntroTitle>
      <ExClub />
    </IntroProjectAll>
  );
};

const IntroProjectAll = styled.div`
  width: 100%;
  padding: 0 0 0 17%;
  margin-top: 70px;
`;

const IntroTitle = styled.h1`
  font-size: 34px;
  font-weight: 400;
`;

