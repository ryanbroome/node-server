const ss = require("simple-statistics");

describe("Routes Test", function () {
  test("Simple Statistics Mean functionality", function () {
    const nums = [0, 50, 100];
    const mean = ss.mean(nums);

    expect(mean).toBe(50);
  });
});
