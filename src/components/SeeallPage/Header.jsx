import React from "react";
import styled from "styled-components";

import logoImg from '../../assets/logo.svg'
import archiveLogo from '../../assets/archivelogo.svg'


export const Header = () => {
  return (
    <Container>
    <SubHeader>
    <SubHeaderDiv>
    <SubTitleDiv>
    <SubLogoImg src={logoImg} />
    <Title>대동여지도</Title>
    <Border />
    <ArchiveLogo src={archiveLogo}/>
    </SubTitleDiv>
    </SubHeaderDiv>
  </SubHeader>
  <PageHeader>
    <HeaderDiv>
    <TitleDiv>
    <LogoImg src={logoImg} />
    <Title>대동여지도</Title>
    </TitleDiv>
    <Nav>
      <NavLink href="#">동아리 소개</NavLink>
      <NavLink href="#">팀원 소개</NavLink>
      <NavLink href="#">전공 동아리</NavLink>
      <NavLink href="#">공고</NavLink>
    </Nav>
    </HeaderDiv>
  </PageHeader>
</Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-family: "Pretendard";
`;

const SubHeader = styled.header`
  margin-top: 10px;
  background-color: white;
  border-bottom: 2px solid #ddd;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`

const PageHeader = styled.header`
  background-color: white;
  border-bottom: 2px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const SubHeaderDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: start;
  margin-left: auto;
`

const SubTitleDiv = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px
`;

const TitleDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px
`;

const Border = styled.div`
  border-right: 1px solid #8a8a8a;
  width: 10px;
  height: 30px;
`

const LogoImg = styled.img`
  margin: 0;
  width: 30px;
`;

const SubLogoImg = styled.img`
  width: 20px;
`;

const ArchiveLogo = styled.img`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: red;
  }
`;