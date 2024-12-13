import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { SeeAll } from "./pages/SeeAllPage";
import { ClubMain } from "./pages/ClubMain";
import { MyPage } from "./pages/MyPage";
import { AddIntroProject } from "./pages/AddIntroProject";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/seeall" element={<SeeAll />} />
          <Route path="/club" element={<ClubMain />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/add_introProject" element={<AddIntroProject />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Pretendard";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
