import React from "react";

export function SubButton({ title = "Testing" }: { title?: string }) {
	const [count, setCount] = React.useState(0);

	return (
		<button onClick={() => setCount((s) => s - 1)}>
			Sub{title} {count}
		</button>
	);
}
