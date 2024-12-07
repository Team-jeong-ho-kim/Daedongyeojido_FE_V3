import styled from "styled-components";

import Register from "../../assets/interview/Register.svg";
import FirstSubject from "../../assets/interview/FirstSubject.svg";
import Document from "../../assets/interview/Document.svg";
import SecondSubject from "../../assets/interview/SecondSubject.svg";
import DeepInterview from "../../assets/interview/DeepInterview.svg";
import Last from "../../assets/interview/Last.svg";
import ClubPin from "../../assets/interview/ClubPin.svg";
import Line from "../../assets/interview/Line.svg";

export const InterviewImg = () => {
  return (
    <InterviewImgAll>
      <img className="line" src={Line} />
      <img className="icon" src={Register} alt="지원서 접수" />
      <img className="icon" src={FirstSubject} alt="1차 과제" />
      <img className="icon" src={Document} alt="서류합격" />
      <img className="icon" src={SecondSubject} alt="2차 과제" />
      <img className="icon" src={DeepInterview} alt="심층 면접" />
      <img className="icon" src={Last} alt="최종 합격" />
      <img className="icon" src={ClubPin} alt="동아리 확정" />
    </InterviewImgAll>
  );
};

const InterviewImgAll = styled.div`
  margin-top: 5%;
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  gap: 3%;

  .line {
    position: absolute;
    width: 62%;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
  }
  .icon {
    z-index: 100;
  }
`;
