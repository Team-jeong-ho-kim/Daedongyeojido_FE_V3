import styled from "styled-components";
import Round from "../../assets/Exround.svg";

export const Teammate = () => {
  return (
    <ClubAll>
      <ClubInfo>
        <TeamInfo_3>
          <CardTitle>
            <ExRound src={Round} />
            박주원
          <Major>Backend</Major>
          </CardTitle>
          <CardSub>
            디자인 할래요
          </CardSub>
        </TeamInfo_3>
      </ClubInfo>
    </ClubAll>
  );
};


const ClubAll = styled.div`
  width: 1200px;
  margin-top: 3%;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
`;

const ClubInfo = styled.p`
  margin: 0;
  font-size: 20px;
  color: #5E5E5E;
`
const TeamInfo_3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border: 1px solid black;
`;

const CardTitle = styled.p`
  color: black;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

const CardSub = styled.p`
  
`;

const Major = styled.p`
  
`;

const ExRound = styled.img`
  
`;