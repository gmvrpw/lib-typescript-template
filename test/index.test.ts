import { expect, test } from "vitest";
import { plus } from "lib";

test("2 + 2 = 4", () => {
  expect(plus(2, 2)).toBe(4);
});
