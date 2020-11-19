import React from "react";
import ReactDOM from "react-dom";
import Cadastro from "./pages/cadastro";
import Checkout from "./pages/checkout";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>,
  document.getElementById("root")
);
