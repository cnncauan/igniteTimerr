import React from "react";
import ReactDom from "react-dom/client";
import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./themes/default";
import { GlobalStyle } from "./styles/globol";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultThemes}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
