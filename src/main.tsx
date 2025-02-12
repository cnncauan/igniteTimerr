import React from "react";
import ReactDom from "react-dom/client";
import { Button } from "./components/Button";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button variant="primary" />
    <Button variant="secondary" />
    <Button variant="danger" />
    <Button variant="success" />
    <Button />
  </React.StrictMode>
);
