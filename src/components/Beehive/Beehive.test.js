/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, fireEvent, act } from "@testing-library/react";

import { Beehive } from "./Beehive";

const beehiveMock = [{ health: 100 }, { health: 100 }];

describe("Beehive component related tests", () => {
  it("Should render App", () => {
    const { container } = render(<Beehive beehive={beehiveMock} />);

    expect(container).toMatchSnapshot();
  });

  it("Should render reset bee health", () => {
    const { container } = render(<Beehive beehive={beehiveMock} />);

    const secondBeeMock = container.querySelectorAll(".bee")[1];
    const reduceHealthInput = secondBeeMock.querySelector(
      ".bee__process-input"
    );

    act(() => {
      fireEvent.change(reduceHealthInput, { target: { value: 10 } });
    });
    act(() => {
      fireEvent.keyDown(reduceHealthInput, { key: "Enter" });
    });

    expect(
      secondBeeMock.querySelector(".bee__status-health span").textContent
    ).toBe("90%");

    const resetButton = container.querySelector(".beehive__reset-button");
    act(() => {
      fireEvent.click(resetButton);
    });

    expect(
      secondBeeMock.querySelector(".bee__status-health span").textContent
    ).toBe("100%");
  });
});
