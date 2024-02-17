import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { SubButton } from "./subButton";

describe("SubButton test", () => {
	test("should show title all the time", () => {
		render(<SubButton />);
		expect(screen.getByText(/Testing/i)).toBeDefined();
	});
});
