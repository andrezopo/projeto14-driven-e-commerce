import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Context from "../Context/Context";

import Header from "./shared/Header.jsx";
import Footer from "./shared/Footer.jsx";

import TelaHome from "./telas/TelaHome";
import TelaLoginCadastro from "./telas/TelaLoginCadastro";
import TelaProdutos from "./telas/TelaProdutos.jsx";
import TelaCarrinho from "./telas/TelaCarrinho.jsx";
import TelaCheckout from "./telas/TelaCheckout.jsx";

export default function App() {
  const [token, setToken] = React.useState("");

  return (
    <>
      <Context.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<TelaHome />} />
            <Route path="/usuario" element={<TelaLoginCadastro />} />
            <Route path="/produtos/:categoria" element={<TelaProdutos />} />
            <Route path="/carrinho" element={<TelaCarrinho />} />
            <Route path="/checkout" element={<TelaCheckout />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
      <Footer />
    </>
  );
}
