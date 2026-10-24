import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  // BASE_PATH lets the deploy workflow publish under a sub-path such as /personal_website/.
  const { BASE_PATH = '/' } = loadEnv(mode, '.', '');

  return {
    base: BASE_PATH,
    plugins: [react()],
    test: { environment: 'node', include: ['src/**/*.test.ts'] },
  };
});
