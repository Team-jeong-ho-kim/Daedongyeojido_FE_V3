import styled from "styled-components";

export const Teammate = () => {
  return (
    <ClubAll>
      <ClubInfo>
      아니근데 이거진짜 왜이럼?
      </ClubInfo>
    </ClubAll>
  );
};


const ClubAll = styled.div`
  width: 1200px;
  height: 180px;
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