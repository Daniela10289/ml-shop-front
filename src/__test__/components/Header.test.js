import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@components/Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";

test("Prueba de componentes Header", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // verificando las etiquetas principales
  expect(
    screen.queryByPlaceholderText(/Nunca dejes de buscar/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("button-id")).toBeInTheDocument();
});
