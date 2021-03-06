import { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";

import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const { token, name, userId } = useContext(Context);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        id: userId,
      },
    };
    const promise = axios.get(
      "https://organistore.herokuapp.com/senha",
      config
    );
    promise.then((res) => {
      setIsLogged(true);
    });
    promise.catch((err) => {
      setIsLogged(false);
    });
  }, [token]);

  return (
    <HeaderEstilo>
      <HeaderInfoEmpresa>
        <InfoContatos>
          <div>
            <ion-icon name="call"></ion-icon>
            <p>(11) 2152-1953</p>
          </div>
          <div>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <p>(11) 99887-4994</p>
          </div>
          <div>
            <ion-icon name="mail"></ion-icon>
            <p>organicstore@gmail.com</p>
          </div>
        </InfoContatos>
        <RedesSociais>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
        </RedesSociais>
      </HeaderInfoEmpresa>
      <HeaderPrincipal>
        <div>
          <Link to="/">
            <h1>Organic Store</h1>
          </Link>
        </div>
        <IconesInteracaoUsuario>
          {!isLogged ? (
            <Link to="/usuario">
              <div className="areaLoginCadastro">
                <ion-icon name="person"></ion-icon>
                <p>Entre ou cadastre-se</p>
              </div>
            </Link>
          ) : (
            <Link to="/informacoes">
              <div className="areaLoginCadastro">
                <ion-icon name="person"></ion-icon>
                <p>Bem vindo(a) {name}</p>
              </div>
            </Link>
          )}

          <Link to="/carrinho">
            <ion-icon name="cart"></ion-icon>
          </Link>
        </IconesInteracaoUsuario>
      </HeaderPrincipal>
    </HeaderEstilo>
  );
}

const HeaderEstilo = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.479);
`;

const HeaderInfoEmpresa = styled.div`
  padding: 0 20px;
  height: 40px;
  background-color: var(--cor-detalhes);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--cor-branca);

  ion-icon {
    color: var(--cor-branca);
    font-size: 20px;
    margin: 5px;
  }
`;

const InfoContatos = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  div {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-right: 10px;
  }

  div:hover {
    cursor: pointer;
  }

  p {
    font-size: 15px;
  }

  @media (max-width: 630px) {
    p {
      display: none;
    }
  }
`;

const RedesSociais = styled.div`
  cursor: pointer;
`;
const HeaderPrincipal = styled.div`
  padding: 0 20px;
  height: 80px;
  background-color: var(--cor-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--cor-branca);

  a {
    text-decoration: none;
    color: var(--cor-branca);
  }

  h1 {
    font-family: "Gochi Hand", cursive;
    font-size: 40px;
    cursor: pointer;
  }

  @media (max-width: 630px) {
    h1 {
      font-size: 35px;
    }
  }
`;

const IconesInteracaoUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  :hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--cor-branca);
  }

  ion-icon {
    color: var(--cor-branca);
    font-size: 32px;
    margin: 5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-right: 25px;

    p {
      display: flex;
      align-items: center;
      justify-content: left;
      width: 100px;
    }
  }
`;
