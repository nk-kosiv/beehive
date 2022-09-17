// eslint-disable-next-line import/no-extraneous-dependencies
import { render, fireEvent, act } from "@testing-library/react";

import { Bee, BeeProps } from "./Bee";

// jest.mock('./hooks/s');

describe("Bee component related tests", () => {
  it("Should render bee", () => {
    const { container } = render(<Bee health={100} resetBeeHealth={jest.fn()}  />);

    expect(container).toMatchSnapshot();
  });
});
