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
          <Route path="/user" element={<SeeAll />} />
          <Route path="/user/SeeApply" element={<SeeApplicationForm />} />
          <Route path="/user/Apply" element={<ApplicationForm />} />
          <Route path="/user/club" element={<ClubMain />} />
          <Route path="/user/mypage" element={<MyPage />} />
          <Route path="/user/applicantlist" element={<ApplicantList />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`;
