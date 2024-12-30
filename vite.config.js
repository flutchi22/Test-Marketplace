import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import react from '@vitejs/plugin-react-swc';
import rollupNodePolyFill from 'rollup-plugin-polyfill-node';
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import Debugger from 'dev-debugger-vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const envVariables = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      splitVendorChunkPlugin(), // Splits vendor chunks for better caching
      Debugger()
    ],
    define: {
      'process.env': {
        VITE_DCL_DEFAULT_ENV: envVariables.VITE_DCL_DEFAULT_ENV,
        VITE_BASE_URL: envVariables.VITE_BASE_URL,
      },
      global: {}, // Fallback for global variable
    },
    resolve: {
      alias: {
        util: 'rollup-plugin-node-polyfills/polyfills/util',
        assert: 'rollup-plugin-node-polyfills/polyfills/assert',
        stream: 'rollup-plugin-node-polyfills/polyfills/stream',
        buffer: 'rollup-plugin-node-polyfills/polyfills/buffer',
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    server: {
      open: true, // Automatically open in the browser
      mimeTypes: {
        '.js': 'application/javascript', // Ensure JS MIME type
      },
    },
    
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis', // Align with modern environments
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
            process: true, // Enables `process` usage
          }),
          NodeModulesPolyfillPlugin(), // Node.js module support
        ],
      },
    },
    build: {
      sourcemap: true, // Enable sourcemaps for debugging
      commonjsOptions: {
        transformMixedEsModules: true, // Supports mixing ES and CJS modules
      },
      rollupOptions: {
        plugins: [
          rollupNodePolyFill(), // Polyfill Node.js core modules
        ],
      },
      assetsInlineLimit: 0, // Ensures external files instead of inlining
    },
    base: command === 'build' ? envVariables.VITE_BASE_URL : '/', // Base URL for production
  };
});
