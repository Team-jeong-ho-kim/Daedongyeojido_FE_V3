import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Pagefooter } from "../components/PageFooter";

export const ApplicantList = () => {
  
  const applicants = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    name: "원은지",
    position: "Front-end",
    fixed: "정함",
    non_fixed: "미정",
    win: "합격",
    lose: "불합격",
  }));

  return (
    <>
    <Header />
    <Container>
    <BackButton> &lt; 뒤로가기</BackButton>
      <TitleSection>
        <MainTitle>지원자 보기</MainTitle>
        <SubTitle>
          지원자들의 정보, 지원서, 지원서, 면접 메모, 합격여부를 확인하세요.
        </SubTitle>
      </TitleSection>
      <DisplayContainer>
      <GridContainer>
        {applicants.map((applicant) => (
          <Card key={applicant.id}>
            <CardContent>
              <StudentNumber>2210</StudentNumber>
              <NameText>{applicant.name}</NameText>
              <PositionText>{applicant.position}</PositionText>
              <StatusText>면접 일시 : {applicant.fixed}</StatusText>
            <ButtonContainer>
              <Result>
                <DocumentR>서류 : {applicant.win}</DocumentR>
                <Interview>면접 : -</Interview>
                <InterviewDate>면접 날짜</InterviewDate>
              </Result>
            </ButtonContainer>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
      </DisplayContainer>
    </Container>
    <Pagefooter />
    </>
  );
};

const Container = styled.div`
  user-select: none;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px 20px 20px;
  font-family: "Pretendard";
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 70px;
`;

const Result = styled.div`
  font-family: "Pretendard";
`;

const InterviewDate = styled.button`
  display: flex;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-family: "Pretendard";
  padding: 5px 10px 5px 10px;
  background-color: white;
  margin-top: 10px;
`

const BackButton = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TitleSection = styled.div`
  text-align: left;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const DisplayContainer = styled.div`
  margin-top: 70px;
  padding: 80px;
  border: 2px solid #EAECEF;
  border-radius: 10px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 20px 0px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #CDD1D6;
  border-radius: 8px;
  text-align: left;
  transition: box-shadow 0.3s;
  height: 170px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
`;

const StudentNumber = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
`;

const NameText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const PositionText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #626262;
  margin: 5px 0px 5px 0px;
`;

const StatusText = styled.p`
  font-size: 14px;
  color: #626262;
  margin: 0;
  margin-top: 10px;
`;

const DocumentR = styled.p`
  font-size: 14px;
  color: #626262;
  margin: 0;
  font-weight: 700;
`;

const Interview = styled.p`
  font-size: 14px;
  color: #626262;
  margin: 0;
  font-weight: 700;
`;
