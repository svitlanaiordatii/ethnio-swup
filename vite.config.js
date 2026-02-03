import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        panel: resolve(__dirname, 'panel.html'),
        screeners: resolve(__dirname, 'screeners.html'),
        concent: resolve(__dirname, 'concent.html'),
      },
    },
  },
});