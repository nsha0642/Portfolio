import { render, screen } from "@testing-library/react";
import Home from "./Components/Home/Home";

jest.mock("./Components/Mascot/MascotAnimation", () => () => (
  <div data-testid="mascot-animation" />
));

jest.mock("./utils/animations", () => ({
  buttonMotion: {},
  useSectionReveal: () => {},
}));

test("renders portfolio owner name", () => {
  render(<Home />);
  const heading = screen.getAllByText(/Nishanth Shanmugasundaram/i)[0];
  expect(heading).toBeInTheDocument();
});
