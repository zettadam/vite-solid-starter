/// <reference types="vitest" />
/// <reference types="vite/client" />

import { readFileSync } from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

const unitTestsExclude = ['coverage', 'node_modules', 'public', 'reports']

function useHttps() {
  let https: object = {}

  try {
    https = {
      key: readFileSync('../.cert/key.pem'),
      cert: readFileSync('../.cert/cert.pem'),
    }
  } catch (e) {}

  return https
}

export default defineConfig({
  build: {
    minify: false,
    target: 'esnext',
  },
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    conditions: ['development', 'browser'],
  },
  //server: {
  //  https: useHttps(),
  //},
  test: {
    coverage: {
      all: true,
      src: ['src'],
      exclude: ['**.config.ts', '**/__tests__'],
    },
    setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
    // otherwise, solid would be loaded twice:
    deps: { registerNodeLoader: true },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
    environment: 'jsdom',
    exclude: [...unitTestsExclude, 'tests'],
    globals: true,
    outputFile: './reports/junit.xml',
    reporters: ['default', 'junit'],
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
})
