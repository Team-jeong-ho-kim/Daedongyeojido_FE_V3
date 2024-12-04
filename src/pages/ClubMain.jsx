import styled from "styled-components";

import { Header } from "../components/SeeallPage/Header";
import { TeamProfiles } from "../components/Club/TeamProfiles";


export const ClubMain = () => {
  return (
    <ClubMainAll>
      <Header />
      <TeamProfiles />
    </ClubMainAll>
  );
};

const ClubMainAll = styled.div``;
