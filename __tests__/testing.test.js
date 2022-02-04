import { normalize } from "./normalize.mjs";

it("normalize", () => {
  expect(normalize("")).toEqual("\n");
  expect(normalize("  x  ")).toEqual("x\n");
  expect(normalize("   x\n   x")).toEqual("x\nx\n");
  expect(normalize("   x\n   x\n")).toEqual("x\nx\n");
  expect(normalize("\n   x\n   x")).toEqual("x\nx\n");
});
