/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, fireEvent, act } from "@testing-library/react";
import { Bee } from "./Bee";

describe("Bee component related tests", () => {
  it("Should render bee", () => {
    const { container } = render(
      <Bee health={100} resetBeeHealth={jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Should reduce bee health by 10 when button clicked", () => {
    const { container } = render(
      <Bee health={100} resetBeeHealth={jest.fn()} />
    );

    const reduceHealthButton = container.querySelector(".bee__process-button");
    const reduceHealthInput = container.querySelector(".bee__process-input");

    act(() => {
      fireEvent.change(reduceHealthInput, { target: { value: 10 } });
    });
    act(() => {
      fireEvent.click(reduceHealthButton);
    });

    expect(
      container.querySelector(".bee__status-health span").textContent
    ).toBe("90%");
  });

  it("Should reduce bee health by 10 when enter clicked", () => {
    const { container } = render(
      <Bee health={100} resetBeeHealth={jest.fn()} />
    );

    const reduceHealthInput = container.querySelector(".bee__process-input");

    act(() => {
      fireEvent.change(reduceHealthInput, { target: { value: 10 } });
    });

    act(() => {
      fireEvent.keyDown(reduceHealthInput, { key: "Enter" });
    });

    expect(
      container.querySelector(".bee__status-health span").textContent
    ).toBe("90%");
    expect(reduceHealthInput.value).toBe("");
  });

  it("If bee health went 0 or below, should set health to 0 and return text 'Dead'", () => {
    const { container } = render(
      <Bee health={10} resetBeeHealth={jest.fn()} />
    );

    const reduceHealthInput = container.querySelector(".bee__process-input");

    act(() => {
      fireEvent.change(reduceHealthInput, { target: { value: 20 } });
    });
    act(() => {
      fireEvent.keyDown(reduceHealthInput, { key: "Enter" });
    });

    expect(container.querySelector(".bee__status-health").textContent).toBe(
      "0"
    );
    expect(container.querySelector(".bee__status-live-text").textContent).toBe(
      "Dead"
    );
  });
});
