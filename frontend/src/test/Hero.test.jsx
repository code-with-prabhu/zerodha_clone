import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
  });

  test("renders image", () => {
    expect(
      screen.getByAltText("Home Image")
    ).toBeInTheDocument();
  });

  test("renders heading", () => {
    expect(
      screen.getByText("Invest in everything")
    ).toBeInTheDocument();
  });

  test("renders description", () => {
    expect(
      screen.getByText(
        /Online platform to invest in stocks/i
      )
    ).toBeInTheDocument();
  });

  test("renders signup button", () => {
    expect(
      screen.getByRole("button", {
        name: /sign up for free/i,
      })
    ).toBeInTheDocument();
  });
});