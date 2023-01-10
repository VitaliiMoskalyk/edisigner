const TitleSlicer = require("./TitleSlicer");

describe("title test", () => {
  test("lower case to mobile", () => {
    expect(TitleSlicer(" lower case ", 767)).toMatch(/lc/);
  });
  test("lower case to desktop", () => {
    expect(TitleSlicer(" lower case ", 1200)).toMatch(/lowercase/);
  });
  test("empty to mobile", () => {
    expect(TitleSlicer("", 767)).toBe("");
  });
});
