import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Pagefooter } from "../components/PageFooter";

import GoBackimg from "../assets/goBack.svg";

export const EditIntroProject = () => {
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
            <IntroProject>프로젝트 소개 수정하기</IntroProject>
            <Intro>프로젝트 소개를 추가하여 다른 학생들에게 소개해보세요</Intro>
          </Title>
          <Buttons>
            <AddBtn>수정하기</AddBtn>
            <CancelBtn>취소하기</CancelBtn>
          </Buttons>
        </Top>
        <Bottom>
          <Contents>
            <Font>프로젝트명</Font>
            <ProjectNameInput placeholder="프로젝트명을 입력해주세요"></ProjectNameInput>
          </Contents>
          <Contents>
            <Font>소개</Font>
            <ProjectIntro placeholder="프로젝트를 소개해주세요"></ProjectIntro>
          </Contents>
          <div>
            <Font>프로젝트 관련 링크</Font>
            <Links>
              <LinksInput placeholder="링크를 삽입해주세요" />
              <LinksInput placeholder="링크를 삽입해주세요" />
            </Links>
          </div>
        </Bottom>
      </AddIntroProjectAll>
      <Pagefooter />
    </>
  );
};

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LinksInput = styled.input`
  width: 45%;
  padding: 21px;
  font-size: 20px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  border-radius: 4px;
`;

const ProjectIntro = styled.textarea`
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

const ProjectNameInput = styled.input`
  width: 100%;
  padding: 21px;
  font-size: 20px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  border-radius: 4px;
`;

const Font = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Contents = styled.div`
  margin-bottom: 5%;
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
