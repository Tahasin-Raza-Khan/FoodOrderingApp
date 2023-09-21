import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/store/appstore/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Test Cases for Header Component", () => {
  it("Should render with the Profile icon", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const profileAvatar = screen.getByTestId("account-circle-icon");
    fireEvent.click(profileAvatar);
    const logOutIcon = screen.getByTestId("logOutIcon");
    expect(logOutIcon).toBeInTheDocument();
  });

  it("should render the cart componet", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const isCartLoaded = screen.getByTestId("cartIcon");
    expect(isCartLoaded).toBeInTheDocument();
  });
});
