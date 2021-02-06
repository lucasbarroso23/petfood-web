import React from "react";
import ReactDOM from "react-dom";
import Cadastro from "./pages/cadastro";
import Checkout from "./pages/checkout";
import Petshop from './pages/petshop';

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Petshop />
  </React.StrictMode>,
  document.getElementById("root") 
);
