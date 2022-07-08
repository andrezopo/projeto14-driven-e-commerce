import styled from "styled-components";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import imagemCarousel1 from "../../assets/images/carousel1.jpg";


export default function TelaHome() {
  return (
    <Universal>
      <h1>Esta é a tela de Home</h1>
    </Universal>
  );
}

const Universal = styled.div`
  margin-top: 120px;
`;

const ImagemCarousel = styled.div`
  position: relative;

  div {
    height: 400px;
    width: 100%;
    background-color: var(--cor-texto);
    filter: opacity(0.5);
    position: absolute;
  }

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;
