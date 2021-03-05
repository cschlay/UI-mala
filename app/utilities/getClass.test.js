import { getClass } from "./getClass";

describe("classNames.ts", () => {
  it("should concatenate a list of classes", () => {
    expect(getClass("red", "button")).toEqual("red button");
  });
});
