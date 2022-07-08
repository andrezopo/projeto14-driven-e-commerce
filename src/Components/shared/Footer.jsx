import styled from "styled-components";

export default function Footer() {
  return (
    <footer>
      <FooterPrincipal>
        <InfoContato>
          <Contato>
            <div>
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <span>
              <p>São Sebastião, 8337, Boa Vista</p>
              <p className="principal">Santana de Parnaíba, São Paulo</p>
            </span>
          </Contato>
          <Contato>
            <div>
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <p className="principal">(11) 2152-1953</p>
          </Contato>
          <Contato>
            <div>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <p className="principal">(11) 99887-4994</p>
          </Contato>
          <Contato>
            <div>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <p className="principal">organicstore@gmail.com</p>
          </Contato>
        </InfoContato>
        <InfoEmpresa>
          <h2>Sobre nós</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            neque ratione nostrum nihil optio quas perspiciatis eius quidem
            dolore? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Esse ipsa quia optio nihil sit tempora, reiciendis cupiditate unde
            ducimus.
          </p>
          <IconesRedesSociais>
            <div>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <div>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <div>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div>
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
          </IconesRedesSociais>
        </InfoEmpresa>
      </FooterPrincipal>
      <FooterSecundario>
        <p>© 2020 - 2022 | Organic Store | Todos os direitos reservados</p>
      </FooterSecundario>
    </footer>
  );
}

const FooterPrincipal = styled.div`
  height: 240px;
  background-color: var(--cor-header);
  padding: 20px 150px;
  display: flex;
  align-items: top;
  justify-content: space-around;
  color: var(--cor-branca);
`;

const InfoContato = styled.div`
  width: 50%;
`;

const Contato = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 15px;
    background-color: #a87e50;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ion-icon {
    font-size: 25px;
  }

  p {
    font-size: 17px;
    line-height: 20px;
  }

  p.principal {
    font-weight: bold;
  }
`;

const InfoEmpresa = styled.div`
  width: 50%;

  h2 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 20px;
    text-align: justify;
  }
`;

const IconesRedesSociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  div {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin-right: 15px;
    background-color: #a87e50;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:hover{
    cursor: pointer;
    /* Colocar a cor de cada rede social aqui */
  }

  ion-icon {
    font-size: 25px;
  }
`;

const FooterSecundario = styled.div`
  height: 40px;
  background-color: var(--cor-detalhes);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: var(--cor-branca);
    font-size: 15px;
  }
`;
