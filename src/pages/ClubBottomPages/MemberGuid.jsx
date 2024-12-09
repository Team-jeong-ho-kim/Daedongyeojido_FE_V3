import { useState } from "react";
import styled from "styled-components";

import { Major } from "../../components/Club/Major";
import { InterviewImg } from "../../components/Club/InterviewImg";
import { HowMethod } from "../../components/Club/HowMethod";
import { InJaeSang } from "../../components/Club/InJaeSang";
import { Subject } from "../../components/Club/Subject";
import { OtherInfo } from "../../components/Club/OtherInfo";
import { Question } from "../../components/Club/Question";

export const MemberGuid = () => {
  const [introClub, setIntroClub] = useState(
    "동아리 대동여지도는 동아리원 모집과 지원에서 일어나는 번거로운일들을 줄이고 쉽고 빠르게 동아리원 모집, 지원을 할 수 있는 서비스대동여지도를 만드는 동아리입니다"
  );
  const [Majors, setMajors] = useState([
    {
      id: 1,
      text: "백엔드",
    },
    {
      id: 2,
      text: "프론트엔드",
    },
    {
      id: 3,
      text: "안드로이드",
    },
    {
      id: 4,
      text: "디자인",
    },
  ]);
  const [clubName, setClubName] = useState("대동여지도");

  return (
    <MemberGuidAll>
      {/* 동아리소개글 */}
      <ClubIntroTextAll>
        <TextField>
          <Text>{introClub}</Text>
        </TextField>
      </ClubIntroTextAll>

      {/* 모집 분야 */}
      <JoinField>
        <JoinTitle>
          <Title className="join">모집 분야</Title>
        </JoinTitle>
        <MajorField>
          <Major Majors={Majors} />
        </MajorField>
      </JoinField>

      {/* 면접 절차 */}
      <InterviewAll>
        <InterviewTitle>
          <Title className="interview">면접 절차</Title>
        </InterviewTitle>
        <Procedure>
          <InterviewImg />
        </Procedure>
      </InterviewAll>

      {/* 모집기간 및 지원방법 */}
      <MethodField>
        <HowMethod />
      </MethodField>

      {/* 동아리's 인재상 */}
      <InjaeSangField>
        <InJaeTitle>
          <Title>{clubName}'s 인재상</Title>
        </InJaeTitle>
        <InJaeSang />
      </InjaeSangField>

      {/* 과제 */}
      <SubjectsAll>
        <SubjectTitle>
          <Title>과제</Title>
        </SubjectTitle>
        <Subject />
      </SubjectsAll>

      {/* 기타 안내 */}
      <OtherInfoAll>
        <InfoTitle>
          <Title>기타 안내</Title>
        </InfoTitle>
        <OtherInfo />
      </OtherInfoAll>

      {/* 문의 사항 */}
      <QuestionsAll>
        <QuestionTitle>
          <Title>문의사항</Title>
        </QuestionTitle>
        <Question />
      </QuestionsAll>
    </MemberGuidAll>
  );
};

const QuestionTitle = styled.div``;

const QuestionsAll = styled.div`
  margin-top: 10%;
`;

const InfoTitle = styled.div``;

const OtherInfoAll = styled.div`
  margin-top: 10%;
`;

const SubjectTitle = styled.div``;

const SubjectsAll = styled.div`
  margin-top: 10%;
`;

const InJaeTitle = styled.div``;

const InjaeSangField = styled.div`
  margin-top: 12%;
`;

const MemberGuidAll = styled.div`
  width: 100%;
`;

const ClubIntroTextAll = styled.div`
  width: 100%;
  height: 380px;
  background-color: #fbf9fa;
  display: flex;
  justify-content: center;
`;

const TextField = styled.div`
  width: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const JoinField = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 10%;
`;

const JoinTitle = styled.div``;

const Title = styled.h1`
  margin-left: 7%;
`;

const MajorField = styled.div``;

const InterviewAll = styled.div`
  margin-top: 10%;
  width: 100%;
`;

const InterviewTitle = styled.div``;

const Procedure = styled.div`
  display: flex;
  justify-content: center;
`;

const MethodField = styled.div`
  margin-top: 10%;
`;
