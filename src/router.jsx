import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SeeAll } from "./pages/SeeAllPage";
import styled from "styled-components";

export const Router = () => {
  return (
    <Container>
    <BrowserRouter>
      <Routes>
      <Route path="/seeall" element={<SeeAll />} />
      </Routes>
    </BrowserRouter>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`