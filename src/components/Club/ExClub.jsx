import styled from "styled-components";

export const ExClub = () => {
  return (
    <Container>
    <ClubAll>
      <ClubInfo>
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 저희 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 신생 동아리로써 응애응애...
      저희 동아리는 오래된 아잇 동아리로써 존나기네...
      저희 동아리 짱좋음 오래됨
      </ClubInfo>
    </ClubAll>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ClubAll = styled.div`
  width: 1200px;
  height: 180px;
  margin-top: 3%;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const ClubInfo = styled.p`
  margin: 0;
  font-size: 20px;
  color: #5E5E5E;
  white-space: pre-wrap;
  max-height: 100%; 
`;