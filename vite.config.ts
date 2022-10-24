// @ts-ignore
import { defineConfig, loadEnv } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import * as path from 'path'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const VITE_API_URL: string = loadEnv(
    mode,
    process.cwd()
  ).VITE_API_URL
  return defineConfig({
    base: '/',
    plugins: [react(), viteCompression()],
    server: {
      port: 9999,
      hmr: true,
      open: true,
      proxy: {
        '/api': {
          target: VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 2000, //警告阈值大于2000KB才提示
      rollupOptions: {
        output: {
          //超大静态资源拆分,分割代码,优化按需加载
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      },
      terserOptions: {
        compress: {
          //清除console和debugger
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    // global css
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "@/styles/var.less";`
        }
      }
    }
  })
}
