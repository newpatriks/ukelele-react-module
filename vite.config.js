import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [
        react(),
        dts({ include: ['src'], tsconfigPath: './tsconfig.lib.json' }),
      ],
      build: {
        lib: {
          entry: resolve(import.meta.dirname, 'src/index.ts'),
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
        },
        rollupOptions: {
          external: ['react', 'react/jsx-runtime'],
        },
        outDir: 'dist',
      },
    }
  }

  // Default mode: demo app
  return {
    plugins: [react()],
  }
})
