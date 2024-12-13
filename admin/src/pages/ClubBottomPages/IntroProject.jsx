import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { Project } from "../../components/Club/Project";

import Add from "../../assets/add.svg";

export const IntroProject = () => {
  const navigate = useNavigate();

  const goToAddProjectPage = () => {
    navigate("/add_introProject");
  };

  return (
    <IntroProjectAll>
      <TitleFiled>
        <IntroTitle>프로젝트 소개</IntroTitle>
        <AddBtn onClick={goToAddProjectPage}>
          <img src={Add} alt="+" style={{ width: "17px" }} />
          추가하기
        </AddBtn>
      </TitleFiled>
      <Project />
    </IntroProjectAll>
  );
};

const AddBtn = styled.button`
  width: 110px;
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

  &:hover {
    background-color: #ebebeb;
  }
`;

const IntroProjectAll = styled.div`
  width: 100%;
  padding: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleFiled = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
`;

const IntroTitle = styled.h1`
  margin: 0;
  font-size: 34px;
  font-weight: 400;
`;
