import styled from "styled-components";
import Round from "../../assets/Exround.svg";

export const Team = () => {
  return (
    <ClubInfo>
    <TeamInfo_3>
        <CardTitle>
          <ExRound src={Round} />
          박주원
        <Major>BackEnd</Major>
        </CardTitle>
        <CardSub>
          언제나 노력하는 개발자입니다.
        </CardSub>
      </TeamInfo_3>
    </ClubInfo>
  )
}

const ClubInfo = styled.div`
  padding: 20px 80px 0px 20px;
  border: 1px solid #B2B2B2;
  box-shadow: 0px 5px 5px -2px gray;
  height: 140px;
  border-radius: 10px;
`
const TeamInfo_3 = styled.div`
  
`;

const CardTitle = styled.p`
  color: black;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  font-size: 20px;
`;

const CardSub = styled.p`
  margin-top: 10px;
  font-size: 15px;
  width: 100%;
`;

const Major = styled.p`
  font-size: 14px;
  color: #6D6D6D;
`;

const ExRound = styled.img`
  
`;