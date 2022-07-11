import { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import styled from "styled-components";
import React from "react";
import axios from "axios";
import qrCode from "../../assets/images/qrCode.png";
import { useNavigate } from "react-router-dom";

import RolarTopo from "../shared/RolarTopo";
import StyledFormContainer from "../../StyledComponents/StyledFormContainer";
import StyledButton from "../../StyledComponents/StyledButton";

export default function TelaCheckout() {
  const { token, userId, name } = useContext(Context);
  const [cartProducts, setCartProducts] = useState([]);
  const [payMethod, setPayMethod] = useState("");
  const [street, setStreet] = useState("");
  const [block, setBlock] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [city, setCity] = useState("");
  const [payment, setPayment] = useState({});
  const [allFilled, setAllFilled] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      Authorization: `Bearer ${token}`,
      id: userId,
    };

    const promise = axios.get(
      "https://organistore.herokuapp.com/carrinho",
      config
    );
    promise.then((res) => {
      const products = res.data;
      setCartProducts(products);
    });
    promise.catch(() => {
      alert("Sessão expirada");
      navigate("/usuario", { replace: true });
    });
  }, []);

  function paymentInputs() {
    if (payMethod === "Cartao") {
      return (
        <>
          <input
            id="numero-cartao"
            type="number"
            placeholder="Número do cartão"
            onChange={(e) => setCardNumber(e.target.value)}
            onFocus={() => setAllFilled("")}
            value={cardNumber}
            required
          />
          <input
            id="nome"
            type="text"
            placeholder="Nome no cartão"
            onChange={(e) => setNameOnCard(e.target.value)}
            onFocus={() => setAllFilled("")}
            value={nameOnCard}
            required
          />
          <input
            id="codigo-seguranca"
            type="text"
            placeholder="Código de segurança"
            onChange={(e) => setSecurityCode(e.target.value)}
            onFocus={() => setAllFilled("")}
            value={securityCode}
            required
          />
        </>
      );
    }
    if (payMethod === "Pix") {
      return <img src={qrCode} alt="Qr Code" />;
    }
    return null;
  }

  const inputs = paymentInputs();

  async function confirmPurchase(e) {
    e.preventDefault();
    const config = {
      Authorization: `Bearer ${token}`,
      id: userId,
    };
    let body = {};
    if (!street || !block || !city) {
      setAllFilled("false");
    }
    if (payMethod === "Cartao") {
      body = {
        option: payMethod,
        cardNumber,
        securityCode,
        nameOnCard,
        products: cartProducts,
      };
      console.log(body);
    } else {
      body = {
        option: payMethod,
      };
    }
    const promise = axios.post("/checkout", body, config);
    promise.then(() => {
      alert("Compra finalizada com sucesso!");
    });
    promise.catch(() => {
      alert("Sessão expirada!");
      navigate("/usuario", { replace: true });
    });
  }

  return (
    <Universal>
      <RolarTopo />
      <PageContentDiv>
        <SignInDiv>
          <StyledFormContainer>
            <div>
              <h2>Endereço</h2>
              <form onSubmit={""}>
                <input
                  id="rua"
                  type="text"
                  placeholder="Rua"
                  onChange={(e) => setStreet(e.target.value)}
                  onFocus={() => setAllFilled("")}
                  value={street}
                  required
                />
                <CheckmarkDiv>Avenida Exemplo, 1053</CheckmarkDiv>
                <input
                  id="bairro"
                  type="text"
                  placeholder="Bairro"
                  onChange={(e) => setBlock(e.target.value)}
                  onFocus={() => setAllFilled("")}
                  value={block}
                  required
                />
                <CheckmarkDiv>Jardim Exemplo</CheckmarkDiv>
                <select
                  name="Cidade"
                  id="cidade"
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">Selecione a cidade</option>
                  <option value="ES">Vitória, ES</option>
                  <option value="SP">São Paulo, SP</option>
                  <option value="RJ">Rio de Janeiro, RJ</option>
                  <option value="MG">Belo Horizonte, MG</option>
                  <option value="PR">Curitiba, PR</option>
                  <option value="RS">Porto Alegre, RS</option>
                  <option value="SC">Florianópolis, SC</option>
                </select>
              </form>
            </div>
          </StyledFormContainer>
        </SignInDiv>
        <SignUpDiv>
          <StyledFormContainer>
            <div>
              <h2>Pagamento</h2>
              <form onSubmit={confirmPurchase}>
                <select
                  name="Cidade"
                  id="cidade"
                  onChange={(e) => setPayMethod(e.target.value)}
                  required
                >
                  <option value="">Forma de pagamento</option>
                  <option value="Cartao">Cartão de Crédito</option>
                  <option value="Pix">Pix</option>
                </select>
                {inputs}
                {allFilled === "false" ? (
                  <CheckmarkDiv filled={allFilled}>
                    É necessário preencher todos os dados!
                  </CheckmarkDiv>
                ) : null}
                <StyledButton height={46} width={350} fontSize={20}>
                  Confirmar Compra
                </StyledButton>
              </form>
            </div>
          </StyledFormContainer>
        </SignUpDiv>
      </PageContentDiv>
    </Universal>
  );
}

const Universal = styled.div`
  height: 500px;
  margin-top: 120px;
`;

const PageContentDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 140px;
  background-color: var(--cor-fundo);
  border-radius: 10px;
`;

const CheckmarkDiv = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  margin-left: 5px;
  margin-top: 3px;
  color: ${(props) => (props.filled === "false" ? "#c40922" : "#666868")};
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
