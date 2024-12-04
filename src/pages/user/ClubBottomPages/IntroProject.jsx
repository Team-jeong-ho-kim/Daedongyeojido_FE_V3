import styled from "styled-components";

export const IntroProject = () => {
  return (
    <IntroProjectAll>
      <IntroTitle>프로젝트 소개</IntroTitle>
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
