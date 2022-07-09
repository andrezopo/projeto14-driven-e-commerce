import styled from "styled-components";

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import imagem1 from "../../assets/images/carousel1.jpg";
import imagem2 from "../../assets/images/carousel2.jpg";
import imagem3 from "../../assets/images/carousel3.jpg";
import frutas from "../../assets/images/frutas.png";
import verduras from "../../assets/images/alface.png";
import legumes from "../../assets/images/vegetal.png";
import cereais from "../../assets/images/farinha.png";
import ovos from "../../assets/images/ovos.png";
import carnes from "../../assets/images/carne.png";

function CarouselInicial() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <ImagemCarousel>
      <span className="texto1">
        <p>Vem se alimentar bem!</p>
        <p>Centenas de produtos para você escolher</p>
      </span>
      <div></div>
      <img
        src={imagem1}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
    </ImagemCarousel>,
    <ImagemCarousel>
      <span className="texto2">
        <p>Produtos com qualidade e certificados pelo SisOrg</p>
      </span>
      <div></div>
      <img
        src={imagem2}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
    </ImagemCarousel>,
    <ImagemCarousel>
      <span className="texto3">
        <p>Frete grátis para todo o Brasil a partir de R$ 200,00</p>
      </span>
      <div></div>
      <img
        src={imagem3}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
    </ImagemCarousel>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={3000}
      disableButtonsControls
      infinite
    />
  );
}

function CarouselCategorias() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Categoria>
      <img
        src={frutas}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
      <p>Frutas</p>
    </Categoria>,
    <Categoria>
      <img
        src={verduras}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
      <p>Verduras</p>
    </Categoria>,
    <Categoria>
      <img
        src={legumes}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
      <p>Legumes</p>
    </Categoria>,
    <Categoria>
      <img
        src={cereais}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
      <p>Cereais</p>
    </Categoria>,
    <Categoria>
      <img
        src={ovos}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
      <p>Ovos</p>
    </Categoria>,
    <Categoria>
      <img
        src={carnes}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
      <p>Carnes</p>
    </Categoria>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      infinite
      disableDotsControls
      responsive={{
        0: {
          items: 1,
        },
        770: {
          items: 2,
        },
        1130: {
          items: 3,
        },
      }}
    />
  );
}

export default function TelaHome() {
  return (
    <Universal>
      <CarouselImagens>
        <CarouselInicial />
      </CarouselImagens>
      <Categorias>
        <CarouselCategorias />
        <button>Ver todos os produtos</button>
      </Categorias>
      <InfoImportantesCompra>
        <div>
          <ion-icon name="card-outline"></ion-icon>
          <h3>Escolha como pagar</h3>
          <p>
            Aqui, você paga com cartão de crédito, débito ou Pix. Você também
            pode pagar em até 5x.
          </p>
        </div>
        <div>
          <ion-icon name="cube-outline"></ion-icon>
          <h3>Frete grátis a partir de R$ 200,00</h3>
          <p>Frete grátis para todo o Brasil.</p>
        </div>
        <div>
          <ion-icon name="shield-checkmark-outline"></ion-icon>
          <h3>Segurança, do início ao fim</h3>
          <p>
            Você não gostou do que comprou? Devolva! Aqui não há nada que você
            não possa fazer, porque você está sempre protegido.
          </p>
        </div>
      </InfoImportantesCompra>
    </Universal>
  );
}

const Universal = styled.div`
  margin-top: 120px;
`;

const CarouselImagens = styled.div`
  .alice-carousel__prev-btn
    .alice-carousel__prev-btn-wrapper
    .alice-carousel__prev-btn-item {
    display: none;
  }
  .alice-carousel__next-btn
    .alice-carousel__next-btn-wrapper
    .alice-carousel__next-btn-item {
    display: none;
  }
  .alice-carousel__dots {
    padding: 0px;
    margin: 0px;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 35px;
  }
`;

