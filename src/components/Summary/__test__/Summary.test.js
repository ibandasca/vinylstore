import React from "react";
import { screen, render } from "@testing-library/react";

import { Summary } from "../Sumarry";
import { VinylAmountContext } from "../../../contexts/vinylAmountContext";

const AMOUNT = 2;
const TOTAL_PRICE = 40;

const renderComponent = () =>
  render(
    <VinylAmountContext.Provider
      value={{
        vinylsAdded: [
          {
            id: 1,
            image:
              "https://i.discogs.com/WWgjQ3DIi8rFpbuMr9LYnE6xDCROuPaM7Tn_Z_vLwo8/rs:fit/g:sm/q:90/h:593/w:593/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTU0/NTY3ODMtMTM5NDk0/MDMxMi01MTY3Lmpw/ZWc.jpeg",
            artist: "Tycho",
            title: "Awake",
            price: 20,
            amount: AMOUNT,
            totalPrice: TOTAL_PRICE,
          },
        ],
      }}
    >
      <Summary />
    </VinylAmountContext.Provider>
  );

describe("Summary", () => {
  it("renders without crashing", () => {
    renderComponent();

    expect(screen.getByText("Tycho")).toBeInTheDocument();
    expect(screen.getByText(AMOUNT)).toBeInTheDocument();
    expect(screen.getByText(`${TOTAL_PRICE}$`)).toBeInTheDocument();
  });
});
