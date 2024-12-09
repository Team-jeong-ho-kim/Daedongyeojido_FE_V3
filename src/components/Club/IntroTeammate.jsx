import styled from "styled-components";
import { Team } from "./Team";

export const Teammate = () => {
  return (
    <Container>
    <TeamAll>
      <Team></Team>
      <Team></Team>
      <Team></Team>
      <Team></Team>
      <Team></Team>
      <Team></Team>
    </TeamAll>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TeamAll = styled.div`
  width: 1300px;
  height: 100%;
  margin-top: 3%;
  border-radius: 7px;
  display: flex;
  padding: 10px 10px 10px 10px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left:80px;
`;
