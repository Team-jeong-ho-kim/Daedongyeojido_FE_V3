import styled from "styled-components";

export const NullClub = () => {
  return (
    <>
      <Container>
        <IntroProjectAll>
          <NullTitle>아직 등록된 것이 없습니다</NullTitle>
          <SubNullIntro>나중에 다시 시도해보시기 바랍니다</SubNullIntro>
        </IntroProjectAll>
      </Container>
      <Blank />
    </>
  );
};

const Blank = styled.div`
  height: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const IntroProjectAll = styled.div`
  margin-top: 150px;
`;

const NullTitle = styled.p`
  font-size: 34px;
  font-weight: 400;
  color: #b2b2b2;
`;

const SubNullIntro = styled.p`
  color: #b2b2b2;
  margin-top: 10px;
`;
