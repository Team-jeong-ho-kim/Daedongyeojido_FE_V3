import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Pagefooter } from "../components/PageFooter";

import GoBackimg from "../assets/goBack.svg";

export const EditJobPosting = () => {
  const navigate = useNavigate();

  const majorFields = [
    "Back-End",
    "Game Developer",
    "IOS",
    "Front-End",
    "Embedded",
    "AOS",
    "Devops",
    "AI",
    "Flutter",
    "Security",
    "Design",
  ];

  const goBack = () => {
    navigate(-1);
  };

  const handleDateInput = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^0-9-]/g, "");
    if (/^\d{0,4}(-\d{0,2}){0,2}$/.test(formattedValue)) {
      e.target.value = formattedValue;
    }
  };

  return (
    <>
      <Header />
      <GoBack onClick={goBack}>
        <img src={GoBackimg} alt="<" /> 뒤로가기
      </GoBack>
      <AddIntroProjectAll>
        <Top>
          <Title>
            <IntroProject>모집 요강 수정하기</IntroProject>
            <Intro>모집 요강을 수정해보세요</Intro>
          </Title>
          <Buttons>
            <AddBtn>수정하기</AddBtn>
            <CancelBtn>취소하기</CancelBtn>
          </Buttons>
        </Top>
        <Bottom>
          <Contents>
            <Font>모집 분야</Font>
            <CheckAll>
              {majorFields.map((major) => (
                <CheckField>
                  <CheckBox />
                  <MajorText>{major}</MajorText>
                </CheckField>
              ))}
            </CheckAll>
          </Contents>
          <Contents>
            <Font>모집 기간</Font>
            <PeriodInputs>
              <Period onChange={handleDateInput} />
              <h2>~</h2>
              <Period onChange={handleDateInput} />
            </PeriodInputs>
          </Contents>
          <Contents>
            <Font>모집글</Font>
            <Recruitment placeholder="모집글을 입력해주세요" />
          </Contents>
          <Contents>
            <Font>지원방법</Font>
            <Recruitment placeholder="지원방법을 입력해주세요" />
          </Contents>
          <Contents>
            <Font>인재상</Font>
            <Recruitment placeholder="모집글을 입력해주세요" />
          </Contents>
          <Contents>
            <Font>과제</Font>
            <Recruitment placeholder="모집글을 입력해주세요" />
          </Contents>
          <Contents>
            <Font>기타안내</Font>
            <Recruitment placeholder="모집글을 입력해주세요" />
          </Contents>
          <Representative>
            <Human>
              <Font>담당자</Font>
              <Inputs>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Grade />
                  <h3 style={{ fontSize: "16px", fontWeight: "500" }}>학년</h3>
                </div>
                <SecAll>
                  <Class />
                  <h3 style={{ fontSize: "16px", fontWeight: "500" }}>반</h3>
                </SecAll>
              </Inputs>
              <Name placeholder="이름을 입력해주세요" /> 님
            </Human>
            <div className="rightPhone">
              <Font>담당자 연락처</Font>
              <PhoneAll>
                <Platform>
                  <Phone>연락처 플랫폼</Phone>
                  <PlatformInput placeholder="연락처 플랫폼을 입력해주세요" />
                  <PlatformInput placeholder="연락처 플랫폼을 입력해주세요" />
                  <PlatformInput placeholder="연락처 플랫폼을 입력해주세요" />
                </Platform>
                <Platform>
                  <Phone>연락처</Phone>
                  <PlatformInput placeholder="연락처를 입력해주세요" />
                  <PlatformInput placeholder="연락처를 입력해주세요" />
                  <PlatformInput placeholder="연락처를 입력해주세요" />
                </Platform>
              </PhoneAll>
            </div>
          </Representative>
        </Bottom>
      </AddIntroProjectAll>
      <Pagefooter />
    </>
  );
};

const CheckAll = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-left: 1%;
  width: 60%;
`;

const CheckField = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
`;

const MajorText = styled.h3`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 500;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
`;

const PeriodInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Period = styled.input.attrs({
  type: "text",
  placeholder: "YYYY-MM-DD",
})`
  width: 250px;
  height: 45px;
  padding: 12px;
  font-size: 18px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  border-radius: 4px;
  text-align: center;

  &::placeholder {
    font-size: 15px;
    color: #ccc;
  }
`;

const SecAll = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.input`
  margin-top: 20px;
  width: 70%;
  height: 50px;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  border-radius: 4px;

  &::placeholder {
    font-size: 15px;
  }
`;
const Class = styled.input.attrs({ maxLength: 1 })`
  width: 60px;
  height: 50px;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  border: none;
  background-color: #f5f5f5;
  margin-left: -15%;
  outline: none;
  border-radius: 4px;

  &::placeholder {
    font-size: 15px;
  }
`;
const Grade = styled.input.attrs({ maxLength: 1 })`
  width: 60px;
  height: 50px;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  border-radius: 4px;

  &::placeholder {
    font-size: 15px;
  }
`;

const Inputs = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
`;

const Human = styled.div``;

const PhoneAll = styled.div`
  display: flex;
`;

const Phone = styled.h3`
  font-size: 15px;
`;

const Representative = styled.div`
  width: 100%;
  display: flex;
`;

const Platform = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`;

const PlatformInput = styled.input`
  width: 100%;
  padding: 20px;
  font-size: 20px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  border-radius: 4px;

  &::placeholder {
    font-size: 15px;
  }
`;

const Recruitment = styled.textarea`
  width: 100%;
  height: 130px;
  resize: none;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  padding: 20px;
  font-size: 18px;
  border-radius: 4px;
`;

const Font = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Contents = styled.div`
  margin-bottom: 5%;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4%;
  border: 1px solid #b2b2b2;
  padding: 40px;
  gap: 15%;
  display: flex;
  flex-direction: column;
`;

const CancelBtn = styled.button`
  width: 124px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 500;
  padding: 0 1%;
  border-radius: 2px;
  border: 1px solid #000000;
  background-color: #ffffff;

  &:hover {
    background-color: #ebebeb;
  }
`;

const AddBtn = styled.button`
  width: 124px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 500;
  padding: 0 1%;
  border-radius: 2px;
  border: 1px solid #000000;
  background-color: #ffffff;

  &:hover {
    background-color: #ebebeb;
  }
`;

const Buttons = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-between;
  margin-right: 4%;
  margin-top: 10px;
  margin-left: auto;
`;

const Intro = styled.h3`
  font-size: 17px;
  font-weight: 500;
  margin-top: 5px;
`;

const IntroProject = styled.h1`
  font-size: 35px;
  font-weight: 600;
`;

const Title = styled.div``;

const Top = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
`;

const GoBack = styled.div`
  gap: 10px;
  margin: 20px 0 0 10%;
  color: #4e5968;

  &:hover {
    cursor: pointer;
    color: #495360;
  }
`;

const AddIntroProjectAll = styled.div`
  width: 80%;
  margin: 5% 5% 15% 10%;
`;
