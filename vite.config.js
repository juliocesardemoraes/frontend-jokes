import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    root: "./src",
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/index.html"),
          login: resolve(__dirname, "src/login.html"),
        },
      },
    },
  };
});

// import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         nested: resolve(__dirname, 'nested/index.html'),
//       },
//     },
//   },
// })
