import styled from "styled-components";

export const MemberGuid = () => {
  return (
    <MemberGuidAll>
      <IntroTitle>모집 요강</IntroTitle>
    </MemberGuidAll>
  );
};

const MemberGuidAll = styled.div`
  width: 100%;
  padding: 0 0 0 17%;
  margin-top: 70px;
`;

const IntroTitle = styled.h1`
  font-size: 34px;
  font-weight: 400;
`;
