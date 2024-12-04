import { useState } from "react";
import styled from "styled-components";
import ClubLogo from "../Club/동아리사진.svg";
import { IntroProject } from "../../pages/user/ClubBottomPages/IntroProject";
import { MemberGuid } from "../../pages/user/ClubBottomPages/MemberGuid";

export const TeamProfiles = () => {
  const [clubName, setClubName] = useState("대동여지도");
  const [movePage, setMovePage] = useState("introClub");

  const clubBottomPage = () => {
    switch (movePage) {
      case "introProject":
        return <IntroProject />;
      case "memberGuid":
        return <MemberGuid />;
      default:
        return null;
    }
  };

  return (
    <>
      <TeamProfilesAll>
        <HeaderSection>
          <ClubName>
            <ClubTitle>
              <img src={ClubLogo} alt="🗺️" />
              <Name>{clubName}</Name>
            </ClubTitle>
            <ClubIntro>
              대동여지도와 실록 서비스를 개발 및 운영 중인 동아리
            </ClubIntro>
          </ClubName>
          <TagsAll>
            <Tag>동아리 소개</Tag>
            <Tag>팀원 소개</Tag>
            <Tag onClick={() => setMovePage("introProject")}>프로젝트 소개</Tag>
            <Tag onClick={() => setMovePage("memberGuid")}>
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
  margin-left: 16%;

  img {
  }
`;

const ClubTitle = styled.div`
  display: flex;
  gap: 10px;
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
  &:hover {
    color: #d32f2f;
    border-bottom: 2px solid #d32f2f;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const RenderBottomPage = styled.div``;
