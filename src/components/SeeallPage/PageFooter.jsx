import React from "react";
import styled from "styled-components";
import logoImg from '../../assets/logo.svg';

export const Pagefooter = () => {
  return(
    <>
      <FooterDiv>
        <Footer>
          <FooterText>
            <LogoImg src={logoImg} />
              <TitleLogo>
                DAEDAE
              </TitleLogo>
              <SubFooter>|</SubFooter>
              <SubFooter>
                대동여지도 
              </SubFooter>
              <SubFooter>|</SubFooter>
              <SubFooter>
              DaeDongYeoJiDo 
              </SubFooter>
              <br/> 
          </FooterText>
              <FooterSection>
              대덕소프트웨어마이스터고등학교를 위한 동아리 관리 서비스 대동여지도  |  PM: 이해나
              FRONTEND: 김찬, 최민수 |  BACKEND: 이해나, 박주원  |  DESIGN: 이해나<br/>
              주소 : 대전광역시 유성구 가정북로 76 
              </FooterSection>
              <FooterSection>
              @DAEDONGYEOJIDO
              </FooterSection>
        </Footer>
      </FooterDiv>
    </>
  )
}

const Footer = styled.footer`
  width: 80%;
  height: 80%;
`;

const FooterText = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
`;

const SubFooter = styled.span`
  margin: 0;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 200;
  color: #a9a9a9;
`

const TitleLogo = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
`

const FooterDiv = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  margin: 0;
  width: 20px;
`;

const FooterSection = styled.div`
  flex-direction: column;
  margin: 20px 0 20px 0;
  display: flex;
  align-items: flex-start; /* 위쪽 정렬 */
  flex-wrap: wrap; /* 줄바꿈 활성화 */
  width: 45%; /* 가로 공간 채우기 */
  font-weight: 200;
  color: #a9a9a9;
`

