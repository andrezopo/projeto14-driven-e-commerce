import styled from "styled-components";
import React from "react";

import RolarTopo from "../shared/RolarTopo";

export default function TelaCarrinho() {
  return (
    <Universal>
      <RolarTopo />
      <h1>Esta é a Tela de Carrinho</h1>
    </Universal>
  );
}

const Universal = styled.div`
  height: 500px;
  margin-top: 120px;
`;
