import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SeeAll } from "./pages/SeeAllPage";
import { SeeAll } from "./pages/SeeAll";
import { ClubMain } from "./pages/ClubMain";
import styled from "styled-components";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/seeall" element={<SeeAll />} />
          <Route path="/" element={<ClubMain />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`;
