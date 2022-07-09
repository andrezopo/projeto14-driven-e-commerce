import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import RolarTopo from "../shared/RolarTopo";

import maca from "../../assets/images/maca.webp";

export default function TelaProdutos({ categoriaInicial }) {
  const [categoria, setCategoria] = React.useState(categoriaInicial);

  const navigate = useNavigate();

  function irHome() {
    navigate("/");
  }

  function irCategoria(categoriaEscolhida) {
    setCategoria(
      categoriaEscolhida[0].toUpperCase() + categoriaEscolhida.substring(1)
    );
    navigate(`/produtos/${categoriaEscolhida}`);
  }

  return (
    <>
      <RolarTopo />
      <Rota>
        <h4>
          <span onClick={irHome}>Home</span> /{" "}
          <span onClick={() => irCategoria("todos")}>Produtos</span> /{" "}
          {categoria}
        </h4>
      </Rota>
      <Universal>
        <ListaCategorias>
          <h2>Categorias</h2>
          <ul>
            <span onClick={() => irCategoria("frutas")}>
              <li>Frutas</li>
            </span>
            <span onClick={() => irCategoria("verduras")}>
              <li>Verduras</li>
            </span>
            <span onClick={() => irCategoria("legumes")}>
              <li>Legumes</li>
            </span>
            <span onClick={() => irCategoria("cereais")}>
              <li>Cereais</li>
            </span>
            <span onClick={() => irCategoria("ovos")}>
              <li>Ovos</li>
            </span>
            <span onClick={() => irCategoria("carnes")}>
              <li>Carnes</li>
            </span>
          </ul>
        </ListaCategorias>
        <ListaProdutos>
          <Cabecalho>
            <h3>50 produtos</h3>
            <select name="selecionar" id="selecionar">
              <option value="classificacao">Ordenar por:</option>
              <option value="menorPreco">Menor Preço</option>
              <option value="maiorPreco">Maior Preço</option>
              <option value="alfabetico">Ordem Alfabética (A - Z)</option>
            </select>
          </Cabecalho>
          <Produtos>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
            <Produto>
              <img src={maca} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <h4>R$10,00</h4>
              <div>
                <h5>Adicionar ao carrinho</h5>
              </div>
            </Produto>
          </Produtos>
        </ListaProdutos>
      </Universal>
    </>
  );
}

const Rota = styled.div`
  margin: 150px 15px 20px 15px;

  h4 {
    color: #888888;
    font-size: 18px;
    font-weight: bold;
  }

  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Universal = styled.div`
  display: flex;

  @media (max-width: 935px) {
    flex-direction: column;
  }

  @media (max-width: 614px) {
    flex-direction: column;
  }
`;

const ListaCategorias = styled.div`
  width: 25%;
  height: 100%;
  border: 1px solid var(--cor-borda);
  margin: 0 10px 10px 10px;
  position: sticky;

  a {
    text-decoration: none;
    color: var(--cor-texto);
  }

  h2 {
    font-size: 25px;
    text-align: center;
    color: var(--cor-detalhes);
    font-weight: bold;
    margin: 20px 0px;
  }

  ul {
    margin: 0 10px;

    li {
      margin-bottom: 20px;
      border-bottom: 1px solid var(--cor-borda);
      line-height: 30px;
      font-size: 20px;

      @media (max-width: 935px) {
        border: none;
      }
    }

    li:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    @media (max-width: 935px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (max-width: 935px) {
    width: 100%;
    margin: 15px;
  }
`;

const ListaProdutos = styled.div`
  width: 75%;
  border: 1px solid var(--cor-borda);
  margin: 0 10px 10px 0;

  @media (max-width: 935px) {
    width: 100%;
    margin: 0 15px;
  }

  @media (max-width: 614px) {
    width: 100%;
    margin: 0 15px;
  }
`;

const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--cor-borda);

  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  select {
    background-color: var(--cor-branca);
    border: 1px solid var(--cor-borda);
    border-radius: 5px;
    height: 30px;
    width: 30%;
    font-size: 14px;
    padding: 0 10px;

    @media (max-width: 935px) {
      width: 50%;
    }

    @media (max-width: 614px) {
      width: 62%;
    }
  }
`;

const Produtos = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Produto = styled.div`
  border: 1px solid var(--cor-borda);
  border-radius: 10px;
  width: 200px;
  height: 250px;
  margin: 10px;
  background-color: var(--cor-branca);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  img {
    width: 120px;
    margin-bottom: 10px;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
  }

  p {
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 25px;
    color: var(--cor-detalhes);
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    height: 100%;
    background-color: var(--cor-borda);
    display: flex;
    align-items: center;
    justify-content: center;

    h5 {
      font-size: 16px;
    }
    :hover {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }

  :hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
