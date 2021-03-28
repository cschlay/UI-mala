import { Button } from "./Button";

describe("<Button/>", () => {
  it("should show a link if 'href' is passed as prop", () => {
    tlib.render(<Button href="/">Test</Button>);
    const element = tlib.screen.getByRole("link", { name: "Test" });
    expect(element).toHaveProperty("href", "http://localhost/");
  });

  it("should show button if by default if href is not present", () => {
    tlib.render(<Button>Test</Button>);
    const element = tlib.screen.getByRole("button", { name: "Test" });
    // Ensure that button doesn't have default "submit".
    expect(element).toHaveProperty("type", "button");
  });
});
