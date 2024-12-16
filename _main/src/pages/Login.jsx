import styled from "styled-components";
import Logo from "../assets/Logo대동.svg";
import eye from "../assets/eye.svg";
import closeEye from "../assets/closeeye.svg";
import { Pagefooter } from "../components/Pagefooter";
import { GlobalStyle } from "../GlobalStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../apis/auth";

export const LoginPage = () => {
  const [showPw, setShowPw] = useState(false);
  const showPasswordFunc = () => {
    setShowPw(!showPw);
  };

  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputValue;
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // 서버쪽에서 받은 response 중 role은 역할(어드민, 유저)
  const handleLogin = async () => {
    try {
      const response = await Login({ id, password });
      if (response.success) {
        if (response.role === "admin") {
          navigate("/admin");
        } else if (response.role === "user") {
          navigate("/user");
        } else {
          alert("로그인에 실패하셨습니다", response.message);
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("이메일 또는 비밀번호가 일치하지 않습니다. 401");
        } else if (error.response.status === 404) {
          alert("유저를 찾을 수 없습니다. 404");
        } else {
          alert("로그인 요청 실패");
        }
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <LoginAll>
        <img src={Logo} alt="🐯대동여지도" />
        <LoginText>로그인</LoginText>
        <Inputs>
          <Input
            name="id"
            value={id}
            onChange={onChange}
            placeholder="아이디를 입력하세요"
          />
          <PasswordWrapper>
            <Input
              name="password"
              value={password}
              onChange={onChange}
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
          <LoginBtn onClick={handleLogin} style={{ cursor: "pointer" }}>
            로그인
          </LoginBtn>
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
