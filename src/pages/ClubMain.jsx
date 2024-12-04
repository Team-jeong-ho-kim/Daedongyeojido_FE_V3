import styled from "styled-components";

import { Header } from "../components/SeeallPage/Header";
import { TeamProfiles } from "../components/Club/TeamProfiles";
import { IntroProject } from "./ClubBottomPages/IntroProject";

export const ClubMain = () => {
  return (
    <ClubMainAll>
      <Header />
      <TeamProfiles />
      <IntroProject />
    </ClubMainAll>
  );
};

const ClubMainAll = styled.div``;
