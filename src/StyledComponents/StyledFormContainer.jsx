import styled from "styled-components";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--cor-fundo);
  font-size: 20px;
  padding-top: ${(props) => (props.signIn ? "65px" : "0")};

  img {
    width: 200px;
    height: 200px;
    margin: 20px auto 20px auto;
  }

  input {
    width: 350px;
    height: 60px;
    margin-top: 5px;
    border: 1px solid
      ${(props) => (props.check === "close" ? "#c40922" : "var(--cor-header)")};
    background-color: var(--cor-fundo);
    border-radius: 5px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    padding-left: 8px;
    ::placeholder {
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      color: var(--cor-texto);
    }
  }

  select {
    width: 350px;
    height: 60px;
    margin-top: 5px;
    border: 1px solid
      ${(props) => (props.check === "close" ? "#c40922" : "var(--cor-header)")};
    background-color: var(--cor-fundo);
    border-radius: 5px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    padding-left: 8px;
    ::placeholder {
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      color: var(--cor-texto);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--cor-fundo);
    opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  }
`;

export default StyledFormContainer;
