import { useState } from "react";
import styled from "styled-components";
import Daedong from "../../assets/동아리사진.svg";
import { IntroProject } from "../../pages/ClubBottomPages/IntroProject";
import { MemberGuid } from "../../pages/ClubBottomPages/MemberGuid";
import { IntroTeam } from "../../pages/ClubBottomPages/IntroTeam";
import { IntroClub } from "../../pages/ClubBottomPages/IntroClub";
import { NullClub } from "../../pages/ClubBottomPages/NullClub";
export const TeamProfiles = () => {
  const [clubName, setClubName] = useState("대동여지도");
  const [movePage, setMovePage] = useState("introClub");
  const [clickedTag, setClickedTag] = useState("introClub");

  const clubBottomPage = () => {
    switch (movePage) {
      case "introClub":
        return <IntroClub />;
      case "introTeam":
        return <IntroTeam />;
      case "introProject":
        return <IntroProject />;
      case "memberGuid":
        return <MemberGuid />
      case "introClub":
        return <IntroClub />;
      default:
        return <NullClub />;
    }
  };

  return (
    <>
      <TeamProfilesAll>
        <HeaderSection>
          <ClubName>
            <ClubTitle>
              <ClubImg src={Daedong} />
              <Name>{clubName}</Name>
            </ClubTitle>
            <ClubIntro>
              대동여지도와 실록 서비스를 개발 및 운영 중인 동아리
            </ClubIntro>
          </ClubName>
          <TagsAll>
            <Tag
              onClick={() => {
                setMovePage("introClub");
                setClickedTag("introClub");
              }}
              isClicked={clickedTag === "introClub"}
            >
              동아리 소개
            </Tag>
            <Tag
              onClick={() => {
                setMovePage("introTeam");
                setClickedTag("introTeam");
              }}
              isClicked={clickedTag === "introTeam"}
            >
              팀원 소개
            </Tag>
            <Tag
              onClick={() => {
                setMovePage("introProject");
                setClickedTag("introProject");
              }}
              isClicked={clickedTag === "introProject"}
            >
              프로젝트 소개
            </Tag>
            <Tag
              onClick={() => {
                setMovePage("memberGuid");
                setClickedTag("memberGuid");
              }}
              isClicked={clickedTag === "memberGuid"}
            >
              동아리원 모집 요강
            </Tag>
          </TagsAll>
        </HeaderSection>
      </TeamProfilesAll>
      <RenderBottomPage>{clubBottomPage()}</RenderBottomPage>
    </>
  );
};

const TeamProfilesAll = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ClubName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18%;
`;

const ClubTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const ClubImg = styled.img`
  margin: 0;
`;

const Name = styled.h1`
  font-size: 40px;
  font-weight: 400;

  @media (max-width: 750px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ClubIntro = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #464646;
  margin-top: 10px;
  margin-left: 3.7%;
  margin-bottom: 40px;
`;

const TagsAll = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 17%;
  gap: 2.5%;
  border-bottom: 2px solid #b2b2b2;

  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const Tag = styled.div`
  font-size: 15px;
  padding: 10px;
  font-weight: 400;
  height: 100%;
  cursor: pointer;
  user-select: none; 
  -webkit-user-select: none;  
  color: ${({ isClicked }) => (isClicked ? "#d32f2f" : "inherit")};
  border-bottom: ${({ isClicked }) => (isClicked ? "2px solid #d32f2f" : "none")};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background-color: #d32f2f;
    transition: all 0.5s ease-in-out;
  }

  &:hover::before {
    left: 0;
  }
  
  &:hover,
  &:active {
    color: #d32f2f;
    border-bottom: 1px solid transparent;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const RenderBottomPage = styled.div``;