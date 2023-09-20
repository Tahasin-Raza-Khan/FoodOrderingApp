import { render, screen } from "@testing-library/react";
import RestroCard from "../components/RestroCard";
import mockData from "../__mocks__/RestroCardMock.json";
import "@testing-library/jest-dom";

describe("Unit Testing for Restro Card", () => {
  it("should render the name of the restuarant", () => {
    render(<RestroCard {...mockData} />);
    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument();
  });
});
