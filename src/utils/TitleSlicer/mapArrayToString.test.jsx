const mapArrayToString = require("./mapArrayToString");

describe("mapArrayToString", () => {
  test("correct value", () => {
    expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("different values", () => {
    expect(
      mapArrayToString([undefined, "dd", "1", null, false, true, 1, 2, 3])
    ).toEqual(["1", "2", "3"]);
  });

  test("empty array", () => {
    expect(mapArrayToString([])).toEqual([]);
  });

  test("string values", () => {
    expect(mapArrayToString(["dd", "1"])).toEqual([]);
  });
});
