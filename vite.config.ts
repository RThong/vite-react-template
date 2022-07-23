import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import lessToJS from 'less-vars-to-js'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import viteReactModelPlugin from 'vite-plugin-react-use-model'

const pathResolver = (path: string) => resolve(__dirname, path)
const themeVariables = lessToJS(readFileSync(pathResolver('./config/theme.config.less'), 'utf8'))

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '^/api': {
        target: 'https://api.github.com/users',
        secure: false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => {
            if (name === 'col' || name === 'row') {
              return 'antd/lib/style/index.less'
            }
            return `antd/es/${name}/style/index.less`
          }
        }
      ]
    }),
    viteReactModelPlugin()
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  }
})
