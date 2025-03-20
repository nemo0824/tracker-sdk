import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
      include: ['src/**/*.ts'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/cores/tracker.ts'),
      name: 'tracker-sdk',
      formats: ['es', 'cjs'],
      fileName: (format) => `tracker-sdk.${format}.js`,
    },
    rollupOptions: {
      external: ['fs'],
    },
  },
});
