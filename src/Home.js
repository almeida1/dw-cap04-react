import React from "react";
import "./styles.css";
import AppNavbar from "./componentes/AppNavbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <AppNavbar />
      {/* Outros componentes e rotas */}
      <Link to="/produtos">Gerenciamento de Produtos</Link>
    </div>
  );
};

export default Home;
