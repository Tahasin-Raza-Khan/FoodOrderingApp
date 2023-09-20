import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

// to make all the test cases in a single block use decribe
describe("This is Conntact Us Component Test Cases", () => {
  test("Contact component testing", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("testing button inside the Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("testing the input boxex", () => {
    //Render
    render(<Contact />);
    // Query
    const inputBoxes = screen.getAllByRole("textbox");
    //Assert
    expect(inputBoxes.length).toBe(2);
  });
});
