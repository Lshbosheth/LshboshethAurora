import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

const root = process.cwd()

function pathResolve(dir: string) {
    return resolve(root, '.', dir)
}

export default defineConfig({
  resolve: {
    //设置别名
    alias: [
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
  envDir: './',
  plugins: [
    vue(),
		UnoCSS(),
    Components({
      dts: 'src/typings/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    open: true,
    port: 1212,
  },
})
