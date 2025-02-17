import React from "react";
import ReactDom from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./themes/default";
import { GlobalStyle } from "./styles/globol";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
