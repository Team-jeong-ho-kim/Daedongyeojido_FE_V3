import { useState } from "react";
import styled from "styled-components";
import { Major } from "../../components/Club/Major";

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

  return (
    <MemberGuidAll>
      <ClubIntroTextAll>
        <TextField>
          <Text>{introClub}</Text>
        </TextField>
      </ClubIntroTextAll>
      <JoinField>
        <JoinTitle>
          <Title>모집 분야</Title>
        </JoinTitle>
        <MajorField>
          <Major Majors={Majors} />
        </MajorField>
      </JoinField>
    </MemberGuidAll>
  );
};

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
  width: 100%;
  height: 10%;
`;

const JoinTitle = styled.div``;

const Title = styled.h1`
  margin-left: 7%;
`;

const MajorField = styled.div``;
