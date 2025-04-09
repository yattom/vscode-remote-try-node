import romanNumber from "./romanNumber";

describe("数字(整数)を渡すとローマ数字(文字列)に変換する", () => {
  test("1はI", () => {
    expect(romanNumber(1)).toBe("I");
  });
  test("2はII", () => {
    expect(romanNumber(2)).toBe("II");
  });
  // test("3はIII", () => {
  //   expect(romanNumber(3)).toBe("III");
  // });
  // test("4はIV", () => {
  //   expect(romanNumber(4)).toBe("IV");
  // });
  test("5はV", () => {
    expect(romanNumber(5)).toBe("V");
  });
  test("6はVI", () => {
    expect(romanNumber(6)).toBe("VI");
  });
  // test("7はVII", () => {
  //   expect(romanNumber(7)).toBe("VII");
  // });
  // test("8はVIII", () => {
  //   expect(romanNumber(8)).toBe("VIII");
  // });
  // test("9はIX", () => {
  //   expect(romanNumber(9)).toBe("IX");
  // });
  // test("10はX", () => {
  //   expect(romanNumber(10)).toBe("X");
  // });
})