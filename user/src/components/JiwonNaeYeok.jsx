import { useState } from "react";
import styled from "styled-components";

export const JiwonNaeYeok = () => {
  const [appList, setAppList] = useState({
    club: "대동여지도",
    major: "프론트엔드",
    endDate: "2024-02-10",
    documentResult: "합격",
    interviewDate: "12/23",
    interviewTime: "오후 12:20",
  });

  return (
    <JiwonNaeYeokAll>
      <Top>
        <Club>{appList.club}</Club>
        <Content>
          <Major>{appList.major}</Major>
          <EndDate>지원 마감일 : {appList.endDate}</EndDate>
        </Content>
        <CancelBtn>취소하기</CancelBtn>
      </Top>
      <Bottom>
        <DocumentInterview>서류면접</DocumentInterview>
        <Result>{appList.documentResult}</Result>
        <RealInterviewAll>
          <TextField>
            <Interview>심층면접</Interview>
            <Space>-</Space>
            <InterviewDate>면접 날짜</InterviewDate>
          </TextField>
          <RealDate>
            <Date></Date>
            <Time></Time>
          </RealDate>
        </RealInterviewAll>
      </Bottom>
    </JiwonNaeYeokAll>
  );
};

const Time = styled.h3``;

const Date = styled.h3``;

const Space = styled.div``;

const RealDate = styled.h3``;

const InterviewDate = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;

const TextField = styled.div`
  width: 120%;
  display: flex;
  align-items: center;
  gap: 12%;
`;

const Interview = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;

const RealInterviewAll = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 0 30px 0 30px;
  border-left: 1px solid #b2b2b2;
`;

const Result = styled.h3`
  font-size: 17px;
  font-weight: 500;
  margin-left: 14px;
`;

const DocumentInterview = styled.h3`
  font-size: 20px;
`;

const CancelBtn = styled.button`
  width: 74px;
  height: 36px;
  margin-left: auto;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #b2b2b2;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
    background-color: #ebebeb;
    color: rgb(75, 75, 75);
  }
`;

const EndDate = styled.div`
  font-size: 14px;
`;

const Major = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;

const Club = styled.h3`
  font-size: 20px;
`;

const Top = styled.div`
  width: 100%;
  height: 75px;
  border: 1px solid #b2b2b2;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  padding: 0 30px 0 30px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 55px;
  border: 1px solid #b2b2b2;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  padding: 0 30px 0 30px;
  display: flex;
  align-items: center;
`;

const JiwonNaeYeokAll = styled.div`
  width: 70%;
  min-width: 450px;
  height: 130px;
  margin: 3% 17% 0 0;
  display: flex;
  flex-direction: column;
`;
