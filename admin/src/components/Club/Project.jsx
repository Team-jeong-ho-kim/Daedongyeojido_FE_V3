import styled from "styled-components";
import Daedong from "../../assets/프로젝트소개대동.svg";
import Edit from "../../assets/edit.svg";

import { useNavigate } from "react-router-dom";

export const Project = () => {
  const navigate = useNavigate();

  const goEditPage = () => {
    navigate("/edit_introProject");
  };

  return (
    <ProjectAll>
      <ImgField>
        <img src={Daedong} alt="" />
      </ImgField>
      <Content>
        <Title>대동여지도</Title>
        <OneIntro>한줄 소개</OneIntro>
        <LinkAll>
          <IconLink1 href="#" target="_blank">
            (아이콘)관련 링크
          </IconLink1>
        </LinkAll>
      </Content>
      <EditBtn onClick={goEditPage}>
        <img src={Edit} alt="✏️" />
        수정하기
      </EditBtn>
    </ProjectAll>
  );
};

const EditBtn = styled.button`
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
  margin-right: 4%;

  img {
    margin-left: -6px;
  }

  &:hover {
    background-color: #ebebeb;
  }
`;

const ProjectAll = styled.div`
  width: 1000px;
  height: 180px;
  border: 1px solid #b2b2b2;
  margin-top: 2%;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ImgField = styled.div`
  width: 180px;
  border: none;
  border-right: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div``;

const Title = styled.h3`
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  margin: -30px 0 0 15px;
`;

const OneIntro = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0 0 15px;
`;

const LinkAll = styled.div`
  font-size: 14px;
  width: 100%;
  margin: 40px 0 0 15px;
`;

const IconLink1 = styled.a`
  text-decoration: none;
  color: #000000;
`;
