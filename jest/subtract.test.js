const sub = require("./subtract");

test("diff between two numbers", function () {
  expect(sub(1, 2)).toBe(1);
  expect(sub(20, 40)).toBe(20);
});
