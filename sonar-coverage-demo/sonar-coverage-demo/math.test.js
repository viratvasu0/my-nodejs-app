const { add, subtract, multiply } = require("./math");

test("add", () => {
  expect(add(2,3)).toBe(5);
});

test("subtract", () => {
  expect(subtract(5,2)).toBe(3);
});

test("multiply", () => {
  expect(multiply(2,3)).toBe(6);
});