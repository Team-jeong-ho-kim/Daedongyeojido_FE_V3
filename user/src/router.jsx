import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { SeeAll } from "./pages/SeeAllPage";
import { ClubMain } from "./pages/ClubMain";
import { ApplicationForm } from "./pages/ApplicationForm";
import { SeeApplicationForm } from "./pages/SeeApplication";
import { MyPage } from "./pages/MyPage";
import { ApplicantList } from "./pages/SupplyApplicant";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/SeeApply" element={<SeeApplicationForm />} />
          <Route path="/Apply" element={<ApplicationForm />} />
          <Route path="/seeall" element={<SeeAll />} />
          <Route path="/club" element={<ClubMain />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/applicantlist" element={<ApplicantList />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`;
