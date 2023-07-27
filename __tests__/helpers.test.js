const { allNumbers, strToNums } = require("../helpers");

describe("helpers { allNumbers }", function () {
  beforeAll(function () {
    str = "0,1,2,3";
    charStr = "0,1,2,3,foo";
    nums = [0, 50, 100];
    nonNums = [0, 50, 100, NaN];
  });

  afterAll(function () {
    str = undefined;
    charStr = undefined;
    nums = undefined;
    nonNums = undefined;
  });

  test("allNumbers falsy", function () {
    expect(nums).toEqual([0, 50, 100]);
    expect(allNumbers(nums)).toBe(false);
  });

  test("allNumbers truthy", function () {
    expect(allNumbers(nonNums)).toBeTruthy();
  });

  test("strToNums truthy", function () {
    expect(strToNums(str)).toEqual([0, 1, 2, 3]);
    expect(strToNums(str).length).toBe(4);
  });

  test("strToNums falsy", function () {
    expect(strToNums(str)).not.toEqual(["0, 1, 2, 3"]);
    expect(strToNums(str).length).not.toBe(3);
  });

  test("strToNums using strings instead of numbers", function () {
    expect(strToNums(charStr)).toEqual([0, 1, 2, 3, NaN]);
  });
});
