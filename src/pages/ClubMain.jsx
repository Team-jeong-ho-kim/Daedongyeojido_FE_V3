import styled from "styled-components";

import { Header } from "../components/Header";
import { TeamProfiles } from "../components/Club/TeamProfiles";
import { Pagefooter } from "../components/PageFooter";

export const ClubMain = () => {
  return (
    <ClubMainAll>
      <Header />
      <TeamProfiles />
      <Pagefooter />
    </ClubMainAll>
  );
};

const ClubMainAll = styled.div``;
