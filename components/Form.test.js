import { Form } from "./Form";

describe("<Form />", () => {
  it("it should prevent default submit and default", () => {
    const mockHandleSubmit = jest.fn();
    tlib.render(
      <Form onSubmit={mockHandleSubmit}>
        <button>Submit</button>
      </Form>
    );

    const submitButton = tlib.screen.getByRole("button", { name: "Submit" });
    submitButton.click();
    expect(mockHandleSubmit).toBeCalled();
  });
});
