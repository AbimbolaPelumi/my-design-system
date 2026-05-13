import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"
import { defineConfig } from "vite"

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(rootDir, "src/index.ts"),
        styles: resolve(rootDir, "src/styles-entry.ts"),
      },
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
      cssFileName: "styles",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
})
