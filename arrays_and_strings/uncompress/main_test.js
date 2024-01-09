const { uncompress } = require("./main.js");

describe("uncompress function", () => {
  test('uncompresses "2c3a1t" to "ccaaat"', () => {
    expect(uncompress("2c3a1t")).toBe("ccaaat");
  });

  test('uncompresses "4s2b" to "ssssbb"', () => {
    expect(uncompress("4s2b")).toBe("ssssbb");
  });

  test('uncompresses "2p1o5p" to "ppoppppp"', () => {
    expect(uncompress("2p1o5p")).toBe("ppoppppp");
  });

  test('uncompresses "3n12e2z" to "nnneeeeeeeeeeeezz"', () => {
    expect(uncompress("3n12e2z")).toBe("nnneeeeeeeeeeeezz");
  });

  test('uncompresses "127y" correctly', () => {
    const expectedOutput = "y".repeat(127);
    expect(uncompress("127y")).toBe(expectedOutput);
  });
});
