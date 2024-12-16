import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Add from "../../assets/add.svg";

export const NullEditMemberGuide = () => {
  const navigate = useNavigate();

  const goEditJobPosting = () => {
    navigate("/jopPosting");
  };

  return (
    <>
      <WriteBtn onClick={goEditJobPosting}>
        <img src={Add} alt="+" style={{ width: "17px" }} />
        작성하기
      </WriteBtn>
      <Container>
        <IntroProjectAll>
          <NullTitle>아직 등록된 동아리원 모집 요강이 없습니다</NullTitle>
          <SubNullIntro>
            동아리원 모집 요강을 등록해야 학생들이 동아리 지원을 시작할 수
            있습니다
          </SubNullIntro>
        </IntroProjectAll>
      </Container>
      <Blank />
    </>
  );
};

const WriteBtn = styled.button`
  width: 120px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 500;
  padding: 0 1%;
  border-radius: 2px;
  border: 1px solid #b2b2b2;
  background-color: #ffffff;
  margin-left: auto;
  margin-top: 65px;
  margin-right: 300px;

  &:hover {
    background-color: #ebebeb;
  }
`;

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
