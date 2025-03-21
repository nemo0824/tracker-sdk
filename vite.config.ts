import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      outDir: 'dist',
      include: ['src/**/*.ts', 'src/vite-env.d.ts'],
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
