import { useContext } from "react";
import Context from "../../Context/Context";

import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import RolarTopo from "../shared/RolarTopo";

function Produto({ produto, carregarProdutos, setArrayPrecos, arrayPrecos }) {
  const { token, userId } = useContext(Context);

  const precoProduto = produto.valor;
  const [opcaoQuantSelecionada, setOpcaoQuantSelecionada] = React.useState(1);
  const [precoFinalProduto, setPrecoFinalProduto] =
    React.useState(precoProduto);

  React.useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        id: userId,
      },
    };
    const prom = axios.put(
      "https://organistore.herokuapp.com/status",
      {},
      config
    );
    prom.catch(() => {
      alert("Sessão expirada!");
      navigate("/usuario", { replace: true });
    });

    setPrecoFinalProduto(opcaoQuantSelecionada * precoProduto);
  }, [opcaoQuantSelecionada]);

  function removerItem() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        id: userId,
        idProduto: produto._id,
      },
    };

    const promise = axios.delete(
      "https://organistore.herokuapp.com/carrinho",
      config
    );

    promise
      .then((response) => {
        console.log(response.data);
        alert("Produto removido com sucesso!");
        carregarProdutos();
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao remover o produto.");
      });
  }

  return (
    <ProdutoStyle>
      <DescricaoProduto className="primeiro">
        <button onClick={removerItem}>X</button>
        <img src={produto.imagem} alt="" />
        <p>{produto.descricao}</p>
      </DescricaoProduto>
      <div className="outro">
        <p>R$ {precoProduto.toFixed(2).replace(".", ",")}</p>
      </div>
      <div className="outro">
        <select
          name="quant"
          id="quant"
          onChange={(e) => setOpcaoQuantSelecionada(e.target.value)}
        >
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
        </select>
      </div>
      <div className="outro">
        <p>R$ {precoFinalProduto.toFixed(2).replace(".", ",")}</p>
      </div>
    </ProdutoStyle>
  );
}

export default function TelaCarrinho() {
  const { token, userId } = useContext(Context);

  const navigate = useNavigate();

  const [opcaoFreteSelecionado, setOpcaoFreteSelecionado] = React.useState("");
  const [localEntrega, setLocalEntrega] = React.useState("");

  const entregas = [
    { local: "ES", valor: 45 },
    { local: "SP", valor: 30 },
    { local: "RJ", valor: 37.5 },
    { local: "MG", valor: 38 },
    { local: "PR", valor: 38.5 },
    { local: "RS", valor: 47 },
    { local: "SC", valor: 40 },
  ];

  const [produtosCarrinho, setProdutosCarrinho] = React.useState([]);

  const [arrayPrecos, setArrayPrecos] = React.useState([]);

  console.log(arrayPrecos)

  function carregarProdutos() {
    if (token.length === 0) {
      navigate("/usuario");
      alert("Necessário estar autenticado para acessar o carrinho.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        id: userId,
      },
    };

    const promise = axios.get(
      "https://organistore.herokuapp.com/carrinho",
      config
    );

    promise
      .then((response) => {
        console.log(response.data);
        setProdutosCarrinho(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        id: userId,
      },
    };
    const prom = axios.put(
      "https://organistore.herokuapp.com/status",
      {},
      config
    );
    prom.catch(() => {
      alert("Sessão expirada!");
      navigate("/usuario", { replace: true });
    });

    carregarProdutos();

    for (let i = 0; i < entregas.length; i++) {
      if (entregas[i].local === opcaoFreteSelecionado) {
        setLocalEntrega(entregas[i]);
      }
    }
  }, [opcaoFreteSelecionado]);

  return (
    <Universal>
      <RolarTopo />
      <QuadroGeral>
        <QuadroProdutos>
          <Cabecalho>
            <p className="primeiro">Item</p>
            <p className="outro">Preço</p>
            <p className="outro">Quantidade</p>
            <p className="outro">Preço Total</p>
          </Cabecalho>

          {produtosCarrinho.map((produto, index) => (
            <Produto
              key={index}
              produto={produto}
              carregarProdutos={carregarProdutos}
            />
          ))}
        </QuadroProdutos>
        <QuadroFrete>
          <div>
            <div className="informacoesFrete">
              <select
                name="quant"
                id="quant"
                onChange={(e) => setOpcaoFreteSelecionado(e.target.value)}
              >
                <option value="">Selecione aqui o local de entrega:</option>
                <option value="ES">Vitória, ES</option>
                <option value="SP">São Paulo, SP</option>
                <option value="RJ">Rio de Janeiro, RJ</option>
                <option value="MG">Belo Horizonte, MG</option>
                <option value="PR">Curitiba, PR</option>
                <option value="RS">Porto Alegre, RS</option>
                <option value="SC">Florianópolis, SC</option>
              </select>
              <div>
                {localEntrega === "" ? (
                  <h4>Informe local de coleta ao lado</h4>
                ) : (
                  <h4>
                    Valor do frete:{" "}
                    <strong>
                      R$ {localEntrega.valor.toFixed(2).replace(".", ",")}
                    </strong>
                  </h4>
                )}
              </div>
            </div>
            <p>
              Atualmente os produtos estão disponíveis para retirada apenas nos
              correios das capitais dos estados do Sul e Sudeste do Brasil.
            </p>
          </div>
        </QuadroFrete>
        <QuadroTotal>
          <ResumoTotal>
            <div>
              <p>Total carrinho</p>
              <h2>R$ 135,00</h2>
            </div>
            <div>
              <p>Valor frete</p>
              {localEntrega === "" ? (
                <h2></h2>
              ) : (
                <h2>R$ {localEntrega.valor.toFixed(2).replace(".", ",")}</h2>
              )}
            </div>
            <div className="total">
              <p>Valor total</p>
              <h2>R$ 135,00</h2>
            </div>
            <div className="botao">
              <button>Finalizar compra</button>
            </div>
          </ResumoTotal>
        </QuadroTotal>
      </QuadroGeral>
    </Universal>
  );
}

