import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "Lib",
			fileName: "node-package",
			formats: ["es", "cjs", "umd"],
		},
	},
	resolve: { alias: { src: resolve("src/") } },
	plugins: [dts()],
});
