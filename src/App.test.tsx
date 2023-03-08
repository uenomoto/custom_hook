import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders learn react link", () => {
  const linkElement = screen.getByText(/learn React/i);
  expect(linkElement).toBeInTheDocument();
});