const ImagemCarousel = styled.div`
  position: relative;

  div {
    height: 400px;
    width: 100%;
    background-color: var(--cor-texto);
    filter: opacity(0.5);
    position: absolute;

    @media (max-width: 935px) {
      height: 350px;
    }

    @media (max-width: 614px) {
      height: 300px;
    }
  }

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;

    @media (max-width: 935px) {
      height: 350px;
    }

    @media (max-width: 614px) {
      height: 300px;
    }
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    filter: opacity(1);
    z-index: 1;

    p {
      width: 50%;
      color: var(--cor-branca);
      font-style: italic;
      font-weight: bold;
      font-size: 37px;
      text-align: center;
      padding-left: 30px;

      @media (max-width: 935px) {
        font-size: 30px;
      }

      @media (max-width: 614px) {
        font-size: 25px;
      }
    }
  }

  span.texto1 {
    flex-direction: column;
    align-items: flex-end;

    p {
      text-align: right;
      margin-right: 50px;
    }
  }

  span.texto2 {
    align-items: flex-end;
    justify-content: left;

    p {
      text-align: left;
      margin-bottom: 20px;
    }
  }
`;

const Categorias = styled.div`
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .alice-carousel__prev-btn {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .alice-carousel__prev-btn-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .alice-carousel__prev-btn-item {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 120px;
    text-align: left;
    font-size: 50px;
    color: var(--cor-detalhes);
  }

  .alice-carousel__next-btn {
    position: absolute;
    width: 100%;
    right: 0;
    bottom: 0;
  }
  .alice-carousel__next-btn-wrapper {
    position: absolute;
    width: 100%;
    right: 0;
    bottom: 0;
  }
  .alice-carousel__next-btn-item {
    position: absolute;
    width: 100%;
    right: 0;
    bottom: 120px;
    text-align: right;
    font-size: 50px;
    color: var(--cor-detalhes);
  }

  button {
    height: 40px;
    width: 30%;
    background-color: var(--cor-branca);
    color: var(--cor-detalhes);
    border: 1px solid var(--cor-detalhes);
    border-radius: 7px;
    font-size: 16px;
    font-weight: bold;

    :hover {
      background-color: var(--cor-detalhes);
      color: var(--cor-branca);
      border: 1px solid var(--cor-detalhes);
      cursor: pointer;
    }

    @media (max-width: 935px) {
      width: 50%;
    }

    @media (max-width: 614px) {
      width: 70%;
    }
  }
`;

const Categoria = styled.div`
  width: 350px;
  height: 250px;
  margin: 0 auto;
  margin-bottom: 25px;
  border: 1px solid var(--cor-borda);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--cor-branca);
  overflow: hidden;

  :hover {
    cursor: pointer;
  }

  img {
    width: 150px;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;

    @media (max-width: 935px) {
      width: 125px;
    }

    @media (max-width: 614px) {
      width: 100px;
    }
  }

  p {
    font-size: 30px;
    color: var(--cor-detalhes);
    margin-top: 20px;
    font-weight: bold;

    @media (max-width: 935px) {
      font-size: 25px;
    }

    @media (max-width: 614px) {
      font-size: 22px;
    }
  }

  :hover {
    filter: brightness(0.9);
  }

  :hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (max-width: 935px) {
    width: 300px;
    height: 250px;
  }

  @media (max-width: 614px) {
    width: 250px;
    height: 200px;
  }
`;

const InfoImportantesCompra = styled.div`
  height: 300px;
  background-color: var(--cor-branca);
  padding: 20px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 32%;
    height: 100%;
    padding: 20px;
    border: 1px solid var(--cor-detalhes);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ion-icon {
      font-size: 80px;
      color: var(--cor-detalhes);
      margin-bottom: 25px;
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
      height: 30px;
      color: var(--cor-detalhes);
    }

    p {
      font-size: 16px;
      height: 60px;
      color: var(--cor-texto);
      text-align: center;
      line-height: 20px;
    }

    @media (max-width: 1200px) {
      width: 45%;
      height: 100%;
      margin: 15px;
    }

    @media (max-width: 950px) {
      width: 100%;
      height: 100%;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    height: 100%;
  }
`;
