import React from "react";
import { screen, render } from "@testing-library/react";

import { VinylItem } from "../VinylItem";
import { VinylAmountProvider } from "../../../contexts/vinylAmountContext";

const DATA = {
  id: 1,
  image:
    "https://i.discogs.com/WWgjQ3DIi8rFpbuMr9LYnE6xDCROuPaM7Tn_Z_vLwo8/rs:fit/g:sm/q:90/h:593/w:593/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTU0/NTY3ODMtMTM5NDk0/MDMxMi01MTY3Lmpw/ZWc.jpeg",
  artist: "Tycho",
  title: "Awake",
  price: 20,
};

const renderComponent = () =>
  render(
    <VinylAmountProvider>
      <VinylItem data={DATA} />
    </VinylAmountProvider>
  );
describe("VinylItem", () => {
  it("renders without crashing", () => {
    renderComponent({});

    const amount = screen.getByTestId("amount");
    const price = screen.getByTestId("price");
    const totalPrice = screen.getByTestId("total-price");

    expect(screen.getByTestId("item-container")).toBeInTheDocument();
    expect(screen.getByText("Tycho")).toBeInTheDocument();
    expect(screen.getByText("Awake")).toBeInTheDocument();
    expect(amount).toHaveTextContent("0");
    expect(price).toHaveTextContent("20$");
    expect(totalPrice).toHaveTextContent("0$");
  });

  it("renders the proper amount and total price to pay when increasing or decreasing the amount", () => {
    renderComponent();

    const increaseAmount = screen.getByTestId("increase-amount-button");
    increaseAmount.click();

    const amount = screen.getByTestId("amount");
    const totalPrice = screen.getByTestId("total-price");
    expect(amount).toHaveTextContent("1");
    expect(totalPrice).toHaveTextContent("20$");

    const decreaseAmount = screen.getByTestId("decrease-amount-button");
    decreaseAmount.click();

    expect(amount).toHaveTextContent("0");
    expect(totalPrice).toHaveTextContent("0$");
  });
});
