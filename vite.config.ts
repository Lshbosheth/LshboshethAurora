import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
                replacement: `${pathResolve('src')}/`
            }
        ]
    },
    envDir: './',
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),],
    server: {
        port: 1212
    }
})
