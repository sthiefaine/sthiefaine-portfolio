import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// import css
import "./index.css";

// import "styled-components" theme & theme global
import { ThemeProvider } from "./contexts/themes";
import GlobalStyle from "./styles/GlobalStyle";

//! import App
import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootEl
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
