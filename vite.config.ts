import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "ReactLib",
			fileName: "react-package",
			formats: ["es", "cjs", "umd"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
		},
	},
	resolve: { alias: { src: resolve("src/") } },
	plugins: [dts()],
});