const Universal = styled.div`
  margin-top: 150px;
`;

const QuadroGeral = styled.div`
  margin: 15px auto;
  width: 95%;
  background-color: var(--cor-branca);
  border-radius: 15px;
`;

const QuadroProdutos = styled.div`
  margin: 10px;
  border: 1px solid var(--cor-borda);
  border-radius: 15px;
`;

const Cabecalho = styled.div`
  background-color: var(--cor-detalhes);
  color: var(--cor-branca);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 15px 15px 0 0;

  p {
    font-size: 18px;
    font-weight: bold;
  }

  .primeiro {
    width: 40%;
    text-align: left;
  }

  .outro {
    width: 20%;
    text-align: center;
  }
`;

const ProdutoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--cor-borda);

  p {
    font-size: 18px;
  }

  select {
    width: 50px;
    font-size: 17px;
  }

  .primeiro {
    width: 40%;
    text-align: left;
  }

  .outro {
    width: 20%;
    text-align: center;
  }
`;

const DescricaoProduto = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--cor-branca);

    :hover {
      border: 1px solid var(--cor-borda);
      cursor: pointer;
    }
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 10px 20px 10px 0;
  }
`;

const QuadroFrete = styled.div`
  margin: 15px;

  div.informacoesFrete {
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      display: flex;
      align-items: center;
      height: 30px;
      width: 45%;
      font-size: 16px;
    }

    div {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: baseline;

      h4 {
        font-size: 18px;

        strong {
          font-weight: bold;
        }
      }
    }
  }

  p {
    font-size: 15px;
    color: #888888;
  }
`;

const QuadroTotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ResumoTotal = styled.div`
  width: 60%;
  border: 1px solid var(--cor-borda);
  border-radius: 10px;
  padding: 15px;
  margin: 20px 15px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 18px;
  }

  div.total {
    font-weight: bold;
  }

  div.botao {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      height: 30px;
      width: 40%;
      font-size: 15px;
      border: 1px solid var(--cor-detalhes);
      background-color: var(--cor-branca);
      color: var(--cor-detalhes);
      border-radius: 5px;

      :hover {
        cursor: pointer;
        border: 1px solid var(--cor-borda);
        background-color: var(--cor-detalhes);
        color: var(--cor-branca);
      }
    }
  }
`;
