const { add } = require("./math");

test("add numbers", () => {
  expect(add(2,3)).toBe(5);
});
