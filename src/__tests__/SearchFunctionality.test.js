import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import allRestroData from "../__mocks__/allRestroDetailsMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(allRestroData);
    },
  });
});
describe("Integration Testing for the Search Functionality", () => {
  it(" should search the available restuarant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cards = screen.getAllByTestId("restrocard");

    expect(cards.length).toBe(9);

    const serachButton = screen.getByRole("button", { name: "Search" });
    expect(serachButton).toBeInTheDocument();

    const serachInputBox = screen.getByTestId("searchInput");
    fireEvent.change(serachInputBox, { target: { value: "KFC" } });
    fireEvent.click(serachButton);
    const restroCardNumber = screen.getAllByTestId("restrocard");
    expect(restroCardNumber.length).toBe(1);
  });
});
