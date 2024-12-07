import styled from "styled-components";

import Check from "../../assets/checkbox.svg";
import { useState } from "react";

export const HowMethod = () => {
  const [Date1, setDate1] = useState("2024-04-24");
  const [Date2, setDate2] = useState("2024-05-03");
  const [Method, setMethod] = useState(
    "대동여지도 공고접속 후, 지원서 작성 및 과제 제출"
  );

  return (
    <HowMethodAll>
      <MethodTitle>
        <Title>모집기간 및 지원방법</Title>
      </MethodTitle>
      <Contents>
        <Period className="period">
          <img src={Check} alt="✨" />
          <Text>
            모집기간 : {Date1} ~ {Date2}
          </Text>
        </Period>
        <Support className="support">
          <img src={Check} alt="🌱" />
          <Text>지원방법 : {Method}</Text>
        </Support>
      </Contents>
    </HowMethodAll>
  );
};

const HowMethodAll = styled.div``;

const MethodTitle = styled.div``;

const Title = styled.h1`
  margin-left: 7%;
`;

const Contents = styled.div`
  .period,
  .support {
    display: flex;
    align-items: center;
    margin-top: 1%;
  }
  margin-left: 7%;
`;

const Text = styled.p`
  margin-left: 5px;
`;

const Period = styled.div``;
const Support = styled.div``;
