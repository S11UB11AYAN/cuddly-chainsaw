const sum = require('./index')

test("add two numbers", function () {
  expect(sum(1, 2)).toBe(3);
});
