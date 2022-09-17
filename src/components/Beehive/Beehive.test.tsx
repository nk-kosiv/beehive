import { render } from "@testing-library/react";

import { Beehive } from "./Beehive";

describe("Beehive component related tests", () => {
  it("Should render bee", () => {
    const { container } = render(<Beehive />);

    expect(container).toMatchSnapshot();
  });
});
