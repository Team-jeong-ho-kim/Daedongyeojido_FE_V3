import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Pagefooter } from "../components/PageFooter";

import GoBackimg from "../assets/goBack.svg";

export const WriteClubIntro = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <GoBack onClick={goBack}>
        <img src={GoBackimg} alt="<" /> 뒤로가기
      </GoBack>
      <AddIntroProjectAll>
        <Top>
          <Title>
            <IntroProject>동아리 소개 작성하기</IntroProject>
            <Intro>동아리 소개를 작성하여 학생들에게 소개해보세요</Intro>
          </Title>
          <Buttons>
            <AddBtn>작성하기</AddBtn>
            <CancelBtn>취소하기</CancelBtn>
          </Buttons>
        </Top>
        <Bottom>
          <Font>동아리 소개</Font>
          <Recruitment placeholder="동아리 소개를 작성해주세요" />
        </Bottom>
      </AddIntroProjectAll>
      <Pagefooter />
    </>
  );
};

const Recruitment = styled.textarea`
  width: 100%;
  height: 270px;
  resize: none;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  padding: 20px;
  font-size: 18px;
  border-radius: 4px;
`;

const Font = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4%;
  border: 1px solid #b2b2b2;
  padding: 40px;
  gap: 15%;
  display: flex;
  flex-direction: column;
`;

const CancelBtn = styled.button`
  width: 124px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 500;
  padding: 0 1%;
  border-radius: 2px;
  border: 1px solid #000000;
  background-color: #ffffff;

  &:hover {
    background-color: #ebebeb;
  }
`;

const AddBtn = styled.button`
  width: 124px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 500;
  padding: 0 1%;
  border-radius: 2px;
  border: 1px solid #000000;
  background-color: #ffffff;

  &:hover {
    background-color: #ebebeb;
  }
`;

const Buttons = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-between;
  margin-right: 4%;
  margin-top: 10px;
  margin-left: auto;
`;

const Intro = styled.h3`
  font-size: 17px;
  font-weight: 500;
  margin-top: 5px;
`;

const IntroProject = styled.h1`
  font-size: 35px;
  font-weight: 600;
`;

const Title = styled.div``;

const Top = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
`;

const GoBack = styled.div`
  gap: 10px;
  margin: 20px 0 0 10%;
  color: #4e5968;

  &:hover {
    cursor: pointer;
    color: #495360;
  }
`;

const AddIntroProjectAll = styled.div`
  width: 80%;
  margin: 5% 5% 15% 10%;
`;
