import styled from "styled-components";
import Logo from "../assets/Logo대동.svg";
import eye from "../assets/eye.svg";
import closeEye from "../assets/closeeye.svg";
import { Pagefooter } from "../components/Pagefooter";
import { GlobalStyle } from "../GlobalStyle";
import { useState } from "react";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const showPasswordFunc = () => {
    setShowPw(!showPw);
  };

  return (
    <>
      <GlobalStyle />
      <LoginAll>
        <img src={Logo} alt="🐯대동여지도" />
        <LoginText>로그인</LoginText>
        <Inputs>
          <Input
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디를 입력하세요"
          />
          <PasswordWrapper>
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="pw"
              type={showPw ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
            />
            <EyeIcon
              onClick={showPasswordFunc}
              src={showPw ? closeEye : eye}
              alt={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
            />
          </PasswordWrapper>
          <LoginBtn>로그인</LoginBtn>
        </Inputs>
      </LoginAll>
      <Pagefooter />
    </>
  );
};

const LoginBtn = styled.button`
  margin-top: 12%;
  height: 65px;
  font-size: 15px;
  color: #ffffff;
  background-color: #d32f2f;
  border: none;
  border-radius: 4px;
`;

const Input = styled.input`
  height: 44px;
  padding-left: 14px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: orange;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const EyeIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 10px;
  margin: 4%;

  .pw {
    width: 100%;
  }
`;

const LoginText = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-top: 5%;
`;

const LoginAll = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;
