import React from "react";
import { render, screen, fireEvent } from "../utils/test-utils";

import Bar from "./Bar";

describe("<Bar>", () => {
  it("should render its title", () => {
    render(<Bar />);
    expect(screen.getByText("Object Manager")).toBeInTheDocument();
  });
  describe("simple-menu", () => {
    it("should not be visible on init", () => {
      render(<Bar />);
      expect(screen.queryByTestId("simple-menu")).toHaveStyle({
        visibility: "hidden",
      });
    });
    it("should be visible after cliking on the menu icon", () => {
      render(<Bar />);
      fireEvent.click(screen.getByTestId("menu-icon-buton"));
      expect(screen.queryByTestId("simple-menu")).not.toHaveStyle({
        visibility: "hidden",
      });
    });
  });
});
