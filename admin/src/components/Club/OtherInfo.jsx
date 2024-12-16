import { useState } from "react";
import styled from "styled-components";

export const OtherInfo = () => {
  const [otherInfo, setOtherInfo] = useState(
    "백준 알고리즘 20개 푼 후 코드 해석해오기"
  );

  return (
    <OtherInfoAll>
      <Content>{otherInfo}</Content>
    </OtherInfoAll>
  );
};

const OtherInfoAll = styled.div`
	font-size: 22px;
`;

const Content = styled.div`
  margin: 1% 0 0 7%;
`;
