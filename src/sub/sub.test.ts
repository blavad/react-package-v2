import { expect, test } from "vitest";
import { sub } from "./sub";

test("subs 5 - 2 to equal 3", () => {
	expect(sub(5, 2)).toBe(3);
});
