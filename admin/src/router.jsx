import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { SeeAll } from "./pages/SeeAllPage";
import { ClubMain } from "./pages/ClubMain";
import { MyPage } from "./pages/MyPage";
import { AddIntroProject } from "./pages/AddIntroProject";
import { EditIntroProject } from "./pages/EditIntroProject";
import { JobPosting } from "./pages/JobPosting";
import { EditJobPosting } from "./pages/EditJopPosting";
import { WriteClubIntro } from "./pages/WriteClubIntro";
import { EditWriteClubIntro } from "./pages/EditWriteClubIntro.jsx";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<SeeAll />} />
          <Route path="/admin/club" element={<ClubMain />} />
          <Route path="/admin/mypage" element={<MyPage />} />
          <Route path="/admin/add_introProject" element={<AddIntroProject />} />
          <Route path="/admin/edit_introProject" element={<EditIntroProject />} />
          <Route path="/admin/jopPosting" element={<JobPosting />} />
          <Route path="/admin/edit_JobPosting" element={<EditJobPosting />} />
          <Route path="/admin/add_clubintro" element={<WriteClubIntro />} />
          <Route path="/admin/edit_clubintro" element={<EditWriteClubIntro />} />
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
