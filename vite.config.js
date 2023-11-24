import {defineConfig} from 'vite'
import postcssConfig from './postcss.config.js';
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        assetsDir: 'assets',
        outDir: 'dist',
    },
    css: {
        preprocessorOptions: {
            postcss: postcssConfig.plugins,
        }
    },
    plugins: [
        react(),
    ],
});
