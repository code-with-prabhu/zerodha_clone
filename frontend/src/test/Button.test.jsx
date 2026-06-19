import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../landing_page/home/Hero";
import { vi } from "vitest";

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

test("navigates to signup page when button is clicked", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: /sign up for free/i,
    })
  );

  expect(mockedNavigate).toHaveBeenCalledWith("/signup");
});