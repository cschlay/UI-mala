import { Form } from "./Form";

describe("<Form />", () => {
  it("submit data given", () => {
    const mockHandleSubmit = jest.fn();
    tlib.render(
      <Form
        onSubmit={mockHandleSubmit}
        form={{ data: { name: "Fried potato" } }}
      >
        <button>Submit</button>
      </Form>
    );

    const submitButton = tlib.screen.getByRole("button", { name: "Submit" });
    submitButton.click();
    expect(mockHandleSubmit).toBeCalledWith({ name: "Fried potato" });
  });
});
