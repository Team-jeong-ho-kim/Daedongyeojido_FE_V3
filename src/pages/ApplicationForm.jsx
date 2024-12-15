import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

export const ApplicationForm = () => {
  return (
    <>
      <Header />
    <Container>
      <Back> &lt; 뒤로가기</Back>
      <Title>지원서 작성</Title>
            <SubmitButton>제출하기</SubmitButton>
      <SubTitle>
        동아리에서 당신에 대해 궁금한 것이 많습니다. <br />
        아래 문항들에 답변하여 자기가 어떤 사람인지 알려주세요.
      </SubTitle>

      <FormContainer> 
        <Section>
          <TitleContainer>
            <Name>김미영</Name>
            <StudentNumber>1303</StudentNumber>
          </TitleContainer>
        </Section>

        <Section>
          <RadioSection>
            <Label>모집 분야</Label>
            <RadioGroup>
              {[
                "Back-End",
                "Front-End",
                "Game Developer",
                "Embedded",
                "AI",
                "IOS",
                "AOS",
                "Fluter",
                "Devops",
                "Security",
                "Design"
              ].map((field) => (
                <Radio>
                <RadioLabel key={field}>
                  <RadioButton type="radio" name="field" value={field} />
                  {field}
                </RadioLabel>
                </Radio>
              ))}
            </RadioGroup>
          </RadioSection>
        </Section>

        <Section>
          <Label>자기소개</Label>
          <TextArea placeholder="자기소개를 작성해 주세요" />
        </Section>

        <Section>
          <Label>지원하게 된 계기가 무엇인가요?</Label>
          <TextArea placeholder="지원 계기를 작성해 주세요" />
        </Section>

        <Section>
          <Label>본인의 전공을 선택한 이유가 무엇인가요?</Label>
          <TextArea placeholder="전공을 선택한 계기를 작성해 주세요" />
        </Section>

        <Section>
          <Label>동아리에게 바라는 점</Label>
          <TextArea placeholder="동아리에게 바라는 점을 작성해 주세요" />
        </Section>

        <Section>
          <Label>과제</Label>
          <TextArea placeholder="과제 과제 링크 첨부, 과제 내용 작성 등 동아리에서 요구한 방법에 맞춰 작성해 주세요 작성해 주세요" />
        </Section>

      </FormContainer>
    </Container>
</>
  );
};

const Radio = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Container = styled.div`
  font-family: "Pretendard";
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  user-select: none; 
  -webkit-user-select: none;
`;

const FormContainer = styled.div`
  padding: 35px;
  border: 1px solid #B2B2B2;
`;

const Back = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  margin-bottom: 20px;
`

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  text-align: left;
  font-weight: 700;
  font-family: "Pretendard";
`;

const SubTitle = styled.p`
  font-size: 12px;
  margin-bottom: 40px;
  font-family: "Pretendard";
  justify-content: flex-end;
`;

const Name = styled.h1``;

const StudentNumber = styled.p`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 10px;
  font-size: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  background-color: #F2F2F2;
  font-family: "Pretendard";
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 200px;

  ::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
`;

const RadioSection = styled.div`
  height: auto;
`;

const RadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const RadioLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: center;
`;

const RadioButton = styled.input`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  &:checked {
    accent-color: black;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 55px 10px 55px;
  font-size: 13px;
  color: #fff;
  background-color: #52565D;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  float: right; 

  &:hover {
    background-color: #0056b3;
  }
`;
