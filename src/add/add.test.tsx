import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AddButton } from "./addButton";

describe("AddButton test", () => {
	test("should show title all the time", () => {
		render(<AddButton />);
		expect(screen.getByText(/Testing/i)).toBeDefined();
	});
});
