import React from "react";

export function AddButton({ title = "Testing" }: { title?: string }) {
	const [count, setCount] = React.useState(0);

	return (
		<button onClick={() => setCount((s) => s + 1)}>
			Add{title} {count}
		</button>
	);
}
