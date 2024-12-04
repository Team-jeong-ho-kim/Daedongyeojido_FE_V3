import styled from "styled-components";

import { Header } from "../components/Header";
import { TeamProfiles } from "../components/TeamProfiles";

export const ClubMain = () => {
  return (
    <ClubMainAll>
      <Header />
      <TeamProfiles />
    </ClubMainAll>
  );
};

const ClubMainAll = styled.div``;
