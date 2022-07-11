import styled from "styled-components"
import React from "react";

import RolarTopo from "../shared/RolarTopo";

import axios from "axios";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import StyledButton from "../../StyledComponents/StyledButton";
import StyledFormContainer from "../../StyledComponents/StyledFormContainer";

export default function TelaLoginCadastro() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    email,
    setEmail,
    password,
    setPassword,
    setToken,
    setUserId,
    name,
    setName,
  } = useContext(Context);
  const [passwordCheck, setPasswordCheck] = useState("");

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [disable, setDisable] = useState(false);

  const [confirmSignUpForm, setConfirmSignUpForm] = useState("");

  const [confirmSignInForm, setConfirmSignInForm] = useState("");

  const [signInPasswordCorrectModel, setSignInPasswordCorrectModel] =
    useState("");

  const [passwordCorrectModel, setPasswordCorrectModel] = useState("");

  const [signUpPasswordFocus, setSignUpPasswordFocus] = useState(true);

  const [passwordFocus, setPasswordFocus] = useState(true);

  function signIn(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    const promise = axios.post("http://localhost:5000/login", body);
    setDisable(true);
    promise.then((res) => {
      const userInfo = res.data;
      setName(userInfo.name);
      setUserId(userInfo.id);
      setToken(userInfo.token);
      setDisable(false);

      navigate("/", { replace: true });
    });
    promise.catch((err) => {
      setConfirmSignInForm("close");
      setDisable(false);
    });
  }

  useEffect(() => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (signUpPassword.length > 0) {
      if (regex.test(signUpPassword)) {
        setPasswordCorrectModel("correct");
      } else {
        setPasswordCorrectModel("incorrect");
      }
    } else {
      setPasswordCorrectModel("");
    }
  }, [signUpPassword, signUpPasswordFocus]);

  useEffect(() => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (password.length > 0) {
      if (regex.test(password)) {
        setSignInPasswordCorrectModel("correct");
      } else {
        setSignInPasswordCorrectModel("incorrect");
      }
    } else {
      setSignInPasswordCorrectModel("");
    }
  }, [password, passwordFocus]);

  useEffect(() => {
    if (signUpPassword && confirmPassword) {
      confirmPassword === signUpPassword
        ? setPasswordCheck("checkmark")
        : setPasswordCheck("close");
    }
  }, [confirmPassword, signUpPassword]);

  function register(e) {
    e.preventDefault();
    const body = {
      name,
      email: signUpEmail,
      password: signUpPassword,
      confirmPassword,
    };
    const promise = axios.post(
      "http://localhost:5000/cadastro",
      body
    );
    setDisable(true);
    promise.then(() => {
      setDisable(false);
      navigate("/", { replace: true });
    });
    promise.catch((err) => {
      setConfirmSignUpForm("close");
      setDisable(false);
    });
  }

  return (
    <Universal>
      <RolarTopo />
      <PageContentDiv>
        <SignInDiv>
          <StyledFormContainer check={confirmSignInForm}>
            <h2>Logar</h2>
            <form onSubmit={signIn}>
              <input
                disabled={disable}
                id="email"
                type="text"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setConfirmSignInForm("")}
                value={email}
                required
              />
              <CheckmarkDiv>Exemplo@exemplo.com.br</CheckmarkDiv>
              <input
                disabled={disable}
                id="password"
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => {
                  setConfirmSignInForm("");
                  setPasswordFocus(!passwordFocus);
                }}
                onBlur={() => setSignInPasswordCorrectModel("")}
                value={password}
                required
              />
              <CheckmarkDiv model={signInPasswordCorrectModel}>
                Min.: 8 caracteres, 1 letra maiúscula, 1 minúscula e 1 número
              </CheckmarkDiv>
              <StyledButton
                disabled={disable}
                height={46}
                width={350}
                fontSize={20}
              >
                Entrar
              </StyledButton>
              {confirmSignInForm === "close" ? (
                <CheckmarkDiv mark={confirmSignInForm}>
                  Revise os dados de login!
                </CheckmarkDiv>
              ) : null}
            </form>
          </StyledFormContainer>
          <RoundOrDiv>Ou</RoundOrDiv>
        </SignInDiv>
        <SignUpDiv>
          <StyledFormContainer check={confirmSignUpForm}>
            <h2>Cadastre-se</h2>
            <form onSubmit={register}>
              <input
                disabled={disable}
                id="name"
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setConfirmSignUpForm("")}
                value={name}
                required
              />
              <CheckmarkDiv>Digite seu nome</CheckmarkDiv>
              <input
                disabled={disable}
                id="registerEmail"
                type="text"
                placeholder="E-mail"
                onChange={(e) => setSignUpEmail(e.target.value)}
                onFocus={() => setConfirmSignUpForm("")}
                value={signUpEmail}
                required
              />
              <CheckmarkDiv>Exemplo@exemplo.com.br</CheckmarkDiv>
              <input
                disabled={disable}
                id="registerPassword"
                type="password"
                placeholder="Senha"
                onChange={(e) => setSignUpPassword(e.target.value)}
                onFocus={(e) => {
                  setConfirmSignUpForm("");
                  setSignUpPasswordFocus(!signUpPasswordFocus);
                }}
                onBlur={() => setPasswordCorrectModel("")}
                value={signUpPassword}
                required
              />
              <CheckmarkDiv model={passwordCorrectModel}>
                Min.: 8 caracteres, 1 letra maiúscula, 1 minúscula e 1 número
              </CheckmarkDiv>
              <input
                disabled={disable}
                id="confirmPassword"
                type="password"
                placeholder="Confirme a senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => {
                  setConfirmSignUpForm("");
                  confirmPassword === signUpPassword
                    ? setPasswordCheck("checkmark")
                    : setPasswordCheck("close");
                }}
                onBlur={() => {
                  setPasswordCheck("");
                }}
                value={confirmPassword}
                required
              />
              <CheckmarkDiv mark={passwordCheck}>
                {passwordCheck === "checkmark" ? (
                  <ion-icon name="checkmark-sharp"></ion-icon>
                ) : null}
                {passwordCheck === "close" ? (
                  <ion-icon name="close-sharp"></ion-icon>
                ) : null}
              </CheckmarkDiv>
              <StyledButton
                disabled={disable}
                height={46}
                width={350}
                fontSize={20}
              >
                Cadastrar
              </StyledButton>
              {confirmSignUpForm === "close" ? (
                <CheckmarkDiv mark={confirmSignUpForm}>
                  Revise os dados de cadastro!
                </CheckmarkDiv>
              ) : null}
            </form>
          </StyledFormContainer>
        </SignUpDiv>
      </PageContentDiv>
    </Universal>
  );
}

const Universal = styled.div`
  height: 500px;
  margin-top: 120px;
  box-sizing: border-box;
`;

const SignInDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  height: 100%;
  padding-top: 35px;
  & div:first-child {
    align-self: flex-start;
  }
  h2 {
    font-size: 40px;
    align-self: flex-start;
    color: var(--cor-header);
    margin-bottom: 10px;
    font-weight: 700;
  }
`;

const PageContentDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 140px;
  background-color: var(--cor-fundo);
  border-radius: 10px;
`;

const RoundOrDiv = styled.div`
  background-color: var(--cor-detalhes);
  height: 56px;
  width: 56px;
  border-radius: 28px;
  color: var(--cor-branca);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
`;

const SignUpDiv = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  padding-top: 35px;
  align-items: flex-start;
  h2 {
    font-size: 40px;
    align-self: flex-start;
    color: var(--cor-header);
    margin-bottom: 10px;
    font-weight: 700;
  }
`;

const CheckmarkDiv = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  margin-left: 5px;
  margin-top: 3px;
  color: ${(props) =>
    props.mark === "checkmark" || props.model === "correct"
      ? "#2d873c"
      : props.mark === "close" || props.model === "incorrect"
      ? "#c40922"
      : "#666868"};
`;
